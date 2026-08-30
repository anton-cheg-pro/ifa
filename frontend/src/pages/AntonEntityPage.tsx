import { useEffect } from "react";
import { Button } from "../components/ui/Button";
import { antonEntityPage } from "../content/antonEntityPage";
import { finmentorReferralUrl } from "../content/sameAs";
import { site } from "../content/uk";
import { PageLayout } from "../components/layout/PageLayout";
import "./AboutPage.css";

const imagesBase = `${import.meta.env.BASE_URL}images/`;

export function AntonEntityPage() {
  useEffect(() => {
    document.title = `${antonEntityPage.title} — ${site.name}`;
    return () => {
      document.title = site.name;
    };
  }, []);

  return (
    <PageLayout>
      <section className="about-page" aria-labelledby="anton-entity-title">
        <div className="about-page__inner">
          <div className="about-page__text">
            <h1 id="anton-entity-title" className="about-page__title">
              {antonEntityPage.title}
            </h1>
            <p className="about-page__subtitle">{antonEntityPage.subtitle}</p>
            <p className="about-page__body">{antonEntityPage.lead}</p>
            <ul className="about-page__profiles">
              {antonEntityPage.profiles.map((profile) => (
                <li key={profile.href}>
                  <a href={profile.href} target="_blank" rel="noopener noreferrer">
                    {profile.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={finmentorReferralUrl("anton-entity")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {antonEntityPage.finmentorLabel}
                </a>
              </li>
            </ul>
            <div className="about-page__actions">
              <Button to={antonEntityPage.ctaTo}>{antonEntityPage.ctaLabel}</Button>
            </div>
          </div>
          <div className="about-page__media">
            <img
              src={`${imagesBase}anton.jpg`}
              alt={antonEntityPage.imageAlt}
              className="about-page__photo"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
