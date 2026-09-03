// AccessibilityPage.jsx — Declaración de Accesibilidad
// El botón "Abrir herramientas de accesibilidad" llama a la API de UserWay
// para abrir el panel sin que el icono flotante aparezca en toda la web.

import LegalLayout from '../components/LegalLayout'

function AccessibilityPage() {

  // Abre el panel de UserWay programáticamente
  function abrirUserWay() {
    if (window.UserWay && typeof window.UserWay.widgetOpen === 'function') {
      window.UserWay.widgetOpen()
    }
  }

  return (
    <LegalLayout title="Accesibilidad">

      <p>
        <strong>Última actualización:</strong> agosto de 2026
      </p>

      <p>
        En La Bermeja creemos que todas las personas merecen disfrutar de una buena experiencia,
        también en la web. Por eso nos comprometemos a hacer este sitio accesible para todo el mundo,
        independientemente de sus capacidades o del dispositivo que usen.
      </p>

      {/* Botón principal que abre el panel de herramientas */}
      <div className="my-8">
        <button
          onClick={abrirUserWay}
          className="inline-flex items-center gap-3 bg-terracotta text-offwhite font-body font-medium px-7 py-4 rounded-full hover:bg-terracotta/90 transition-colors duration-200"
        >
          ♿ Abrir herramientas de accesibilidad
        </button>
        <p className="font-body text-olive/50 text-xs mt-3">
          Ajusta el contraste, el tamaño del texto, la tipografía y mucho más.
        </p>
      </div>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">¿Qué puedes ajustar?</h2>
      <p>
        Al abrir las herramientas de accesibilidad encontrarás opciones para:
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Aumentar o reducir el tamaño del texto</li>
        <li>Activar el modo de alto contraste</li>
        <li>Activar el modo para dislexia (tipografía adaptada)</li>
        <li>Detener animaciones y transiciones</li>
        <li>Resaltar los enlaces de la página</li>
        <li>Activar un cursor aumentado para mayor visibilidad</li>
        <li>Navegar usando solo el teclado</li>
      </ul>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">Estándar de referencia</h2>
      <p>
        Nos esforzamos por seguir las pautas{' '}
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">
          WCAG 2.1
        </a>{' '}
        al nivel AA. Esto incluye contraste suficiente entre texto y fondo, textos alternativos
        en las imágenes, navegación coherente, formularios con etiquetas claras y diseño
        adaptable a cualquier tamaño de pantalla.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">¿Algo no funciona bien?</h2>
      <p>
        Si encuentras alguna dificultad para acceder a cualquier contenido de este sitio,
        escríbenos a través del formulario de contacto y lo resolveremos lo antes posible.
      </p>

    </LegalLayout>
  )
}

export default AccessibilityPage
