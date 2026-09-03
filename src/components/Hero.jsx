// Hero.jsx — Primera sección, a pantalla completa
// Mobile-first: textos más pequeños en móvil que escalan en desktop.

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-25 md:pt-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #2a2a18 0%, #3D3D2A 50%, #4a3520 100%)",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-olive/60" />

      <div className="relative z-10 max-w-3xl mx-auto w-full mt-8">
        {/* Etiqueta de localización */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sand/70 text-xs sm:text-sm uppercase tracking-widest mb-5 sm:mb-6"
        >
          Gran Canaria · Raíces Canarias
        </motion.p>

        {/* Título principal — escala desde 3xl en móvil hasta 6xl en desktop */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-offwhite text-3xl sm:text-4xl md:text-5xl leading-tight mb-5 sm:mb-6"
        >
          No hacemos catering.
          <br />
          <span className="text-sand">Creamos experiencias</span>
          <br />
          gastronómicas con raíces canarias.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-offwhite/75 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Para personas que quieren que su evento cuente una historia — no que
          solo se sirva comida.
        </motion.p>

        {/* CTA principal — buen tamaño táctil */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-block mx-auto bg-terracotta mt-3 mb-4 text-offwhite font-body font-medium text-sm sm:text-base px-7 sm:px-8 py-4 rounded-full hover:bg-terracotta/90 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Cuéntanos tu historia
        </motion.a>
      </div>

      {/* Flecha de scroll */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="bottom-9 mt-8 text-offwhite/50 hover:text-offwhite transition-colors"
        aria-label="Ver más"
      >
        <ArrowDown className="animate-bounce sm:size-6 lg:size-11 hidden sm:block" />
      </motion.a>
    </section>
  );
}

export default Hero
