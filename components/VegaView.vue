<template>
  <div :id="vegachartId"></div>
</template>

<script setup>
import embed from 'vega-embed'

const props = defineProps({
  spec: { type: Object, required: true, default: () => ({}) },
  vegachartId: String
})

onMounted(() => {
  embed('#' + props.vegachartId, JSON.parse(JSON.stringify(props.spec)))
})
</script>
