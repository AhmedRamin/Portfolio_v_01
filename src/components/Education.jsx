import { education } from "../data/portfolio";
import { CapsIcon } from "./Icons";
import { useTilt } from "./hooks";
import Scene from "./three/Scene";

function EduCard({ item, index }) {
  const ref = useTilt(7);

  return (
    <li className="edu__item reveal" data-delay={index * 80}>
      <span className="edu__dot" aria-hidden />

      <article ref={ref} className="edu__card tilt">
        <div className="tilt__inner">
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
        <span className="tilt__glare" aria-hidden />
      </article>
    </li>
  );
}

export default function Education() {
  return (
    <section className="section section--tint" id="education">
      <div className="container">
        <header className="section__head section__head--split reveal">
          <div>
            <span className="section__eyebrow">04 — Academic background</span>
            <h2 className="section__title">
              My <em>Education</em>
            </h2>
          </div>
          <Scene name="stack" className="section__scene section__scene--sm" camera={{ position: [0, 0.4, 5.6], fov: 44 }} />
        </header>

        <ol className="edu__timeline">
          {education.map((item, i) => (
            <EduCard key={item.school} item={item} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
