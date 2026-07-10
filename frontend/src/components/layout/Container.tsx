import type { ReactNode } from "react";
import "./Container.css";

type ContainerProps = {
  children: ReactNode;
  narrow?: boolean;
};

export function Container({ children, narrow }: ContainerProps) {
  return (
    <div className={`container${narrow ? " container--narrow" : ""}`}>
      {children}
    </div>
  );
}
