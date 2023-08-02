<template>
  <v-card
    class="mx-auto d-flex flex-column bg-white"
    max-width="100%"
    width="270"
    height="100%"
    hover
    link
    :v-ripple="{ class: rippleClass }"
    :to="
      localePath({
        name: path,
        params: { slug: card.slug },
      })
    "
  >
    <v-img
      class="text-white align-end"
      width="270px"
      height="180px"
      max-width="100%"
      max-height="180px"
      cover
      :src="image"
      :gradient="
        color
          ? 'to top right, ' +
            getRGBAColor(color, 0.85) +
            ', ' +
            getRGBAColor(color, 0.3)
          : null
      "
    >
    </v-img>
    <v-card-title>
      {{ card.title }}
    </v-card-title>
    <v-card-text v-if="card.type">
      <v-chip
        :color="'primary'"
        class="text-uppercase"
        small
        label
        variant="outlined"
      >
        {{ card.type }}
      </v-chip>
    </v-card-text>
    <v-card-subtitle class="line-clamp">
      {{ card.subtitle }}
    </v-card-subtitle>

    <v-spacer></v-spacer>

    <v-card-actions>
      <v-card-text
        v-if="card.startDate && card.endDate"
        class="text-caption text-grey"
        :style="{ marginLeft: '-8px' }"
      >
        {{ formatDateAsYear(card.startDate) }} -
        {{ formatDateAsYear(card.endDate) }}
      </v-card-text>

      <v-spacer></v-spacer>

      <v-btn icon :color="color || 'blue lighten-2'" variant="text">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { formatDateAsYear } from '~/util/date'
import { getRGBAColor } from '~/util/color'
import { classColors, classColorIndex } from '~/config/theme'

const img = useImage()

const props = defineProps({
  card: {
    type: Object,
    required: true,
    default: () => ({ title: 'Empty card' }),
  },
  path: {
    type: String,
    required: true,
    default: '',
  },
  dataClass: {
    type: String,
    required: false,
    default: '',
  },
})

const color = classColors[props.dataClass]
const rippleClass = classColorIndex[props.dataClass] + '--text'
const image = !props.card.image
  ? img('/images/placeholders/placeholder-generic.jpg', { width: 400 })
  : props.card.image.includes('/uploads/')
  ? props.card.image
  : img(`/images/${props.card.image}`, { width: 400 })
</script>

<style lang="scss" scoped>
.v-card {
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.05),
    0px 1px 1px 0px rgba(0, 0, 0, 0.035),
    0px 1px 3px 0px rgba(0, 0, 0, 0.03) !important;

  @media (max-width: 600px) {
    width: 100% !important;
    .v-image {
      width: 100% !important;
    }
    .v-card-subtitle {
      padding-bottom: 0;
    }
  }

  &.v-card--hover {
    transition: opacity 0.3s ease-out;

    .v-image-image {
      transition: transform 4s ease-out;
    }

    .v-btn {
      transition: transform 0.3s ease-out;
    }

    &:hover {
      opacity: 0.95;

      .v-image-image {
        transform: scale(1.05);
      }

      .v-btn {
        transform: translateX(5px);
      }
    }
  }

  .v-card-title {
    word-break: normal;
  }

  .v-card-subtitle {
    font-size: 0.95rem;

    &.line-clamp {
      // enable line-clamping
      padding: 0;
      margin: 16px;
      overflow: hidden;
      // apply the actual line-clamping
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
