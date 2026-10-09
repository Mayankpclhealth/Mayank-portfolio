import { experience } from '@/data/portfolio';
import { vars } from '@/lib/css';

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2 className="rv">Where I&apos;ve worked</h2>
        <p className="intro rv" style={vars({ '--d': 1 })}>
          Two roles, two years, and a steady move from websites to complex, data-heavy products.
        </p>

        <ol className="timeline" id="timeline">
          {experience.map((job) => (
            <li key={job.role} className="rv">
              <div className="xp-head">
                <span className={`badge${job.alt ? ' alt' : ''}`} aria-hidden="true">
                  {job.badge}
                </span>
                <p className="role">{job.role}</p>
                <span className="when">{job.when}</span>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
