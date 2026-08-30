import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { KnowledgeArticleBody } from "../components/knowledge/KnowledgeArticleBody";
import { Container } from "../components/layout/Container";
import { PageLayout } from "../components/layout/PageLayout";
import { Section } from "../components/layout/Section";
import { getKnowledgeArticle } from "../content/knowledgeArticles";
import { ANTON_ENTITY_PATH } from "../content/antonEntityPage";
import { site } from "../content/uk";
import { NotFoundPage } from "./NotFoundPage";
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

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <PageLayout>
      <Section>
        <Container article>
          <nav className="knowledge-article__back">
            <Link to="/uk/knowledge">← База знань</Link>
          </nav>
          <article className="knowledge-article">
            <header className="knowledge-article__header">
              <h1 className="knowledge-article__title">{article.title}</h1>
              <p className="knowledge-article__byline">
                <Link to={ANTON_ENTITY_PATH}>Антон Черепков</Link>
              </p>
              <p className="knowledge-article__lead">{article.lead}</p>
            </header>
            <div className="knowledge-article__body">
              <KnowledgeArticleBody slug={slug!} source={article.body} title={article.title} />
            </div>
          </article>
        </Container>
      </Section>
    </PageLayout>
  );
}
