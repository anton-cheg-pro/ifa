import { magazine } from "../../content/uk";
import { Button } from "../../components/ui/Button";

export function FamilyWealthCtaBand() {
  const { ctaBand } = magazine;

  return (
    <section className="magazine-band magazine-band--cta" aria-label="Заклик до дії">
      <div className="magazine-cta">
        <h2 className="magazine-cta__brand">{ctaBand.brand}</h2>
        <div className="magazine-cta__content">
          <p className="magazine-cta__text">{ctaBand.text}</p>
          <Button href={ctaBand.cta.href} variant="primary">
            {ctaBand.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
