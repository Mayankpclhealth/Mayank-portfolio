import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript and a lot of care.
      </div>
    </footer>
  );
}
