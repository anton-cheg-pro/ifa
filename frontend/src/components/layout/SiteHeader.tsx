import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav, site } from "../../content/uk";
import { Container } from "./Container";
import "./SiteHeader.css";

const links = [
  { href: "#how-we-work", label: nav.howWeWork },
  { href: "#services", label: nav.services },
  { href: "#knowledge", label: nav.knowledge },
  { href: "#contact", label: nav.contact },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const headerClass = [
    "site-header",
    scrolled || open ? "site-header--solid" : "site-header--over-hero",
  ].join(" ");

  return (
    <header className={headerClass}>
      <Container>
        <div className="site-header__inner">
          <Link to="/uk" className="site-header__brand" onClick={closeMenu}>
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
