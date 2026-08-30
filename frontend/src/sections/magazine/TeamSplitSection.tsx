import { magazine } from "../../content/uk";
import { SplitSection } from "./SplitSection";

const teamImage = `${import.meta.env.BASE_URL}images/team.jpg`;

export function TeamSplitSection() {
  const { team } = magazine;

  return (
    <SplitSection
      id="team"
      title={team.title}
      body={team.body}
      cta={team.cta}
      ctaSecondary={team.ctaSecondary}
      imageSrc={teamImage}
      imageAlt={team.imageAlt}
      placeholder={team.placeholder}
    />
  );
}
