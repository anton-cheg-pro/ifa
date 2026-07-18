import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { ConsultationForm } from "../forms/ConsultationForm";
import { useConsultation } from "../../context/ConsultationContext";
import { consultation } from "../../content/uk";
import "./ConsultationModal.css";

export function ConsultationModal() {
  const { isOpen, source, closeConsultation } = useConsultation();
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;

    const getFocusable = () =>
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

    const focusFirst = () => {
      const focusable = getFocusable();
      focusable?.[0]?.focus();
    };

    const frame = window.requestAnimationFrame(focusFirst);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeConsultation();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previousFocus?.focus();
    };
  }, [isOpen, closeConsultation]);

  if (!isOpen) return null;

  return createPortal(
    <div className="consultation-modal" role="presentation" onMouseDown={closeConsultation}>
      <div
        ref={dialogRef}
        className="consultation-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="consultation-modal__close"
          aria-label="Закрити"
          onClick={closeConsultation}
        >
          ×
        </button>
        <p id={titleId} className="visually-hidden">
          {consultation.form.title}
        </p>
        <ConsultationForm key={source} id="consultation-form-modal" source={source} />
      </div>
    </div>,
    document.body,
  );
}
