'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { to: number; suffix?: string };

export default function CountUp({ to, suffix = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  // Server-render the final value so the page is correct even without JavaScript.
  const [text, setText] = useState(`${to}${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        let start = 0;
        setText(`0${suffix}`);
        const step = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min(1, (ts - start) / 1600);
          const eased = 1 - Math.pow(1 - p, 3);
          setText(`${Math.round(to * eased)}${suffix}`);
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, suffix]);

  return (
    <span ref={ref} className="count">
      {text}
    </span>
  );
}
