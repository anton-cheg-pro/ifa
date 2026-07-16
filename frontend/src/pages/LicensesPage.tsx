import { PageLayout } from "../components/layout/PageLayout";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { CertificateGallery } from "../components/content/CertificateGallery";
import { pages } from "../content/uk";
import "./LicensesPage.css";

export function LicensesPage() {
  const { finmentorUrl } = pages.licenses;

  return (
    <PageLayout>
      <Section>
        <Container narrow>
          <div className="licenses-page">
            <a
              href={finmentorUrl}
              className="licenses-page__finmentor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="licenses-page__finmentor-name">FinMentor</span>
              <span className="licenses-page__finmentor-url">finmentor.pro</span>
              <span className="licenses-page__finmentor-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <CertificateGallery showHeader={false} />
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
