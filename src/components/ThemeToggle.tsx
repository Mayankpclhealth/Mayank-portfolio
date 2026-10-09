'use client';

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const isDark = current
      ? current === 'dark'
      : !window.matchMedia('(prefers-color-scheme: light)').matches;
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage can be unavailable (private mode); the theme still switches */
    }
    window.dispatchEvent(new Event('themechange'));
  };

  return (
    <button className="theme-btn" type="button" aria-label="Switch colour theme" onClick={toggle}>
      Theme
    </button>
  );
}
