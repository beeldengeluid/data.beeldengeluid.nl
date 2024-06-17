<template>
  <v-row>
    <v-col>
      <NuxtLink
        v-if="prev"
        :to="localePath({ name: 'showcase-slug', params: { slug: prev.slug } })"
      >
        {{ prev.title }}
      </NuxtLink>
    </v-col>
    <v-col>
      <NuxtLink
        v-if="next"
        :to="localePath({ name: 'showcase-slug', params: { slug: next.slug } })"
      >
        {{ next.title }}
      </NuxtLink>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  prev: {
    type: Object,
    default: () => null,
  },
  next: {
    type: Object,
    default: () => null,
  },
})
</script>
