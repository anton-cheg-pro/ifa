import { useParams } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { ServicePageLayout } from "../components/layout/ServicePageLayout";
import { MarkdownContent } from "../components/content/MarkdownContent";
import { pageBodies } from "../content/pageBodies";
import { pages } from "../content/uk";
import { NotFoundPage } from "./NotFoundPage";

type ServiceSlug = Exclude<keyof typeof pageBodies, "how-we-work" | "licenses">;

function isServiceSlug(slug: string): slug is ServiceSlug {
  return slug in pageBodies && slug !== "how-we-work" && slug !== "licenses";
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !isServiceSlug(slug)) {
    return <NotFoundPage />;
  }

  const meta = pages.services[slug];
  const body = pageBodies[slug];

  return (
    <PageLayout>
      <ServicePageLayout title={meta.title}>
        <MarkdownContent source={body} />
      </ServicePageLayout>
    </PageLayout>
  );
}
