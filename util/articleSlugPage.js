import { getLocalePath } from './contentFallback'
import { enrichDatasets, extendDatasetsWithFrontmatter } from './dataset'
import { formatDate } from './date'

// Generic article slug page creator from given article source, e.g. blogs, projects
export const createArticleSlugPage = ({
  source,
  components = {},
  data = {},
}) => ({
  async asyncData({ $content, params, app, error }) {
    const path = await getLocalePath({
      $content,
      app,
      path: `${source}/${params.slug}`,
    })
    const article = await $content(path)
      .where({ hidden: { $ne: true } })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Content not found' })
      })

    if (!article) {
      return
    }

    // prev/next article
    const articles = await getLocalePath({
      $content,
      app,
      path: source,
    })

    const [prev, next] = await $content(articles)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    // datasets (are not localized (yet))
    const dataPath = 'datacatalog0001'
    const data = await $content(dataPath).fetch()
    const datasetsRaw = data['@graph'].filter(
      (node) => node['@type'] === 'sdo:Dataset'
    )
    const datacatalog = data['@graph']
    // enrich datasets with helper properties
    const datasets = enrichDatasets(datasetsRaw, datacatalog)

    // populate datasets on article with dataset object
    article.datasets =
      article.datasets &&
      article.datasets
        .map((datasetId) =>
          datasets.find((dataset) => dataset['@id'] === datasetId)
        )
        .filter((d) => d)

    // extend datasets with frontmatter
    if (article.datasets) {
      article.datasets = await extendDatasetsWithFrontmatter(
        article.datasets,
        $content,
        app
      )
    }

    // (for article of type lab) populate projects on article with project content that refers to this lab
    const projectsPath = await getLocalePath({
      $content,
      app,
      path: 'projects',
    })

    article.projects = await $content(projectsPath)
      .where({ lab: { $contains: article.slug } })
      .fetch()

    // (for article of type lab) populate blogs on article with blog content that refers to this lab
    const blogsPath = await getLocalePath({
      $content,
      app,
      path: 'blogs',
    })

    article.blogs = await $content(blogsPath)
      .where({ lab: { $contains: article.slug } })
      .fetch()

    return { article, prev, next }
  },
  components,
  data,
  head() {
    const title = this.article.title
    return {
      title,
    }
  },
  methods: {
    formatDate,
  },
})
