import type { ReactNode } from "react";
import "./Container.css";

type ContainerProps = {
  children: ReactNode;
  narrow?: boolean;
  /** Slightly wider reading column — knowledge articles */
  article?: boolean;
};

export function Container({ children, narrow, article }: ContainerProps) {
  const modifier = article
    ? " container--article"
    : narrow
      ? " container--narrow"
      : "";

  return <div className={`container${modifier}`}>{children}</div>;
}
