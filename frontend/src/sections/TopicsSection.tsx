import { topics } from "../content/uk";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Card } from "../components/ui/Card";
import "./TopicsSection.css";

export function TopicsSection() {
  return (
    <Section id="services">
      <Container>
        <h2 className="section__title">{topics.title}</h2>
        <p className="section__subtitle">{topics.subtitle}</p>
        <div className="topics-grid">
          {topics.items.map((item) => (
            <Card key={item.title}>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
