import { socialProof } from "../content/uk";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import "./SocialProofSection.css";

const avatarImage = `${import.meta.env.BASE_URL}images/placeholders/avatar.svg`;

export function SocialProofSection() {
  return (
    <Section>
      <Container narrow>
        <div className="quote-block">
          <img
            src={avatarImage}
            alt=""
            className="quote-block__avatar"
            width={80}
            height={80}
          />
          <blockquote className="quote-block__quote">
            <p>{socialProof.quote}</p>
            <footer className="quote-block__author">— {socialProof.attribution}</footer>
          </blockquote>
        </div>
      </Container>
    </Section>
  );
}
