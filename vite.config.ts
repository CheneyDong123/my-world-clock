import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    Components(),
    AutoImport({
      imports: ['vue', 'vue/macros', '@vueuse/core'],
      dirs: ['./src/composables'],
      vueTemplate: true,
    }),
    Unocss({
      shortcuts: {
        'border-base': 'border-gray/40 dark:border-gray/15',
        'bg-base': 'bg-white dark:bg-truegray-800',
        'bg-canvas': 'bg-gray:15 dark:bg-truegray-900',
      },
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
