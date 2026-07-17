import { Link } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { listKnowledgeArticles } from "../content/knowledgeArticles";
import { pages } from "../content/uk";
import "./KnowledgePage.css";

export function KnowledgePage() {
  const content = pages.knowledge;
  const articles = listKnowledgeArticles();

  return (
    <PageLayout>
      <Section>
        <Container>
          <header className="knowledge-page__header">
            <h1 className="knowledge-page__title">{content.title}</h1>
            <p className="knowledge-page__subtitle">{content.subtitle}</p>
          </header>

          <ul className="knowledge-page__grid">
            {articles.map((article) => (
              <li key={article.id}>
                <Link to={`/uk/knowledge/${article.id}`} className="knowledge-card">
                  <h2 className="knowledge-card__title">{article.title}</h2>
                  <p className="knowledge-card__lead">{article.lead}</p>
                  <span className="knowledge-card__more">Читати далі</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </PageLayout>
  );
}
