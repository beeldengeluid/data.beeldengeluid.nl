export default defineNuxtPlugin(() => {
  // https://router.vuejs.org/guide/advanced/navigation-guards.html#Global-After-Hooks
  const router = useRouter()
  router.afterEach((to, from, failure) => {
    if (to.path !== from.path && !failure) {
      const { origin } = window.location

      // https://developer.matomo.org/guides/spa-tracking
      const _paq = window._paq
      _paq.push(['deleteCustomVariables', 'page'])
      _paq.push(['deleteCustomDimension', 1])
      _paq.push(['setReferrerUrl', origin + from.path])
      _paq.push(to.meta.name ? ['setCustomUrl', to.meta.name] : [])
      _paq.push(['setDocumentTitle', document.title])
      _paq.push(['trackPageView'])
      console.debug(`trackPageView ${from.path}->${to.path}`)
    }
  })
})
