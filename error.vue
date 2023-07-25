<template>
  <v-app>
    <h1>{{ errorTitle }}</h1>
    <p>{{ errorDescription }}</p>
    <NuxtLink :to="localePath('/')">Home page</NuxtLink>
  </v-app>
</template>

<script setup>
const error = useError()
const errorTitle =
  error.statusCode === 404 ? '404 Not Found' : 'An error occurred'
const errorDescription = error.message

useHead({
  title: errorTitle,
})
</script>
