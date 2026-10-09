import type { CareItem } from '@/data/portfolio';

export function CareIcon({ name }: { name: CareItem['icon'] }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === 'bolt' && <path d="M13 2 4 14h7l-1 8 9-12h-7z" />}
      {name === 'shield' && (
        <>
          <path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}
      {name === 'layers' && (
        <>
          <path d="m12 3 9 5-9 5-9-5z" />
          <path d="m3 13 9 5 9-5" />
        </>
      )}
    </svg>
  );
}

export function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}
