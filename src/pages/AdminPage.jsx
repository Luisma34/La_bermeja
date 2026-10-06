function AdminPage() {
  return (
    <>
      {/* Que Google no indexe las páginas del panel (React 19 sube esta etiqueta al <head>) */}
      <meta name="robots" content="noindex, nofollow" />
      <title>Panel · La Bermeja</title>

      <h1 className="text-xl sm:text-2xl mb-2">Panel de administración</h1>
      <p className="text-sm text-zinc-400">
        Aquí irá el contenido de cada sección.
      </p>
    </>
  );
}

export default AdminPage;
