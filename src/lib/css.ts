import type { CSSProperties } from 'react';

/** Lets us pass CSS custom properties (e.g. --d, --i) through the style prop with types. */
export const vars = (v: Record<string, string | number>): CSSProperties =>
  v as unknown as CSSProperties;
