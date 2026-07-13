import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, servicesNav, site } from "../../content/uk";
import { Container } from "./Container";
import "./SiteHeader.css";

const mainLinks = [
  { to: "/uk/how-we-work", label: nav.howWeWork },
  { to: "/uk/knowledge", label: nav.knowledge },
  { to: "/uk/licenses", label: nav.licenses },
  { to: "/uk/contact", label: nav.contact },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  const isHome = location.pathname === "/uk" || location.pathname === "/uk/";
  const isUk = location.pathname.startsWith("/uk");
  const langTarget = isUk ? "/en" : "/uk";
  const langLabel = isUk ? nav.langEn : nav.langUk;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, [servicesOpen]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const overHero = isHome && !scrolled && !open;

  const headerClass = [
    "site-header",
    overHero ? "site-header--over-hero" : "site-header--solid",
  ].join(" ");

  return (
    <header className={siteHeaderClassName(headerClass, open)}>
      <Container>
        <div className="site-header__inner">
          <Link to="/uk" className="site-header__brand" onClick={closeMenu}>
            <span className="site-header__name">{site.name}</span>
            <span className="site-header__advisor">{site.advisorName}</span>
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
              <li>
                <Link to="/uk/how-we-work" className="site-header__link" onClick={closeMenu}>
                  {nav.howWeWork}
                </Link>
              </li>

              <li
                ref={servicesRef}
                className={`site-header__dropdown${servicesOpen ? " site-header__dropdown--open" : ""}`}
              >
                <button
                  type="button"
                  className="site-header__link site-header__dropdown-trigger"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {nav.services}
                  <span className="site-header__chevron" aria-hidden="true" />
                </button>
                <ul className="site-header__submenu">
                  {servicesNav.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className="site-header__sublink" onClick={closeMenu}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {mainLinks.slice(1).map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="site-header__link" onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to={langTarget}
                  className="site-header__link site-header__link--lang"
                  onClick={closeMenu}
                >
                  {langLabel}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

function siteHeaderClassName(base: string, menuOpen: boolean) {
  return menuOpen ? `${base} site-header--solid` : base;
}
