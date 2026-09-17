import { skills } from "../data/portfolio";
import { GroupIcon } from "./Icons";
import { useTilt } from "./hooks";

function SkillCard({ group, index }) {
  const ref = useTilt(12);

  return (
    <article ref={ref} className="skill-card tilt reveal" data-delay={index * 70}>
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
    <section className="section section--alt" id="skills">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__eyebrow">02 — What I work with</span>
          <h2 className="section__title">Skills</h2>
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
