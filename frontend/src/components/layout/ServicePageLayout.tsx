import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { consultation } from "../../content/uk";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import "./ServicePageLayout.css";

type ServicePageLayoutProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function ServicePageLayout({ title, subtitle, children }: ServicePageLayoutProps) {
  return (
    <>
      <Section>
        <Container narrow>
          <header className="service-page__header">
            {subtitle ? <p className="service-page__eyebrow">{subtitle}</p> : null}
            <h1 className="service-page__title">{title}</h1>
          </header>
          <div className="service-page__body">{children}</div>
        </Container>
      </Section>

      <div className="sticky-cta">
        <Container>
          <Link to="/uk/contact#consultation-form" className="btn btn--primary btn--block">
            {consultation.stickyCta}
          </Link>
        </Container>
      </div>
    </>
  );
}
