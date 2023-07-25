<template>
  <v-row class="relations">
    <v-col v-for="item of items" :key="item.path">
      <h3>
        <v-icon size="small" color="blue-grey-lighten-2" class="mr-2">{{
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

<script>
import ChipList from './ChipList'
import icons from '~/config/icons'
import { classColorIndex } from '~/config/theme'

export default {
  components: { ChipList },
  props: {
    projects: { type: Array, required: false, default: null },
    blogs: { type: Array, required: false, default: null },
    datasets: { type: Array, required: false, default: null },
  },
  data() {
    return {
      icons,
      relatedIcon: 'mdi-vector-link',
      items: [
        {
          title: 'projects',
          path: 'projects',
          color: classColorIndex.project,
          chips: this.projects,
          icon: icons.project,
        },
        {
          title: 'blogs',
          path: 'blogs',
          color: classColorIndex.blog,
          chips: this.blogs,
          icon: icons.blog,
        },
        {
          title: 'datasets',
          path: 'datasets',
          color: classColorIndex.dataset,
          chips: this.datasets,
          icon: icons.dataset,
        },
      ].filter((item) => item.chips && item.chips.length > 0),
    }
  },
}
</script>

<style scoped>
.v-icon {
  margin-top: -3px;
}
</style>
