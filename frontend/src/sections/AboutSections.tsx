import { audience, approach, problem } from "../content/uk";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";

export function AboutSections() {
  return (
    <>
      <Section id="about">
        <Container narrow>
          <h2 className="section__title">{audience.title}</h2>
          <p className="section__lead">{audience.body}</p>
        </Container>
      </Section>
      <Section alt>
        <Container narrow>
          <h2 className="section__title">{problem.title}</h2>
          <p className="section__lead">{problem.body}</p>
        </Container>
      </Section>
      <Section>
        <Container narrow>
          <h2 className="section__title">{approach.title}</h2>
          <p className="section__lead">{approach.body}</p>
        </Container>
      </Section>
    </>
  );
}
