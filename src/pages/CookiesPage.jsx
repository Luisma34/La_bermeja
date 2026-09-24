// CookiesPage.jsx — Política de Cookies
// Cumple con la LSSI y el RGPD (legislación española y europea).
// Actualiza la fecha de "Última actualización" cuando hagas cambios.

import LegalLayout from "../components/LegalLayout";

function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies">
      <p>
        <strong>Última actualización:</strong> agosto de 2026
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">
        ¿Qué son las cookies?
      </h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan
        en tu dispositivo cuando los visitas. Sirven para recordar tus
        preferencias, analizar cómo se usa el sitio y mejorar la experiencia de
        navegación.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">
        Cookies que utilizamos
      </h2>

      <h3 className="font-body font-semibold text-olive mt-4 mb-1">
        Cookies técnicas (necesarias)
      </h3>
      <p>
        Son imprescindibles para que el sitio funcione correctamente. No recogen
        información personal ni requieren tu consentimiento. Sin ellas, algunas
        partes de la web no funcionarían.
      </p>

      <h3 className="font-body font-semibold text-olive mt-4 mb-1">
        Widget de accesibilidad (UserWay)
      </h3>
      <p>
        Utilizamos el widget de accesibilidad de UserWay para que personas con
        diversidad funcional puedan adaptar la visualización del sitio a sus
        necesidades. UserWay puede instalar cookies técnicas para recordar las
        preferencias de accesibilidad que hayas configurado. Puedes consultar su
        política en{" "}
        <a
          href="https://userway.org/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-terracotta hover:underline"
        >
          userway.org/privacy
        </a>
        .
      </p>

      <h3 className="font-body font-semibold text-olive mt-4 mb-1">
        Cookies de análisis
      </h3>
      <p>
        Actualmente este sitio no utiliza herramientas de analítica web con
        cookies de terceros. Si en el futuro se implementaran, esta política se
        actualizará y se solicitará tu consentimiento previo.
      </p>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">
        Cómo gestionar las cookies
      </h2>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en
        cuenta que deshabilitar las cookies técnicas puede afectar al
        funcionamiento del sitio.
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta hover:underline"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta hover:underline"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta hover:underline"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta hover:underline"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2 className="font-display text-olive text-xl mt-8 mb-2">Contacto</h2>
      <p>
        Si tienes dudas sobre nuestra política de cookies, puedes escribirnos a
        través del formulario de contacto del sitio o enviarnos un correo
        directamente.
      </p>
    </LegalLayout>
  );
}

export default CookiesPage;
