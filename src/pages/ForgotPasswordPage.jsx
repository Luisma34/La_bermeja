import { useState } from "react";
import { supabase } from "../library/supabaseClient.js";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Limpieza de errores
    setError("");
    const cleanEmail = email.trim();

    // Revisamos si los campos están vacios antes de llamar a Supabase
    if (!cleanEmail) {
      setError("Introduce un email.");
      return;
    }

    //Bloquear el boton mientras Supabase procesa.
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
      // Redirige al usuario de vuelta a la app tras el correo,
      // detectando el dominio actual (local o producción) y llevándolo a la ruta de cambiar contraseña
      redirectTo: `${window.location.origin}/admin/reset-password`,
    });

    if (error) {
      setError("No se pudo enviar el email. Inténtalo de nuevo.");
    } else {
      setSent(true);
    }

    //Se vuelve a desactivar el botón
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-950 text-white px-4">
      <div className="rounded-2xl p-5 sm:p-8 bg-zinc-900 border border-white/10 w-full max-w-xs sm:max-w-sm">
        {sent ? (
          <p className="text-sm sm:text-base text-center text-zinc-300 py-3 sm:py-4">
            Te hemos enviado un email. Revisa tu bandeja de entrada.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
            <h1 className="text-xl sm:text-2xl text-center">Recuperar contraseña</h1>
            <p className="text-xs sm:text-sm text-zinc-400 text-center">
              Escribe tu email y te enviaremos un enlace para crear una
              contraseña nueva.
            </p>

            {/* Mensaje de error */}
            {error && (
              <p role="alert" className="text-sm text-red-400 text-center">
                {error}
              </p>
            )}

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm text-zinc-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="admin@labermeja.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                onFocus={() => setError("")}
                className="px-4 py-2.5 sm:py-3 text-base text-white rounded-full bg-zinc-700 w-full outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Botón enviar */}
            <button
              type="submit"
              disabled={loading}
              className="mt-1 sm:mt-2 py-2.5 sm:py-3 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        )}

        {/* Volver al login (visible siempre, con o sin email enviado) */}
        <button
          type="button"
          onClick={() => navigate("/admin/login")}
          className="mt-3 sm:mt-4 w-full text-xs sm:text-sm text-zinc-400 underline hover:text-white cursor-pointer"
        >
          Volver al login
        </button>
      </div>
    </div>
  );
}
export default ForgotPasswordPage;
