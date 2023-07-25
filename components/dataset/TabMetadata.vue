<template>
  <v-window-item key="metadata" value="metadata">
    <section>
      <!-- MetadataTable -->
      <div>
        <MetadataTable v-if="filteredDataset" :object="filteredDataset" />
      </div>

      <!-- Download button -->
      <v-row>
        <v-col>
          <v-btn variant="outlined" color="primary" @click="downloadDataset">
            <v-icon size="20" start>{{ icons.download }}</v-icon>
            {{ $t('download_metadata') }}
          </v-btn>
        </v-col>
      </v-row>
    </section>
  </v-window-item>
</template>

<script setup>
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

const props = defineProps({
  dataset: {
    type: Object,
    required: true,
    default: null,
  },
})

const filteredDataset = stripObject(props.dataset, [
  ...enrichProps,
  ...markdownProps,
  ...Object.keys(augmentProps),
  '@context',
  '@type',
  '@id',
  'name',
  'description',
])

const downloadDataset = () => {
  const data = stripEnrichments(props.dataset)
  download(
    JSON.stringify(data, null, 3),
    props.dataset.slug + '.jsonld',
    'application/ld+json',
  )
}
</script>
