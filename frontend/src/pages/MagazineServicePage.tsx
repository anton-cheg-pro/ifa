import { useParams } from "react-router-dom";
import { ConsultationCta } from "../components/consultation/ConsultationCta";
import { PageLayout } from "../components/layout/PageLayout";
import {
  getServiceCta,
  getServicePage,
  type ServiceSection,
} from "../content/servicePages";
import { HowWeWorkSplit, HowWeWorkStepBand } from "../sections/how-we-work/HowWeWorkSections";
import { NotFoundPage } from "./NotFoundPage";
import "../sections/how-we-work/HowWeWorkSplit.css";
import "./MagazineServicePage.css";

const imagesBase = `${import.meta.env.BASE_URL}images/`;

/** First bullets block stays in the hero split; tax-consulting keeps separate sections. */
function splitIntroBullets(sections: readonly ServiceSection[] | undefined, slug: string) {
  if (slug === "tax-consulting" || !sections?.length || sections[0].type !== "bullets") {
    return { introBullets: undefined, restSections: sections ?? [] };
  }
  const [first, ...rest] = sections;
  if (first.type !== "bullets") {
    return { introBullets: undefined, restSections: sections };
  }
  return {
    introBullets: { heading: first.heading, items: first.items },
    restSections: rest,
  };
}

export function MagazineServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getServicePage(slug) : undefined;

  if (!page) {
    return <NotFoundPage />;
  }

  const { stickyLabel: stickyCtaLabel } = getServiceCta(page);
  const { introBullets, restSections } = splitIntroBullets(page.sections, slug ?? "");

  return (
    <PageLayout>
      <div className="magazine-service-page">
        <HowWeWorkSplit
          photoRight={page.photoRight ?? true}
          title={page.title}
          paragraphs={page.intro}
          bullets={introBullets}
          imageSrc={`${imagesBase}${page.image}`}
          imageAlt={page.imageAlt}
          panelSurface
        />

        {restSections.map((section) => {
          if (section.type === "band") {
            return (
              <HowWeWorkStepBand
                key={section.label}
                label={section.label}
                note={section.note}
              />
            );
          }

          if (section.type === "text") {
            return (
              <section
                key={section.heading ?? section.paragraphs[0]?.slice(0, 32)}
                className="magazine-service-page__text"
              >
                <div className="magazine-service-page__inner">
                  {section.heading ? (
                    <h2 className="magazine-service-page__heading">{section.heading}</h2>
                  ) : null}
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="magazine-service-page__body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            );
          }

          if (section.type === "table") {
            return (
              <section
                key={section.heading ?? "table"}
                className="magazine-service-page__table-section"
                aria-labelledby={section.heading ? `${slug}-table-title` : undefined}
              >
                <div className="magazine-service-page__inner">
                  {section.heading ? (
                    <h2 id={`${slug}-table-title`} className="magazine-service-page__heading">
                      {section.heading}
                    </h2>
                  ) : null}
                  {section.intro?.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="magazine-service-page__body">
                      {paragraph}
                    </p>
                  ))}
                  <div className="magazine-service-page__table-wrap">
                    <table className="magazine-service-page__table">
                      <thead>
                        <tr>
                          {section.columns.map((col) => (
                            <th key={col} scope="col">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row) => (
                          <tr key={row.age}>
                            <th scope="row">{row.age}</th>
                            <td>{row.uk}</td>
                            <td>{row.us}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="magazine-service-page__table-footnote">{section.footnote}</p>
                </div>
              </section>
            );
          }

          return (
            <section
              key={section.heading}
              className="magazine-service-page__bullets"
              aria-labelledby={`${slug}-bullets-${section.heading}`}
            >
              <div className="magazine-service-page__inner">
                <h2 id={`${slug}-bullets-${section.heading}`} className="magazine-service-page__heading">
                  {section.heading}
                </h2>
                <ul className="magazine-service-page__list">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        {page.disclaimer ? (
          <p className="magazine-service-page__disclaimer">{page.disclaimer}</p>
        ) : null}

        <div className="how-we-work-sticky-cta">
          <ConsultationCta source={`service:${slug}`} sticky>
            {stickyCtaLabel}
          </ConsultationCta>
        </div>
      </div>
    </PageLayout>
  );
}
