<template>
  <CardPage
    :cards="cards"
    :title="title"
    :card-path="cardPath"
    :data-class="dataClass"
  />
</template>

<script setup>
const i18n = useI18n()

const dataClass = 'topic'

// get localized path
const path = dataClass + 's'
const { data: pathLocalized } = await useAsyncData(async () => {
  const content = await queryContent(`${i18n.locale.value}/${path}`)
    .find()
    .catch(() => {
      // ignore 404s
    })
  const locale =
    content.length > 0 ? i18n.locale.value : i18n.fallbackLocale.value
  return `${locale}/${path}`
})

// get content
const { data: cards } = await useAsyncData(async () => {
  return queryContent(pathLocalized.value)
    .where({ hidden: { $ne: true } })
    .sort({ sortOrder: 1 })
    .sort({ endDate: 1 })
    .sort({ createdAt: 1 })
    .find()
})

const title = dataClass + 's'
const cardPath = dataClass + 's-slug'

useHead({
  title: i18n.t(dataClass + 's'),
})
</script>
