import { MarkdownContent } from "../content/MarkdownContent";
import { podcastYoutubeId } from "../../content/knowledgeArticleExtras";
import { BrokerTopUpTable } from "./BrokerTopUpTable";
import { YouTubeEmbed } from "./YouTubeEmbed";

const BROKER_TABLE_MARKER = "<!-- broker-methods-table -->";

type KnowledgeArticleBodyProps = {
  slug: string;
  source: string;
  title: string;
};

export function KnowledgeArticleBody({ slug, source, title }: KnowledgeArticleBodyProps) {
  if (slug === "podcast-money-in-pairs") {
    return (
      <>
        <MarkdownContent source={source} />
        <YouTubeEmbed videoId={podcastYoutubeId} title={title} />
      </>
    );
  }

  if (slug === "broker-top-up-ukraine" && source.includes(BROKER_TABLE_MARKER)) {
    const [before, after] = source.split(BROKER_TABLE_MARKER);

    return (
      <>
        <MarkdownContent source={before} />
        <BrokerTopUpTable />
        <MarkdownContent source={after} />
      </>
    );
  }

  return <MarkdownContent source={source} />;
}
