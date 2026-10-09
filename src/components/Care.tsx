import { care } from '@/data/portfolio';
import { vars } from '@/lib/css';
import { CareIcon } from './Icons';

export default function Care() {
  return (
    <section id="care">
      <div className="wrap">
        <h2 className="rv">What I care about</h2>
        <p className="intro rv" style={vars({ '--d': 1 })}>
          The three things I check before I call a feature finished.
        </p>

        <div className="care">
          {care.map((item, i) => (
            <article key={item.title} className="tile rv spot" style={vars({ '--d': i })}>
              <div className="ico">
                <CareIcon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
