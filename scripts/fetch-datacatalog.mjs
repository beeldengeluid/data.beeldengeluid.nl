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
    const jsonText = JSON.stringify(dataCatalog)
    fs.writeFileSync(datacatalogPath, jsonText)
    console.log(`Data catalog written to file: ${datacatalogPath}`)
  })
  .catch((err) => console.error(err))
