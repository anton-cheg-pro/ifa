import { PageLayout } from "../components/layout/PageLayout";
import { AboutSections } from "../sections/AboutSections";
import { CtaSection } from "../sections/CtaSection";
import { HeroSection } from "../sections/HeroSection";
import { HowItWorksSection } from "../sections/HowItWorksSection";
import { MaterialsSection } from "../sections/MaterialsSection";
import { SocialProofSection } from "../sections/SocialProofSection";
import { TopicsSection } from "../sections/TopicsSection";

export function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSections />
      <HowItWorksSection />
      <TopicsSection />
      <MaterialsSection />
      <SocialProofSection />
      <CtaSection />
    </PageLayout>
  );
}
