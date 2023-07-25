<template>
  <Fragment>
    <a
      v-if="isUrl(value)"
      :href="value"
      target="_blank"
      rel="noopener noreferrer"
      >{{ value }}</a
    >
    <span v-else>{{ value }}</span>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { isUrl } from '~/util/url'

export default {
  components: { Fragment },
  props: {
    value: {
      type: [String, Number, Object],
      required: true,
      default: '',
    },
  },
  methods: {
    isUrl,
  },
}
</script>
