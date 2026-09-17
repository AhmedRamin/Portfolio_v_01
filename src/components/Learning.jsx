import { learning } from "../data/portfolio";
import { SparkIcon } from "./Icons";

export default function Learning() {
  return (
    <section className="section" id="learning">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__eyebrow">05 — Always in progress</span>
          <h2 className="section__title">What I&apos;m Learning</h2>
          <p className="section__lead">
            I&apos;m continuously developing my skills in modern web technologies and exploring
            new areas of computer science.
          </p>
        </header>

        <ul className="learning__list">
          {learning.map((item, i) => (
            <li className="learning__item reveal" data-delay={i * 60} key={item.title}>
              <span className="learning__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="learning__title">{item.title}</span>
              <span className="learning__note">
                <SparkIcon />
                {item.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
