import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type OpenConsultationOptions = {
  source?: string;
};

type ConsultationContextValue = {
  isOpen: boolean;
  source: string;
  openConsultation: (options?: OpenConsultationOptions) => void;
  closeConsultation: () => void;
};

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

type ConsultationProviderProps = {
  children: ReactNode;
};

export function ConsultationProvider({ children }: ConsultationProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("site");

  const openConsultation = useCallback((options?: OpenConsultationOptions) => {
    setSource(options?.source ?? "site");
    setIsOpen(true);
  }, []);

  const closeConsultation = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, source, openConsultation, closeConsultation }),
    [isOpen, source, openConsultation, closeConsultation],
  );

  return <ConsultationContext.Provider value={value}>{children}</ConsultationContext.Provider>;
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return context;
}
