// Return a localised content path, with fallback to default locale
export const getLocalePath = async ({ $content, app, path }) => {
  const page = await $content(`${app.i18n.locale}/${path}`)
    .fetch()
    .catch(() => {})

  return page
    ? `${app.i18n.locale}/${path}`
    : `${app.i18n.defaultLocale}/${path}`
}
