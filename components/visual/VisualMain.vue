<template>
  <div class="visual" :height="height">
    <!-- Visualization -->
    <div class="viewport">
      <VisualCircles
        :datasets="filteredDatasets"
        :width="width"
        :height="height"
        :active-id="activeId"
        :hover-id="hoverId"
        @active-dataset="setActive"
        @hover-dataset="setHover"
      />
    </div>

    <!-- Intro/details -->
    <transition name="detailsIntro" mode="out-in">
      <!-- Dataset info -->
      <div
        v-if="showInfo"
        :class="{ details: true, 'd-none d-md-block': !activeDataset }"
      >
        <transition name="detailsContent" mode="out-in">
          <div v-if="activeDataset" :key="activeDataset.slug">
            <VisualDatasetInfo :dataset="activeDataset" />
          </div>

          <!-- Intro -->
          <div v-else :key="'intro'" class="d-none d-md-block">
            <div class="intro mt-2">
              <!-- Intro text -->
              <h2 class="my-3">{{ $t('intro_title') }}</h2>
              <p>
                {{ $t('intro_text') }}
              </p>

              <!-- Stats -->
              <div
                :style="{ fontSize: '0.8em' }"
                class="text-uppercase grey--text lighten-4 title-font pb-4"
              >
                <div
                  v-for="(stat, index) of stats"
                  :key="index"
                  :style="{
                    lineHeight: '2.4em',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                  }"
                >
                  <v-icon size="17" color="grey lighten-4" class="pb-0 mr-2">
                    {{ stat.icon }}
                  </v-icon>
                  <strong> {{ stat.text }} </strong>
                </div>
              </div>

              <!-- Button -->
              <v-btn :to="localePath('datasets')" color="primary">
                {{ $t('all_datasets') }}
              </v-btn>
            </div>
          </div>
        </transition>

        <!-- Mobile close button -->
        <div
          class="close-button d-flex justify-center align-center d-md-none"
          @click.stop="hideDetails"
        >
          <v-icon dark> mdi-close </v-icon>
        </div>
      </div>
    </transition>

    <!-- Filter -->
    <div class="filter d-flex flex-column align-end ma-1">
      <!-- Filter button on mobile -->
      <v-btn
        class="ma-1 d-block d-md-none"
        icon
        theme="dark"
        small
        color="primary"
        @click.stop="showTags = !showTags"
      >
        <v-badge
          v-if="tagsFilter.length > 0"
          :content="tagsFilter.length"
          :style="{ transform: 'translate(22px,-12px)' }"
          color="red darken-1"
        />

        <v-icon dark>
          {{ showTags ? 'mdi-close' : 'mdi-filter-variant' }}
        </v-icon>
      </v-btn>

      <!-- VisualTags list -->
      <transition name="slideInRight">
        <VisualTags
          v-if="showTags"
          :tags="tags"
          :filter="tagsFilter"
          :highlight="tagsHighlight"
          @toggle-tag="toggleTag"
          @set-tag="setTag"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import VisualTags from './VisualTags'
import VisualCircles from './VisualCircles'
import VisualDatasetInfo from './VisualDatasetInfo'

