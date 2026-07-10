import type { ReactNode } from "react";
import "./Section.css";

type SectionProps = {
  id?: string;
  children: ReactNode;
  alt?: boolean;
  className?: string;
};

export function Section({ id, children, alt, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`section${alt ? " section--alt" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
