import { PageLayout } from "../components/layout/PageLayout";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { MarkdownContent } from "../components/content/MarkdownContent";
import { pageBodies } from "../content/pageBodies";
import { pages } from "../content/uk";

export function LicensesPage() {
  const content = pages.licenses;

  return (
    <PageLayout>
      <Section>
        <Container narrow>
          <h1 className="content-page__title">{content.title}</h1>
          <MarkdownContent source={pageBodies.licenses} />
        </Container>
      </Section>
    </PageLayout>
  );
}
