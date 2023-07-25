<template>
  <ArticlePage :article="article" :data-class="dataClass" />
</template>

<script>
import ArticlePage from '~/components/ArticlePage'
import { createArticleSlugPage } from '~/util/articleSlugPage'

export default createArticleSlugPage({
  source: 'archive',
  components: { ArticlePage },
  data: () => ({ dataClass: 'archive' }),
})
</script>
