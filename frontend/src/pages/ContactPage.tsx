import { cta, pages } from "../content/uk";
import { ConsultationForm } from "../components/forms/ConsultationForm";
import { Container } from "../components/layout/Container";
import { PageLayout } from "../components/layout/PageLayout";
import { Section } from "../components/layout/Section";
import "./ContactPage.css";

export function ContactPage() {
  const content = pages.contact;

  return (
    <PageLayout>
      <Section>
        <Container narrow>
          <div className="contact-page">
            <h1 className="contact-page__title">{content.title}</h1>
            <p className="contact-page__body">{content.body}</p>
            <p className="contact-page__signature">{content.signature}</p>
            <p className="contact-page__address">{content.officeAddress}</p>
            <p className="contact-page__links">
              <a href={content.finmentorUrl} target="_blank" rel="noopener noreferrer">
                {content.finmentorLabel}
              </a>
            </p>

            <ul className="contact-page__social">
              {cta.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ConsultationForm source="contact-page" />
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
