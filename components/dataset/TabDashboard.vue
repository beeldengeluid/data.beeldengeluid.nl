<template>
  <v-window-item key="dashboard" value="dashboard">
    <section class="mt-0">
      <!-- Stats -->
      <v-row
        v-if="dataset"
        :style="{ fontSize: '0.8em' }"
        class="justify-start text-uppercase text-grey-darken-4 title-font pb-2 mb-3 flex-wrap"
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

      <div v-for="(spec, index) in dashboardSpecs" :key="index">
        <VegaView :spec="spec" :vegachart-id="'vegachart' + index" />
      </div>

      <!-- Description -->
      <ContentRenderer :value="page" />

      <!-- Chiplist -->
      <v-row class="justify-center">
        <v-col class="limit-width px-3 py-3 mb-2">
          <ArticleRelations :showcases="showcases" />
        </v-col>
      </v-row>
    </section>
  </v-window-item>
</template>

<script setup>
const i18n = useI18n()

const props = defineProps({
  projects: { type: Array, required: false, default: () => [] },
  blogs: { type: Array, required: false, default: () => [] },
  showcases: { type: Array, required: false, default: () => [] },
  page: { type: Object, required: false, default: null },
  dataset: { type: Object, required: true, default: null },
  dashboardSpecs: { type: Object, required: true, default: () => ({}) },
})

// reactive data
const stats = ref(() => [
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
        text: props.dataset?.size + ' ' + i18n.t('records'),
      }
    : {},
  props.dataset?.['sdo:temporalCoverage']
    ? {
        icon: 'mdi-calendar-range',
        text: props.dataset['sdo:temporalCoverage'],
      }
    : {},
])
</script>
