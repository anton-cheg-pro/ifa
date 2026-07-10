import { materials } from "../content/uk";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Card } from "../components/ui/Card";
import "./MaterialsSection.css";

export function MaterialsSection() {
  return (
    <Section id="materials" alt>
      <Container>
        <h2 className="section__title">{materials.title}</h2>
        <p className="section__subtitle">{materials.subtitle}</p>
        <div className="materials-grid">
          {materials.items.map((item) => (
            <Card key={item.title}>
              <span className="card__badge">{item.badge}</span>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
