import { useEffect, useState } from "react";
import { navItems } from "./data/portfolio";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Learning from "./components/Learning";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useActiveSection, useReveal, useScrolled } from "./components/hooks";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));
  const scrolled = useScrolled(24);

  useReveal();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar
        active={active}
        scrolled={scrolled}
        open={menuOpen}
        onToggle={() => setMenuOpen((v) => !v)}
        onNavigate={() => setMenuOpen(false)}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Learning />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
