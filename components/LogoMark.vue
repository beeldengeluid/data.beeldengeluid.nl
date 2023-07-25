<template>
  <div
    :style="container"
    class="logo-mark flex-shrink-0"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div
      v-for="(tile, index) of tiles"
      :key="index"
      :style="{ ...tile, ...getPosition(index) }"
      class="tile"
    />
  </div>
</template>

<script>
import { getRandomColor } from '~/util/color'

export default {
  props: {
    size: {
      type: Number,
      required: false,
      default: 14,
    },
    color: {
      type: String,
      required: false,
      default: '#008adb',
    },
  },
  data() {
    const tile = {
      width: this.size + 'px',
      height: this.size + 'px',
      backgroundColor: this.color,
    }

    return {
      tiles: [
        { opacity: 1, ...tile },
        { opacity: 0.66, ...tile },
        { opacity: 0.33, ...tile },

        { opacity: 1, ...tile },
        { opacity: 0.05, ...tile },
        { opacity: 0.66, ...tile },

        { opacity: 1, ...tile },
        { opacity: 1, ...tile },
        { opacity: 0.66, ...tile },
      ],
      container: {
        width: this.size * 3 + 2 + 'px',
        height: this.size * 3 + 2 + 'px',
        borderRadius: this.size + 2 + 'px',
      },
    }
  },
  methods: {
    getPosition(index) {
      return {
        left: this.size * (index % 3) + (index % 3) + 'px',
        top: Math.floor(index / 3) * (this.size + 1) + 'px',
      }
    },
    onMouseEnter() {
      this.tiles = this.tiles.map((tile) => ({
        ...tile,
        backgroundColor: getRandomColor(),
      }))
    },
    onMouseLeave() {
      this.tiles = this.tiles.map((tile) => ({
        ...tile,
        backgroundColor: this.color,
      }))
    },
  },
}
</script>

<style scoped lang="scss">
.logo-mark {
  position: relative;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  transition: filter 0.3s ease-out;
  overflow: hidden;

  .tile {
    position: absolute;
    transition: opacity 1.3s ease-out, background-color 5.6s ease-in-out;
  }

  &:hover {
    filter: brightness(1.2);
    .tile {
      transition: opacity 0.5s ease-out, background-color 0.4s ease-out;
      animation-name: blink;
      animation-iteration-count: infinite;
      @for $i from 1 through 9 {
        &:nth-child(#{$i}) {
          animation-delay: #{calc(random(100) / -200)}s;
          animation-duration: #{0.1 + calc(random(100) / 50)}s;
        }
      }
    }
  }
}

@keyframes blink {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
