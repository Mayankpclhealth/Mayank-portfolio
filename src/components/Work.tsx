import { projects } from '@/data/portfolio';
import { vars } from '@/lib/css';
import { ExternalIcon } from './Icons';
import { screens } from './Mockups';

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <h2 className="rv">Work you can open and click</h2>
        <p className="intro rv" style={vars({ '--d': 1 })}>
          Four live products from my last two years, each linked below.
        </p>

        <div className="stack">
          {projects.map((project, index) => (
            <article key={project.id} className={`panel ${project.theme}`} style={vars({ '--i': index })}>
              <div className="inner">
                <div>
                  <p className="kind">{project.kind}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {project.points && (
                    <ul className="points">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}

                  <ul className="chips">
                    {project.chips.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>

                  <a className="visit" href={project.href} target="_blank" rel="noopener noreferrer">
                    {project.cta} <ExternalIcon />
                  </a>
                  {project.note && <p className="note">{project.note}</p>}
                </div>

                <div className="device-wrap">
                  <div className="device tilt">
                    <div className="chrome">
                      <i></i>
                      <i></i>
                      <i></i>
                      <span>{project.displayUrl}</span>
                    </div>
                    {screens[project.id]()}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
