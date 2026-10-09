import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const description =
  'Mayank Chauhan is a frontend engineer with 2+ years of experience building healthcare dashboards, corporate sites and online stores with React, Next.js and TypeScript.';

export const metadata: Metadata = {
  title: 'Mayank Chauhan | Frontend Engineer',
  description,
  openGraph: {
    type: 'website',
    title: 'Mayank Chauhan | Frontend Engineer',
    description,
  },
  twitter: { card: 'summary' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#070A1C',
};

// Runs before first paint: enables the animation styles and restores the saved theme.
const initScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){d.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
