/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { shadowStyle } from "vite-plugin-shadow-style";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), cssInjectedByJsPlugin(), shadowStyle()],
  build: {
    rollupOptions: {
      input: { "pingback-form": "/src/wc/pingback-form.tsx" },
      output: {
        entryFileNames: "pingback-form.js",
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});
