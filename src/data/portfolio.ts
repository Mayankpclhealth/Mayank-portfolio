/**
 * All portfolio content lives here. Edit this file to change text, projects and links
 * without touching any component.
 */

export const profile = {
  name: 'Mayank Chauhan',
  first: 'Mayank',
  last: 'Chauhan',
  email: 'mayankchauhan690@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mayankchauhan1',
  // Add your real GitHub profile URL here and a GitHub button appears in the contact section.
  github: '',
  location: 'Bijnor, Uttar Pradesh, India',
  availability: 'Available for new opportunities',
};

export const hero = {
  rotatingWords: ['dashboards', 'storefronts', 'design systems', 'fast websites'],
  subtitle:
    'Two years of shipping React and Next.js products, from a healthcare monitoring platform to a corporate website and a wholesale flower store.',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
];

export const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Vite',
  'TailwindCSS',
  'ShadCN UI',
  'Framer Motion',
  'React Query',
  'Highcharts',
  'Chart.js',
  'WordPress',
];

export const about = {
  heading: 'Interfaces that are fast, secure and clear.',
  text: "I'm a frontend engineer from Bijnor, India. I build single-page apps, AI-driven analytics dashboards and online stores in React, Next.js and TypeScript, with secure role-based access, real-time data visuals and caching that makes screens feel instant.",
  years: { value: 2, suffix: '+', label: 'years of professional experience' },
  live: { value: 4, suffix: '', label: 'live products you can open today' },
  now: 'Frontend Developer at Medisync AI, building a clinical intelligence and remote patient monitoring platform.',
  education: 'B.E. in Computer Science, Chandigarh University, 2020 to 2024',
  languages: 'English (professional) and Hindi (native)',
};

export type ProjectId = 'epic' | 'tbf' | 'veyas' | 'dash';

export type Project = {
  id: ProjectId;
  theme: string;
  kind: string;
  title: string;
  description: string;
  points?: string[];
  chips: string[];
  href: string;
  cta: string;
  displayUrl: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: 'epic',
    theme: 'p-epic',
    kind: 'Corporate website, Epic Global',
    title: 'Epic Global Digital Solutions',
    description:
      "The main company website, built end to end in Next.js. It presents the company's products, services and industries to enterprise clients.",
    points: [
      'Led the full development lifecycle.',
      'Improved Core Web Vitals and SEO scores.',
      'Streamlined how assets are delivered.',
    ],
    chips: ['Next.js', 'React', 'Framer Motion', 'SEO'],
    href: 'https://epicglobal.co.in/',
    cta: 'Visit live site',
    displayUrl: 'epicglobal.co.in',
  },
  {
    id: 'tbf',
    theme: 'p-tbf',
    kind: 'E-commerce, WordPress',
    title: 'Toronto Bulk Flowers',
    description:
      'A wholesale flower and greenery store serving the Greater Toronto Area, with a large catalogue filtered by variety, colour and occasion.',
    points: [
      'Customised the e-commerce setup on WordPress.',
      'Built programmatic checkout workflows.',
      'Designed scalable grid layouts for a large bulk catalogue.',
    ],
    chips: ['WordPress', 'E-commerce', 'Custom checkout', 'Responsive'],
    href: 'https://torontobulkflowers.com/',
    cta: 'Visit live site',
    displayUrl: 'torontobulkflowers.com',
  },
  {
    id: 'veyas',
    theme: 'p-veyas',
    kind: 'Healthcare AI',
    title: 'Veyas AI, Clinical OS',
    description:
      'A clinical operating system that uses AI to automate healthcare workflows, improve patient outcomes and streamline hospital operations.',
    chips: ['Healthcare AI', 'React', 'TypeScript'],
    href: 'https://www.veyas-ai.com/',
    cta: 'Visit live site',
    displayUrl: 'veyas-ai.com',
  },
  {
    id: 'dash',
    theme: 'p-dash',
    kind: 'Healthcare dashboard, Medisync AI',
    title: 'Clinical Intelligence and Remote Patient Monitoring',
    description:
      'An enterprise dashboard where Super Admin and Admin teams follow patient vitals and key medical statistics in real time.',
    points: [
      'Role-based routing for Super Admin and Admin workflows.',
      'JWT interceptors, protected routes and signed URLs for sensitive media.',
      'Highcharts and Chart.js visuals, with React Query caching to cut loading delays.',
    ],
    chips: ['React', 'Vite', 'TypeScript', 'React Query', 'Highcharts', 'ShadCN UI'],
    href: 'https://pclhealth-ai-insights.connecthealth.me/login',
    cta: 'Open the dashboard',
    displayUrl: 'pclhealth-ai-insights.connecthealth.me',
    note: 'The dashboard opens at a login screen, so the screens here are an illustration.',
  },
];

export type Experience = {
  badge: string;
  alt?: boolean;
  role: string;
  when: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    badge: 'M',
    role: 'Frontend Developer, Medisync AI',
    when: 'June 2025 to present',
    bullets: [
      'Architected a Clinical Intelligence and Remote Patient Monitoring platform with React, Vite and TypeScript.',
      'Built secure API layers with asynchronous JWT interceptors, stateful protected routes and signed URLs for sensitive healthcare media.',
      'Created real-time telemetry and analytics dashboards with Highcharts and Chart.js to show patient vitals and critical statistics.',
      'Cut layout loading delays with React Query caching and lazy-loaded assets.',
      'Built a library of modular, accessible components with ShadCN UI and TailwindCSS.',
    ],
  },
  {
    badge: 'E',
    alt: true,
    role: 'Frontend Developer, Epic Global Digital Solutions',
    when: 'July 2024 to May 2025',
    bullets: [
      'Led development of the corporate website in Next.js, improving Core Web Vitals and SEO scores.',
      'Customised the Toronto Bulk Flowers e-commerce store on WordPress with programmatic checkout workflows and scalable catalogue grids.',
      'Ran automated and manual cross-browser testing to fix UI regressions across production deployments.',
    ],
  },
];

export type CareItem = { icon: 'bolt' | 'shield' | 'layers'; title: string; text: string };

export const care: CareItem[] = [
  {
    icon: 'bolt',
    title: 'It feels fast',
    text: 'Caching with React Query, lazy-loaded assets and server rendering in Next.js, checked against Core Web Vitals and Lighthouse.',
  },
  {
    icon: 'shield',
    title: 'It keeps data safe',
    text: 'JWT interceptors, protected routes and signed URLs, so sensitive healthcare content only reaches the people allowed to see it.',
  },
  {
    icon: 'layers',
    title: 'It works everywhere',
    text: 'Accessible, reusable components and cross-browser testing, so the interface behaves the same on every device.',
  },
];

export type SkillGroup = { title: string; dot: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: 'Core stack',
    dot: 'var(--accent)',
    items: ['React.js', 'Next.js', 'Vite', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'WordPress'],
  },
  {
    title: 'Interface and motion',
    dot: 'var(--accent2)',
    items: ['TailwindCSS', 'SCSS', 'ShadCN UI', 'Radix UI', 'Framer Motion', 'Responsive design'],
  },
  {
    title: 'Data and security',
    dot: 'var(--pulse)',
    items: ['React Query', 'Axios', 'REST APIs', 'JWT authentication', 'Protected routes', 'Context API'],
  },
  {
    title: 'Charts and tooling',
    dot: 'var(--live)',
    items: ['Highcharts', 'Chart.js', 'Recharts', 'Signed URLs', 'Git and GitHub', 'Lighthouse'],
  },
];
