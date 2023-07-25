<template>
  <div>
    <ArticleHeader :article="datasetPage" data-class="dataset" />

    <!-- Dataset -->
    <v-row class="justify-center pb-3">
      <v-col class="limit-width px-3 pb-0">
        <section>
          <!-- Tabs -->
          <v-tabs v-model="activeSubmenu" class="light-background">
            <v-tabs-slider color="primary" />

            <v-tab v-for="item in submenu" :key="item" :to="'#' + item" nuxt>
              {{ item }}
            </v-tab>
          </v-tabs>

          <!-- <v-divider /> -->
        </section>
      </v-col>
    </v-row>

    <!-- Tab Content -->
    <v-row class="justify-center mb-3 pt-3 mt-0 white">
      <v-col class="limit-width px-3 py-3 mb-3">
        <section class="px-3">
          <v-tabs-items v-model="activeSubmenu">
            <!-- Overview -->
            <TabOverview
              :dataset="dataset"
              :page="datasetPage"
              :projects="projects"
              :blogs="blogs"
            />
            <!-- Metadata -->
            <TabMetadata v-if="dataset" :dataset="dataset" />
            <!-- Dashboard -->
            <TabDashboard
              v-if="datasetPage.showDashboard"
              :dataset="dataset"
              :page="dashboardPage"
              :projects="projects"
              :blogs="blogs"
            />
          </v-tabs-items>
        </section>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TabOverview from '~/components/dataset/TabOverview'
import TabMetadata from '~/components/dataset/TabMetadata'
import TabDashboard from '~/components/dataset/TabDashboard'
import ArticleHeader from '~/components/ArticleHeader'
import { getLocalePath } from '~/util/contentFallback'
import { enrichDatasets } from '~/util/dataset'
import { parseColor } from '~/util/color'

export default {
  components: {
    ArticleHeader,
    TabMetadata,
    TabOverview,
    TabDashboard,
  },

  async asyncData({ $content, app, params, error }) {
    // Custom markdown content for dataset
    const datasetsPath = await getLocalePath({
      $content,
      app,
      path: `datasets/${params.slug}`,
    })
    const datasetPage = await $content(datasetsPath)
      .where({ hidden: { $ne: true } })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const dashboardPath = datasetPage.showDashboard
      ? await getLocalePath({
          $content,
          app,
          path: `dashboards/${params.slug}`,
        })
      : undefined
    const dashboardPage = datasetPage.showDashboard
      ? await $content(dashboardPath)
          .where({ hidden: { $ne: true } })
          .fetch()
          .catch(() => {
            error({ statusCode: 404, message: 'Page not found' })
          })
      : undefined

    let blogs = []
    let projects = []
    let dataset = null
    if (datasetPage) {
      // assign parsed color vars (e.g. red.base)
      Object.assign(datasetPage, {
        color: parseColor(datasetPage.color),
      })

      // datasets from DataCatalog are not localized (yet)
      const dataPath = 'datacatalog0001'
      const data = await $content(dataPath).fetch()
      const datacatalog = data['@graph']
      const datasetsRaw = data['@graph'].filter(
        (node) => node['@type'] === 'sdo:Dataset'
      )
      const datasets = enrichDatasets(datasetsRaw, datacatalog)
      dataset = datasets.find((dataset) => dataset['@id'] === datasetPage.id)

      if (dataset) {
        // blogs that refer to this dataset
        const blogsPath = await getLocalePath({
          $content,
          app,
          path: 'blogs',
        })
        blogs = await $content(blogsPath)
          .where({ datasets: { $contains: dataset['@id'] } })
          .fetch()

        // projects that refer to this dataset
        const projectsPath = await getLocalePath({
          $content,
          app,
          path: 'projects',
        })
        projects = await $content(projectsPath)
          .where({ datasets: { $contains: dataset['@id'] } })
          .fetch()
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      datasetPage,
      dashboardPage,
      dataset,
      blogs,
      projects,
    }
  },
  data: () => ({
    submenu: ['overview', 'metadata'],
    activeSubmenu: null,
  }),
  head() {
    const title = this.datasetPage.title
    return {
      title,
    }
  },
  mounted() {
    if (this.datasetPage.showDashboard) {
      this.submenu.push('dashboard')
    }
    // Set default submenu to hash
    // if (!this.$route.hash) {
    //   window.history.replaceState(
    //     null,
    //     window.title,
    //     this.$route.path + '#' + this.submenu[0]
    //   )
    // }
  },
}
</script>
