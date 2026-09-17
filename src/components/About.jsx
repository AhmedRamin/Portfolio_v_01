import { about } from "../data/portfolio";
import { SparkIcon } from "./Icons";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__eyebrow">01 — Who I am</span>
          <h2 className="section__title">{about.heading}</h2>
        </header>

        <div className="about__grid">
          <div className="about__body">
            {about.paragraphs.map((text, i) => (
              <p key={i} className="reveal" data-delay={i * 70}>
                {text}
              </p>
            ))}
          </div>

          <ul className="about__facts reveal" data-delay="120">
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
      </div>
    </section>
  );
}
