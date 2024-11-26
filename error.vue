<template>
  <v-app>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <NuxtLink :to="$localePath('/')">Home page</NuxtLink>
  </v-app>
</template>

<script setup>
const error = useError()

useHead({
  title: 'Error',
})
</script>
