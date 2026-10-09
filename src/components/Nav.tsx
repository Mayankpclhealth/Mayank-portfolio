import { navLinks } from '@/data/portfolio';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <a className="mark" href="#top" aria-label="Back to top">
        M
      </a>
      {navLinks.map((link) => (
        <a key={link.id} className="l hide-sm" href={`#${link.id}`}>
          {link.label}
        </a>
      ))}
      <a className="l" href="#contact">
        Contact
      </a>
      <ThemeToggle />
    </nav>
  );
}
