<template>
  <div>
    <ArticleHeader :article="article" :data-class="dataClass" />

    <section class="markdown-style pt-5">
      <v-img
        v-if="article.image"
        width="930px"
        class="header-image"
        :src="imageSrc"
        :srcset="imageSrcset"
      />

      <!-- Published date -->
      <p v-if="article.publishedOn" class="text-caption text-right">
        {{ $t('published_on') }}: {{ formatDate(article.publishedOn) }}
      </p>

      <!-- Optional article navigation -->
      <!-- <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav> -->

      <ContentRenderer :value="article">
        <!-- Avoid error on pages without content -->
        <template #empty />
      </ContentRenderer>

      <v-divider class="my-5" />

      <!-- Display selected article fields if present -->
      <data-table
        :object="{
          ...(articleDefined.contacts && {
            contacts: articleDefined.contacts,
          }),
          ...(articleDefined.website_url && {
            website: articleDefined.website_url,
          }),
          ...(articleDefined.website && {
            website: articleDefined.website,
          }),
          ...(articleDefined.partners && {
            partners: articleDefined.partners,
          }),
        }"
        class="mb-2"
      />

      <v-divider class="my-5" />

      <!-- hide update date until the updatedAt value is available and correct, see
        - https://github.com/nuxt/content/issues/1797
        - https://github.com/beeldengeluid/labs.beeldengeluid.nl/issues/526
      <p v-if="article.updatedAt" class="caption">
        {{ $t('last_update') }}: {{ formatDate(article.updatedAt) }}
      </p>
      -->

      <!-- <v-divider class="my-5" /> -->

      <!-- relations -->
      <!-- <ArticleRelations
        :datasets="article.datasets"
        :projects="article.projects"
        :blogs="article.blogs"
      /> -->

      <PrevNext :prev="prev" :next="next" />
    </section>
  </div>
</template>

<script setup>
import { formatDate } from '~/util/date'
import { generateSrcset } from '~/util/srcset'
import { filterUndefined } from '~/util/frontmatter'

const img = useImage()

const props = defineProps({
  article: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Empty article',
      subtitle: '',
      slug: '',
      publishedOn: new Date(),
      updatedAt: new Date(),
      datasets: [],
      tags: [],
    }),
  },
  prev: {
    type: Object,
    required: false,
    default: null,
  },
  next: {
    type: Object,
    required: false,
    default: null,
  },
  dataClass: {
    type: String,
    required: true,
    default: '',
  },
})

const imageSrc = !props.article.image
  ? img('/images/placeholders/placeholder-blog.jpg', { width: 930 })
  : props.article.image.includes('/uploads/')
  ? props.article.image
  : img(`/images/${props.article.image}`, { width: 930 })
const imageSrcset = !props.article.image
  ? generateSrcset(
      img,
      '/images/placeholders/placeholder-blog.jpg',
      [620, 930, 1200, 1600],
    )
  : props.article.image.includes('/uploads/')
  ? props.article.image
  : generateSrcset(
      img,
      `/images/${props.article.image}`,
      [620, 930, 1200, 1600],
    )
const articleDefined = computed(() => filterUndefined(props.article))
</script>

<style scoped lang="scss">
.header-image {
  max-width: calc(100% + 100px);
  margin: 20px -50px;
  border-radius: 5px;

  @media (max-width: 800px) {
    margin: 20px 0;
    max-height: 66vw;
    width: 100%;
    max-width: 100%;
  }
}
</style>
