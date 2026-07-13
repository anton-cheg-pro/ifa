import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
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

              return (
                <li key={article.id} className="knowledge-page__item">
                  <h2 className="knowledge-page__item-title">{article.title}</h2>
                  <p className="knowledge-page__item-lead">{article.lead}</p>
                  {isOpen ? (
                    <div className="knowledge-page__item-body">
                      <p>{article.body}</p>
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
