// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  eslint: {
    lintOnStart: false,
  },
  modules: ['@nuxtjs/eslint-module'],
})
