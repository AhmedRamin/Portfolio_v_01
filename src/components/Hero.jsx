import { heroStats, profile } from "../data/portfolio";
import {
  ArrowIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
  SparkIcon,
} from "./Icons";
import { useTilt } from "./hooks";
import Scene from "./three/Scene";

export default function Hero() {
  const tiltRef = useTilt(8);

  return (
    <section className="hero section" id="home">
      <div className="hero__blobs" aria-hidden>
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="blob blob--3" />
      </div>

      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__badge reveal">
            <span className="hero__pulse" aria-hidden />
          </p>

          <h1 className="hero__name reveal" data-delay="60">
            Hi, I&apos;m <span>Ramin Ahmed</span>
          </h1>

          <div className="hero__roles reveal" data-delay="110">
            <span className="hero__role-static">{profile.title}</span>
            <span className="hero__role-sep" aria-hidden>
              ·
            </span>
            <div
              className="hero__rotator"
              aria-label={profile.roles.join(", ")}
            >
              {profile.roles.map((role, i) => (
                <span key={role} style={{ animationDelay: `${i * 3.6}s` }}>
                  {role}
                </span>
              ))}
            </div>
          </div>

          <p className="hero__lead reveal" data-delay="160">
            {profile.heroLead}
          </p>
          <p className="hero__sub reveal" data-delay="200">
            {profile.heroSub}
          </p>

          <div className="hero__cta reveal" data-delay="240">
            <a className="btn btn--primary" href="#projects">
              View My Projects
              <ArrowIcon className="btn__icon" />
            </a>
            <a className="btn btn--soft" href="#contact">
              <SparkIcon className="btn__icon" />
              Hire Me
            </a>
          </div>

          <ul className="hero__socials reveal" data-delay="280">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a
                href={profile.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <MailIcon />
              </a>
            </li>
          </ul>
        </div>

        <div className="hero__stage reveal" data-delay="140">
          <Scene
            name="hero"
            className="hero__scene"
            camera={{ position: [0, 0, 6.2], fov: 44 }}
          />

          <div className="hero__photo tilt" ref={tiltRef}>
            <div className="tilt__inner">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width="520"
                height="650"
                loading="eager"
                decoding="async"
              />
              <span className="hero__photo-ring" aria-hidden />
            </div>
            <span className="tilt__glare" aria-hidden />
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="hero__stats reveal" data-delay="320">
          {heroStats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
          <li className="hero__stats-place">
            <PinIcon />
            {profile.location}
          </li>
        </ul>
      </div>
    </section>
  );
}
