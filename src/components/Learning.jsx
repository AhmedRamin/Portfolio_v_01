import { learning } from "../data/portfolio";
import { SparkIcon } from "./Icons";
import { useTilt } from "./hooks";

function LearningRow({ item, index }) {
  const ref = useTilt(5);

  return (
    <li ref={ref} className="learning__item tilt reveal" data-delay={index * 60}>
      <div className="tilt__inner">
        <span className="learning__num">{String(index + 1).padStart(2, "0")}</span>
        <span className="learning__title">{item.title}</span>
        <span className="learning__note">
          <SparkIcon />
          {item.note}
        </span>
      </div>
      <span className="tilt__glare" aria-hidden />
    </li>
  );
}

export default function Learning() {
  return (
    <section className="section" id="learning">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__eyebrow">05 — Always in progress</span>
          <h2 className="section__title">
            What I&apos;m <em>Learning</em>
          </h2>
          <p className="section__lead">
            I&apos;m continuously developing my skills in modern web technologies and exploring new
            areas of computer science.
          </p>
        </header>

        <ul className="learning__list">
          {learning.map((item, i) => (
            <LearningRow key={item.title} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
