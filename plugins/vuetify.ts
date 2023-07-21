import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig()
  const vuetify = createVuetify({
    // @ts-ignore
    ssr: appConfig.ssr,
  })
  nuxtApp.vueApp.use(vuetify)
})
