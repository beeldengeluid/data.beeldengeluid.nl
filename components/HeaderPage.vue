<template>
  <div>
    <!-- Header -->
    <v-row class="justify-center mb-0 bg-white">
      <v-col class="limit-width header-bar">
        <slot name="header"></slot>
      </v-col>
    </v-row>

    <!-- Content -->
    <v-row class="justify-center my-0 pt-3">
      <slot name="contentColumn">
        <v-col class="limit-width">
          <slot name="content"></slot>
        </v-col>
      </slot>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-bar {
  align-items: center;
  padding: 16px;
}
</style>
