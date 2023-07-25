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

<script>
import { createLayout } from './pack'
import VisualNode from './VisualNode'

export default {
  components: {
    VisualNode,
  },
  props: {
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
  },
  data() {
    return {
      layout: [],
      defaultSize: 111,
    }
  },
  watch: {
    datasets() {
      this.updateLayout()
    },
  },
  mounted() {
    this.updateLayout()
  },
  methods: {
    updateLayout() {
      const { width, height } = this

      // prepare node data
      const nodes = this.datasets.map((dataset, index) => ({
        id: dataset.slug,
        dataset,
        color: dataset.color,
        value: parseInt(dataset.size) || this.defaultSize,
      }))

      // calculate circle pack layout
      const layout = createLayout({
        nodes,
        width,
        height,
      })

      this.layout = layout
    },
    nodeClick(id) {
      this.$emit('active-dataset', id)
    },
    nodeHover(id) {
      this.$emit('hover-dataset', id)
    },
  },
}
</script>

<style lang="scss">
/*! purgecss start ignore */
@import '~/assets/scss/vuetify/customizations';

.circles {
  font-family: $heading-font-family;
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
