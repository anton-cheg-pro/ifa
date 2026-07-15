import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { MarkdownContent } from "../components/content/MarkdownContent";
import { articleBodies, type ArticleId } from "../content/pageBodies";
import { pages } from "../content/uk";
import { Button } from "../components/ui/Button";
import "./KnowledgePage.css";

export function KnowledgePage() {
  const content = pages.knowledge;
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <PageLayout>
      <Section>
        <Container narrow>
          <header className="knowledge-page__header">
            <h1 className="knowledge-page__title">{content.title}</h1>
            <p className="knowledge-page__subtitle">{content.subtitle}</p>
          </header>

          <ul className="knowledge-page__list">
            {content.articles.map((article) => {
              const isOpen = expanded === article.id;
              const body = articleBodies[article.id as ArticleId];

              return (
                <li key={article.id} className="knowledge-page__item">
                  <h2 className="knowledge-page__item-title">{article.title}</h2>
                  <p className="knowledge-page__item-lead">{article.lead}</p>
                  {isOpen ? (
                    <div className="knowledge-page__item-body">
                      <MarkdownContent source={body} />
                    </div>
                  ) : null}
                  <Button
                    type="button"
                    variant={isOpen ? "ghost" : "secondary"}
                    onClick={() => setExpanded(isOpen ? null : article.id)}
                  >
                    {isOpen ? "Згорнути" : "Читати далі"}
                  </Button>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </PageLayout>
  );
}
