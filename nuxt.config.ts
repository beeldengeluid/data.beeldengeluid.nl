// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: ['~/assets/scss/layout/index.scss'],
  ssr: true,
  devtools: { enabled: true },
  eslint: {
    lintOnStart: false,
  },
  experimental: {
    payloadExtraction: false,
    // inlineSSRStyles is needed (for now) to get styles working
    // https://github.com/nuxt/nuxt/issues/19850#issuecomment-1480385239
    inlineSSRStyles: false,
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
            })
          )
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
      useCookie: false,
      redirectOn: 'root', // recommended
    },
    vueI18n: './i18n.config.ts',
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    restructureDir: 'i18n', // prepare for nuxtjs/i18n v9 and Nuxt 4
  },
  app: {
    head: {
      titleTemplate: '%s - Sound & Vision · Data',
      title: 'Beeld & Geluid',
      meta: [
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
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap',
        },
      ],
      script: [{ src: '/matomo-tracking-code.js' }],
    },
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
})
