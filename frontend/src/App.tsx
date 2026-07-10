import { Navigate, Route, Routes } from "react-router-dom";
import { EnglishStubPage } from "./pages/EnglishStubPage";
import { HomePage } from "./pages/HomePage";
import { LanguageSelectionPage } from "./pages/LanguageSelectionPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LanguageSelectionPage />} />
      <Route path="/uk" element={<HomePage />} />
      <Route path="/en" element={<EnglishStubPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
