import { PageLayout } from "../components/layout/PageLayout";
import { CtaSection } from "../sections/CtaSection";
import { HeroSection } from "../sections/HeroSection";
import { HowItWorksSection } from "../sections/HowItWorksSection";
import { MaterialsSection } from "../sections/MaterialsSection";
import { TopicsSection } from "../sections/TopicsSection";

export function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <HowItWorksSection />
      <TopicsSection />
      <MaterialsSection />
      <CtaSection />
    </PageLayout>
  );
}
