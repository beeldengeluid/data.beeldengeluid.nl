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
      class="text-uppercase text-grey-lighten-4 title-font pb-4"
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
        <v-icon
          size="17"
          color="grey-lighten-4"
          class="pb-0 mr-2"
          :icon="stat.icon"
        />
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

<script setup>
import { getRGBAColor } from '~/util/color'
import { generateSrcset } from '~/util/srcset'
import { classColors } from '~/config/theme'

const i18n = useI18n()
const img = useImage()

const props = defineProps({
  dataset: {
    type: Object,
    required: true,
  },
})

const color = classColors.dataset
const imageSrc = !props.dataset.image
  ? img(`~/assets/images/placeholders/placeholder-dataset.jpg?size=300`).src
  : props.dataset.image.includes('/uploads/')
  ? props.dataset.image
  : img(`~/assets/images/${props.dataset.image}?size=300`).src
const imageSrcset = !props.dataset.image
  ? generateSrcset(img, '/images/placeholders/placeholder-blog.jpg', [300, 600])
  : props.dataset.image.includes('/uploads/')
  ? props.dataset.image
  : generateSrcset(img, `/images/${props.dataset.image}`, [300, 600])
const stats = computed(() => [
  ...(props.dataset.publisher?.name || props.dataset.creator?.name
    ? [
        {
          icon: 'mdi-domain',
          text: props.dataset.publisher?.name || props.dataset.creator?.name,
        },
      ]
    : []),
  ...(props.dataset.size
    ? [
        {
          icon: 'mdi-file-document-multiple',
          text:
            new Intl.NumberFormat().format(props.dataset.size) +
            ' ' +
            i18n.t('records'),
        },
      ]
    : []),
  ...(props.dataset['sdo:temporalCoverage']
    ? [
        {
          icon: 'mdi-calendar-range',
          text: props.dataset['sdo:temporalCoverage'],
        },
      ]
    : []),
])
</script>

<style lang="scss" scoped>
.dataset-info {
  height: 100%;
  width: 100%;
}
</style>
