import { magazine } from "../../content/uk";
import { Button } from "../../components/ui/Button";
import "./SpecializationSplitSection.css";

const specializationImage = `${import.meta.env.BASE_URL}images/specialization.jpg`;

export function SpecializationSplitSection() {
  const { specialization } = magazine;

  return (
    <section className="magazine-spec" aria-labelledby="specialization-heading">
      <div className="magazine-spec__grid">
        <div className="magazine-spec__media">
          <img
            src={specializationImage}
            alt={specialization.imageAlt}
            className="magazine-spec__image"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="magazine-spec__panel" aria-hidden="true" />
      </div>

      <div className="magazine-spec__overlay">
        <div className="magazine-spec__headline-band">
          <h2 id="specialization-heading" className="magazine-spec__headline">
            <span className="magazine-spec__line">{specialization.line1}</span>
            <span className="magazine-spec__line">{specialization.line2}</span>
          </h2>
        </div>
        {specialization.cta.href.startsWith("/") ? (
          <Button to={specialization.cta.href} variant="primary">
            {specialization.cta.label}
          </Button>
        ) : (
          <Button href={specialization.cta.href} variant="primary">
            {specialization.cta.label}
          </Button>
        )}
      </div>
    </section>
  );
}
