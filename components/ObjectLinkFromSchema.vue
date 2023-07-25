<template>
  <ObjectLink :icon-key="iconKey" :href="href" :name="name" />
</template>

<script setup>
import { isObjectWithIdName } from '~/util/objectsFromSchema'

const props = defineProps({
  value: {
    type: Object,
    required: true,
    validator: isObjectWithIdName,
  },
})

const iconKey = computed(() => props.value['@type']?.toLowerCase() || 'link')
const href = computed(() => props.value['@id'])
const name = computed(() => props.value.name)
</script>
