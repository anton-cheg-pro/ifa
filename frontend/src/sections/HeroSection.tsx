import { hero } from "../content/uk";
import { Button } from "../components/ui/Button";
import "./HeroSection.css";

const heroImage = `${import.meta.env.BASE_URL}images/hero.jpg`;

export function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero__banner">
        <img
          src={heroImage}
          alt={hero.imageAlt}
          className="hero__image"
          decoding="async"
        />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content">
          <h1 className="hero__title">
            {hero.titleLines.map((line) => (
              <span key={line} className="hero__title-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <Button to="/uk/how-we-work" variant="primary">
              {hero.ctaPrimary}
            </Button>
            <Button to="/uk/contact" variant="secondary">
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
