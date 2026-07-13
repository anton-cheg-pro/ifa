import { PageLayout } from "../components/layout/PageLayout";
import { Button } from "../components/ui/Button";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";

export function NotFoundPage() {
  return (
    <PageLayout>
      <Section>
        <Container narrow>
          <h1 className="content-page__title">Сторінку не знайдено</h1>
          <p className="content-page__text" style={{ textAlign: "center" }}>
            <Button to="/uk" variant="primary">
              На головну
            </Button>
          </p>
        </Container>
      </Section>
    </PageLayout>
  );
}
