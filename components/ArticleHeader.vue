<template>
  <v-row
    :id="id"
    :class="'article-heading ' + colorClass"
    :style="backgroundImageStyle"
  >
    <v-col>
      <!-- Content -->
      <section>
        <div class="d-flex justify-space-between align-center">
          <h3>
            <NuxtLink class="category" :to="localePath(path)">
              {{ $t(dataClass) }}
            </NuxtLink>
          </h3>
          <span
            v-if="article.startDate && article.endDate"
            class="category font-weight-bold"
          >
            {{ formatDateAsYear(article.startDate) }} -
            {{ formatDateAsYear(article.endDate) }}
          </span>
        </div>

        <div class="d-flex justify-space-between align-center mb-4">
          <h1>{{ article.title }}</h1>
          <v-chip
            v-if="article.type"
            color="primary"
            class="text-uppercase"
            small
            label
          >
            {{ article.type }}
          </v-chip>
        </div>
        <p>{{ article.subtitle }}</p>
      </section>
    </v-col>
  </v-row>
</template>

<script setup>
import { classColorIndex, classColors } from '~/config/theme'
import { getDarkenedImageOverlayCSS } from '~/util/color'
import { formatDateAsYear } from '~/util/date'

const img = useImage()

const props = defineProps({
  article: {
    type: Object,
    required: true,
    default: null,
    validator: (object) => {
      return object && object.title && object.subtitle
    },
  },
  dataClass: {
    type: String,
    required: true,
    default: '',
  },
})

const imageSrc = !props.article.image
  ? img('/images/placeholders/placeholder-blog.jpg', { width: 930 })
  : props.article.image.includes('/uploads/')
  ? props.article.image
  : img(`/images/${props.article.image}`, { width: 930 })

const colorClass = ref(classColorIndex[props.dataClass])
const id = ref('article-heading')

const path = computed(() => props.article.slug)
const color = computed(() => classColors[props.dataClass])
const backgroundImageStyle = computed(() => ({
  backgroundImage: getDarkenedImageOverlayCSS(imageSrc, color.value, 0.9),
}))
</script>

<style scoped lang="scss">
.article-heading {
  background-size: cover;
  background-position: center center;
  padding: 30px 10px;
}

h1 {
  color: white;
}

.category {
  text-decoration: none;
  color: white;
  opacity: 0.6;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
}
a.category {
  transition: opacity 0.3s ease-out;
  &:hover {
    opacity: 1;
  }
}

p {
  color: white;
  font-size: 1.1em;
  margin: 0;
}
</style>
