import { techStack } from '@/data/portfolio';

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="track">
        <ul>
          {techStack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {/* Duplicate list makes the loop seamless; hidden from assistive tech. */}
        <ul aria-hidden="true">
          {techStack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
