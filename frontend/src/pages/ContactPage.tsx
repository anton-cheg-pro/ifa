import { pages } from "../content/uk";
import { contactAbout } from "../content/contactPage";
import { CertificateGallery } from "../components/content/CertificateGallery";
import { ConsultationForm } from "../components/forms/ConsultationForm";
import { SocialIconLinks } from "../components/ui/SocialIconLinks";
import { Container } from "../components/layout/Container";
import { PageLayout } from "../components/layout/PageLayout";
import { Section } from "../components/layout/Section";
import "./ContactPage.css";

const imagesBase = `${import.meta.env.BASE_URL}images/`;

export function ContactPage() {
  const content = pages.contact;
  const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.address.mapsQuery)}`;

  return (
    <PageLayout>
      <section className="contact-about" aria-labelledby="contact-about-title">
        <div className="contact-about__inner">
          <div className="contact-about__text">
            <h1 id="contact-about-title" className="contact-about__title">
              {contactAbout.title}
            </h1>
            <p className="contact-about__subtitle">{contactAbout.subtitle}</p>
            {contactAbout.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="contact-about__body">
                {paragraph}
              </p>
            ))}
            <h2 className="contact-about__value-heading">{contactAbout.valueHeading}</h2>
            <p className="contact-about__body">{contactAbout.valueParagraph}</p>
          </div>
          <div className="contact-about__media">
            <img
              src={`${imagesBase}anton.jpg`}
              alt={contactAbout.imageAlt}
              className="contact-about__photo"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <Section>
        <Container>
          <div className="contact-page">
            <h2 className="contact-page__section-title">{content.title}</h2>

            <div className="contact-page__grid">
              <section className="contact-page__cell" aria-labelledby="contact-address">
                <h3 id="contact-address" className="contact-page__heading">
                  {content.address.heading}
                </h3>
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
                <h3 id="contact-hours" className="contact-page__heading">
                  {content.hours.heading}
                </h3>
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

            <CertificateGallery />

            <ConsultationForm source="contact-page" />
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
