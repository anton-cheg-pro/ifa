import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { KnowledgeArticleBody } from "../components/knowledge/KnowledgeArticleBody";
import { Container } from "../components/layout/Container";
import { PageLayout } from "../components/layout/PageLayout";
import { Section } from "../components/layout/Section";
import { getKnowledgeArticle } from "../content/knowledgeArticles";
import { site } from "../content/uk";
import { NotFoundPage } from "./NotFoundPage";
import "./KnowledgePage.css";

export function KnowledgeArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getKnowledgeArticle(slug) : undefined;

  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} — ${site.name}`;
    return () => {
      document.title = site.name;
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
