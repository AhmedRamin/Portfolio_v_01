import { skills } from "../data/portfolio";
import { GroupIcon } from "./Icons";
import { useTilt } from "./hooks";
import Scene from "./three/Scene";

function SkillCard({ group, index }) {
  const ref = useTilt(11);

  return (
    <article
      ref={ref}
      className="skill-card tilt reveal"
      data-delay={index * 70}
      style={{ "--tone": group.tone }}
    >
      <div className="tilt__inner">
        <div className="skill-card__top">
          <span className="skill-card__icon">
            <GroupIcon name={group.icon} />
          </span>
          <h3>{group.group}</h3>
        </div>

        <ul className="skill-card__list">
          {group.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <span className="tilt__glare" aria-hidden />
    </article>
  );
}

export default function Skills() {
  return (
    <section className="section section--tint" id="skills">
      <div className="container">
        <header className="section__head section__head--split reveal">
          <div>
            <span className="section__eyebrow">02 — What I work with</span>
            <h2 className="section__title">
              My <em>Skills</em>
            </h2>
          </div>
          <Scene name="orbit" className="section__scene" camera={{ position: [0, 0, 5.4], fov: 44 }} />
        </header>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <SkillCard key={group.group} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
