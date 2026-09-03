// About.jsx — Sección "Quiénes somos"
// Mobile-first: padding reducido, tipografía escalada.

import { motion } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

function About() {
  return (
    <section id="about" className="bg-cream py-14 md:py-24 px-5">
      <div className="max-w-4xl mx-auto">

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-body text-terracotta text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
        >
          Quiénes somos
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-olive text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-8"
        >
          No diseñamos menús: traducimos historias
          <span className="text-terracotta"> a través de la cocina canaria.</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5 sm:gap-8 mt-6 sm:mt-10"
        >
          <p className="font-body text-olive/75 text-base sm:text-lg leading-relaxed">
            Antes de pensar en cualquier plato, nos sentamos contigo. Te preguntamos
            de dónde vienes, qué quieres celebrar, qué quieres que tu evento transmita.
            Esa conversación es donde nace todo lo demás.
          </p>
          <p className="font-body text-olive/75 text-base sm:text-lg leading-relaxed">
            Trabajamos con producto e ingredientes de las islas y con técnica canaria,
            para que cada evento cuente algo genuino. El protagonista no somos nosotros
            — eres tú y tu historia.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 h-px bg-sand origin-left"
        />
      </div>
    </section>
  )
}

export default About
