import { Link } from "react-router-dom";
import { disclaimer, footer } from "../../content/uk";
import { Container } from "./Container";
import "./SiteFooter.css";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__brand">Family Wealth</p>
            <p className="site-footer__copy">{footer.copyright}</p>
          </div>
          <nav className="site-footer__nav" aria-label="Футер">
            <Link to="/">Змінити мову</Link>
            <a href="#contact">Контакт</a>
          </nav>
        </div>
        <p className="site-footer__disclaimer" role="note">
          {disclaimer.full}
        </p>
      </Container>
    </footer>
  );
}
