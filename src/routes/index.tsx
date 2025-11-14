import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FormPage } from "../pages/FormPage";
import { ResultPage } from "../pages/ResultPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/resultado" element={<ResultPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

