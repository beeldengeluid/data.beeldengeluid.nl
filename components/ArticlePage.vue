<template>
  <div>
    <ArticleHeader :article="article" :data-class="dataClass" />

    <section class="markdown-style pt-5">
      <v-img
        v-if="article.image"
        position="top center"
        width="930px"
        class="header-image"
        :src="imageSrc"
        :srcset="imageSrcset"
      />

      <!-- Published date -->
      <p v-if="article.publishedOn" class="caption text-right">
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

      <nuxt-content :document="article" />

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

      <!-- hide update date until the updatedAt value is correct
      see: https://github.com/beeldengeluid/labs.beeldengeluid.nl/issues/526
      <p v-if="article.updatedAt" class="caption">
        {{ $t('last_update') }}: {{ formatDate(article.updatedAt) }}
      </p>
      -->

      <!-- <v-divider class="my-5" /> -->

      <!-- relations -->
      <ArticleRelations
        :datasets="article.datasets"
        :projects="article.projects"
        :blogs="article.blogs"
      />

      <PrevNext :prev="prev" :next="next" />
    </section>
  </div>
</template>

<script>
import ArticleHeader from './ArticleHeader'
import ArticleRelations from './ArticleRelations'
import PrevNext from './PrevNext'
import DataTable from './DataTable'
import { formatDate } from '~/util/date'
import { generateSrcset } from '~/util/srcset'
import { filterUndefined } from '~/util/frontmatter'

export default {
  components: { ArticleRelations, PrevNext, ArticleHeader, DataTable },
  props: {
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
  },
  data() {
    return {
      imageSrc: !this.article.image
        ? this.$img('/images/placeholders/placeholder-blog.jpg', { width: 930 })
        : this.article.image.includes('/uploads/')
        ? this.article.image
        : this.$img(`/images/${this.article.image}`, { width: 930 }),
      imageSrcset: !this.article.image
        ? generateSrcset(
            this.$img,
            '/images/placeholders/placeholder-blog.jpg',
            [620, 930, 1200, 1600]
          )
        : this.article.image.includes('/uploads/')
        ? this.article.image
        : generateSrcset(
            this.$img,
            `/images/${this.article.image}`,
            [620, 930, 1200, 1600]
          ),
    }
  },
  computed: {
    articleDefined() {
      return filterUndefined(this.article)
    },
  },
  methods: {
    formatDate,
  },
}
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
