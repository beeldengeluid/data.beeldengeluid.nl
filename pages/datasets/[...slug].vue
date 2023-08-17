<template>
  <div>
    <ArticleHeader :article="datasetPage" data-class="dataset" />

    <!-- Dataset -->
    <v-row class="justify-center pb-3">
      <v-col class="limit-width px-3 pb-0">
        <section>
          <!-- Tabs -->
          <v-tabs v-model="activeSubmenu" class="light-background">
            <!-- <v-tabs-slider color="primary" /> -->

            <v-tab v-for="item in submenu" :key="item" :value="item">
              {{ item }}
            </v-tab>
          </v-tabs>

          <!-- <v-divider /> -->
        </section>
      </v-col>
    </v-row>

    <!-- Tab Content -->
    <v-row class="justify-center mb-3 pt-3 mt-0 bg-white">
      <v-col class="limit-width px-3 py-3 mb-3">
        <section class="px-3">
          <v-window v-model="activeSubmenu">
            <!-- Overview -->
            <DatasetTabOverview
              :dataset="dataset"
              :page="datasetPage"
              :projects="projects"
              :blogs="blogs"
            />
            <!-- Metadata -->
            <DatasetTabMetadata v-if="dataset" :dataset="dataset" />
            <!-- Dashboard -->
            <DatasetTabDashboard
              v-if="datasetPage.showDashboard"
              :dataset="dataset"
              :page="dashboardPage[0]"
              :projects="projects"
              :blogs="blogs"
              :dashboardData="dashboardData"
            />
          </v-window>
        </section>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { enrichDatasets } from '~/util/dataset'
import { parseColor } from '~/util/color'

const i18n = useI18n()
const route = useRoute()

// slug in params can be an array, handle that
const slug = computed(() =>
  Array.isArray(route.params.slug)
    ? route.params.slug[route.params.slug.length - 1]
    : route.params.slug
)

// get localized path to datasets
const datasetsPath = 'datasets'
const { data: localizedDatasetPath } = await useAsyncData(async () => {
  const content = await queryContent(
    `${i18n.locale.value}/${datasetsPath}/${slug.value}`
  )
    .find()
    .catch(() => {})
  const locale = content.length > 0 ? i18n.locale : i18n.fallbackLocale
  return `${locale.value}/${datasetsPath}/${slug.value}`
})
const { data: datasetContentPage } = await useAsyncData(async () => {
  return queryContent(localizedDatasetPath.value)
    .where({ hidden: { $ne: true } })
    .findOne()
    .catch(() => {
      // throw createError({ statusCode: 404, message: 'Page not found' })
    })
})

// get localized path to dashboard
const dashboardsPath = 'dashboards'
const { data: localizedDashboardPath } = await useAsyncData(async () => {
  const content = await queryContent(
    `${i18n.locale.value}/${dashboardsPath}/${slug.value}`
  )
    .find()
    .catch(() => {})
  const locale =
    content.length > 0 ? i18n.locale.value : i18n.fallbackLocale.value
  return `${locale}/${dashboardsPath}/${slug.value}`
})
const { data: dashboardPage } = await useAsyncData(async () => {
  return queryContent(localizedDashboardPath.value)
    .where({ hidden: { $ne: true } })
    .find()
    .catch(() => {
      // throw createError({ statusCode: 404, message: 'Page not found' })
    })
})

const { data: dashboardData } = await useAsyncData(async () => {
  return queryContent("en/dashboards/moz-over-time")
    .find()
    .catch(() => {
      // throw createError({ statusCode: 404, message: 'Page not found' })
    })
})

const dataPath = 'datacatalog0001'
const { data: datacatalogData } = await useAsyncData(() => {
  // datasets from Datacatalog are not localized (yet)
  return queryContent(dataPath).findOne()
})

// enrich datasets with helper properties
const datasets = computed(() => {
  const datacatalogGraph = datacatalogData.value['@graph']
  const datasetsRaw = datacatalogGraph.filter(
    (node) => node['@type'] === 'sdo:Dataset'
  )
  const enrichedDatasets = enrichDatasets(datasetsRaw, datacatalogGraph)
  return enrichedDatasets
})
const dataset = computed(() =>
  datasets.value.find(
    (dataset) => dataset['@id'] == datasetContentPage.value.id
  )
)
const datasetPage = computed(() => {
  datasetContentPage.value.color = parseColor(datasetContentPage.value.color)
  return datasetContentPage.value
})

// blogs that refer to this dataset
const blogsPath = 'blogs'
const { data: localizedBlogsPath } = await useAsyncData(async () => {
  const content = await queryContent(
    `${i18n.locale.value}/${blogsPath}/${slug.value}`
  )
    .find()
    .catch(() => {})
  const locale = content.length > 0 ? i18n.locale : i18n.fallbackLocale
  return `${locale.value}/${blogsPath}/${slug.value}`
})
const { data: blogs } = await useAsyncData(async () => {
  return queryContent(localizedBlogsPath.value)
    .where({ datasets: { $contains: dataset['@id'] } })
    .find()
})

// projects that refer to this dataset
const projectsPath = 'projects'
const { data: localizedProjectsPath } = await useAsyncData(async () => {
  const content = await queryContent(
    `${i18n.locale.value}/${blogsPath}/${slug.value}`
  )
    .find()
    .catch(() => {})
  const locale = content.length > 0 ? i18n.locale : i18n.fallbackLocale
  return `${locale.value}/${projectsPath}/${slug.value}`
})
const { data: projects } = await useAsyncData(async () => {
  return queryContent(localizedProjectsPath.value)
    .where({ datasets: { $contains: dataset['@id'] } })
    .find()
})

const submenu = computed(() =>
  datasetPage.value.showDashboard
    ? ['overview', 'metadata', 'dashboard']
    : ['overview', 'metadata']
)

const activeSubmenu = ref('overview')

useHead({
  title: datasetPage.value.title,
})

onMounted(() => {
  // Set default submenu to hash
  // if (!route.hash) {
  //   window.history.replaceState(
  //     null,
  //     window.title,
  //     `${route.path}#${submenu[0]}`
  //   )
  // }
})
</script>
