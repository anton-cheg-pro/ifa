import { useEffect } from "react";
import { pages, site } from "../content/uk";
import { ConsultationForm } from "../components/forms/ConsultationForm";
import { SocialIconLinks } from "../components/ui/SocialIconLinks";
import { Container } from "../components/layout/Container";
import { PageLayout } from "../components/layout/PageLayout";
import { Section } from "../components/layout/Section";
import "./ContactPage.css";

export function ContactPage() {
  const content = pages.contact;
  const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.address.mapsQuery)}`;

  useEffect(() => {
    document.title = `${content.title} — ${site.name}`;
    return () => {
      document.title = site.name;
    };
  }, [content.title]);

  return (
    <PageLayout>
      <Section>
        <Container>
          <div className="contact-page">
            <h1 className="contact-page__title">{content.title}</h1>

            <div className="contact-page__grid">
              <section className="contact-page__cell" aria-labelledby="contact-address">
                <h2 id="contact-address" className="contact-page__heading">
                  {content.address.heading}
                </h2>
                <address className="contact-page__address">
                  {content.address.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <div className="contact-page__finmentor">
                  <p className="contact-page__finmentor-text">{content.finmentor.description}</p>
                  <a
                    href={content.finmentor.url}
                    className="contact-page__finmentor-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.finmentor.name} →
                  </a>
                </div>
              </section>

              <section className="contact-page__cell contact-page__cell--map">
                <div className="contact-page__map">
                  <iframe
                    title="Офіс на карті Google Maps"
                    src={content.address.mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <p className="contact-page__map-link">
                  <a href={mapsOpenUrl} target="_blank" rel="noopener noreferrer">
                    Відкрити в Google Maps
                  </a>
                </p>
              </section>

              <section className="contact-page__cell" aria-labelledby="contact-hours">
                <h2 id="contact-hours" className="contact-page__heading">
                  {content.hours.heading}
                </h2>
                <p className="contact-page__hours">{content.hours.weekdays}</p>
                <p className="contact-page__hours">{content.hours.weekend}</p>
              </section>

              <section
                className="contact-page__cell contact-page__cell--social"
                aria-label="Соціальні мережі"
              >
                <SocialIconLinks links={content.social} />
              </section>
            </div>

            <ConsultationForm source="contact-page" />
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
