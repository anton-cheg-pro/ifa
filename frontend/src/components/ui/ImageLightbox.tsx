import { useCallback, useEffect } from "react";
import "./ImageLightbox.css";

type ImageLightboxProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="image-lightbox__close"
        onClick={onClose}
        aria-label="Закрити"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        className="image-lightbox__image"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
