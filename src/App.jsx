// App.jsx — Componente raíz de La Bermeja
// Usa React Router para las páginas legales.
// La landing (/) es la página principal con todas las secciones.
//
// Rutas:
//   /                       → Landing completa
//   /admin/login            → Login del panel de administración
//   /admin/forgot-password  → Pedir email de recuperación
//   /admin/reset-password   → Nueva contraseña (desde el enlace del correo)
//   /admin                  → Panel de administración (protegido)
//   /politica-de-cookies    → Política de cookies
//   /politica-de-privacidad → Política de privacidad
//   /terminos-y-condiciones → Términos y condiciones
//   /accesibilidad          → Declaración de accesibilidad

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowWeWork from "./components/HowWeWork";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import AdminPage from "./pages/AdminPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import CookiesPage from "./pages/CookiesPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AccessibilityPage from "./pages/AccessibilityPage";

// Página principal: la landing completa con todas las secciones
function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowWeWork />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"                        element={<LandingPage />} />
        <Route path="/admin/login"             element={<AdminLoginPage />} />
        <Route path="/admin/forgot-password"   element={<ForgotPasswordPage />} />
        <Route path="/admin/reset-password"    element={<ResetPasswordPage />} />
        <Route path="/admin"                   element={<AdminPage />} />
        <Route path="/politica-de-cookies"     element={<CookiesPage />} />
        <Route path="/politica-de-privacidad"  element={<PrivacyPage />} />
        <Route path="/terminos-y-condiciones"  element={<TermsPage />} />
        <Route path="/accesibilidad"           element={<AccessibilityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
