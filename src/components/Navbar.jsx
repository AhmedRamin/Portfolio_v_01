import { navItems, profile } from "../data/portfolio";
import { MenuIcon, CloseIcon } from "./Icons";

export default function Navbar({ active, scrolled, open, onToggle, onNavigate }) {
  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="container nav__inner">
          <a className="nav__brand" href="#home" onClick={onNavigate}>
            <span className="nav__mark">{profile.initials}</span>
            <span className="nav__name">{profile.name}</span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "is-active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a className="nav__cta" href={`mailto:${profile.email}`}>
            Hire me
          </a>

          <button
            className="nav__burger"
            onClick={onToggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu ${open ? "is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onNavigate}
              style={{ transitionDelay: `${i * 45}ms` }}
              className={active === item.id ? "is-active" : ""}
            >
              <span className="mobile-menu__num">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="mobile-menu__mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>

      {open && <div className="mobile-backdrop" onClick={onNavigate} aria-hidden />}
    </>
  );
}
