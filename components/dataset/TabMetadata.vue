<template>
  <v-tab-item key="metadata" value="metadata">
    <section>
      <!-- MetadataTable -->
      <div>
        <MetadataTable v-if="filteredDataset" :object="filteredDataset" />
      </div>

      <!-- Download button -->
      <v-row>
        <v-col>
          <v-btn outlined color="primary" @click="downloadDataset">
            <v-icon size="20" left>{{ icons.download }}</v-icon>
            {{ $t('download_metadata') }}
          </v-btn>
        </v-col>
      </v-row>
    </section>
  </v-tab-item>
</template>
<script>
import MetadataTable from '../MetadataTable'
import icons from '~/config/icons'
import { stripEnrichments, enrichProps, augmentProps } from '~/util/dataset'
import { stripObject } from '~/util/objects'
import { download } from '~/util/download'

// Properties added by markdown loader
const markdownProps = [
  'toc',
  'body',
  'dir',
  'path',
  'extension',
  'createdAt',
  'updatedAt',
]

export default {
  components: { MetadataTable },
  props: {
    dataset: {
      type: Object,
      required: true,
      default: null,
    },
  },
  data() {
    return {
      icons,
      filteredDataset: stripObject(this.dataset, [
        ...enrichProps,
        ...markdownProps,
        ...Object.keys(augmentProps),
        '@context',
        '@type',
        '@id',
        'name',
        'description',
      ]),
    }
  },
  methods: {
    downloadDataset() {
      const data = stripEnrichments(this.dataset)
      download(
        JSON.stringify(data, null, 3),
        this.dataset.slug + '.jsonld',
        'application/ld+json'
      )
    },
  },
}
</script>
