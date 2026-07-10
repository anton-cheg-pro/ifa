import { hero } from "../content/uk";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import "./HeroSection.css";

const heroImage = `${import.meta.env.BASE_URL}images/placeholders/hero.svg`;

export function HeroSection() {
  return (
    <section id="hero" className="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__eyebrow">{hero.eyebrow}</p>
            <h1 className="hero__title">{hero.title}</h1>
            <p className="hero__subtitle">{hero.subtitle}</p>
            <div className="hero__actions">
              <Button href="#about" variant="primary">
                {hero.ctaPrimary}
              </Button>
              <Button href="#contact" variant="secondary">
                {hero.ctaSecondary}
              </Button>
            </div>
          </div>
          <div className="hero__media">
            <img
              src={heroImage}
              alt=""
              className="hero__image"
              width={560}
              height={420}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
