import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const preview = process.env.PREVIEW_BUILD === "1";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    chunkSizeWarningLimit: 1800,
    rollupOptions: preview ? { output: { inlineDynamicImports: true } } : {},
  },
});
