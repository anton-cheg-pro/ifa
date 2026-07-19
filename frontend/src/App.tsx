import { Navigate, Route, Routes } from "react-router-dom";
import { ConsultationModal } from "./components/consultation/ConsultationModal";
import { ScrollToTop } from "./components/routing/ScrollToTop";
import { ConsultationProvider } from "./context/ConsultationContext";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { EnglishStubPage } from "./pages/EnglishStubPage";
import { HomePage } from "./pages/HomePage";
import { HowWeWorkPage } from "./pages/HowWeWorkPage";
import { KnowledgePage } from "./pages/KnowledgePage";
import { KnowledgeArticlePage } from "./pages/KnowledgeArticlePage";
import { LicensesPage } from "./pages/LicensesPage";
import { MagazineServicePage } from "./pages/MagazineServicePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <ConsultationProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/uk" replace />} />
        <Route path="/uk" element={<HomePage />} />
        <Route path="/uk/how-we-work" element={<HowWeWorkPage variant="how-we-work" />} />
        <Route path="/uk/services/financial-plan" element={<HowWeWorkPage variant="financial-plan" />} />
        <Route path="/uk/services/:slug" element={<MagazineServicePage />} />
        <Route path="/uk/licenses" element={<LicensesPage />} />
        <Route path="/uk/knowledge" element={<KnowledgePage />} />
        <Route path="/uk/knowledge/:slug" element={<KnowledgeArticlePage />} />
        <Route path="/uk/about" element={<AboutPage />} />
        <Route path="/uk/contact" element={<ContactPage />} />
        <Route path="/en" element={<EnglishStubPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ConsultationModal />
    </ConsultationProvider>
  );
}
