import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),   // Tailwind CSS v4 - tiene que ir antes que react
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
