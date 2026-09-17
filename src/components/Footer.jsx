import { navItems, profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {profile.name}. All rights reserved.
        </p>

        <nav className="footer__nav" aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="footer__top" href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
