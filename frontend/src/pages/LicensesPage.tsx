import { PageLayout } from "../components/layout/PageLayout";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { pages } from "../content/uk";

export function LicensesPage() {
  const content = pages.licenses;

  return (
    <PageLayout>
      <Section>
        <Container narrow>
          <h1 className="content-page__title">{content.title}</h1>
          <p className="content-page__text">{content.placeholder}</p>
          <p className="content-page__text">
            <a href={content.finmentorUrl} target="_blank" rel="noopener noreferrer">
              finmentor.pro
            </a>
          </p>
        </Container>
      </Section>
    </PageLayout>
  );
}
