// Contact.jsx — Sección de contacto
// MÓVIL: inputs grandes (py-3.5), placeholders cortos, teclados adecuados.
// Envía email vía EmailJS + genera link de WhatsApp pre-rellenado.

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { MessageCircle, Send, CheckCircle } from 'lucide-react'

// ——— CONFIGURA ESTO CON TU CUENTA DE EMAILJS ———
const EMAILJS_SERVICE_ID  = 'TU_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'TU_PUBLIC_KEY'

// Número de WhatsApp (formato internacional sin + ni espacios)
const WHATSAPP_NUMBER = '34600000000'

function buildWhatsAppUrl(formData) {
  const message = `
¡Hola La Bermeja! 👋

Me gustaría contaros mi historia para crear una experiencia gastronómica.

👤 *Nombre:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.phone}
🎉 *Tipo de evento:* ${formData.eventType}
📅 *Fecha aproximada:* ${formData.date}
👥 *Personas:* ${formData.guests}

💬 *Mi historia:*
${formData.message}

¡Espero vuestra respuesta! 🌿
  `.trim()

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const INITIAL_FORM = {
  name: '', email: '', phone: '', eventType: '', date: '', guests: '', message: '',
}

function Contact() {
  const [formData, setFormData]     = useState(INITIAL_FORM)
  const [status, setStatus]         = useState('idle')
  const [whatsappUrl, setWhatsappUrl] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:  formData.name,
        from_email: formData.email,
        phone:      formData.phone,
        event_type: formData.eventType,
        event_date: formData.date,
        guests:     formData.guests,
        message:    formData.message,
      }, EMAILJS_PUBLIC_KEY)
      setWhatsappUrl(buildWhatsAppUrl(formData))
      setStatus('sent')
    } catch (error) {
      console.error('Error al enviar:', error)
      setStatus('error')
    }
  }

  // Clase base para todos los inputs — py-3.5 para mejor área táctil en móvil
  const inputClass =
    'w-full font-body text-olive bg-cream border border-sand rounded-xl px-4 py-3.5 text-sm sm:text-base placeholder:text-olive/40 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/15 transition-colors duration-200'

  return (
    <section id="contact" className="bg-olive py-14 md:py-24 px-5">
      <div className="max-w-2xl mx-auto">

        <p className="font-body text-terracotta text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
          Contacto
        </p>

        <h2 className="font-display text-offwhite text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 leading-tight">
          Cuéntanos tu historia
        </h2>

        <p className="font-body text-offwhite/60 text-sm sm:text-base mb-8 sm:mb-12 leading-relaxed">
          Sin compromisos. Solo queremos escucharte.
          Si encajamos, lo sabremos los dos.
        </p>

        {/* Estado: enviado con éxito */}
        {status === 'sent' ? (
          <div className="text-center py-10">
            <CheckCircle className="mx-auto mb-4 text-terracotta" size={48} />
            <h3 className="font-display text-offwhite text-xl sm:text-2xl mb-3">
              ¡Mensaje recibido!
            </h3>
            <p className="font-body text-offwhite/60 text-sm sm:text-base mb-8 leading-relaxed">
              Te escribiremos pronto. Si prefieres respuesta inmediata,
              también puedes escribirnos por WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-body font-medium px-6 sm:px-7 py-4 rounded-full hover:bg-[#22c55e] active:scale-95 transition-all duration-200 text-sm sm:text-base"
            >
              <MessageCircle size={20} />
              Enviar también por WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">

            {/* Nombre y email */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="text" name="name" placeholder="Tu nombre *" required
                value={formData.name} onChange={handleChange}
                autoComplete="name" className={inputClass}
              />
              <input
                type="email" name="email" placeholder="Tu email *" required
                value={formData.email} onChange={handleChange}
                autoComplete="email" inputMode="email" className={inputClass}
              />
            </div>

            {/* Teléfono y tipo de evento */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="tel" name="phone" placeholder="Teléfono"
                value={formData.phone} onChange={handleChange}
                autoComplete="tel" inputMode="tel" className={inputClass}
              />
              <select
                name="eventType" required
                value={formData.eventType} onChange={handleChange}
                className={`${inputClass} ${!formData.eventType ? 'text-olive/40' : ''}`}
              >
                <option value="" disabled>Tipo de evento *</option>
                <option value="Boda">Boda</option>
                <option value="Cumpleaños">Cumpleaños</option>
                <option value="Evento familiar">Evento familiar</option>
                <option value="Evento privado">Evento privado</option>
                <option value="Evento corporativo">Evento corporativo</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* Fecha y número de personas */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="text" name="date" placeholder="Fecha (ej: junio 2025)"
                value={formData.date} onChange={handleChange} className={inputClass}
              />
              <input
                type="number" name="guests" placeholder="Nº de personas"
                min="1" value={formData.guests} onChange={handleChange}
                inputMode="numeric" className={inputClass}
              />
            </div>

            {/* Historia del cliente — el campo más importante */}
            <textarea
              name="message" rows={5} required
              placeholder="Cuéntanos tu historia... ¿qué quieres celebrar? ¿de dónde vienes? *"
              value={formData.message} onChange={handleChange}
              className={`${inputClass} resize-none`}
            />

            {/* Error */}
            {status === 'error' && (
              <p className="font-body text-red-400 text-sm">
                Algo salió mal. Por favor, inténtalo de nuevo o escríbenos directamente.
              </p>
            )}

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center gap-2 bg-terracotta text-offwhite font-body font-medium px-8 py-4 rounded-full hover:bg-terracotta/90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mt-1 text-sm sm:text-base"
            >
              {status === 'sending' ? (
                'Enviando...'
              ) : (
                <><Send size={16} />Enviar mi historia</>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
