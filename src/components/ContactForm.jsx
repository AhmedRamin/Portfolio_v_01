import { useState } from "react";
import { contactEndpoint, contactSubjects, profile } from "../data/portfolio";
import {
  AlertIcon,
  ArrowIcon,
  CheckIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  MailIcon,
  PinIcon,
  SendIcon,
} from "./Icons";
import Scene from "./three/Scene";

const EMPTY = { name: "", email: "", subject: contactSubjects[0], message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [feedback, setFeedback] = useState("");

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please tell me your name.";
    if (!values.email.trim()) next.email = "An email is required so I can reply.";
    else if (!EMAIL_RE.test(values.email.trim())) next.email = "That email doesn't look right.";
    if (values.message.trim().length < 10) next.message = "A little more detail, please (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`[Portfolio] ${values.subject}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nSubject: ${values.subject}\n\n${values.message}`
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: `[Portfolio] ${values.subject}`,
          message: values.message.trim(),
          _subject: `New portfolio message from ${values.name.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      setStatus("success");
      setFeedback("Message sent — it just landed in my inbox. I'll reply soon.");
      setValues(EMPTY);
    } catch (err) {
      setStatus("error");
      setFeedback(
        "The mail service didn't respond. Use the email button below and your mail app will open with everything filled in."
      );
    }
  };

  return (
    <section className="section section--tint contact" id="contact">
      <div className="container">
        <header className="section__head section__head--split reveal">
          <div>
            <span className="section__eyebrow">06 — Say hello</span>
            <h2 className="section__title">
              Contact &amp; <em>Hire Me</em>
            </h2>
            <p className="section__lead">
              Have an idea, a project, or an opportunity to discuss? Send a message and it goes
              straight to my inbox — I&apos;ll get back to you.
            </p>
          </div>
          <Scene name="mail" className="section__scene" camera={{ position: [0, 0, 5.4], fov: 44 }} />
        </header>

        <div className="contact__layout">
          <form className="form reveal" onSubmit={onSubmit} noValidate>
            <div className="form__row">
              <label className="field">
                <span className="field__label">Your name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={values.name}
                  onChange={update("name")}
                  aria-invalid={Boolean(errors.name)}
                  disabled={status === "sending"}
                />
                {errors.name && <span className="field__error">{errors.name}</span>}
              </label>

              <label className="field">
                <span className="field__label">Your email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={update("email")}
                  aria-invalid={Boolean(errors.email)}
                  disabled={status === "sending"}
                />
                {errors.email && <span className="field__error">{errors.email}</span>}
              </label>
            </div>

            <label className="field">
              <span className="field__label">What is this about?</span>
              <select value={values.subject} onChange={update("subject")} disabled={status === "sending"}>
                {contactSubjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span className="field__label">Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about the role, project or idea…"
                value={values.message}
                onChange={update("message")}
                aria-invalid={Boolean(errors.message)}
                disabled={status === "sending"}
              />
              {errors.message && <span className="field__error">{errors.message}</span>}
            </label>

            {/* honeypot — bots fill this, humans never see it */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="form__honey"
              aria-hidden
            />

            <div className="form__actions">
              <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <span className="spinner" aria-hidden />
                    Sending…
                  </>
                ) : (
                  <>
                    <SendIcon className="btn__icon" />
                    Send message
                  </>
                )}
              </button>

              <a className="btn btn--soft" href={`mailto:${profile.email}`}>
                <MailIcon className="btn__icon" />
                Email me directly
              </a>
            </div>

            {feedback && (
              <p
                className={`form__feedback form__feedback--${status}`}
                role="status"
                aria-live="polite"
              >
                {status === "success" ? <CheckIcon /> : <AlertIcon />}
                <span>{feedback}</span>
                {status === "error" && (
                  <a className="form__retry" href={mailtoFallback()}>
                    Open mail app
                    <ArrowIcon />
                  </a>
                )}
              </p>
            )}
          </form>

          <aside className="contact__aside reveal" data-delay="120">
            <div className="contact__card">
              <h3>Direct lines</h3>
              <ul className="contact__links">
                <li>
                  <a href={`mailto:${profile.email}`}>
                    <MailIcon />
                    <span>{profile.email}</span>
                    <ArrowIcon className="contact__arrow" />
                  </a>
                </li>
                <li>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <GithubIcon />
                    <span>GitHub</span>
                    <ArrowIcon className="contact__arrow" />
                  </a>
                </li>
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <LinkedinIcon />
                    <span>LinkedIn</span>
                    <ArrowIcon className="contact__arrow" />
                  </a>
                </li>
                <li>
                  <a href={profile.facebook} target="_blank" rel="noreferrer">
                    <FacebookIcon />
                    <span>Facebook</span>
                    <ArrowIcon className="contact__arrow" />
                  </a>
                </li>
                <li>
                  <span className="contact__static">
                    <PinIcon />
                    <span>{profile.location}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="contact__card contact__card--hire">
              <h3>Hiring or collaborating?</h3>
              <p>
                I&apos;m available for internships, junior developer roles and freelance
                full-stack work. Pick &ldquo;Job opportunity&rdquo; or &ldquo;Freelance
                project&rdquo; above and tell me a bit about it.
              </p>
              <ul className="contact__mini">
                <li>Replies within 24 hours</li>
                <li>Remote-friendly · Bangladesh (GMT+6)</li>
                <li>Open to part-time during study</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
