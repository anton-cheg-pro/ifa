import { useEffect } from "react";
import { contactAbout } from "../content/contactPage";
import { site } from "../content/uk";
import { CertificateGallery } from "../components/content/CertificateGallery";
import { Container } from "../components/layout/Container";
import { PageLayout } from "../components/layout/PageLayout";
import { Section } from "../components/layout/Section";
import "./AboutPage.css";

const imagesBase = `${import.meta.env.BASE_URL}images/`;

export function AboutPage() {
  useEffect(() => {
    document.title = `${contactAbout.title} — ${site.name}`;
    return () => {
      document.title = site.name;
    };
  }, []);

  return (
    <PageLayout>
      <section className="about-page" aria-labelledby="about-page-title">
        <div className="about-page__inner">
          <div className="about-page__text">
            <h1 id="about-page-title" className="about-page__title">
              {contactAbout.title}
            </h1>
            <p className="about-page__subtitle">{contactAbout.subtitle}</p>
            {contactAbout.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="about-page__body">
                {paragraph}
              </p>
            ))}
            <h2 className="about-page__value-heading">{contactAbout.valueHeading}</h2>
            <p className="about-page__body">{contactAbout.valueParagraph}</p>
          </div>
          <div className="about-page__media">
            <img
              src={`${imagesBase}anton.jpg`}
              alt={contactAbout.imageAlt}
              className="about-page__photo"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <Section>
        <Container>
          <CertificateGallery />
        </Container>
      </Section>
    </PageLayout>
  );
}
