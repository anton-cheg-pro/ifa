import { useEffect } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { pages, site } from "../content/uk";
import { finmentorReferralUrl } from "../content/sameAs";
import "./LicensesPage.css";

export function LicensesPage() {
  const { title } = pages.licenses;

  useEffect(() => {
    document.title = `${title} — ${site.name}`;
    return () => {
      document.title = site.name;
    };
  }, [title]);

  return (
    <PageLayout>
      <Section>
        <Container narrow>
          <div className="licenses-page">
            <a
              href={finmentorReferralUrl("licenses")}
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
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
