import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/iportfolio/', // 👈 important line for GitHub Pages
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
