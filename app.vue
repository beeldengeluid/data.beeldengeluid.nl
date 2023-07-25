<template>
  <v-app theme="light">
    <!-- drawer menu -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
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
      fixed
      app
      theme="dark"
      elevate-on-scroll
      class="nisvdarkblue darken-4 text-white"
    >
      <v-app-bar-nav-icon
        class="d-sm-flex d-md-none"
        @click.stop="drawer = !drawer"
      />

      <v-spacer></v-spacer>

      <NuxtLink
        :to="localePath('index')"
        :style="{
          textDecoration: 'none',
          color: 'white',
        }"
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
        class="d-none d-md-flex"
        align-tabs="end"
        center-active
      >
        <v-tabs-slider
          v-if="activeMenu !== 'index'"
          color="nisvlightblue"
          class="v-tabs-slider-wrapper"
        />
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
          class="text-decoration-none text-grey-lighten-1 text-uppercase"
          color="nisvdarkblue "
          rounded
          :style="{ minWidth: '36px', padding: '0' }"
        >
          {{ locale.code }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-spacer class="my-5"></v-spacer>

    <v-footer
      :absolute="!fixed"
      class="nisvdarkblue darken-4 text-white"
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
            class="nisvdarkblue darken-4"
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

<script>
import menu from '~/config/menu'
import LogoMarkLabs from '~/components/LogoMarkLabs'

export default {
  components: { LogoMarkLabs },
  data: () => ({
    drawer: false,
    fixed: false,
    home: menu[0],
    menu,
    tabMenu: menu.filter((m) => m.title !== 'home'),
    activeMenu: 'blogs',
  }),
  watch: {
    // Listen for route change
    $route() {
      this.updateActiveTab()
    },
  },
  mounted() {
    this.updateActiveTab()
  },
  methods: {
    updateActiveTab() {
      // Active menu for to paths
      const to = this.$route.name
      switch (true) {
        case to.startsWith('index'):
          this.activeMenu = 'index'
          break
        case to.startsWith('blog-to'):
          this.activeMenu = this.localePath('blogs')
          break
        case to.startsWith('dataset-to'):
          this.activeMenu = this.localePath('datasets')
          break
        case to.startsWith('project-to'):
          this.activeMenu = this.localePath('projects')
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vuetify/variables.scss';

.v-tabs-slider-wrapper {
  height: 4px !important;
}

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
