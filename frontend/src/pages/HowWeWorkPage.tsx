import { PageLayout } from "../components/layout/PageLayout";
import { ServicePageLayout } from "../components/layout/ServicePageLayout";
import { pages } from "../content/uk";

export function HowWeWorkPage() {
  const content = pages.howWeWork;

  return (
    <PageLayout>
      <ServicePageLayout title={content.title} subtitle={content.subtitle}>
        <p>{content.placeholder}</p>
      </ServicePageLayout>
    </PageLayout>
  );
}
