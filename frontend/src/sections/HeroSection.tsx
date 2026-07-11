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
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <Button href="#how-we-work" variant="primary">
              {hero.ctaPrimary}
            </Button>
            <Button href="#contact" variant="secondary">
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
