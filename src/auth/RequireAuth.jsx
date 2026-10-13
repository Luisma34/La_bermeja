import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { supabase } from "../library/supabaseClient";

export default function RequireAuth({ children }) {
  const location = useLocation();

  // Sesion del usuario en Supabase (null = no hay sessión iniciada)
  const [session, setSession] = useState(null);
  // true mientras preguntamos a Supabase si hay sesión; pasa a false cuando responde.
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error("Error al iniciar sesion: ", error.message);
        setChecking(false);
        return;
      }
      setSession(data?.session ?? null);
      setChecking(false);
    });
  }, []);

  // Comprueba si estamos preguntando a Supabase si hay sesión.
  if (checking) {
    return (
      <p className="min-h-screen flex justify-center items-center bg-zinc-950 text-white px-4">
        Cargando...
      </p>
    );
  }

  // No logueado -> login
  if (!session)
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{
          message: "Debes iniciar sesión para acceder a esta página.",
          from: location.pathname,
        }}
      />
    );

  return children;
}
