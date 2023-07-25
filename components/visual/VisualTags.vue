<template>
  <div
    class="tags d-flex align-end"
    :class="[horizontal ? 'flex-row' : 'flex-column']"
  >
    <v-btn
      v-for="tag in tags"
      :key="tag"
      :color="!filterActive || inFilter(tag) ? 'primary' : 'grey darken-3'"
      :style="{
        opacity: highlightActive && !inHighlight(tag) ? 0.7 : 1,
      }"
      class="tag ma-1 py-0 px-2 text-uppercase text-white"
      variant="flat"
      size="small"
      label
      @click.left.exact="$emit('toggle-tag', tag)"
      @click.shift.left.exact="$emit('set-tag', tag)"
    >
      {{ tag.replace('_', ' ') }}
    </v-btn>
  </div>
</template>

<script setup>
defineEmits(['toggle-tag', 'set-tag'])

const props = defineProps({
  tags: {
    type: Array,
    required: true,
    default: () => [],
  },
  filter: {
    type: Array,
    required: true,
    default: () => [],
  },
  highlight: {
    type: Array,
    required: false,
    default: () => [],
  },
  horizontal: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const filterActive = computed(() => props.filter.length > 0)
const highlightActive = computed(() => props.highlight.length > 0)

const inFilter = (tag) => props.filter.includes(tag)
const inHighlight = (tag) => props.highlight.includes(tag)
</script>

<style lang="scss" scoped>
.tags {
  position: relative;

  .tag {
    box-shadow: 1px 1px 5px rgba(black, 0.3);
  }
}
</style>
