import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Unocss from "unocss/vite";
import { presetAttributify, presetUno, presetIcons } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ["vue"],
    }),
    Unocss({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
        presetIcons()
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
