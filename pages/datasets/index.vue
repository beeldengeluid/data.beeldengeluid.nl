<template>
  <CardPage
    :cards="datasetPages"
    :title="title"
    :card-path="cardPath"
    :data-class="dataClass"
  />
</template>

<script>
import CardPage from '~/components/CardPage'
import { getLocalePath } from '~/util/contentFallback'

const dataClass = 'dataset'

export default {
  components: { CardPage },
  async asyncData({ $content, app }) {
    // Custom markdown content for datasets
    const mdPath = await getLocalePath({
      $content,
      app,
      path: 'datasets',
    })
    const datasetPages = await $content(mdPath)
      .where({ hidden: { $ne: true } })
      .fetch()
      .catch(() => {
        // ignore error of missing page
      })
    return { datasetPages }
  },
  data: () => ({
    title: dataClass + 's',
    cardPath: dataClass + 's' + '-slug',
    dataClass,
  }),
  head() {
    return {
      title: this.$t(dataClass + 's'),
    }
  },
}
</script>
