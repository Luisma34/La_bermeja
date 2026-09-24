// HowWeWork.jsx — Sección "Cómo trabajamos"
// MÓVIL: pasos en vertical con línea conectora visual.
// DESKTOP: grid de 3 columnas como antes.

import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title:  'Escuchamos tu historia',
    description:
      'Todo empieza con una conversación. Tu origen, lo que quieres celebrar, lo que te representa. Sin prisa, sin formularios cerrados.',
  },
  {
    number: '02',
    title:  'Traducimos tu historia en un menú',
    description:
      'A partir de lo que nos cuentas, creamos un menú único con producto de las islas. Cada plato tiene un motivo para estar ahí — y ese motivo eres tú.',
  },
  {
    number: '03',
    title:  'Vivís la experiencia',
    description:
      'El día del evento, nosotros nos encargamos de todo. Tú y los tuyos solo tenéis que estar presentes y disfrutar.',
  },
]

function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-sand py-14 md:py-24 px-5">
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-terracotta text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
        >
          Cómo trabajamos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-olive text-2xl sm:text-3xl md:text-4xl mb-10 sm:mb-16"
        >
          Un proceso tan sencillo como sincero
        </motion.h2>

        {/* MÓVIL: columna vertical con línea conectora */}
        {/* DESKTOP: grid de 3 columnas */}
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-10">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex md:flex-col gap-4 sm:gap-5 pb-10 last:pb-0 md:pb-0"
            >
              {/* Línea vertical conectora entre pasos (solo móvil) */}
              {index < STEPS.length - 1 && (
                <div className="absolute left-5 top-11 bottom-0 w-0.5 bg-terracotta/20 md:hidden" />
              )}

              {/* Círculo con número — táctil y visual en móvil */}
              <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-terracotta/10 border-2 border-terracotta/25 flex items-center justify-center md:w-auto md:h-auto md:rounded-none md:border-none md:bg-transparent md:block">
                <span className="font-display text-terracotta text-base md:text-5xl md:text-terracotta/30 md:leading-none leading-none">
                  {step.number}
                </span>
              </div>

              {/* Contenido del paso */}
              <div className="flex-1">
                <h3 className="font-display text-olive text-lg sm:text-xl leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-olive/70 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
