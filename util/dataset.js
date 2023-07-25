import { stripObject } from './objects'
import { getRandomColor, parseColor } from './color'
import { getLocalePath } from '~/util/contentFallback'
import { filterUndefined } from '~/util/frontmatter'

export const enrichDataset = (dataset, datacatalog = []) => {
  // Enrichments
  dataset.title = getValueFromObjectOrArray(dataset['sdo:name'])
  dataset.size = dataset['sdo:size']

  // Augmentations
  const creatorId = dataset['sdo:creator']?.['@id']
  if (creatorId) {
    const creatorNameObject = datacatalog.find(
      (item) => item['@id'] === creatorId
    )?.['sdo:name']

    if (creatorNameObject) {
      const creatorName = getValueFromObjectOrArray(creatorNameObject)
      dataset.creator = {
        ...dataset['sdo:creator'],
        name: creatorName,
        '@type': 'organization',
      }
    }
  }

  const publisherId = dataset['sdo:publisher']?.['@id']
  if (publisherId) {
    const publisherNameObject = datacatalog.find(
      (item) => item['@id'] === publisherId
    )?.['sdo:name']

    if (publisherNameObject) {
      const publisherName = getValueFromObjectOrArray(publisherNameObject)
      dataset.publisher = {
        ...dataset['sdo:publisher'],
        name: publisherName,
        '@type': 'organization',
      }
    }
  }

  const dataCatalogId = dataset['sdo:includedInDataCatalog']?.['@id']
  if (dataCatalogId) {
    const dataCatalogNameObject = datacatalog.find(
      (item) => item['@id'] === dataCatalogId
    )?.['sdo:name']

    if (dataCatalogNameObject) {
      const dataCatalogName = getValueFromObjectOrArray(dataCatalogNameObject)
      dataset.dataCatalog = {
        ...dataset['sdo:includedInDataCatalog'],
        name: dataCatalogName,
        '@type': 'dataset',
      }
    }
  }

  const distributionId = dataset['sdo:distribution']?.['@id']
  if (distributionId) {
    const distributionNameObject = datacatalog.find(
      (item) => item['@id'] === distributionId
    )?.['sdo:name']

    if (distributionNameObject) {
      const distributionName = getValueFromObjectOrArray(distributionNameObject)
      dataset.distribution = {
        ...dataset['sdo:distribution'],
        name: distributionName,
        '@type': 'download',
      }
    }
  }

  const licenseId = dataset['sdo:license']?.['@id']
  if (licenseId) {
    dataset.license = {
      ...dataset['sdo:license'],
      name:
        licenseId === 'https://creativecommons.org/publicdomain/zero/1.0/'
          ? 'CC0 1.0'
          : licenseId,
      '@type': 'license',
    }
  }

  // Random styling by default
  Object.assign(dataset, randomDatasetStyle())

  return dataset
}

export function extendDatasetPagesWithDatasets(datasetPages, datasets) {
  for (let i = 0; i < datasetPages.length; i++) {
    const datasetPage = datasetPages[i]
    const datasetId = datasetPage.id
    const dataset = datasets.find((item) => item['@id'] === datasetId)
    if (dataset) {
      // overwrite dataset props with defined datasetPage props
      // and assign parsed color
      const datasetPageDefined = filterUndefined(datasetPage).reduce(
        (obj, [key, value]) => {
          obj[key] = value
          return obj
        },
        {}
      )
      Object.assign(dataset, datasetPageDefined, {
        color: parseColor(datasetPage.color),
      })
      // then assign to current datasetPage
      Object.assign(datasetPage, dataset)
    } else {
      console.warn('datasetPage could not be extended: ', datasetPage.title)
    }
  }
  return datasetPages
}

// extend datasets with frontmatter from markdown content
export async function extendDatasetsWithFrontmatter(datasets, $content, app) {
  for (let i = 0, len = datasets.length; i < len; i++) {
    const dataset = datasets[i]

    // Custom markdown content for dataset
    const mdPath = await getLocalePath({
      $content,
      app,
      path: 'datasets',
    })
    const pages = await $content(mdPath)
      .where({ id: { $eq: dataset['@id'] } })
      .fetch()
      .catch(() => {
        // ignore error of missing page
      })
    if (pages.length === 1) {
      const page = pages[0]
      // assign defined page props to dataset, parse color vars (e.g. red.base)
      const pageDefined = filterUndefined(page).reduce((obj, [key, value]) => {
        obj[key] = value
        return obj
      }, {})
      Object.assign(dataset, pageDefined, {
        color: parseColor(page.color),
      })
    }
  }
  return datasets
}

const getValueFromObjectOrArray = (objectOrArray) => {
  return objectOrArray?.['@value']
    ? objectOrArray?.['@value']
    : objectOrArray?.filter((d) => d['@language'] === 'nl').length
    ? objectOrArray?.filter((d) => d['@language'] === 'nl')[0]['@value']
    : objectOrArray?.filter((d) => d['@language'] === 'en')[0]['@value']
}

export const enrichDatasets = (datasets, datacatalog = []) => {
  return datasets.map((dataset) => enrichDataset(dataset, datacatalog))
}

export const augmentProps = {
  'sdo:publisher': 'publisher',
  'sdo:creator': 'creator',
  'sdo:distribution': 'distribution',
  'sdo:includedInDataCatalog': 'dataCatalog',
  'sdo:license': 'license',
  'sdo:size': 'size',
}

export const enrichProps = [
  'toc',
  'body',
  'dir',
  'path',
  'extension',
  'createdAt',
  'updatedAt',
  'title',
  'subtitle',
  'slug',
  'image',
  'color',
  'tags',
]

export const stripEnrichments = (dataset) =>
  stripObject(dataset, [...enrichProps, ...Object.values(augmentProps)])

export const randomDataSet = ({ id, name, size }) => {
  return {
    '@context': {
      '@vocab': 'http://schema.org/',
    },
    '@type': 'Dataset',
    '@id': 'https://example.com/my-uid-' + id,
    // identifier: 'https://example.com/my-uid-' + id,
    name: name || 'Random dataset #' + id,
    description:
      'Lorem markdownum perdidit ad loco occallescere dextrum more est, pabula tantique.',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/',
    inLanguage: 'nl-NL',
    creator: {
      '@id': 'https://example.com/my-org-' + id,
      '@type': 'Organization',
      name: 'Random Inc',
    },
    publisher: {
      '@id': 'https://example.com/my-org-' + id,
      '@type': 'Organization',
      name: 'Random Inc',
    },
    distribution: [
      {
        '@type': 'DataDownload',
        contentUrl: 'https://example.com/download',
        encodingFormat: [
          'http://publications.europa.eu/resource/authority/file-type/XML',
        ],
        name: 'http://netwerkdigitaalerfgoed.nl/def/soort#oai-pmh',
        license: 'https://creativecommons.org/licenses/by-sa/3.0/',
        description: 'Fake OAI-PMH Data Provider without any content',
        inLanguage: ['nl-NL'],
        datePublished: '2010-01-01T08:51',
        dateModified: '2021-01-19T08:52',
        size: size || Math.round(Math.random() * 1200 + id * 133),
      },
    ],
    tags: ['public domain', 'linked data', 'api', 'oai-pmh'].filter(
      () => Math.random() > 0.4
    ),
  }
}

export const randomDatasetStyle = () => {
  return {
    color: getRandomColor(),
    image: 'placeholders/placeholder-dataset.jpg',
  }
}
