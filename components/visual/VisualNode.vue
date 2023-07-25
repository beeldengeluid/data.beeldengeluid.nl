<template>
  <div
    :class="{ node: true, dim: dim, active: active }"
    :style="{
      transform: `translate(${node.x - node.r}px,${node.y - node.r}px)`,
      width: node.r * 2 + 'px',
      height: node.r * 2 + 'px',
      fontSize: 3 + node.r / 7 + 'px',
    }"
    @click.stop="onClick"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @mouseenter.stop="onStartHover"
    @mouseleave.stop="onStopHover"
  >
    <div class="inner">
      <div class="border" :style="{ backgroundColor: node.color }"></div>

      <div
        class="content"
        :style="{
          backgroundImage: getImageOverlayCSS(imageSrc, node.color),
        }"
      >
        <span>{{ node.dataset.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getImageOverlayCSS } from '~/util/color'

const emit = defineEmits(['click', 'hover'])

const img = useImage()

const props = defineProps({
  node: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  dim: {
    type: Boolean,
    required: false,
    default: false,
  },
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const touchStart = useState('touchStart', () => null)
const touchActive = useState('touchActive', () => false)
const touchClick = useState('touchClick', () => false)

const imageSrc = !props.node.dataset.image
  ? img('/images/placeholders/placeholder-dataset.jpg', { width: 300 })
  : props.node.dataset.image.includes('/uploads/')
  ? props.node.dataset.image
  : img(`/images/${props.node.dataset.image}`, { size: 300 })

const onTouchStart = (e) => {
  if (!touchActive && e.touches?.length === 1) {
    touchStart.value = { x: e.touches[0].screenX, y: e.touches[0].screenY }
    touchClick.value = true
    touchActive.value = true
  } else {
    touchClick.value = false
  }
}

const onTouchMove = (e) => {
  if (touchClick && e.touches?.length === 1) {
    const diff = { x: e.touches[0].screenX, y: e.touches[0].screenY }
    const dx = diff.x - touchStart.value.x
    const dy = diff.y - touchStart.value.y

    if (Math.sqrt(dx * dx + dy * dy) > 5) {
      touchClick.value = false
    }
  }
}

const onTouchEnd = (e) => {
  if (touchActive && e.touches?.length === 0) {
    touchActive.value = false
    if (touchClick) {
      emit('click', props.node.id)
    }
  }
  touchClick.value = false
}

const onClick = () => {
  emit('click', props.node.id)
}

const onStartHover = () => {
  emit('hover', props.node.id)
}

const onStopHover = () => {
  emit('hover', '')
}
</script>

<style lang="scss">
.node {
  position: absolute;
  border-radius: 100%;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out,
    filter 0.3s ease-out;
  cursor: pointer;
  // render on gpu, prevent glitches
  filter: brightness(1.01);
  transform: translateZ(1px);

  &:hover {
    .inner {
      filter: brightness(1.05);
      .border {
        transform: scale(1.05);
        opacity: 0.6;
      }
    }
  }

  &.dim {
    filter: brightness(0.9);
  }

  &.active {
    opacity: 1 !important;
    .inner {
      .border {
        opacity: 0.8;
      }
    }
  }

  .inner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transition: transform 1.4s ease-out;
    transform: translateZ(1px);

    .border {
      transition: opacity 1s ease-out, transform 1.4s ease-out;
      opacity: 0.5;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    $borderSize: 8px;
    .content {
      position: absolute;
      background-size: cover;
      background-position: center center;
      border-radius: 50%;
      width: calc(100% - #{$borderSize});
      height: calc(100% - #{$borderSize});
      left: calc(#{$borderSize} / 2);
      top: calc(#{$borderSize} / 2);
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      text-align: center;
      user-select: none;
      padding: 10px;
      font-weight: bold;
      text-shadow: 0.5px 0.5px 1px rgba(black, 0.3);
      line-height: 1.2em;
      color: white;
    }
  }
}
</style>
