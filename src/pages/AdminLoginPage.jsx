import { useState } from "react";
import { supabase } from "../library/supabaseClient.js";
import { useNavigate } from "react-router-dom";

function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    navigate("/admin/forgot-password");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Limpieza de errores
    setError("");
    const clearEmail = email.trim();

    // Revisamos si los campos están vacios antes de llamar a Supabase
    if (!clearEmail) {
      setError("Introduce un email.");
      return;
    }
    if (!password) {
      setError("Introduce contraseña.");
      return;
    }
    if (password.length < 6) {
      setError("Mínimo 6 caracteres.");
      return;
    }

    //Bloquear el boton mientras Supabase procesa.
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      clearEmail,
      password,
    });

    if (error) {
      setError("Email o contraseña incorrectos.");
    } else {
      // Redirigimos al panel admin eliminando el login del historial de navegación
      navigate("/admin", { replace: true });
    }

    //Se vuelve a desactivar el botón
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-950 text-white px-4">
      <div className="rounded-2xl p-6 sm:p-8 bg-zinc-900 border border-white/10 w-full max-w-sm">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-2xl text-center">Panel Admin</h1>

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
              className="px-4 py-3 text-base text-white rounded-full bg-zinc-700 w-full outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Contraseña */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-zinc-300">
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPass ? "text" : "password"}
                value={password}
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="pl-4 pr-20 py-3 text-base text-white rounded-full bg-zinc-700 w-full outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                className="absolute inset-y-0 right-0 px-5 rounded-full bg-white text-black text-sm font-medium outline-none focus-visible:ring-2  focus-visible:ring-zinc-400 cursor-pointer"
              >
                {showPass ? "Ocultar" : "Ver"}
              </button>
            </div>
            <p className="text-xs text-zinc-400">Mínimo 6 caracteres.</p>
          </div>

          {/* Botón entrar */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 py-3 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          {/* Olvidaste contraseña */}
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-zinc-400 underline hover:text-white cursor-pointer"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </form>
      </div>
    </div>
  );
}
export default AdminLoginPage;
