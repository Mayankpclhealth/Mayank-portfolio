import { skills } from '@/data/portfolio';
import { vars } from '@/lib/css';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2 className="rv">Skills and tools</h2>
        <p className="intro rv" style={vars({ '--d': 1 })}>
          What I reach for every day.
        </p>

        <div className="skills">
          {skills.map((group, i) => (
            <div key={group.title} className="tile rv spot" style={vars({ '--d': i % 2, '--dot': group.dot })}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
