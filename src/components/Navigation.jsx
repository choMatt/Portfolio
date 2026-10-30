import { useState } from "react";
import Styles from "../styles/Navigation.module.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={Styles.header}>
      <nav className={Styles.nav} aria-label="Main navigation">
        <a className={Styles.logo} href="#top" onClick={closeMenu} aria-label="Cho, home">
          CHO<span>.</span>
        </a>
        <button
          className={Styles.menuButton}
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <div
          className={`${Styles.menu} ${isMenuOpen ? Styles.menuOpen : ""}`}
          id="primary-navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
