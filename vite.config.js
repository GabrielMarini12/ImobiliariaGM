import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "tailwindcss";

export default defineConfig({
  base: "/ImobiliariaGM",
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        verMais: resolve(__dirname, "./verMais.html"),
        favoritos: resolve(__dirname, "./favoritos.html"),
      },
    },
  },
});
