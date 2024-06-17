<template>
  <div class="justify-center justify-md-start px-5">
    <slot name="header" />

    <v-row class="">
      <v-col
        v-for="card in cards"
        :key="card.slug"
        :cols="card.flex"
        class="mt-2 flex-md-grow-0"
      >
        <CardItem :card="card" :path="path" :data-class="dataClass" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
defineProps({
  cards: { type: Array, required: true, default: () => [] },
  path: { type: String, required: true, default: '' },
  dataClass: { type: String, required: true, default: '' },
})
</script>
