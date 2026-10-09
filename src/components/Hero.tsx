import { hero, profile } from '@/data/portfolio';
import { vars } from '@/lib/css';
import CountUp from './CountUp';
import RotatingWord from './RotatingWord';
import VitalsCard from './VitalsCard';

const letters = (word: string, offset: number, gradient = false) =>
  word.split('').map((char, i) => (
    <span
      key={i}
      className="ch"
      style={vars(gradient ? { '--i': offset + i, '--k': i } : { '--i': offset + i })}
    >
      {char}
    </span>
  ));

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div>
          <div className="status fade" style={vars({ '--d': 100 })}>
            <i></i>
            {profile.availability}
          </div>

          <h1 aria-label={profile.name}>
            <span className="line" aria-hidden="true">
              {letters(profile.first, 0)}
            </span>
            <span className="line g" aria-hidden="true">
              {letters(profile.last, profile.first.length, true)}
            </span>
          </h1>

          <p className="lede fade" style={vars({ '--d': 900 })}>
            Frontend engineer who builds <RotatingWord words={hero.rotatingWords} /> people trust.
          </p>
          <p className="sub fade" style={vars({ '--d': 1050 })}>
            {hero.subtitle}
          </p>
          <div className="actions fade" style={vars({ '--d': 1200 })}>
            <a className="btn primary magnetic" href="#work">
              See my work
            </a>
            <a className="btn magnetic" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>
        </div>

        <div className="stage fade" style={vars({ '--d': 600 })}>
          <div className="orbit" aria-hidden="true">
            <i></i>
          </div>

          <div className="px a" data-depth="16">
            <VitalsCard />
          </div>

          <div className="px b" data-depth="30">
            <div className="card" aria-hidden="true">
              <div className="dots">
                <i></i>
                <i></i>
                <i></i>
                <span>useVitals.ts</span>
              </div>
              <pre className="code">
                <span className="ln" style={vars({ '--n': 0 })}>
                  <span className="k">const</span>
                  {' { data } = '}
                  <span className="f">useQuery</span>
                  {'({'}
                </span>
                <span className="ln" style={vars({ '--n': 1 })}>
                  {'  queryKey: ['}
                  <span className="s">{"'vitals'"}</span>
                  {', patientId],'}
                </span>
                <span className="ln" style={vars({ '--n': 2 })}>
                  {'  queryFn: () => api.'}
                  <span className="f">get</span>
                  {'(url),'}
                </span>
                <span className="ln" style={vars({ '--n': 3 })}>
                  {'  staleTime: '}
                  <span className="k">60_000</span>
                  {','}
                </span>
                <span className="ln" style={vars({ '--n': 4 })}>
                  {'});'}
                  <span className="caret"></span>
                </span>
              </pre>
            </div>
          </div>

          <div className="px c" data-depth="22">
            <div className="card" aria-hidden="true">
              <div className="big-n">
                <CountUp to={2} suffix="+" />
              </div>
              <p>years building products for the web</p>
              <svg className="spark" viewBox="0 0 200 34" preserveAspectRatio="none">
                <path
                  d="M2 28 C 30 28, 40 18, 66 20 S 110 8, 134 12 S 176 4, 198 3"
                  fill="none"
                  stroke="var(--accent2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
