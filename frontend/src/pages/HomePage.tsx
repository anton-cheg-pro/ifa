import { PageLayout } from "../components/layout/PageLayout";
import { CtaSection } from "../sections/CtaSection";
import { HeroSection } from "../sections/HeroSection";
import { HowItWorksSection } from "../sections/HowItWorksSection";
import { MaterialsSection } from "../sections/MaterialsSection";
import { TopicsSection } from "../sections/TopicsSection";
import { FamilyWealthCtaBand } from "../sections/magazine/FamilyWealthCtaBand";
import { FinancialPlanSplitSection } from "../sections/magazine/FinancialPlanSplitSection";
import { QuoteBandSection } from "../sections/magazine/QuoteBandSection";
import { SpecializationSplitSection } from "../sections/magazine/SpecializationSplitSection";
import { StatsMarqueeSection } from "../sections/magazine/StatsMarqueeSection";
import { TeamSplitSection } from "../sections/magazine/TeamSplitSection";
import { TestimonialsMarqueeSection } from "../sections/magazine/TestimonialsMarqueeSection";
import { WelcomeIncomeBand } from "../sections/magazine/WelcomeIncomeBand";

export function HomePage() {
  return (
    <PageLayout>
      <div className="home-magazine">
        <HeroSection />
        <QuoteBandSection />
        <TeamSplitSection />
        <StatsMarqueeSection />
        <SpecializationSplitSection />
        <WelcomeIncomeBand />
        <FinancialPlanSplitSection />
        <TestimonialsMarqueeSection />
        <FamilyWealthCtaBand />
      </div>
      <HowItWorksSection />
      <TopicsSection />
      <MaterialsSection />
      <CtaSection />
    </PageLayout>
  );
}
