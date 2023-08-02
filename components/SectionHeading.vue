<template>
  <div>
    <v-row>
      <v-col class="flex-shrink-0">
        <h1>
          <component
            :is="actionPath ? 'NuxtLink' : 'span'"
            :to="localePath(actionPath)"
            class="text-decoration-none text-grey-darken-4"
          >
            {{ title }}&nbsp;<span :class="`text-${color}`">/</span>
          </component>
        </h1>
      </v-col>
      <v-col class="d-flex justify-end align-center">
        <slot name="actions">
          <v-btn
            v-if="actionTitle && actionPath"
            :to="localePath(actionPath)"
            variant="plain"
          >
            {{ actionTitle }}
            <v-icon size="20" class="ml-3" :color="color" :icon="actionIcon" />
          </v-btn>
        </slot>
      </v-col>
    </v-row>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<script setup>
import { classColorIndex } from '~/config/theme'

const props = defineProps({
  title: { type: String, required: true, default: '' },
  description: { type: String, required: false, default: '' },
  dataClass: { type: String, required: false, default: 'dataset' },
  actionTitle: { type: String, required: false, default: '' },
  actionPath: { type: String, required: false, default: '' },
  actionIcon: { type: String, required: false, default: 'mdi-arrow-right' },
})

const color = classColorIndex[props.dataClass]
</script>

<style scoped lang="scss">
p {
  color: rgba(black, 0.5);
}
</style>
