import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// PREVIEW_BUILD=1 produces a single self-contained JS bundle so the
// standalone preview HTML can be inlined into one file.
const preview = process.env.PREVIEW_BUILD === "1";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    chunkSizeWarningLimit: 1600,
    rollupOptions: preview
      ? { output: { inlineDynamicImports: true } }
      : {},
  },
});
