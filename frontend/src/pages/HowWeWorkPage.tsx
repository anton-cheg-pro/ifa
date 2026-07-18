import { useEffect } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import {
  howWeWorkPage,
  howWeWorkHeroTitles,
  type HowWeWorkVariant,
} from "../content/howWeWorkPage";
import { site } from "../content/uk";
import {
  HowWeWorkHero,
  HowWeWorkPricing,
  HowWeWorkSplit,
  HowWeWorkStepBand,
  HowWeWorkStickyCta,
} from "../sections/how-we-work/HowWeWorkSections";
import "../sections/how-we-work/HowWeWorkSplit.css";

const base = `${import.meta.env.BASE_URL}images/`;

const images = {
  plan: `${base}financial-plan.jpg`,
  step2: `${base}hero-previous.jpg`,
  step3: `${base}anton-841.jpg`,
  advisor: `${base}anton-886.jpg`,
};

type HowWeWorkPageProps = {
  variant?: HowWeWorkVariant;
};

export function HowWeWorkPage({ variant = "how-we-work" }: HowWeWorkPageProps) {
  const { step1, step2, step3 } = howWeWorkPage;
  const heroTitle = howWeWorkHeroTitles[variant];

  useEffect(() => {
    document.title = `${heroTitle} — ${site.name}`;
    return () => {
      document.title = site.name;
    };
  }, [heroTitle]);

  return (
    <PageLayout>
      <div className="how-we-work-page home-magazine">
        <HowWeWorkHero heroTitle={heroTitle} />

        <HowWeWorkStepBand label={step1.label} body={step1.bandBody} />

        <HowWeWorkSplit
          title={step1.planTitle}
          paragraphs={step1.paragraphs}
          imageSrc={images.plan}
          imageAlt={step1.imageAlt}
        />

        <HowWeWorkStepBand label={step2.label} note={step2.bandNote} />

        <HowWeWorkSplit
          photoRight
          paragraphs={step2.paragraphs}
          imageSrc={images.step2}
          imageAlt={step2.imageAlt}
          panelSurface
        />

        <HowWeWorkStepBand label={step3.label} subtitle={step3.bandSubtitle} />

        <HowWeWorkSplit
          paragraphs={step3.paragraphs}
          imageSrc={images.step3}
          imageAlt={step3.imageAlt}
        />

        <HowWeWorkStepBand label={howWeWorkPage.pricing.label} />

        <HowWeWorkPricing imageSrc={images.advisor} />
        <HowWeWorkStickyCta />
      </div>
    </PageLayout>
  );
}
