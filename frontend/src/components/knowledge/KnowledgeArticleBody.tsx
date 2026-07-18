import { MarkdownContent } from "../content/MarkdownContent";
import {
  articleBannerImages,
  articleYoutubeIds,
  BROKER_TABLE_MARKER,
  splitArticleBody,
} from "../../content/knowledgeArticleExtras";
import { ArticleBanner } from "./ArticleBanner";
import { BrokerTopUpTable } from "./BrokerTopUpTable";
import { YouTubeEmbed } from "./YouTubeEmbed";

type KnowledgeArticleBodyProps = {
  slug: string;
  source: string;
  title: string;
};

function renderBanner(slug: string, bannerId?: string) {
  const banner =
    (bannerId && articleBannerImages[bannerId]) ?? articleBannerImages[slug];
  if (!banner) return null;
  return <ArticleBanner file={banner.file} alt={banner.alt} />;
}

export function KnowledgeArticleBody({ slug, source, title }: KnowledgeArticleBodyProps) {
  const youtubeId = articleYoutubeIds[slug];
  if (youtubeId) {
    return (
      <>
        <MarkdownContent source={source} />
        <YouTubeEmbed videoId={youtubeId} title={title} />
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

  const { before, bannerId, after } = splitArticleBody(source);
  const hasBanner = Boolean(bannerId && articleBannerImages[bannerId]);

  if (hasBanner) {
    return (
      <>
        <MarkdownContent source={before} />
        {renderBanner(slug, bannerId)}
        <MarkdownContent source={after} />
      </>
    );
  }

  return <MarkdownContent source={source} />;
}
