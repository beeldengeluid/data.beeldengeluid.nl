<template>
  <div>
    <!-- Filter -->
    <div
      class="filter d-flex flex-column align-end ma-2"
      :style="{
        position: 'absolute',
        top: '82px',
        right: '0',
      }"
    >
      <!-- Filter button on mobile -->
      <v-btn
        class="ma-1 d-block d-sm-none mt-n1"
        icon
        theme="dark"
        size="small"
        color="primary"
        @click.stop="showTypes = !showTypes"
      >
        <v-badge
          v-if="typesFilter.length > 0"
          :content="typesFilter.length"
          :style="{ transform: 'translate(22px,-12px)' }"
          color="red-darken-1"
        />

        <v-icon dark>
          {{ showTypes ? 'mdi-close' : 'mdi-filter-variant' }}
        </v-icon>
      </v-btn>

      <!-- VisualTags list -->
      <transition name="slideInRight">
        <VisualTags
          v-if="showTypes"
          :tags="types"
          :filter="typesFilter"
          horizontal
          @toggle-tag="toggleType"
          @set-tag="setType"
        />
      </transition>
    </div>
    <CardPage
      :cards="filteredCards"
      :title="title"
      :card-path="cardPath"
      :data-class="dataClass"
    />
  </div>
</template>

<script setup>
const i18n = useI18n()

const dataClass = 'archive'

const path = dataClass
const { data: pathLocalized } = await useAsyncData(async () => {
  const content = await queryContent(`${i18n.locale.value}/${path}`)
    .find()
    .catch(() => {
      // ignore 404s
    })
  const locale =
    content.length > 0 ? i18n.locale.value : i18n.fallbackLocale.value
  return `${locale}/${path}`
})
const { data: cards } = await useAsyncData(async () => {
  return queryContent(pathLocalized.value)
    .where({ hidden: { $ne: true } })
    .sort({ createdAt: -1 })
    .sort({ title: 1 })
    .find()
})

const title = dataClass
const cardPath = `${dataClass}-slug`
const types = ['project', 'example', 'application']
const typesFilter = ref([])
const showTypes = ref(false)

useHead({
  title: i18n.t(dataClass),
})

const filteredCards = computed(() => {
  return typesFilter.value.length === 0
    ? cards.value
    : cards.value.filter(
        (card) => card.type && typesFilter.value.includes(card.type)
      )
})

onMounted(() => {
  if (window.innerWidth > 500) {
    showTypes.value = true
  }
})

const toggleType = (type) => {
  if (typesFilter.value.includes(type)) {
    typesFilter.value = typesFilter.value.filter((t) => t !== type)
  } else {
    typesFilter.value = [...typesFilter.value, type]
  }

  if (typesFilter.value.length === types.length) {
    typesFilter.value = []
  }
}

const setType = (type) => {
  if (typesFilter.value.includes(type)) {
    typesFilter.value = []
  } else {
    typesFilter.value = [type]
  }
}
</script>
