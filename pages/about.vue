<template>
  <HeaderPage>
    <!-- SectionHeading -->
    <template #header>
      <SectionHeading :title="page.title" data-class="dataset"
    /></template>

    <!-- Content -->
    <template #content>
      <section class="mt-4">
        <nuxt-content :document="page" />
      </section>
    </template>
  </HeaderPage>
</template>

<script setup>
const i18n = useI18n()

const aboutPath = 'about'
const { data: aboutPathLocalized } = await useAsyncData(async () => {
  const content = await queryContent(`${i18n.locale.value}/${aboutPath}`)
    .find()
    .catch(() => {
      // ignore 404s
    })
  const locale =
    content.length > 0 ? i18n.locale.value : i18n.fallbackLocale.value
  return `${locale}/${aboutPath}`
})

const { data: page } = await useAsyncData(async () => {
  return queryContent(aboutPathLocalized.value).findOne()
})

defineI18nRoute({
    paths: {
      en: '/about',
      nl: '/over-ons',
    },
})

useHead({
  title: i18n.t('about'),
})
</script>
