// Events.jsx — Sección "Eventos"
// MÓVIL: grid 2x2, descripción SIEMPRE visible (no solo en hover, que no funciona en táctil).
// DESKTOP: grid 4 columnas, descripción aparece en hover.
// Cuando tengas fotos reales: añade image: "/images/..." a cada evento y descomenta el <img>.

import { motion } from 'framer-motion'

const EVENTS = [
  {
    id: 1,
    type:        'Boda privada',
    description: 'Fusión canaria-italiana en finca propia. Escaldón, gofio y pulpo a la brasa.',
    location:    'Gran Canaria',
    // image: '/images/boda-01.jpg',
  },
  {
    id: 2,
    type:        'Celebración familiar',
    description: 'Mesa de productos de la isla para 40 personas. Historia de tres generaciones en cada plato.',
    location:    'Gran Canaria',
    // image: '/images/familiar-01.jpg',
  },
  {
    id: 3,
    type:        'Evento privado',
    description: 'Experiencia íntima para 12 personas. Menú degustación con ingredientes de productores locales.',
    location:    'Gran Canaria',
    // image: '/images/privado-01.jpg',
  },
  {
    id: 4,
    type:        'Cumpleaños especial',
    description: 'Una historia de vida traducida en siete tiempos. Sabores de infancia con técnica actual.',
    location:    'Gran Canaria',
    // image: '/images/cumple-01.jpg',
  },
]

const PLACEHOLDER_COLORS = [
  'bg-olive',
  'bg-terracotta',
  'bg-olive/80',
  'bg-terracotta/70',
]

function Events() {
  return (
    <section id="events" className="bg-cream py-14 md:py-24 px-5">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-terracotta text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
        >
          Eventos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-olive text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4"
        >
          Cada evento, una historia única
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-olive/60 text-sm sm:text-base mb-10 sm:mb-14 max-w-xl"
        >
          Próximamente compartiremos aquí las historias que hemos tenido el honor de traducir.
        </motion.p>

        {/* Grid: 2 columnas en móvil, 4 en desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[3/4]"
            >
              {/* Placeholder — reemplazar con <img> cuando haya fotos */}
              {/* <img src={event.image} alt={event.type} className="w-full h-full object-cover" /> */}
              <div className={`w-full h-full ${PLACEHOLDER_COLORS[index % 4]} flex items-center justify-center`}>
                <span className="font-display text-offwhite/20 text-4xl sm:text-6xl lg:text-7xl">LB</span>
              </div>

              {/* Overlay con info:
                  - En MÓVIL (< sm): descripción siempre visible
                  - En DESKTOP (≥ sm): descripción solo en hover           */}
              <div className="absolute inset-0 bg-gradient-to-t from-olive/95 via-olive/50 to-transparent flex flex-col justify-end p-3 sm:p-4 lg:p-5">
                <span className="font-body text-terracotta text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                  {event.type}
                </span>

                {/* Descripción: siempre visible en móvil, aparece en hover en desktop */}
                <p className="font-body text-offwhite text-xs leading-relaxed mb-1.5 sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300">
                  {event.description}
                </p>

                <span className="font-body text-offwhite/50 text-[10px] sm:text-xs">
                  {event.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
