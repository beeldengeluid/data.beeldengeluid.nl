<template>
  <v-window-item key="overview" value="overview">
    <section class="mt-0">
      <!-- Description -->
      <ContentRenderer id="nuxt-content" :value="page" />

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
defineProps({
  showcases: { type: Array, required: false, default: () => [] },
  page: { type: Object, required: false, default: null },
  dataset: { type: Object, required: true, default: null },
})
</script>
