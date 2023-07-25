<template>
  <div>
    <a
      v-if="isUrl(value)"
      :href="value"
      target="_blank"
      rel="noopener noreferrer"
      >{{ value }}</a
    >
    <span v-else>{{ value }}</span>
  </div>
</template>

<script setup>
import { isUrl } from '~/util/url'

defineProps({
  value: {
    type: [String, Number, Object],
    required: true,
    default: '',
  },
})
</script>
