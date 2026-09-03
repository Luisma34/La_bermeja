// Footer.jsx — Pie de página
// MÓVIL: todo en columna, links legales en wrap, frase de marca debajo.
// DESKTOP: fila con logo, frase y links.

import { Link } from 'react-router-dom'

const LEGAL_LINKS = [
  { label: 'Política de cookies',     to: '/politica-de-cookies'    },
  { label: 'Política de privacidad',  to: '/politica-de-privacidad' },
  { label: 'Términos y condiciones',  to: '/terminos-y-condiciones' },
  { label: 'Accesibilidad',           to: '/accesibilidad'          },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sand">
      {/* Línea terracota superior */}
      <div style={{ height: '3px', backgroundColor: '#C4622D' }} />

      <div className="max-w-6xl mx-auto px-5 py-10 sm:py-12 md:py-14">

        {/* Fila principal */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-10">

          {/* Logo + tagline */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/logo-bermeja.jpg"
              alt="La Bermeja"
              className="h-12 sm:h-16 w-auto object-contain rounded"
              style={{ maxWidth: '120px' }}
            />
            <div>
              <p className="font-display text-olive text-base sm:text-lg leading-tight">La Bermeja</p>
              <p className="font-body text-olive/50 text-xs sm:text-sm mt-0.5">
                Raíces canarias · Gran Canaria
              </p>
            </div>
          </div>

          {/* Frase de marca — oculta en móvil pequeño, se mueve abajo */}
          <p className="hidden sm:block font-display text-olive/35 text-sm text-center italic max-w-xs leading-relaxed">
            "No diseñamos menús:<br />traducimos historias."
          </p>

          {/* Links legales — en móvil en dos columnas, en desktop en columna */}
          <div className="grid grid-cols-2 md:flex md:flex-col md:items-end gap-x-6 gap-y-2 md:gap-2 w-full md:w-auto">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body text-xs text-olive/50 hover:text-terracotta transition-colors duration-200 py-0.5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Frase de marca en móvil (debajo de los links) */}
        <p className="sm:hidden font-display text-olive/30 text-sm text-center italic mt-7 leading-relaxed">
          "No diseñamos menús: traducimos historias."
        </p>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-sand/80 mt-8 sm:mt-10 pt-5 sm:pt-6">
          <p className="font-body text-olive/30 text-xs text-center">
            © {currentYear} La Bermeja · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
