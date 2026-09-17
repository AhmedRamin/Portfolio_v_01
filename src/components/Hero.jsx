import { Suspense, lazy } from "react";
import { profile } from "../data/portfolio";
import { ArrowIcon, GithubIcon, LinkedinIcon, FacebookIcon, MailIcon, PinIcon } from "./Icons";
import { useTilt } from "./hooks";

const Scene3D = lazy(() => import("./Scene3D"));

export default function Hero() {
  const tiltRef = useTilt(9);

  return (
    <section className="hero section" id="home">
      <div className="hero__bg" aria-hidden />

      <div className="hero__scene" aria-hidden>
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__hi reveal">Hi, I&apos;m</p>

          <h1 className="hero__name reveal" data-delay="60">
            {profile.name}
          </h1>

          <div className="hero__roles reveal" data-delay="110">
            <span className="hero__role-static">{profile.title}</span>
            <span className="hero__role-sep" aria-hidden>
              ·
            </span>
            <div className="hero__rotator" aria-label={profile.roles.join(", ")}>
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
            <a className="btn btn--outline" href="#contact">
              Contact Me
            </a>
          </div>

          <ul className="hero__socials reveal" data-delay="280">
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a href={profile.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
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

        <div className="hero__media reveal" data-delay="140">
          <div className="hero__photo-frame tilt" ref={tiltRef}>
            <div className="hero__photo-glow" aria-hidden />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="640"
              height="800"
              loading="eager"
              decoding="async"
            />
            <div className="hero__photo-tag">
              <span className="hero__dot" aria-hidden />
              Open to internships
            </div>
          </div>

          <div className="hero__chip hero__chip--1">
            <strong>Next.js</strong>
            <span>+ TypeScript</span>
          </div>
          <div className="hero__chip hero__chip--2">
            <strong>MERN</strong>
            <span>Stack</span>
          </div>
        </div>
      </div>

      <div className="container hero__meta">
        <span className="hero__meta-item">
          <PinIcon /> {profile.location}
        </span>
        <span className="hero__meta-item">
          <MailIcon /> {profile.email}
        </span>
      </div>
    </section>
  );
}
