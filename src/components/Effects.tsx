'use client';

import { useEffect, useRef } from 'react';

/**
 * Page-wide behaviour in one place: scroll progress, scroll-reveal, timeline fill,
 * stacking project panels, active nav link, pointer effects (tilt, spotlight,
 * magnetic buttons, hero parallax, cursor glow) and the toast message.
 * Uses event delegation, so components only need to add the right class names.
 */
export default function Effects() {
  const progressRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const stackMQ = window.matchMedia('(min-width: 861px) and (min-height: 760px)');
    const cleanups: Array<() => void> = [];
    const listen = (target: EventTarget, type: string, fn: EventListener, opts?: AddEventListenerOptions) => {
      target.addEventListener(type, fn, opts);
      cleanups.push(() => target.removeEventListener(type, fn, opts));
    };

    /* toast */
    let toastTimer: number | undefined;
    listen(window, 'toast', (e) => {
      const el = toastRef.current;
      if (!el) return;
      el.textContent = String((e as CustomEvent<string>).detail);
      el.classList.add('show');
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => el.classList.remove('show'), 4500);
    });
    cleanups.push(() => window.clearTimeout(toastTimer));

    /* scroll reveal */
    const reveals = document.querySelectorAll<HTMLElement>('.rv');
    if ('IntersectionObserver' in window && !reduce) {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          }),
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
      );
      reveals.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      reveals.forEach((el) => el.classList.add('in'));
    }

    /* active nav link */
    const links = new Map<string, HTMLElement>();
    document.querySelectorAll<HTMLAnchorElement>('.nav a.l').forEach((a) => {
      links.set(a.getAttribute('href')?.slice(1) ?? '', a);
    });
    if ('IntersectionObserver' in window) {
      const nio = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting && links.has(entry.target.id)) {
              links.forEach((a) => a.removeAttribute('aria-current'));
              links.get(entry.target.id)?.setAttribute('aria-current', 'true');
            }
          }),
        { rootMargin: '-45% 0px -50% 0px' },
      );
      ['about', 'work', 'experience', 'skills', 'contact'].forEach((id) => {
        const section = document.getElementById(id);
        if (section) nio.observe(section);
      });
      cleanups.push(() => nio.disconnect());
    }

    /* scroll: progress bar, timeline fill, stacking panels */
    const panels = Array.from(document.querySelectorAll<HTMLElement>('.panel'));
    const timeline = document.getElementById('timeline');
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty('--p', String(max > 0 ? Math.min(1, window.scrollY / max) : 0));

      if (timeline) {
        const r = timeline.getBoundingClientRect();
        const p = (window.innerHeight * 0.6 - r.top) / r.height;
        timeline.style.setProperty('--tp', String(Math.max(0, Math.min(1, p))));
      }

      if (!reduce && stackMQ.matches) {
        for (let i = 0; i < panels.length - 1; i++) {
          const panel = panels[i];
          const stickyTop = parseFloat(getComputedStyle(panel).top) || 0;
          const dist = panels[i + 1].getBoundingClientRect().top - stickyTop;
          const t = Math.max(0, Math.min(1, 1 - dist / panel.offsetHeight));
          panel.style.transform = `scale(${(1 - t * 0.06).toFixed(4)})`;
          panel.style.filter = `brightness(${(1 - t * 0.4).toFixed(3)})`;
        }
      } else {
        panels.forEach((panel) => {
          panel.style.transform = '';
          panel.style.filter = '';
        });
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    listen(window, 'scroll', onScroll, { passive: true });
    listen(window, 'resize', update);
    update();

    /* pointer effects */
    if (fine && !reduce) {
      const parallax = Array.from(document.querySelectorAll<HTMLElement>('.px'));
      let tiltEl: HTMLElement | null = null;
      let magnetEl: HTMLElement | null = null;
      let tx = 0;
      let ty = 0;
      let cx = 0;
      let cy = 0;
      let cursorOn = false;

      const resetTilt = (el: HTMLElement) => {
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
      };

      listen(window, 'pointermove', (ev) => {
        const e = ev as PointerEvent;
        const target = e.target as Element | null;

        tx = e.clientX;
        ty = e.clientY;
        if (!cursorOn) {
          cursorOn = true;
          cx = tx;
          cy = ty;
          if (cursorRef.current) cursorRef.current.style.opacity = '1';
        }

        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        parallax.forEach((el) => {
          const depth = parseFloat(el.dataset.depth ?? '10');
          el.style.transform = `translate3d(${(-nx * depth).toFixed(1)}px,${(-ny * depth).toFixed(1)}px,0)`;
        });

        if (!target || !target.closest) return;

        const spot = target.closest<HTMLElement>('.spot');
        if (spot) {
          const r = spot.getBoundingClientRect();
          spot.style.setProperty('--mx', `${e.clientX - r.left}px`);
          spot.style.setProperty('--my', `${e.clientY - r.top}px`);
        }

        const tilt = target.closest<HTMLElement>('.tilt');
        if (tiltEl && tiltEl !== tilt) {
          resetTilt(tiltEl);
          tiltEl = null;
        }
        if (tilt) {
          tiltEl = tilt;
          const r = tilt.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          tilt.style.setProperty('--ry', `${(x * 9).toFixed(2)}deg`);
          tilt.style.setProperty('--rx', `${(-y * 9).toFixed(2)}deg`);
        }

        const magnet = target.closest<HTMLElement>('.magnetic');
        if (magnetEl && magnetEl !== magnet) {
          magnetEl.style.transform = '';
          magnetEl = null;
        }
        if (magnet) {
          magnetEl = magnet;
          const r = magnet.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          magnet.style.transform = `translate(${(x * 0.22).toFixed(1)}px,${(y * 0.3).toFixed(1)}px)`;
        }
      });

      let raf = 0;
      const loop = () => {
        cx += (tx - cx) * 0.12;
        cy += (ty - cy) * 0.12;
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${cx.toFixed(1)}px,${cy.toFixed(1)}px,0)`;
        }
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      cleanups.push(() => cancelAnimationFrame(raf));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div ref={progressRef} className="progress" aria-hidden="true" />
      <div ref={cursorRef} className="cursor" aria-hidden="true" />
      <div ref={toastRef} className="toast" role="status" aria-live="polite" />
    </>
  );
}
