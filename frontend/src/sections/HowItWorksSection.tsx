import { howItWorks } from "../content/uk";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import "./HowItWorksSection.css";

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" alt>
      <Container>
        <h2 className="section__title">{howItWorks.title}</h2>
        <ol className="steps">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title} className="steps__item">
              <span className="steps__number" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3 className="steps__title">{step.title}</h3>
                <p className="steps__text">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
