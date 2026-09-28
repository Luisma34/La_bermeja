// Contact.jsx — Sección de contacto
// MÓVIL: inputs grandes (py-3.5), placeholders cortos, teclados adecuados.
// Envía email vía EmailJS + genera link de WhatsApp pre-rellenado.
// Seguridad: claves en .env.local, honeypot anti-bots, límites de longitud.

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageCircle, Send, CheckCircle } from "lucide-react";

// ——— CLAVES DE EMAILJS ———
// Se leen de .env.local (NUNCA se suben a GitHub). Ver .env.example
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ——— DATOS DE CONTACTO ———
// TODO: cuando esté el panel admin, estos datos vendrán de Supabase
const WHATSAPP_NUMBER = "34610368799"; // sin + ni espacios
const CONTACT_EMAIL = "info.labermeja@gmail.com";

// Límites de caracteres por campo (evita spam y mensajes gigantes)
const MAX_LENGTH = {
  name: 80,
  email: 120,
  phone: 20,
  date: 40,
  message: 2000,
};

// ¿Están las 3 claves configuradas? Si no, avisamos en consola
const isEmailConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY,
);

// Quita espacios sobrantes de todos los campos antes de enviar
function cleanForm(formData) {
  const cleaned = {};
  for (const key in formData) {
    cleaned[key] = String(formData[key]).trim();
  }
  return cleaned;
}

// Mensaje de WhatsApp. Los campos opcionales vacíos no se muestran.
function buildWhatsAppUrl(data) {
  const lines = [
    "¡Hola La Bermeja! 👋",
    "",
    "Me gustaría contaros mi historia para crear una experiencia gastronómica.",
    "",
    `*Nombre:* ${data.name}`,
    `*Email:* ${data.email}`,
    data.phone ? `*Teléfono:* ${data.phone}` : null,
    `*Tipo de evento:* ${data.eventType}`,
    data.date ? `*Fecha aproximada:* ${data.date}` : null,
    data.guests ? `*Personas:* ${data.guests}` : null,
    "",
    "*Mi historia:*",
    data.message,
    "",
    "¡Espero vuestra respuesta! 🌿",
  ];

  // Quitamos los campos opcionales vacíos (null) y unimos con saltos de línea
  const message = lines.filter((line) => line !== null).join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  guests: "",
  message: "",
  website: "", // honeypot anti-bots: campo oculto que un humano nunca rellena
};

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [whatsappUrl, setWhatsappUrl] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return; // evita doble envío

    const data = cleanForm(formData);

    // Generamos el link de WhatsApp siempre: sirve como plan B si falla el email
    setWhatsappUrl(buildWhatsAppUrl(data));

    // Si un bot rellenó el campo oculto, fingimos éxito y no enviamos nada
    if (data.website) {
      setStatus("sent");
      return;
    }

    if (!isEmailConfigured) {
      console.error("EmailJS no configurado: revisa las variables VITE_EMAILJS_* en .env.local");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: CONTACT_EMAIL,
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "No indicado",
          event_type: data.eventType,
          event_date: data.date || "Sin fecha concreta",
          guests: data.guests || "No indicado",
          message: data.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("error");
    }
  }

  // Clase base para todos los inputs — py-3.5 para mejor área táctil en móvil
  const inputClass =
    "w-full font-body text-olive bg-cream border border-sand rounded-xl px-4 py-3.5 text-sm sm:text-base placeholder:text-olive/40 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/15 transition-colors duration-200";

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
          Sin compromisos. Solo queremos escucharte. Si encajamos, lo sabremos
          los dos.
        </p>

        {/* Estado: enviado con éxito */}
        {status === "sent" ? (
          <div className="text-center py-10">
            <CheckCircle className="mx-auto mb-4 text-terracotta" size={48} />
            <h3 className="font-display text-offwhite text-xl sm:text-2xl mb-3">
              ¡Mensaje recibido!
            </h3>
            <p className="font-body text-offwhite/60 text-sm sm:text-base mb-8 leading-relaxed">
              Te escribiremos pronto. Si prefieres respuesta inmediata, también
              puedes escribirnos por WhatsApp.
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:gap-4"
          >
            {/* Honeypot: invisible para personas, los bots lo rellenan */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            {/* Nombre y email */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre *"
                aria-label="Tu nombre"
                required
                maxLength={MAX_LENGTH.name}
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email *"
                aria-label="Tu email"
                required
                maxLength={MAX_LENGTH.email}
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                inputMode="email"
                className={inputClass}
              />
            </div>

            {/* Teléfono y tipo de evento */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                aria-label="Teléfono"
                maxLength={MAX_LENGTH.phone}
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                inputMode="tel"
                className={inputClass}
              />
              <select
                name="eventType"
                aria-label="Tipo de evento"
                required
                value={formData.eventType}
                onChange={handleChange}
                className={`${inputClass} ${!formData.eventType ? "text-olive/40" : ""}`}
              >
                <option value="" disabled>
                  Tipo de evento *
                </option>
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
                type="text"
                name="date"
                placeholder="Fecha (ej: junio 2027)"
                aria-label="Fecha aproximada"
                maxLength={MAX_LENGTH.date}
                value={formData.date}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="number"
                name="guests"
                placeholder="Nº de personas"
                aria-label="Número de personas"
                min="1"
                max="2000"
                value={formData.guests}
                onChange={handleChange}
                inputMode="numeric"
                className={inputClass}
              />
            </div>

            {/* Historia del cliente — el campo más importante */}
            <textarea
              name="message"
              rows={5}
              required
              maxLength={MAX_LENGTH.message}
              aria-label="Tu historia"
              placeholder="Cuéntanos tu historia... ¿qué quieres celebrar? ¿de dónde vienes? *"
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />

            {/* Error */}
            {/* Error: ofrecemos WhatsApp como plan B para no perder al cliente */}
            {status === "error" && (
              <div role="alert" className="font-body text-sm text-red-300">
                <p>No hemos podido enviar tu mensaje por email.</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-[#25D366] underline underline-offset-4"
                >
                  <MessageCircle size={16} />
                  Envíanoslo por WhatsApp
                </a>
              </div>
            )}

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 bg-terracotta text-offwhite font-body font-medium px-8 py-4 rounded-full hover:bg-terracotta/90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mt-1 text-sm sm:text-base"
            >
              {status === "sending" ? (
                "Enviando..."
              ) : (
                <>
                  <Send size={16} />
                  Enviar mi historia
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
