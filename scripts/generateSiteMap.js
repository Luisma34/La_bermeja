// Genera public/sitemap.xml a partir de las rutas públicas de la web.
// Ejecutar desde la raíz del proyecto: node --env-file=.env scripts/generateSiteMap.js
import publicRoutes from "../src/config/publicRoutes.js";
import fs from "node:fs";

const SITE_URL = process.env.VITE_SITE_URL;

if (!SITE_URL) {
  throw new Error("Falta VITE_SITE_URL en el archivo .env");
}

// Cada ruta se convierte en su línea <url> con la dirección completa
const xmlUrls = publicRoutes.map(
  (route) => `<url><loc>${SITE_URL}${route.path}</loc></url>`,
);

// Formato oficial del sitemap: cabecera + todas las URLs + cierre
const listUrls = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${xmlUrls.join("\n")}
</urlset>`;

try {
  fs.writeFileSync("./public/sitemap.xml", listUrls.trim(), "utf-8");
  console.log("¡Sitemap generado y guardado con éxito!");
} catch (error) {
  console.error("Hubo un problema al generar el sitemap: ", error.message);
  process.exitCode = 1;
}
