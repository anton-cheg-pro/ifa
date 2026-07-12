import { magazine } from "../../content/uk";
import { SplitSection } from "./SplitSection";

const teamImage = `${import.meta.env.BASE_URL}images/team.jpg`;

export function TeamSplitSection() {
  const { team } = magazine;

  return (
    <SplitSection
      title={team.title}
      body={team.body}
      cta={team.cta}
      imageSrc={teamImage}
      imageAlt={team.imageAlt}
      placeholder={team.placeholder}
    />
  );
}
