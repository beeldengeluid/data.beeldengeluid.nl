<template>
  <v-row class="relations">
    <v-col v-for="item of items" :key="item.path">
      <h3>
        <v-icon density="compact" color="blue-grey-lighten-2" class="mr-2">{{
          relatedIcon
        }}</v-icon>
        {{ $t(item.title) }}
      </h3>
      <ChipList
        :chips="item.chips"
        :color="item.color"
        :path="item.path"
        :icon="item.icon"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import icons from '~/config/icons'
import { classColorIndex } from '~/config/theme'

const props = defineProps({
  showcases: { type: Array, required: false, default: null },
  datasets: { type: Array, required: false, default: null },
})

const relatedIcon = 'mdi-vector-link'
const items = [
  {
    title: 'showcases',
    path: 'showcases',
    color: classColorIndex.showcase,
    chips: props.showcases,
    icon: icons.showcase,
  },
  {
    title: 'datasets',
    path: 'datasets',
    color: classColorIndex.dataset,
    chips: props.datasets,
    icon: icons.dataset,
  },
].filter((item) => item.chips && item.chips.length > 0)
</script>

<style scoped>
.v-icon {
  margin-top: -3px;
}
</style>
