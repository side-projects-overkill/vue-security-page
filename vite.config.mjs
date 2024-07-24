import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
dotenv.config()

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            tag.startsWith('pf-') || tag.startsWith('rh-'),
        },
      },
    }),
    vueJsx(),
  ],
  base: `/${process.env.GITHUB_REPOSITORY?.split('/')[1]}/`,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@patternfly/elements': '/node_modules/@patternfly/elements',
    },
  },
  build: {
    rollupOptions: {
      external: [/^@patternfly\/elements*/, /^@rhds\/elements*/],
    },
  },
})
