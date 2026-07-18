import "./ArticleBanner.css";

type ArticleBannerProps = {
  file: string;
  alt: string;
};

export function ArticleBanner({ file, alt }: ArticleBannerProps) {
  const src = `${import.meta.env.BASE_URL}images/${file}`;

  return (
    <figure className="article-banner">
      <img src={src} alt={alt} className="article-banner__image" loading="lazy" decoding="async" />
    </figure>
  );
}
