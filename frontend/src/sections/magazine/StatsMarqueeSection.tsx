import { magazine } from "../../content/uk";
import "./StatsMarqueeSection.css";

function MarqueeItems({ items, variant }: { items: string[]; variant: "stat" }) {
  const doubled = [...items, ...items];

  return (
    <div className="magazine-marquee__track" aria-hidden="true">
      {doubled.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className={`magazine-marquee__item magazine-marquee__item--${variant}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function StatsMarqueeSection() {
  const { stats } = magazine;

  return (
    <section className="magazine-marquee" id="services" aria-label="Статистика">
      <p className="magazine-marquee__label">У цифрах</p>
      <ul className="visually-hidden">
        {stats.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="magazine-marquee__viewport">
        <MarqueeItems items={stats.items} variant="stat" />
      </div>
      <p className="magazine-marquee__disclaimer">{stats.disclaimer}</p>
    </section>
  );
}
