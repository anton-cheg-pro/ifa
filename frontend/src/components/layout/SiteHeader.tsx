import { useState } from "react";
import { Link } from "react-router-dom";
import { nav, site } from "../../content/uk";
import { Container } from "./Container";
import "./SiteHeader.css";

const links = [
  { href: "#about", label: nav.about },
  { href: "#how-it-works", label: nav.howItWorks },
  { href: "#topics", label: nav.topics },
  { href: "#materials", label: nav.materials },
  { href: "#contact", label: nav.contact },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <Link to="/uk" className="site-header__brand" onClick={closeMenu}>
            <span className="site-header__logo">{site.tagline}</span>
            <span className="site-header__name">{site.name}</span>
          </Link>

          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">Меню</span>
            <span className="site-header__toggle-bar" />
            <span className="site-header__toggle-bar" />
            <span className="site-header__toggle-bar" />
          </button>

          <nav
            id="site-nav"
            className={`site-header__nav${open ? " site-header__nav--open" : ""}`}
            aria-label="Головна навігація"
          >
            <ul className="site-header__list">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="site-header__link" onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/" className="site-header__link site-header__link--muted" onClick={closeMenu}>
                  {nav.changeLanguage}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
