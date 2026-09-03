// LegalLayout.jsx — Envoltorio compartido para todas las páginas legales
// Añade el Navbar, un área de contenido con padding para el navbar fijo,
// y el Footer. Así todas las páginas legales tienen el mismo aspecto.

import Navbar from './Navbar'
import Footer from './Footer'

function LegalLayout({ title, children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar forceVisible />

      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Título de la página */}
          <h1 className="font-display text-olive text-3xl md:text-4xl mb-10 leading-tight">
            {title}
          </h1>

          {/* Contenido legal — estilos aplicados desde aquí para no repetirlos */}
          <div className="font-body text-olive/70 text-sm leading-relaxed space-y-6 legal-content">
            {children}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default LegalLayout
