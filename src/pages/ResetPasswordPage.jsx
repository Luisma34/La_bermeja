import { useState } from "react";
import { supabase } from "../library/supabaseClient.js";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Mínimo 6 caracteres.");
      return;
    }
    if (confirmPassword !== password) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setError("No se pudo cambiar la contraseña. Inténtalo de nuevo.");
    } else {
      navigate("/admin", { replace: true });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-950 text-white px-4">
      <div className="rounded-2xl p-5 sm:p-8 bg-zinc-900 border border-white/10 w-full max-w-xs sm:max-w-sm">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
          <h1 className="text-xl sm:text-2xl text-center">
            Recuperar contraseña
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 text-center">
            Escribe tu nueva contraseña.
          </p>

          {/* Mensaje de error */}
          {error && (
            <p role="alert" className="text-sm text-red-400 text-center">
              {error}
            </p>
          )}

          {/* Contraseña */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-zinc-300">
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                placeholder="Nueva contraseña"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                className="pl-4 pr-20 py-2.5 sm:py-3 text-base text-white rounded-full bg-zinc-700 w-full outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          {/* Confirmación de contraseña */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-zinc-300">
              Nueva contraseña
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showPass ? "text" : "password"}
                value={confirmPassword}
                placeholder="Confirmación de contraseña"
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="current-password"
                className="pl-4 pr-20 py-2.5 sm:py-3 text-base text-white rounded-full bg-zinc-700 w-full outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                // Cambia el estado en que mostramos la contraseña
                onClick={() => setShowPass((s) => !s)}
                className="absolute inset-y-0 right-0 px-4 sm:px-5 rounded-full bg-white text-black text-xs sm:text-sm font-medium outline-none focus-visible:ring-2  focus-visible:ring-zinc-400 cursor-pointer"
              >
                {showPass ? "Ocultar" : "Ver"}
              </button>
            </div>
          </div>

          {/* Botón enviar */}
          <button
            type="submit"
            disabled={loading}
            className="mt-1 sm:mt-2 py-2.5 sm:py-3 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </form>

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
export default ResetPasswordPage;
