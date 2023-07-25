<template>
  <ArticlePage :article="article" :data-class="dataClass" />
</template>

<script setup>
const i18n = useI18n()
const route = useRoute()

const source = 'projects'
const dataClass = 'project'

// slug in params can be an array, handle that
const slug = computed(() =>
  Array.isArray(route.params.slug)
    ? route.params.slug[route.params.slug.length - 1]
    : route.params.slug,
)

const { data: articlePath } = await useAsyncData(async () => {
  const content = await queryContent(
    `${i18n.locale.value}/${source}/${slug.value}`,
  )
    .find()
    .catch(() => {})
  const locale =
    content.length > 0 ? i18n.locale.value : i18n.fallbackLocale.value
  return `${locale}/${source}/${slug.value}`
})

const { data: article } = await useAsyncData(() =>
  queryContent(articlePath.value)
    .where({ hidden: { $ne: true } })
    .findOne()
    .catch((reason) => {
      console.error(reason)
      // console.error(reason)
      // throw createError({ statusCode: 404, message: 'Content not found' })
    }),
)

// useHead({
//   title: article.title,
// })
</script>
