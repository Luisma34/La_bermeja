// Lista de rutas públicas usadas por el script que genera sitemap.xml
// No incluir rutas de /admin
// Solo la ruta; el dominio lo añade el script.
const publicRoutes = [
  { path: "/" },
  { path: "/politica-de-cookies" },
  { path: "/politica-de-privacidad" },
  { path: "/terminos-y-condiciones" },
  { path: "/accesibilidad" },
];



export default publicRoutes;
