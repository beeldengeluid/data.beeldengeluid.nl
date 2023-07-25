// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  eslint: {
    lintOnStart: false,
  },
  experimental: {
    payloadExtraction: false,
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
        (config) =>
          // @ts-ignore
          config.plugins.push(
            vuetify({
              styles: { configFile: 'settings.scss' },
            }),
          ),
      )
    },
    '@nuxtjs/eslint-module',
  ],
  // disable sourcemaps to work around 'sourcemap points to missing source files'
  // errors.
  // see https://github.com/vuetifyjs/vuetify-loader/issues/290
  sourcemap: {
    server: false,
    client: false,
  },
})