export default {
  components: {
    VisualTags,
    VisualCircles,
    VisualDatasetInfo,
  },
  props: {
    datasets: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      showInfo: false,
      showTags: false,
      width: process.client ? window.innerWidth : 800,
      height: process.client
        ? Math.min(700, Math.max(400, window.innerHeight - 150))
        : 400,
      tagsFilter: [],
      tagsHighlight: [],
      activeDataset: null,
      activeId: '',
      hoverDataset: null,
      hoverId: '',
      tags: Object.keys(
        this.datasets.reduce((tags, dataset) => {
          if (dataset.tags) {
            dataset.tags.forEach((tag) => {
              tags[tag] = true
            })
          }
          return tags
        }, {})
      ),
    }
  },
  computed: {
    filteredDatasets() {
      return this.tagsFilter.length === 0
        ? this.datasets
        : this.datasets.filter((dataset) =>
            this.tagsFilter.some((tag) => dataset.tags?.includes(tag))
          )
    },
    stats() {
      return [
        {
          icon: 'mdi-database',
          text: this.filteredDatasets.length + ' datasets',
        },
        {
          icon: 'mdi-file-document-multiple',
          text:
            new Intl.NumberFormat().format(
              this.filteredDatasets.reduce(
                (sum, dataset) =>
                  dataset.size ? sum + parseInt(dataset.size) : sum,
                0
              )
            ) + ' records',
        },
        {
          icon: 'mdi-calendar-range',
          // 1877 is the Beeld & Geluid catalogus temporalCoverage start
          text: '1877/' + new Date().getFullYear(),
        },
      ]
    },
  },
  watch: {
    activeId() {
      this.activeDataset = this.datasets.find(
        (dataset) => dataset.slug === this.activeId
      )
    },
    hoverId() {
      this.hoverDataset = this.datasets.find(
        (dataset) => dataset.slug === this.hoverId
      )

      if (this.hoverDataset) {
        this.tagsHighlight = this.hoverDataset.tags
      } else {
        this.tagsHighlight = []
      }
    },
  },
  mounted() {
    // show tags on large screens
    if (window.innerWidth > 500) {
      this.showTags = true
    }

    // always show info on mount
    this.showInfo = true
  },
  methods: {
    toggleTag(tag) {
      if (this.tagsFilter.includes(tag)) {
        this.tagsFilter = this.tagsFilter.filter((t) => t !== tag)
      } else {
        this.tagsFilter = [...this.tagsFilter, tag]
      }

      if (this.tagsFilter.length === this.tags.length) {
        this.tagsFilter = []
      }
    },
    setTag(tag) {
      if (this.tagsFilter.includes(tag)) {
        this.tagsFilter = []
      } else {
        this.tagsFilter = [tag]
      }
    },
    setActive(id) {
      this.activeId = this.activeId === id ? '' : id
      if (this.activeId) {
        this.scrollToTop()
      }
    },
    hideDetails() {
      this.setActive('')
    },
    setHover(id) {
      if (this.hoverId !== id) {
        this.hoverId = id
      }
    },
    scrollToTop() {
      process.client &&
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
    },
  },
}
</script>

<style lang="scss" scoped>
$clDark: rgba(5, 37, 68, 1);

.visual {
  position: relative;
  height: calc(100vh - 150px);
  width: 100%;
  max-height: 700px;
  background: rgb(11, 54, 97);
  background: radial-gradient(
    circle,
    rgba(11, 54, 97, 1) 0%,
    rgba(15, 70, 94, 1) 38%,
    $clDark 100%
  );
}

.viewport {
  height: 100%;
  width: 100%;
}

.details {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  background: white;
  width: 300px;
  height: 100%;
  max-width: 100%;
  padding: 10px 15px 30px;
  background-color: rgba($clDark, 0.8);
  color: white;
  overflow-y: auto;

  @media (max-width: 500px) {
    width: 100%;
    position: fixed;
    height: calc(100vh - 50px);
    top: 55px;
  }
  .close-button {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    background-color: rgba($clDark, 0.8);

    @media (max-width: 500px) {
      position: fixed;
      top: 55px;
    }
  }
}

.filter {
  position: absolute;
  right: 0;
  top: 0;
  max-width: 200px;
}

.detailsIntro-enter-active,
.detailsIntro-leave-active {
  transition: opacity 0.1s ease-out, transform 0.1s ease-out;
}
.detailsIntro-enter,
.detailsIntro-leave-to {
  opacity: 0;
}

.detailsContent-enter-active,
.detailsContent-leave-active {
  transform: translateX(0);
  transition: opacity 0.1s ease-out;
}
.detailsContent-enter,
.detailsContent-leave-to {
  opacity: 0;
}

.slideInRight-enter-active,
.slideInRight-leave-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  transform: translateX(0);
}
.slideInRight-enter,
.slideInRight-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
</style>
