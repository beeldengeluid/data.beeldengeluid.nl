<template>
  <div class="circles">
    <panZoom
      selector=".zoomable"
      :options="{
        minZoom: 0.5,
        maxZoom: 3,
        boundsPadding: 0.2,
        initialX: width / 2,
        initialY: height / 2,
        initialZoom: 1.5,
      }"
    >
      <div
        class="zoomable"
        :style="{
          width: '100%',
          height: height + 'px',
        }"
      >
        <transition-group name="node">
          <VisualNode
            v-for="node in layout"
            :key="node.id"
            :node="node"
            :active="activeId === node.id"
            :dim="hoverId && hoverId !== node.id ? true : false"
            @hover="nodeHover"
            @click="nodeClick"
          />
        </transition-group>
      </div>
    </panZoom>
  </div>
</template>

<script setup>
import { createLayout } from './pack'

const emit = defineEmits(['active-dataset', 'hover-dataset'])
const nodeClick = (id) => emit('active-dataset', id)
const nodeHover = (id) => emit('hover-dataset', id)
onErrorCaptured(() => false)

const props = defineProps({
  datasets: {
    type: Array,
    required: true,
    default: () => [],
  },
  width: {
    type: Number,
    required: true,
    default: 800,
  },
  height: {
    type: Number,
    required: true,
    default: 400,
  },
  activeId: {
    type: String,
    required: false,
    default: '',
  },
  hoverId: {
    type: String,
    required: false,
    default: '',
  },
})

const defaultSize = 111
const layout = computed(() =>
  createLayout({
    nodes: props.datasets.map((dataset) => ({
      id: dataset.slug,
      dataset,
      color: dataset.color,
      value: parseInt(dataset.size) || defaultSize,
    })),
    width: props.width,
    height: props.height,
  })
)
</script>

<style lang="scss">
/*! purgecss start ignore */
@use '~/assets/scss/vuetify/customizations';

.circles {
  font-family: 'Assistant';
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
  outline: none;

  * {
    outline: none;
  }

  .vue-pan-zoom-scene {
    > div {
      transition: transform 0.2s ease-out;
    }
  }

  .node-leave-active {
    transition: opacity 0.2s ease-out;
  }

  .node-enter {
    opacity: 0 !important;
  }

  .node-leave-to {
    opacity: 0 !important;
  }
}
</style>
