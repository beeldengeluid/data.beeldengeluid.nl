import fs from 'fs'

const datacatalogURL = 'https://data.beeldengeluid.nl/id/datacatalog/0001'
const datacatalogPath = 'content/datacatalog0001.json'

fetch(datacatalogURL)
  .then((response) => {
    if (response.status !== 200) {
      throw `received response with status '${response.status}'`
    } else {
      return response
    }
  })
  .then((okResponse) => okResponse.json())
  .then((dataCatalog) => {
    // for now only sort the graph by '@id' for a more readable diff
    const dataCatalogSorted = {
      ...dataCatalog,
      '@graph': dataCatalog['@graph'].sort((l, r) =>
        l['@id'] < r['@id'] ? -1 : 1
      ),
    }
    const jsonText = JSON.stringify(dataCatalogSorted, undefined, 2)
    fs.writeFileSync(datacatalogPath, jsonText)
    console.log(`Data catalog written to file: ${datacatalogPath}`)
  })
  .catch((err) => console.error(err))
