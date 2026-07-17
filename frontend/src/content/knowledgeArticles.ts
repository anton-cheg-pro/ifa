import { pages } from "./uk";
import { articleBodies, type ArticleId } from "./pageBodies";

export type KnowledgeArticleMeta = (typeof pages.knowledge.articles)[number];

export function listKnowledgeArticles(): KnowledgeArticleMeta[] {
  return pages.knowledge.articles;
}

export function getKnowledgeArticle(slug: string) {
  const meta = pages.knowledge.articles.find((article) => article.id === slug);
  if (!meta) return undefined;

  const body = articleBodies[slug as ArticleId];
  if (!body) return undefined;

  return { ...meta, body };
}
