<template>
  <div>
    <HeaderPage>
      <!-- SectionHeading -->
      <template #header>
        <SectionHeading :title="$t(title)" :data-class="dataClass" />
      </template>

      <!-- Content -->
      <template #content>
        <CardGrid
          :cards="datasetPages"
          :path="cardPath"
          :data-class="dataClass"
        >
          <template #header>
            <v-expansion-panels class="justify-center justify-md-start">
              <v-expansion-panel class="mb-4">
                <v-expansion-panel-title class="text-subtitle-2">
                  {{ $t('defining_datasets') }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <ContentRenderer class="nuxt-content" :value="definition" />
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </CardGrid>
      </template>
    </HeaderPage>
  </div>
</template>

<script setup>
const i18n = useI18n()

const dataClass = 'dataset'
const title = `${dataClass}s`
const cardPath = `${dataClass}s-slug`

const pagesPath = dataClass + 's'
const { data: pagesPathLocalized } = await useAsyncData(async () => {
  const content = await queryContent(`${i18n.locale.value}/${pagesPath}`)
    .find()
    .catch(() => {
      // ignore 404s
    })
  const locale =
    content.length > 0 ? i18n.locale.value : i18n.fallbackLocale.value
  return `${locale}/${pagesPath}`
})
const { data: datasetPages } = await useAsyncData(async () => {
  return queryContent(pagesPathLocalized.value)
    .where({ hidden: { $ne: true } })
    .find()
    .catch(() => {
      // ignore error of missing page
    })
})

const definitionPath = 'dataset-definition'
const { data: definitionPathLocalized } = await useAsyncData(async () => {
  const content = await queryContent(`${i18n.locale.value}/${definitionPath}`)
    .find()
    .catch(() => {
      // ignore 404s
    })
  const locale =
    content.length > 0 ? i18n.locale.value : i18n.fallbackLocale.value
  return `${locale}/${definitionPath}`
})
const { data: definition } = await useAsyncData(async () => {
  return queryContent(definitionPathLocalized.value)
    .where({ hidden: { $ne: true } })
    .findOne()
    .catch(() => {
      // ignore error of missing page
    })
})

useHead({
  title: i18n.t(dataClass + 's'),
})
</script>
