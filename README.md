# Mayank Chauhan | Portfolio (Next.js)

A single-page portfolio built with **Next.js (App Router)**, **React** and **TypeScript**.
No UI library: the styling is one global stylesheet and the motion is plain CSS plus small React hooks.

## Run it locally

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

The first `npm run dev` or `npm run build` downloads the two Google Fonts (Bricolage Grotesque and
IBM Plex Sans) through `next/font`, so you need an internet connection once.

## Where to change things

| What you want to change | File |
| --- | --- |
| Text, projects, experience, skills, links, email | `src/data/portfolio.ts` |
| Colors, spacing, animations | `src/app/globals.css` (colour tokens are at the top) |
| Page title and sharing description | `src/app/layout.tsx` |
| Section order | `src/app/page.tsx` |
| Previews of each project | `src/components/Mockups.tsx` |

### Add your GitHub button

Open `src/data/portfolio.ts` and set `github` to your real profile URL:

```ts
github: 'https://github.com/your-username',
```

The button appears in the contact section automatically. It stays hidden while the value is empty.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        fonts, metadata, theme initialisation
│   ├── page.tsx          assembles the sections
│   ├── globals.css       all styles
│   └── icon.svg          favicon
├── components/           one file per section, plus small client components
│   ├── Effects.tsx       scroll progress, reveal, stacking panels, pointer effects
│   ├── VitalsCard.tsx    animated heartbeat card
│   ├── CountUp.tsx, RotatingWord.tsx, CopyEmail.tsx, ThemeToggle.tsx
│   └── Hero, About, Work, ExperienceSection, Care, Skills, Contact, ...
├── data/portfolio.ts     all content
└── lib/css.ts            helper for CSS custom properties
```

Sections are server components. Only the interactive pieces are client components.

## Deploy (free)

**Vercel (recommended for Next.js)**

1. Push this folder to a GitHub repository.
2. Go to vercel.com, choose "Add New Project" and import the repository.
3. Keep the defaults and click Deploy. You get a live link in about a minute.

You can also run `npx vercel` in this folder and follow the prompts.

## Before you share it

- The dashboard link in `projects` opens a login page. Click it yourself to confirm it loads.
- Confirm the LinkedIn URL in `profile` opens your profile.
- Add your GitHub URL (see above).
