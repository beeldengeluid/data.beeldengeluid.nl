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
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/image',
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
  image: {
    // explicitly set provider to ipx to avoid fallback to Vercel's image
    // optimization feature (when deploying there).
    // see https://github.com/nuxt/image/issues/751#issuecomment-1436742167
    provider: 'ipx',
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'nl', iso: 'nl-NL' },
    ],
    defaultLocale: 'en',
  },
  app: {
    head: {
      titleTemplate: '%s - Sound & Vision · Labs',
      title: 'Beeld & Geluid',
      meta: [
        { hid: 'description', name: 'description', content: '' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  }
})
