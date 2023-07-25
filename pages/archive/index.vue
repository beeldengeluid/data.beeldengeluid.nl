<template>
  <div>
    <!-- Filter -->
    <div
      class="filter d-flex flex-column align-end ma-2"
      :style="{
        position: 'absolute',
        top: '18px',
        right: '0',
      }"
    >
      <!-- Filter button on mobile -->
      <v-btn
        class="ma-1 d-block d-sm-none mt-n1"
        icon
        theme="dark"
        size="small"
        color="primary"
        @click.stop="showTypes = !showTypes"
      >
        <v-badge
          v-if="typesFilter.length > 0"
          :content="typesFilter.length"
          :style="{ transform: 'translate(22px,-12px)' }"
          color="red-darken-1"
        />

        <v-icon dark>
          {{ showTypes ? 'mdi-close' : 'mdi-filter-variant' }}
        </v-icon>
      </v-btn>

      <!-- VisualTags list -->
      <transition name="slideInRight">
        <VisualTags
          v-if="showTypes"
          :tags="types"
          :filter="typesFilter"
          horizontal
          @toggle-tag="toggleType"
          @set-tag="setType"
        />
      </transition>
    </div>
    <CardPage
      :cards="filteredCards"
      :title="title"
      :card-path="cardPath"
      :data-class="dataClass"
    />
  </div>
</template>

<script>
import CardPage from '~/components/CardPage'
import VisualTags from '~/components/visual/VisualTags'
import { getLocalePath } from '~/util/contentFallback'

const dataClass = 'archive'

export default {
  components: { VisualTags, CardPage },
  async asyncData({ $content, app }) {
    const path = dataClass

    const articlesPath = await getLocalePath({
      $content,
      app,
      path,
    })
    const articles = await $content(articlesPath)
      .where({ hidden: { $ne: true } })
      .sortBy('createdAt', 'desc')
      .sortBy('title', 'asc')
      .fetch()

    return { cards: articles }
  },
  data: () => ({
    title: dataClass,
    cardPath: dataClass + '-slug',
    dataClass,
    types: ['project', 'example', 'application'],
    typesFilter: [],
    showTypes: false,
  }),
  head() {
    return {
      title: this.$t(dataClass),
    }
  },
  computed: {
    filteredCards() {
      return this.typesFilter.length === 0
        ? this.cards
        : this.cards.filter(
            (card) => card.type && this.typesFilter.includes(card.type),
          )
    },
  },
  mounted() {
    // show tags on large screens
    if (window.innerWidth > 500) {
      this.showTypes = true
    }
  },
  methods: {
    toggleType(type) {
      if (this.typesFilter.includes(type)) {
        this.typesFilter = this.typesFilter.filter((t) => t !== type)
      } else {
        this.typesFilter = [...this.typesFilter, type]
      }

      if (this.typesFilter.length === this.types.length) {
        this.typesFilter = []
      }
    },
    setType(type) {
      if (this.typesFilter.includes(type)) {
        this.typesFilter = []
      } else {
        this.typesFilter = [type]
      }
    },
  },
}
</script>
