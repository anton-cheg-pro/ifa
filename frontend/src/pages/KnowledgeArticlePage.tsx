import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ConsultationCta } from "../components/consultation/ConsultationCta";
import { KnowledgeArticleBody } from "../components/knowledge/KnowledgeArticleBody";
import { Container } from "../components/layout/Container";
import { PageLayout } from "../components/layout/PageLayout";
import { Section } from "../components/layout/Section";
import { getKnowledgeArticle, listKnowledgeArticles } from "../content/knowledgeArticles";
import { ANTON_ENTITY_PATH, antonEntityPage } from "../content/antonEntityPage";
import { consultation, site } from "../content/uk";
import { NotFoundPage } from "./NotFoundPage";
import "../sections/how-we-work/HowWeWorkSplit.css";
import "./KnowledgePage.css";

export function KnowledgeArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getKnowledgeArticle(slug) : undefined;

  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} — ${site.name}`;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seo = "article";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.lead,
      inLanguage: "uk",
      author: {
        "@type": "Person",
        name: "Антон Черепков",
        url: "https://family-wealth.pro/uk/anton-cherepkov-financial-advisor",
      },
    });
    document.head.appendChild(script);

    return () => {
      document.title = site.name;
      script.remove();
    };
  }, [article]);

  if (!article || !slug) {
    return <NotFoundPage />;
  }

  const related = listKnowledgeArticles().filter((item) => item.id !== slug);
  const bioRest = antonEntityPage.lead.replace(/^Антон Черепков\s+—\s+/, "");

  return (
    <PageLayout>
      <Section>
        <Container article>
          <nav className="knowledge-article__back">
            <Link to="/uk/knowledge">← База знань</Link>
          </nav>
          <div className="knowledge-article-layout">
            <article className="knowledge-article">
              <header className="knowledge-article__header">
                <h1 className="knowledge-article__title">{article.title}</h1>
                <p className="knowledge-article__byline">
                  <Link to={ANTON_ENTITY_PATH}>Антон Черепков</Link>
                </p>
                <p className="knowledge-article__lead">{article.lead}</p>
              </header>
              <div className="knowledge-article__body">
                <KnowledgeArticleBody slug={slug} source={article.body} title={article.title} />
              </div>
              <footer className="knowledge-article__footer">
                <p className="knowledge-article__author-footer">
                  Автор: <Link to={ANTON_ENTITY_PATH}>Антон Черепков</Link>
                  {bioRest ? ` — ${bioRest}` : null}
                </p>
                <ConsultationCta source={`knowledge:${slug}`} className="knowledge-article__cta">
                  {consultation.bookCta}
                </ConsultationCta>
              </footer>
            </article>
            <aside className="knowledge-article__related" aria-label="Інші статті">
              <h2 className="knowledge-article__related-title">Інші статті</h2>
              <ul className="knowledge-article__related-list">
                {related.map((item) => (
                  <li key={item.id}>
                    <Link to={`/uk/knowledge/${item.id}`} className="knowledge-related-card">
                      <span className="knowledge-related-card__title">{item.title}</span>
                      <span className="knowledge-related-card__lead">{item.lead}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </Section>
      <div className="how-we-work-sticky-cta">
        <ConsultationCta source={`knowledge:${slug}:sticky`} sticky>
          {consultation.stickyCta}
        </ConsultationCta>
      </div>
    </PageLayout>
  );
}
