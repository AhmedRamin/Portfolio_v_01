import { about, profile } from "../data/portfolio";
import { SparkIcon, MailIcon, PinIcon, CapsIcon } from "./Icons";
import Scene from "./three/Scene";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__eyebrow">01 — Who I am</span>
          <h2 className="section__title">
            About <em>Me</em>
          </h2>
        </header>

        <div className="about__grid">
          <div className="about__body">
            {about.paragraphs.map((text, i) => (
              <p key={i} className="reveal" data-delay={i * 70}>
                {text}
              </p>
            ))}

            <ul className="about__facts reveal" data-delay="200">
              {about.facts.map((fact) => (
                <li key={fact.label}>
                  <span className="about__fact-label">
                    <SparkIcon className="about__fact-icon" />
                    {fact.label}
                  </span>
                  <strong>{fact.value}</strong>
                </li>
              ))}
            </ul>
          </div>

          <aside className="about__aside reveal" data-delay="120">
            <Scene name="orb" className="about__scene" camera={{ position: [0, 0, 5], fov: 42 }} />

            <ul className="about__mini">
              <li>
                <CapsIcon />
                <span>
                  <strong>B.Sc. in CSE</strong>
                  Daffodil International University
                </span>
              </li>
              <li>
                <MailIcon />
                <span>
                  <strong>Email</strong>
                  {profile.email}
                </span>
              </li>
              <li>
                <PinIcon />
                <span>
                  <strong>Location</strong>
                  {profile.location}
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
