import { useEffect, useState } from "react";
import { ConsultationCta } from "../components/consultation/ConsultationCta";
import { Container } from "../components/layout/Container";
import { PageLayout } from "../components/layout/PageLayout";
import { Section } from "../components/layout/Section";
import { faqPage } from "../content/faqPage";
import { site } from "../content/uk";
import "./FaqPage.css";

export function FaqPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    document.title = `${faqPage.title} — ${site.name}`;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seo = "faq";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqPage.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.title = site.name;
      script.remove();
    };
  }, []);

  return (
    <PageLayout>
      <Section>
        <Container narrow>
          <header className="faq-page__header">
            <h1 className="faq-page__title">{faqPage.title}</h1>
            <p className="faq-page__intro">{faqPage.intro}</p>
          </header>
          <div className="faq-page__list">
            {faqPage.items.map((item) => {
              const open = openId === item.id;
              return (
                <article key={item.id} className={`faq-card${open ? " faq-card--open" : ""}`}>
                  <h2 className="faq-card__heading">
                    <button
                      type="button"
                      className="faq-card__trigger"
                      aria-expanded={open}
                      aria-controls={`faq-${item.id}`}
                      onClick={() => setOpenId(open ? null : item.id)}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div id={`faq-${item.id}`} className="faq-card__panel" hidden={!open}>
                    {item.answer.split("\n\n").map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                    {item.cta ? (
                      <ConsultationCta source={`faq:${item.id}`}>{item.cta}</ConsultationCta>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
