import { Link, useLocation } from "react-router-dom";
import { disclaimer, footer } from "../../content/uk";
import { Container } from "./Container";
import "./SiteFooter.css";

export function SiteFooter() {
  const location = useLocation();
  const langTarget = location.pathname.startsWith("/uk") ? "/en" : "/uk";
  const langLabel = location.pathname.startsWith("/uk") ? "English" : "Українська";

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__brand">Family Wealth</p>
            <p className="site-footer__copy">{footer.copyright}</p>
          </div>
          <nav className="site-footer__nav" aria-label="Футер">
            <Link to={langTarget}>{langLabel}</Link>
            <Link to="/uk/contact">Контакт</Link>
          </nav>
        </div>
        <p className="site-footer__disclaimer" role="note">
          {disclaimer.full}
        </p>
      </Container>
    </footer>
  );
}
