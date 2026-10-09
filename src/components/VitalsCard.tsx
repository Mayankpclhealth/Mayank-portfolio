'use client';

import { useEffect, useRef, useState } from 'react';

const BEAT = 150; // pixels per heartbeat
const SPEED = 110; // pixels per second
const TAIL = 140; // length of the bright trail

const gauss = (t: number, c: number, w: number) => {
  const d = (t - c) / w;
  return Math.exp(-d * d);
};

const beat = (x: number) => {
  const t = (x % BEAT) / BEAT;
  return (
    0.12 * gauss(t, 0.14, 0.03) -
    0.14 * gauss(t, 0.285, 0.008) +
    1.0 * gauss(t, 0.31, 0.009) -
    0.3 * gauss(t, 0.337, 0.01) +
    0.26 * gauss(t, 0.57, 0.05)
  );
};

/** Decorative demo card: an animated heartbeat trace with a changing readout. */
export default function VitalsCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bpm, setBpm] = useState(72);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cssVar = (name: string) => getComputedStyle(root).getPropertyValue(name).trim();

    let W = 0;
    let H = 0;
    let head = 0;
    let last = 0;
    let raf = 0;
    let buf: number[] = [];

    const yAt = (x: number) => H * 0.7 - beat(x) * H * 0.56;

    const drawStatic = () => {
      if (!reduce || !W) return;
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = 2.5;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = cssVar('--pulse');
      ctx.beginPath();
      buf.forEach((y, x) => (x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
      ctx.stroke();
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const r = canvas.getBoundingClientRect();
      W = Math.floor(r.width);
      H = Math.floor(r.height);
      if (!W || !H) return;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buf = Array.from({ length: W + 1 }, (_, x) => yAt(x));
      head = reduce ? W : 0;
      drawStatic();
    };

    const frame = (ts: number) => {
      if (!last) last = ts;
      const dt = Math.min(0.05, (ts - last) / 1000);
      last = ts;
      if (W) {
        head += SPEED * dt;
        if (head > W + 20) head = 0;
        const pulse = cssVar('--pulse');
        const faint = cssVar('--line');
        const h = Math.min(Math.floor(head), W);

        ctx.clearRect(0, 0, W, H);
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';
        ctx.strokeStyle = faint;
        ctx.beginPath();
        for (let x = 0; x <= h; x++) (x === 0 ? ctx.moveTo(x, buf[x]) : ctx.lineTo(x, buf[x]));
        ctx.stroke();

        const start = Math.max(0, h - TAIL);
        const grad = ctx.createLinearGradient(start, 0, h, 0);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(1, pulse);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.75;
        ctx.beginPath();
        for (let x = start; x <= h; x++) (x === start ? ctx.moveTo(x, buf[x]) : ctx.lineTo(x, buf[x]));
        ctx.stroke();

        if (h > 0) {
          ctx.fillStyle = pulse;
          ctx.beginPath();
          ctx.arc(h, buf[h], 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('themechange', drawStatic);
    if (!reduce) raf = requestAnimationFrame(frame);
    const interval = reduce
      ? undefined
      : window.setInterval(() => setBpm(70 + Math.round(Math.random() * 6)), 1300);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('themechange', drawStatic);
      if (interval) window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="card" aria-hidden="true">
      <h4>
        <i></i>Patient vitals (demo)
      </h4>
      <div className="bpm">
        <span>{bpm}</span>
        <small>bpm</small>
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
}
