import { about, profile } from '@/data/portfolio';
import { vars } from '@/lib/css';
import CountUp from './CountUp';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2 className="rv">A little about me</h2>
        <p className="intro rv" style={vars({ '--d': 1 })}>
          The short version, at a glance.
        </p>

        <div className="bento">
          <div className="tile t-about rv spot">
            <div>
              <p className="hello">{about.heading}</p>
              <p>{about.text}</p>
            </div>
            <div className="actions">
              <a className="btn magnetic" href="#experience">
                See where I&apos;ve worked
              </a>
            </div>
          </div>

          <div className="tile t-years rv spot" style={vars({ '--d': 1 })}>
            <div className="num">
              <CountUp to={about.years.value} suffix={about.years.suffix} />
            </div>
            <p className="lbl">{about.years.label}</p>
          </div>

          <div className="tile t-live rv spot" style={vars({ '--d': 2 })}>
            <div className="num">
              <CountUp to={about.live.value} suffix={about.live.suffix} />
            </div>
            <p className="lbl">{about.live.label}</p>
          </div>

          <div className="tile t-place rv spot" style={vars({ '--d': 1 })}>
            <div>
              <h5>Based in</h5>
              <p className="sm">{profile.location}</p>
            </div>
            <div className="rings" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
              <b></b>
            </div>
          </div>

          <div className="tile t-now rv spot">
            <h5>Right now</h5>
            <p className="sm">{about.now}</p>
          </div>

          <div className="tile t-edu rv spot" style={vars({ '--d': 1 })}>
            <h5>Education</h5>
            <p className="sm">{about.education}</p>
          </div>

          <div className="tile t-lang rv spot" style={vars({ '--d': 2 })}>
            <h5>Languages</h5>
            <p className="sm">{about.languages}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
