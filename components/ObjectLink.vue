<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <v-icon size="20">{{ icon }}</v-icon>
    <span>{{ name }}</span>
  </a>
</template>

<script setup>
import icons from '~/config/icons'

const props = defineProps({
  iconKey: { type: String, required: true, default: 'link' },
  href: { type: String, required: true, default: '#' },
  name: { type: String, required: true, default: 'name' },
})

const icon = computed(() => {
  return icons[props.iconKey]
})
</script>

<style scoped lang="scss">
a {
  display: inline-block;
  padding: 4px 8px 4px 4px;
  text-decoration: none;
  border: 1px solid rgba(black, 0.2);
  border-radius: 2px;
  i {
    display: inline-block;
    margin-right: 5px;
  }
  span {
    text-decoration: underline;
  }
}
</style>
