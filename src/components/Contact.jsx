import { profile } from "../data/portfolio";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  PinIcon,
  ArrowIcon,
} from "./Icons";

export default function Contact() {
  return (
    <section className="section section--alt contact" id="contact">
      <div className="container">
        <div className="contact__card reveal">
          <div className="contact__glow" aria-hidden />

          <span className="section__eyebrow">06 — Say hello</span>
          <h2 className="contact__title">
            Let&apos;s Build
            <br />
            Something Together
          </h2>
          <p className="contact__lead">
            Have an idea, a project, or an opportunity to discuss? I&apos;d love to connect and
            explore how we can turn ideas into meaningful software.
          </p>

          <a className="btn btn--primary contact__mail" href={`mailto:${profile.email}`}>
            <MailIcon className="btn__icon" />
            {profile.email}
          </a>

          <ul className="contact__links">
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon />
                GitHub
                <ArrowIcon className="contact__arrow" />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon />
                LinkedIn
                <ArrowIcon className="contact__arrow" />
              </a>
            </li>
            <li>
              <a href={profile.facebook} target="_blank" rel="noreferrer">
                <FacebookIcon />
                Facebook
                <ArrowIcon className="contact__arrow" />
              </a>
            </li>
            <li>
              <span>
                <PinIcon />
                {profile.location}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
