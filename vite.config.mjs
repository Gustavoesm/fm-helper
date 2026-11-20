import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // relative asset paths so the build works under GitHub Pages' /fm-helper/
  server: { port: 3000 }, // keep CRA's port
});
