'use client';

import { useEffect, useState } from 'react';

export default function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let swap: number | undefined;
    const interval = window.setInterval(() => {
      setOut(true);
      swap = window.setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setOut(false);
      }, 350);
    }, 2600);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(swap);
    };
  }, [words.length]);

  return <span className={`rot${out ? ' out' : ''}`}>{words[index]}</span>;
}
