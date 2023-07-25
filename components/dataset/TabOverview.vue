<template>
  <v-window-item key="overview" value="overview">
    <section class="mt-0">
      <!-- Stats -->
      <v-row
        v-if="dataset"
        :style="{ fontSize: '0.8em' }"
        class="justify-start text-uppercase grey--text darken-4 title-font pb-2 mb-3 flex-wrap"
      >
        <v-col
          v-for="(stat, index) of stats"
          :key="index"
          :style="{ borderBottom: '1px solid #eee' }"
          class="flex-shrink-0 text-no-wrap"
        >
          <v-icon size="17" class="pb-0 mr-2">{{ stat.icon }}</v-icon>
          <strong> {{ stat.text }} </strong>
        </v-col>
      </v-row>

      <!-- Description -->
      <ContentRenderer id="nuxt-content" :value="page" />

      <!-- Chiplist -->
      <v-row class="justify-center mt-5">
        <v-col class="limit-width px-3 py-3 mb-2">
          <ArticleRelations :projects="projects" />
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col class="limit-width px-3 py-3 mb-2">
          <ArticleRelations :blogs="blogs" />
        </v-col>
      </v-row>
    </section>
  </v-window-item>
</template>

<script setup>
const props = defineProps({
  projects: { type: Array, required: false, default: () => [] },
  blogs: { type: Array, required: false, default: () => [] },
  page: { type: Object, required: false, default: null },
  dataset: { type: Object, required: true, default: null },
})

const stats = [
  {
    icon: 'mdi-domain',
    text: props.dataset?.publisher?.name || props.dataset?.creator?.name,
  },
  {
    icon: 'mdi-license',
    text: props.dataset?.license?.name,
  },
  props.dataset?.size
    ? {
        icon: 'mdi-file-document-multiple',
        text: props.dataset?.size + ' ' + 'records', //this.$t('records'),
      }
    : {},
  props.dataset?.['sdo:temporalCoverage']
    ? {
        icon: 'mdi-calendar-range',
        text: props.dataset['sdo:temporalCoverage'],
      }
    : {},
]
</script>
