<template>
  <v-row>
    <v-col>
      <!-- Datasets / Visualization -->
      <v-row class="justify-center bg-white">
        <v-col class="pa-0">
          <VisualMain :datasets="datasets" />
        </v-col>
      </v-row>

      <!-- Showcases -->
      <v-row class="justify-center light-background pb-3">
        <v-col class="limit-width px-3 py-3 mb-2">
          <SectionHeading
            :title="$t('showcases')"
            :description="$t('showcases_description')"
            data-class="showcase"
            :action-path="'showcases'"
            :action-title="$t('all_showcases')"
          />
          <CardGrid
            :cards="showcases"
            path="showcases-slug"
            data-class="showcase"
          />
        </v-col>
      </v-row>

      <!-- APIs -->
      <v-row class="justify-center light-background pb-3">
        <v-col class="limit-width px-3 py-3 mb-2">
          <SectionHeading
            :title="$t('apis')"
            :description="$t('apis_description')"
            data-class="api"
            :action-path="'apis'"
            :action-title="$t('all_apis')"
          />
          <CardGrid :cards="apis" path="apis-slug" data-class="api" />
        </v-col>
      </v-row>

      <!-- About -->
      <v-row class="justify-center light-background my-3 pb-3">
        <v-col class="limit-width mb-4">
          <SectionHeading
            :title="$t('about')"
            :description="$t('about_description')"
          />

          <v-row class="bg-white mx-4 my-6 flex-column flex-md-row">
            <v-col md="6" class="px-0 py-0">
              <v-img
                max-height="400"
                max-width="100%"
                width="100%"
                :src="img('/images/about.jpg', { width: 700 })"
                class="float-right"
                gradient="to top right, rgba(0,138,219,0.85), rgba(0,138,219,0.2)"
              ></v-img>
            </v-col>
            <v-col
              md="6"
              class="pa-10 d-flex flex-column justify-center align-start"
            >
              <ContentRenderer
                class="nuxt-content"
                :value="aboutPage"
                :excerpt="true"
              />
              <v-btn color="primary" :to="$localePath('about')">
                {{ $t('read_more') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- -->
    </v-col>
  </v-row>
</template>

<script setup>
import { enrichDatasets, extendDatasetPagesWithDatasets } from '~/util/dataset'

const i18n = useI18n()
const img = useImage()

// about
// get localized path
const aboutPath = 'about'
const { data: aboutPathLocalized } = await useAsyncData(async () => {
  const content = await queryContent(`${i18n.locale.value}/${aboutPath}`)
    .find()
    .catch(() => {
      // ignore 404s
    })
  const locale =
    content.length > 0 ? i18n.locale.value : i18n.fallbackLocale.value
  return `${locale}/${aboutPath}`
})
// get localized content
const { data: aboutPage } = await useAsyncData(async () => {
  return queryContent(aboutPathLocalized.value).findOne()
})

// showcases
const showcasesPath = 'showcases'
// get localizedpath
const { data: showcasesPathLocalized } = await useAsyncData(async () => {
  const content = await queryContent(`${i18n.locale.value}/${showcasesPath}`)
    .find()
    .catch(() => {
      // ignore 404s
    })
  const locale =
    content.length > 0 ? i18n.locale.value : i18n.fallbackLocale.value
  return `${locale}/${showcasesPath}`
})
// get localized content
const { data: showcases } = await useAsyncData(async () => {
  return queryContent(showcasesPathLocalized.value)
    .where({ hidden: { $ne: true } })
    .sort({ createdAt: 1 })
    .limit(4)
    .find()
})

// apis
const apisPath = 'apis'
// get localizedpath
const { data: apisPathLocalized } = await useAsyncData(async () => {
  const content = await queryContent(`${i18n.locale.value}/${apisPath}`)
    .find()
    .catch(() => {
      // ignore 404s
    })
  const locale =
    content.length > 0 ? i18n.locale.value : i18n.fallbackLocale.value
  return `${locale}/${apisPath}`
})
// get localized content
const { data: apis } = await useAsyncData(async () => {
  return queryContent(apisPathLocalized.value)
    .where({ hidden: { $ne: true } })
    .sort({ createdAt: 1 })
    .limit(4)
    .find()
})

// datasets (markdown content)
const datasetsPath = 'datasets'
const { data: datasetsPathLocalized } = await useAsyncData(async () => {
  const content = await queryContent(`${i18n.locale.value}/${datasetsPath}`)
    .find()
    .catch(() => {
      // ignore 404s
    })
  const locale =
    content.length > 0 ? i18n.locale.value : i18n.fallbackLocale.value
  return `${locale}/${datasetsPath}`
})
const { data: datasetPages } = await useAsyncData(async () => {
  return queryContent(datasetsPathLocalized.value)
    .where({ hidden: { $ne: true } })
    .sort({ size: -1 })
    .find()
    .catch(() => {
      // ignore error of missing page
    })
})

// datasets from Datacatalog are not localized (yet)
const dataPath = 'datacatalog0001'
const { data: datacatalogData } = await useAsyncData(async () => {
  return queryContent(dataPath).findOne()
})
const datacatalog = datacatalogData.value['@graph']
const datasetsRaw = datacatalog.filter(
  (node) => node['@type'] === 'sdo:Dataset'
)

// enrich datasets with helper properties
const datasets = computed(() => {
  const enrichtedDatasets = enrichDatasets(datasetsRaw, datacatalog)
  return extendDatasetPagesWithDatasets(datasetPages.value, enrichtedDatasets)
})

useHead({
  title: i18n.t('home'),
})
</script>
