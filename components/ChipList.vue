<template>
  <div class="mt-3">
    <v-chip
      v-for="chip of chips"
      :key="chip.slug"
      class="ma-2 color-chip text-white"
      :color="color"
      label
      size="large"
      link
      :to="$localePath('/' + path + '/' + chip.slug)"
      :style="{
        backgroundImage: getImageOverlayCSS(
          getImageSrc(chip.image),
          theme[color]
        ),
      }"
    >
      <v-icon v-if="icon" start size="24">{{ icon }}</v-icon>
      {{ chip.title }}
    </v-chip>
  </div>
</template>

<script setup>
import theme from '~/config/theme'
import { getImageOverlayCSS } from '~/util/color'

const img = useImage()

defineProps({
  chips: {
    type: Array,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: 'primary',
  },
  icon: {
    type: String,
    required: false,
    default: '',
  },
})
const getImageSrc = (chipImage) => {
  return !chipImage
    ? ''
    : chipImage.includes('/uploads/')
      ? chipImage
      : img(`/images/${chipImage}`, { width: 200 })
}
</script>

<style scoped lang="scss">
.v-chip {
  padding: 13px;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  max-height: 42px;
}
</style>
