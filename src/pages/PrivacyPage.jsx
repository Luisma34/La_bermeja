// PrivacyPage.jsx — Política de Privacidad
// Conforme al Reglamento General de Protección de Datos (RGPD/GDPR)
// y a la Ley Orgánica de Protección de Datos (LOPDGDD).
// IMPORTANTE: sustituye los datos marcados con [COMPLETAR] antes de publicar.

import LegalLayout from '../components/LegalLayout'

function PrivacyPage() {
  return (
    <LegalLayout title="Política de Privacidad">

      <p>
        <strong>Última actualización:</strong> agosto de 2026
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">1. Responsable del tratamiento</h2>
      <p>
        <strong>Denominación:</strong> La Bermeja<br />
        <strong>Actividad:</strong> Experiencias gastronómicas y eventos privados con raíces canarias<br />
        <strong>Dirección:</strong> [COMPLETAR — dirección en Gran Canaria]<br />
        <strong>Correo electrónico:</strong> [COMPLETAR — tu email de contacto]<br />
        <strong>Teléfono:</strong> [COMPLETAR — tu número]
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">2. Datos que recogemos</h2>
      <p>
        A través del formulario de contacto de este sitio web recopilamos los siguientes datos:
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Nombre y apellidos</li>
        <li>Dirección de correo electrónico</li>
        <li>Número de teléfono (opcional)</li>
        <li>Tipo de evento, fecha aproximada y número de personas</li>
        <li>Mensaje libre con la descripción de tu evento</li>
      </ul>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">3. Finalidad del tratamiento</h2>
      <p>
        Los datos recogidos se utilizan exclusivamente para:
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Responder a tu consulta y estudiar si podemos colaborar en tu evento</li>
        <li>Enviarte la información que hayas solicitado sobre nuestras experiencias gastronómicas</li>
        <li>Gestionar la comunicación previa a la contratación del servicio</li>
      </ul>
      <p className="mt-3">
        No utilizamos tus datos para enviar publicidad no solicitada ni los cedemos a terceros
        con fines comerciales.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">4. Base legal</h2>
      <p>
        El tratamiento de tus datos se basa en tu consentimiento expreso al enviar el formulario
        de contacto (art. 6.1.a del RGPD). Puedes retirar tu consentimiento en cualquier momento
        sin que ello afecte a la licitud del tratamiento previo.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">5. Conservación de los datos</h2>
      <p>
        Conservamos tus datos durante el tiempo necesario para gestionar tu consulta y, en caso
        de contratación, durante el plazo legalmente exigido. Si no se produce ninguna relación
        contractual, los datos se eliminarán en un plazo máximo de 1 año desde la recepción del
        mensaje.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">6. Destinatarios y transferencias</h2>
      <p>
        Tus datos se transmiten a los siguientes proveedores de servicio para permitir el
        funcionamiento del formulario:
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>
          <strong>EmailJS</strong> — servicio de envío de correo electrónico. Tus datos pasan por
          sus servidores para entregarnos tu mensaje. Consulta su política en{' '}
          <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">emailjs.com</a>.
        </li>
        <li>
          <strong>WhatsApp (Meta)</strong> — si decides usar el botón de WhatsApp tras enviar el
          formulario, los datos se comparten con WhatsApp según sus propias condiciones. El uso
          de ese botón es completamente opcional.
        </li>
      </ul>
      <p className="mt-3">
        No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo
        salvo las derivadas del uso de los proveedores anteriores, que cuentan con las garantías
        adecuadas conforme al RGPD.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">7. Tus derechos</h2>
      <p>
        Como titular de los datos tienes derecho a:
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos</li>
        <li><strong>Supresión:</strong> solicitar la eliminación de tus datos</li>
        <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos</li>
        <li><strong>Portabilidad:</strong> recibir tus datos en formato electrónico</li>
        <li><strong>Limitación:</strong> solicitar que se restrinja el tratamiento</li>
      </ul>
      <p className="mt-3">
        Puedes ejercer estos derechos escribiéndonos a [COMPLETAR — email] indicando tu nombre,
        el derecho que deseas ejercer y una copia de tu documento de identidad. También puedes
        presentar una reclamación ante la{' '}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">
          Agencia Española de Protección de Datos (AEPD)
        </a>.
      </p>

    </LegalLayout>
  )
}

export default PrivacyPage
