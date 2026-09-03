// TermsPage.jsx — Términos y Condiciones de Uso
// Aplicable a la web de La Bermeja, experiencias gastronómicas en Gran Canaria.
// IMPORTANTE: sustituye los datos marcados con [COMPLETAR] antes de publicar.

import LegalLayout from '../components/LegalLayout'

function TermsPage() {
  return (
    <LegalLayout title="Términos y Condiciones">

      <p>
        <strong>Última actualización:</strong> agosto de 2026
      </p>

      <p>
        El acceso y uso de este sitio web implica la aceptación de los presentes términos y
        condiciones. Si no estás de acuerdo con ellos, te rogamos que no utilices el sitio.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">1. Titular del sitio web</h2>
      <p>
        <strong>Denominación:</strong> La Bermeja<br />
        <strong>Actividad:</strong> Experiencias gastronómicas y eventos privados con raíces canarias<br />
        <strong>Dirección:</strong> [COMPLETAR — dirección en Gran Canaria]<br />
        <strong>Correo electrónico:</strong> [COMPLETAR — email de contacto]
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">2. Objeto del sitio web</h2>
      <p>
        Este sitio web tiene carácter informativo y su finalidad es presentar los servicios de
        experiencias gastronómicas de La Bermeja y facilitar el contacto con clientes potenciales
        interesados en celebrar eventos privados.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">3. Ausencia de contrato vinculante</h2>
      <p>
        El envío del formulario de contacto no supone la contratación de ningún servicio ni
        genera obligación alguna para ninguna de las partes. Todas las condiciones económicas,
        alcance del servicio y detalles del evento se negocian y acuerdan de forma privada
        antes de la prestación del servicio.
      </p>
      <p className="mt-3">
        Los presupuestos son personalizados y se comunican directamente al cliente. No se
        publican tarifas en este sitio.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">4. Propiedad intelectual</h2>
      <p>
        Todos los contenidos de este sitio web — textos, imágenes, logotipos, diseño y código —
        son propiedad de La Bermeja o de sus legítimos titulares y están protegidos por la
        legislación española e internacional de propiedad intelectual.
      </p>
      <p className="mt-3">
        Queda prohibida su reproducción, distribución, comunicación pública o transformación sin
        autorización expresa y por escrito del titular.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">5. Limitación de responsabilidad</h2>
      <p>
        La Bermeja no se responsabiliza de los daños o perjuicios que puedan derivarse del uso
        del sitio web, de la interrupción del servicio por causas ajenas a su voluntad, ni de
        los contenidos de sitios web de terceros a los que se pueda acceder mediante enlaces.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">6. Legislación aplicable y jurisdicción</h2>
      <p>
        Los presentes términos se rigen por la legislación española. Para cualquier controversia
        derivada del acceso o uso de este sitio web, las partes se someten a los juzgados y
        tribunales de Las Palmas de Gran Canaria, con renuncia expresa a cualquier otro fuero
        que pudiera corresponderles.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">7. Modificaciones</h2>
      <p>
        La Bermeja se reserva el derecho a modificar estos términos en cualquier momento. Los
        cambios se publicarán en esta misma página con la fecha de actualización correspondiente.
        El uso continuado del sitio tras la publicación de los cambios implica su aceptación.
      </p>

    </LegalLayout>
  )
}

export default TermsPage
