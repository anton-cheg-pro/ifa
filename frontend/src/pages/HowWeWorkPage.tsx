import { PageLayout } from "../components/layout/PageLayout";
import { howWeWorkPage } from "../content/howWeWorkPage";
import {
  HowWeWorkHero,
  HowWeWorkPricing,
  HowWeWorkSplit,
  HowWeWorkStepBand,
  HowWeWorkStickyCta,
} from "../sections/how-we-work/HowWeWorkSections";
import "../sections/how-we-work/HowWeWorkSplit.css";

const images = {
  team: `${import.meta.env.BASE_URL}images/team.jpg`,
  plan: `${import.meta.env.BASE_URL}images/financial-plan.jpg`,
  specialization: `${import.meta.env.BASE_URL}images/specialization.jpg`,
};

export function HowWeWorkPage() {
  const { intro, step1, step2, step3 } = howWeWorkPage;

  return (
    <PageLayout>
      <div className="how-we-work-page home-magazine">
        <HowWeWorkHero />

        <HowWeWorkSplit
          paragraphs={intro.paragraphs}
          imageSrc={images.team}
          imageAlt={intro.imageAlt}
          panelSurface
        />

        <HowWeWorkStepBand label={step1.label} />

        <HowWeWorkSplit
          photoLeft
          title={step1.planTitle}
          paragraphs={step1.planParagraphs}
          imageSrc={images.plan}
          imageAlt={step1.planImageAlt}
        />

        <HowWeWorkSplit
          paragraphs={step1.detailsParagraphs}
          imageSrc={images.specialization}
          imageAlt={step1.detailsImageAlt}
          panelSurface
        />

        <HowWeWorkStepBand label={step2.label} note={step2.bandNote} />

        <HowWeWorkSplit
          photoLeft
          paragraphs={step2.paragraphs}
          imageSrc={images.plan}
          imageAlt={step2.imageAlt}
        />

        <HowWeWorkStepBand label={step3.label} subtitle={step3.bandSubtitle} />

        <HowWeWorkSplit
          paragraphs={step3.sections[0].paragraphs}
          imageSrc={images.specialization}
          imageAlt={step3.sections[0].imageAlt}
          panelSurface
        />

        <HowWeWorkSplit
          photoLeft
          paragraphs={step3.sections[1].paragraphs}
          imageSrc={images.team}
          imageAlt={step3.sections[1].imageAlt}
        />

        <HowWeWorkSplit
          paragraphs={step3.sections[2].paragraphs}
          imageSrc={images.plan}
          imageAlt={step3.sections[2].imageAlt}
          panelSurface
          showCta={false}
        />

        <HowWeWorkPricing />
        <HowWeWorkStickyCta />
      </div>
    </PageLayout>
  );
}
