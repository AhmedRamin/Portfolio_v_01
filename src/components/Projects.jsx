import { projects } from "../data/portfolio";
import { ArrowIcon, GithubIcon } from "./Icons";
import { useTilt } from "./hooks";

function ProjectCard({ project, index }) {
  const ref = useTilt(10);

  return (
    <article
      ref={ref}
      className="project-card tilt reveal"
      data-delay={index * 90}
      style={{ "--accent-card": project.accent }}
    >
      <div className="tilt__inner">
        <div className="project-card__art" aria-hidden>
          <span className="project-card__orb" />
          <span className="project-card__grid" />
          <span className="project-card__num">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <div className="project-card__body">
          <span className="project-card__category">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <ul className="project-card__tech">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <a
            className="project-card__link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            View Project
            <ArrowIcon className="project-card__arrow" />
          </a>
        </div>
      </div>

      <span className="tilt__glare" aria-hidden />
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <header className="section__head reveal">
          <span className="section__eyebrow">03 — Selected work</span>
          <h2 className="section__title">Projects</h2>
          <p className="section__lead">
            Things I have designed and built while studying — from full-stack applications to
            compilers and database systems.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
