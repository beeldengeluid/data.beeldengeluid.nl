import path from 'path'

export default defineNitroPlugin((nitroApp) => {
  // add slug field based on path, for compatibility with Nuxt Content v1.
  // https://github.com/nuxt/content/blob/776e428eb2987e5a8c237fbc90e2d9beb8e3b0e3/packages/content/lib/database.js#L271
  // https://content.nuxtjs.org/api/advanced#contentfileafterparse
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.slug = path.basename(file._path)
    }
  })
})
