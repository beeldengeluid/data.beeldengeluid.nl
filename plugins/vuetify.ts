import theme from '../config/theme'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig()
  const vuetify = createVuetify({
    // @ts-ignore
    ssr: appConfig.ssr,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: theme,
        },
        dark: {
          dark: false,
          colors: theme,
        },
      },
      variations: {
        colors: ['nisvlightblue', 'nisvdarkblue'],
        lighten: 6,
        darken: 6,
      },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
