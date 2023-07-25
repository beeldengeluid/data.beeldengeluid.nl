<template>
  <CardPage
    :cards="datasetPages"
    :title="title"
    :card-path="cardPath"
    :data-class="dataClass"
  />
</template>

<script setup>
const i18n = useI18n()

const dataClass = 'dataset'
const title = `${dataClass}s`
const cardPath = `${dataClass}s-slug`

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
const { data: datasetPages } = await useAsyncData(async () => {
  return queryContent(pathLocalized.value)
    .where({ hidden: { $ne: true } })
    .find()
    .catch(() => {
      // ignore error of missing page
    })
})

useHead({
  title: i18n.t(dataClass + 's'),
})
</script>
