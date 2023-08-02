<template>
  <v-app theme="light">
    <!-- drawer menu -->
    <v-navigation-drawer
      v-model="drawer"
      position="fixed"
      disable-resize-watcher
      temporary
      floating
      theme="dark"
      class="d-sm-flex d-md-none"
    >
      <v-list-item>
        <v-list-item-title class="pb-2">
          <NuxtLink
            :to="localePath('index')"
            :style="{
              textDecoration: 'none',
            }"
            class="text-black d-flex align-center"
          >
            <LogoMarkLabs />
          </NuxtLink>
        </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Menu -->
      <v-list v-model="activeMenu">
        <v-list-item
          v-for="item in menu"
          :key="item.to"
          :to="localePath(item.to)"
          :prepend-icon="item.icon"
          router
          exact
        >
          <v-list-item-title class="text-uppercase">
            <h4>{{ $t(item.title) }}</h4>
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <!-- Locales -->
      <v-list>
        <v-list-item
          v-for="locale of $i18n.locales.filter((l) => l.code !== $i18n.locale)"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-earth</v-icon>
          </v-list-item-action>

          <v-list-item-title class="text-uppercase">
            <h4>{{ locale.code }}</h4>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- site title -->
    <v-app-bar
      position="fixed"
      theme="dark"
      scroll-behavior="elevate"
      class="bg-nisvdarkblue-darken-4 text-white px-4"
    >
      <v-app-bar-nav-icon
        class="d-sm-flex d-md-none"
        @click.stop="drawer = !drawer"
      />

      <!-- <v-spacer></v-spacer> -->

      <NuxtLink
        :to="localePath('index')"
        :style="{
          textDecoration: 'none',
          color: 'white',
        }"
        align-tabs="left"
      >
        <v-toolbar-title
          class="d-none d-md-flex align-items-center text-uppercase"
        >
          <LogoMarkLabs />
        </v-toolbar-title>
      </NuxtLink>

      <v-spacer></v-spacer>

      <!-- Tab menu -->
      <v-tabs
        v-model="activeMenu"
        class="d-none d-md-flex tab-slider-tall"
        align-tabs="end"
        center-active
        slider-color="nisvlightblue"
        :hide-slider="activeMenu === 'index'"
      >
        <v-tab :to="localePath(home.to)" class="d-none" />
        <v-tab v-for="item in tabMenu" :key="item.to" :to="localePath(item.to)">
          {{ $t(item.title) }}
        </v-tab>
      </v-tabs>

      <!-- Language selector -->
      <div class="language-selector d-none d-lg-block">
        <v-btn
          v-for="locale of $i18n.locales.filter((l) => l.code !== $i18n.locale)"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="bg-nisvdarkblue text-decoration-none text-grey-lighten-1 text-uppercase"
          rounded
          :style="{ minWidth: '36px', padding: '0' }"
        >
          {{ locale.code }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>

    <v-spacer class="my-5"></v-spacer>

    <v-footer
      :absolute="!fixed"
      class="bg-nisvdarkblue-darken-4 text-white"
      app
      :style="{ minHeight: '400px' }"
    >
      <v-row>
        <!-- Column left -->
        <v-col>
          <NuxtLink
            :to="localePath('index')"
            :style="{
              textDecoration: 'none',
              color: 'white',
            }"
            class="ma-3 d-flex"
          >
            <LogoMarkLabs />
          </NuxtLink>
        </v-col>

        <!-- Column mid -->
        <v-col> </v-col>

        <!-- Column right -->
        <v-col>
          <!-- Footer menu -->
          <v-list
            v-model="activeMenu"
            class="bg-nisvdarkblue-darken-4"
            color="white"
          >
            <v-list-item
              v-for="item in menu"
              :key="item.to"
              :to="localePath(item.to)"
              router
              exact
              theme="dark"
            >
              <v-list-item-title class="text-uppercase text-white">
                <h4>{{ $t(item.title) }}</h4>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import menu from '~/config/menu'

const route = useRoute()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const drawer = ref(false)
const fixed = ref(false)
const home = menu[0]
const tabMenu = menu.filter((m) => m.title !== 'home')
const activeMenu = ref('blogs')

const updateActiveTab = () => {
  // Active menu for to paths
  const to = route.name?.toString()
  switch (true) {
    case to.startsWith('index'):
      activeMenu.value = 'index'
      break
    case to.startsWith('blog-to'):
      activeMenu.value = localePath('blogs')
      break
    case to.startsWith('dataset-to'):
      activeMenu.value = localePath('datasets')
      break
    case to.startsWith('project-to'):
      activeMenu.value = localePath('projects')
      break
  }
}

onMounted(() => updateActiveTab())

watch(route, () => updateActiveTab())

useHead({
  title: 'Beeld & Geluid',
})
</script>

<style lang="scss" scoped>
.v-tab--home {
  min-width: 5px;
}

.v-tab--active {
  background-color: rgba(white, 0.2);
}

.language-selector {
  margin-left: 10px;
}
</style>

<style lang="scss">
@use 'vuetify/settings';

/* upgradefixup: Set Vuetify 2 margin we used before upgrade to Vuetify 3
> Global styles previously included as .v-application p or .v-application 
> ul are no longer included. If you need margin for p, or padding-left for
> ul and ol, set it manually in your root component’s <style> tag.
https://vuetifyjs.com/en/getting-started/upgrade-guide/#layout 
*/
p {
  margin-bottom: 16px;
}

.title,
.title-font,
h1,
h2,
h3,
h4,
h5,
.v-tab,
.v-avatar,
.v-toolbar-title,
.v-chip-content,
.v-card-title,
.v-btn {
  /* To pin point specific classes of some components */
  font-family: 'Assistant', sans-serif !important; //settings.$heading-font-family;
  font-weight: 700;
}

.v-tabs--right {
  justify-content: flex-end;
}
.theme--dark.v-tabs .v-tab:hover::before {
  opacity: 0.2;
}

.v-main {
  background-color: rgba(243, 248, 252); // backgroundcolorlight
}
.tab-slider-tall .v-tab__slider {
  height: 4px !important;
}
</style>
