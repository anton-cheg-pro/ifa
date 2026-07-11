import { howItWorks } from "../content/uk";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { MissionQuote } from "./SocialProofSection";
import "./HowItWorksSection.css";

export function HowItWorksSection() {
  return (
    <Section id="how-we-work" alt>
      <Container>
        <h2 className="section__title">{howItWorks.title}</h2>

        <div className="how-we-work__intro">
          {howItWorks.intro.map((block) => (
            <article key={block.title} className="how-we-work__block">
              <h3 className="how-we-work__block-title">{block.title}</h3>
              <p className="how-we-work__block-text">{block.body}</p>
            </article>
          ))}
        </div>

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

        <MissionQuote quote={howItWorks.mission.quote} attribution={howItWorks.mission.attribution} />
      </Container>
    </Section>
  );
}
