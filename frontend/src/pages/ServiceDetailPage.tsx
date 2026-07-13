import { useParams } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { ServicePageLayout } from "../components/layout/ServicePageLayout";
import { pages } from "../content/uk";
import { NotFoundPage } from "./NotFoundPage";

type ServiceSlug = keyof typeof pages.services;

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? pages.services[slug as ServiceSlug] : undefined;

  if (!content) {
    return <NotFoundPage />;
  }

  return (
    <PageLayout>
      <ServicePageLayout title={content.title}>
        <p>{content.placeholder}</p>
      </ServicePageLayout>
    </PageLayout>
  );
}
