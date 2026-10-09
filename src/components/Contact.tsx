import { profile } from '@/data/portfolio';
import CopyEmail from './CopyEmail';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="cta rv">
          <div className="in2">
            <h2 className="big">Have something to build?</h2>
            <p className="muted" style={{ fontSize: '1.15rem' }}>
              I&apos;m open to frontend roles and projects. Email is the fastest way to reach me.
            </p>
            <a className="mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="actions">
              <CopyEmail email={profile.email} />
              <a className="btn magnetic" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              {profile.github && (
                <a className="btn magnetic" href={profile.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
