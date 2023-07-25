<template>
  <v-row>
    <v-col>
      <h3 v-if="title">{{ title }}</h3>
      <v-divider v-if="title" class="my-5" />
      <div class="metadata-table-wrapper">
        <DataTable :object="object" />
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  object: {
    type: Object,
    required: true,
    default: null,
  },
  title: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<style lang="scss">
.metadata-table-wrapper {
  font-size: 0.9em;
  overflow-x: auto;
}
</style>
