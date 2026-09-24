// Navbar.jsx — Barra de navegación fija
// Se queda fija en la parte superior mientras haces scroll.
// En el hero es transparente; cuando bajas se vuelve crema con blur.
// MÓVIL: menú slide-down con overlay oscuro y CTA de contacto.

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Quiénes somos", href: "#about" },
  { label: "Cómo trabajamos", href: "#how-we-work" },
  { label: "Eventos", href: "#events" },
  { label: "Contacto", href: "#contact" },
];

function Navbar({ forceVisible = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquea el scroll del body mientras el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isVisible = forceVisible || scrolled;

  const headerStyle = {
    backgroundColor: isVisible ? "rgba(250, 245, 236, 0.97)" : "transparent",
    borderBottom: isVisible ? "1px solid rgba(232, 217, 192, 0.5)" : "none",
    backdropFilter: isVisible ? "blur(8px)" : "none",
    transition: "background-color 0.3s ease",
  };

  const linkColor = isVisible || menuOpen ? "#3D3D2A" : "#FAF5EC";

  function handleLinkClick(e, href) {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={headerStyle}>
        <nav className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{ color: linkColor, transition: "color 0.3s ease" }}
            className="font-display text-xl sm:text-2xl tracking-wide relative z-10"
          >
            La Bermeja
          </Link>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{ color: linkColor, transition: "color 0.3s ease" }}
                  className="font-body text-sm hover:text-terracotta transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa — más grande para táctil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: linkColor, transition: "color 0.3s ease" }}
            className="md:hidden p-2 -mr-1 rounded-lg relative z-10"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Overlay oscuro — aparece detrás del panel */}
      <div
        onClick={() => setMenuOpen(false)}
        className="md:hidden fixed inset-0 z-40 bg-olive/50 backdrop-blur-sm transition-opacity duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      />

      {/* Panel del menú móvil — slide desde arriba */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-40 bg-cream shadow-2xl"
        style={{
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          paddingTop: "72px",
          paddingBottom: "28px",
        }}
      >
        <nav className="flex flex-col px-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="flex items-center justify-between font-display text-olive text-base py-4 border-b border-sand/60 hover:text-terracotta active:text-terracotta transition-colors"
            >
              {link.label}
              <span className="text-terracotta/40 font-body text-xl">→</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
