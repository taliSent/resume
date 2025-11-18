import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/resume/",
  plugins: [react()],
  resolve: {
    alias: {
      "@context": path.resolve(__dirname, "./src/context"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  build: {
    outDir: "build",
  },
});
