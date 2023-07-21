// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  eslint: {
    lintOnStart: false,
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook(
        'vite:extendConfig',
        // @ts-ignore
        (config) => config.plugins.push(vuetify()),
      )
    },
    '@nuxtjs/eslint-module',
  ],
})
