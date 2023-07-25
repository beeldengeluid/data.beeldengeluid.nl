<template>
  <div class="dataset-info">
    <v-img
      v-if="dataset.image"
      position="top center"
      width="100%"
      max-width="100%"
      height="200px"
      :src="imageSrc"
      :srcset="imageSrcset"
      :gradient="
        'to top right, ' +
        getRGBAColor(color, 0.85) +
        ', ' +
        getRGBAColor(color, 0.3)
      "
    />

    <h2 class="my-3">{{ dataset.title }}</h2>
    <p>{{ dataset.subtitle }}</p>

    <!-- Stats -->
    <div
      :style="{ fontSize: '0.8em' }"
      class="text-uppercase grey--text lighten-4 title-font pb-4"
    >
      <div
        v-for="(stat, index) of stats"
        :key="index"
        :style="{
          lineHeight: '2.4em',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }"
      >
        <v-icon size="17" color="grey lighten-4" class="pb-0 mr-2">
          {{ stat.icon }}
        </v-icon>
        <strong> {{ stat.text }} </strong>
      </div>
    </div>

    <!-- Button -->
    <v-row>
      <v-col>
        <v-btn
          color="primary"
          :to="
            localePath({
              name: 'datasets-slug',
              params: { slug: dataset.slug },
            })
          "
        >
          {{ $t('explore_dataset') }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getRGBAColor } from '~/util/color'
import { generateSrcset } from '~/util/srcset'
import { classColors } from '~/config/theme'

export default {
  props: {
    dataset: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      color: classColors.dataset,
      imageSrc: !this.dataset.image
        ? this.$img('/images/placeholders/placeholder-dataset.jpg', {
            width: 300,
          })
        : this.dataset.image.includes('/uploads/')
        ? this.dataset.image
        : this.$img(`/images/${this.dataset.image}`, { width: 300 }),
      imageSrcset: !this.dataset.image
        ? generateSrcset(
            this.$img,
            '/images/placeholders/placeholder-blog.jpg',
            [300, 600]
          )
        : this.dataset.image.includes('/uploads/')
        ? this.dataset.image
        : generateSrcset(
            this.$img,
            `/images/${this.dataset.image}`,
            [300, 600]
          ),
    }
  },
  computed: {
    stats() {
      return [
        ...(this.dataset.publisher?.name || this.dataset.creator?.name
          ? [
              {
                icon: 'mdi-domain',
                text:
                  this.dataset.publisher?.name || this.dataset.creator?.name,
              },
            ]
          : []),
        ...(this.dataset.size
          ? [
              {
                icon: 'mdi-file-document-multiple',
                text:
                  new Intl.NumberFormat().format(this.dataset.size) +
                  ' ' +
                  this.$t('records'),
              },
            ]
          : []),
        ...(this.dataset['sdo:temporalCoverage']
          ? [
              {
                icon: 'mdi-calendar-range',
                text: this.dataset['sdo:temporalCoverage'],
              },
            ]
          : []),
      ]
    },
  },
  methods: {
    getRGBAColor,
  },
}
</script>

<style lang="scss" scoped>
.dataset-info {
  height: 100%;
  width: 100%;
}
</style>
