import type { ReactNode } from "react";
import { useConsultation } from "../../context/ConsultationContext";
import { Button } from "../ui/Button";

type ConsultationCtaProps = {
  source: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  sticky?: boolean;
};

export function ConsultationCta({
  source,
  children,
  variant = "primary",
  className = "",
  sticky = false,
}: ConsultationCtaProps) {
  const { openConsultation } = useConsultation();

  if (sticky) {
    return (
      <button
        type="button"
        className={`btn btn--primary btn--block ${className}`.trim()}
        onClick={() => openConsultation({ source })}
      >
        {children}
      </button>
    );
  }

  return (
    <Button
      type="button"
      variant={variant}
      className={className}
      onClick={() => openConsultation({ source })}
    >
      {children}
    </Button>
  );
}
