<template>
  <HeaderPage>
    <!-- SectionHeading -->
    <template #header>
      <SectionHeading :title="$t(title)" :data-class="dataClass" />
    </template>

    <!-- Content -->
    <template #content>
      <CardGrid :cards="cards" :path="cardPath" :data-class="dataClass" />
    </template>
  </HeaderPage>
</template>

<script>
import HeaderPage from './HeaderPage'
import CardGrid from './CardGrid'
import SectionHeading from './SectionHeading'

export default {
  components: { HeaderPage, CardGrid, SectionHeading },
  props: {
    title: { type: String, required: true, default: '' },
    cards: { type: Array, required: true, default: () => [] },
    cardPath: { type: String, required: true, default: '' },
    dataClass: { type: String, required: true, default: '' },
  },
}
</script>
