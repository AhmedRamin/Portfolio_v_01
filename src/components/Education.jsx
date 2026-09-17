import { education } from "../data/portfolio";
import { CapsIcon } from "./Icons";

export default function Education() {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__eyebrow">04 — Academic background</span>
          <h2 className="section__title">Education</h2>
        </header>

        <ol className="edu__timeline">
          {education.map((item, i) => (
            <li key={item.school} className="edu__item reveal" data-delay={i * 80}>
              <span className="edu__dot" aria-hidden />

              <div className="edu__card">
                <div className="edu__top">
                  <span className="edu__icon">
                    <CapsIcon />
                  </span>
                  <span className="edu__period">{item.period}</span>
                </div>

                <h3>{item.school}</h3>
                <p className="edu__degree">
                  {item.degree}
                  {item.level ? <span className="edu__level">{item.level}</span> : null}
                </p>
                <p className="edu__desc">{item.description}</p>

                <ul className="edu__subjects">
                  {item.subjects.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
