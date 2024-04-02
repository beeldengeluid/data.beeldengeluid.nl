# Workarounds

Some issues that arose during the Nuxt3 Upgrade were worked around. These should be undone, but until that time we at least document them here:

## sourcemap points to missing sourcefiles

This error occurred (at least) in dev mode.

Worked around this by disabling sourcemaps in `nuxt.config.ts``

```json
  sourcemap: {
    server: false,
    client: false,
  }
```

According to:
https://github.com/vuetifyjs/vuetify-loader/issues/290

## invalid requests when using custimizing vuetify using sass

Using SASS variables with Vuetify caused invalid requests to be made. Worked around this by adding a server plugin that removes the offending null character in these requests.

See [`server/plugins/vuetify.fix.ts`](server/plugins/vuetify.fix.ts)

```ts
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', (response: any) => {
    response.body = response.body.replaceAll('/_nuxt/\0', '/_nuxt/')
  })
})
```

According to:
https://github.com/nuxt/nuxt/issues/15412#issuecomment-1398110500
