import { cta } from "../content/uk";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import "./CtaSection.css";

export function CtaSection() {
  return (
    <Section id="contact" alt>
      <Container narrow>
        <div className="cta-band">
          <h2 className="cta-band__title">{cta.title}</h2>
          <p className="cta-band__body">{cta.body}</p>
          <Button href={`mailto:${cta.email}`} variant="primary">
            {cta.button}
          </Button>
          <p className="cta-band__note">{cta.note}</p>
        </div>
      </Container>
    </Section>
  );
}
