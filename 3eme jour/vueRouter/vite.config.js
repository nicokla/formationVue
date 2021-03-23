// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

import Vue from '@vitejs/plugin-vue'
import Components from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

export default {
  plugins: [
    Vue(),
    Components({
      customComponentResolvers: ViteIconsResolver(),
    }),
    ViteIcons(),
  ],
}
