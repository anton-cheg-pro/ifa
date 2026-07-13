import { magazine } from "../../content/uk";
import { Button } from "../../components/ui/Button";
import "./FamilyWealthCtaBand.css";

export function FamilyWealthCtaBand() {
  const { ctaBand } = magazine;

  return (
    <section
      id="contact"
      className="magazine-band magazine-band--cta"
      aria-label="Заклик до дії"
    >
      <div className="magazine-cta">
        <h2 className="magazine-cta__brand">{ctaBand.brand}</h2>
        <div className="magazine-cta__content">
          <p className="magazine-cta__text">{ctaBand.text}</p>
          <Button to={ctaBand.cta.to} variant="primary">
            {ctaBand.cta.label}
          </Button>
        </div>
      </div>
      <p className="magazine-cta__disclaimer" role="note">
        {ctaBand.disclaimer}
      </p>
    </section>
  );
}
