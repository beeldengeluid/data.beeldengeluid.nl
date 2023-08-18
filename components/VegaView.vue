<template>
   <div id='vis'/>
</template>

<script setup>
import embed from 'vega-embed'

const props = defineProps({
  spec: { type: Object, required: true, default: {} },
})

onMounted(() => {
  embed("#vis", props.spec)
}) 
</script>