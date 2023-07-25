<template>
  <ArticlePage :article="article" :data-class="dataClass" />
</template>

<script>
import ArticlePage from '~/components/ArticlePage'
import { createArticleSlugPage } from '~/util/articleSlugPage'

export default createArticleSlugPage({
  source: 'labs',
  components: { ArticlePage },
  data: () => ({ dataClass: 'lab' }),
})
</script>
