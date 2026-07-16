import { Navigate, Route, Routes } from "react-router-dom";
import { ContactPage } from "./pages/ContactPage";
import { EnglishStubPage } from "./pages/EnglishStubPage";
import { HomePage } from "./pages/HomePage";
import { HowWeWorkPage } from "./pages/HowWeWorkPage";
import { KnowledgePage } from "./pages/KnowledgePage";
import { LicensesPage } from "./pages/LicensesPage";
import { MagazineServicePage } from "./pages/MagazineServicePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/uk" replace />} />
      <Route path="/uk" element={<HomePage />} />
      <Route path="/uk/how-we-work" element={<HowWeWorkPage />} />
      <Route path="/uk/services/financial-plan" element={<Navigate to="/uk/how-we-work" replace />} />
      <Route path="/uk/services/:slug" element={<MagazineServicePage />} />
      <Route path="/uk/licenses" element={<LicensesPage />} />
      <Route path="/uk/knowledge" element={<KnowledgePage />} />
      <Route path="/uk/contact" element={<ContactPage />} />
      <Route path="/en" element={<EnglishStubPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
