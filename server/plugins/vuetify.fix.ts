// to work around invalid requests to sass (and slowness in dev/build) when
// using custom scss + nuxt3 + vuetify.
// see https://github.com/nuxt/nuxt/issues/15412#issuecomment-1398110500

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', (response: any) => {
    response.body = response.body.replaceAll('/_nuxt/\0', '/_nuxt/')
  })
})
