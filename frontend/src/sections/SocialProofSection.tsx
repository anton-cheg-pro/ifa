import "./SocialProofSection.css";

const avatarImage = `${import.meta.env.BASE_URL}images/hero.jpg`;

type MissionQuoteProps = {
  quote: string;
  attribution: string;
};

export function MissionQuote({ quote, attribution }: MissionQuoteProps) {
  return (
    <div className="quote-block">
      <img
        src={avatarImage}
        alt=""
        className="quote-block__avatar"
        width={80}
        height={80}
      />
      <blockquote className="quote-block__quote">
        <p>{quote}</p>
        <footer className="quote-block__author">— {attribution}</footer>
      </blockquote>
    </div>
  );
}
