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
  team: `${base}team.jpg`,
  plan: `${base}financial-plan.jpg`,
  specialization: `${base}specialization.jpg`,
  anton929: `${base}anton-929.jpg`,
  anton952: `${base}anton-952.jpg`,
  anton887: `${base}anton-887.jpg`,
  anton886: `${base}anton-886.jpg`,
};

type HowWeWorkPageProps = {
  variant?: HowWeWorkVariant;
};

export function HowWeWorkPage({ variant = "how-we-work" }: HowWeWorkPageProps) {
  const { intro, step1, step2, step3 } = howWeWorkPage;
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

        <HowWeWorkSplit
          photoRight
          paragraphs={intro.paragraphs}
          imageSrc={images.team}
          imageAlt={intro.imageAlt}
          panelSurface
        />

        <HowWeWorkStepBand label={step1.label} />

        <HowWeWorkSplit
          title={step1.planTitle}
          paragraphs={step1.planParagraphs}
          imageSrc={images.anton929}
          imageAlt={step1.planImageAlt}
        />

        <HowWeWorkSplit
          photoRight
          paragraphs={step1.detailsParagraphs}
          imageSrc={images.anton952}
          imageAlt={step1.detailsImageAlt}
          panelSurface
        />

        <HowWeWorkStepBand label={step2.label} note={step2.bandNote} />

        <HowWeWorkSplit
          paragraphs={step2.paragraphs}
          imageSrc={images.anton887}
          imageAlt={step2.imageAlt}
        />

        <HowWeWorkStepBand label={step3.label} subtitle={step3.bandSubtitle} />

        <HowWeWorkSplit
          photoRight
          paragraphs={step3.sections[0].paragraphs}
          imageSrc={images.specialization}
          imageAlt={step3.sections[0].imageAlt}
          panelSurface
        />

        <HowWeWorkSplit
          paragraphs={step3.sections[1].paragraphs}
          imageSrc={images.plan}
          imageAlt={step3.sections[1].imageAlt}
        />

        <HowWeWorkSplit
          photoRight
          paragraphs={step3.sections[2].paragraphs}
          imageSrc={images.team}
          imageAlt={step3.sections[2].imageAlt}
          panelSurface
          showCta={false}
        />

        <HowWeWorkPricing imageSrc={images.anton886} />
        <HowWeWorkStickyCta />
      </div>
    </PageLayout>
  );
}
