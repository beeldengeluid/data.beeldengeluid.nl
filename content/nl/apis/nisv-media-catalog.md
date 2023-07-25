---
title: B&G Media Catalog APIs
subtitle: Bevraag de open data in de media catalogus van Beeld & Geluid
image: /uploads/beeld_en_geluid_wall.jpg
datasets:
  - http://data.beeldengeluid.nl/id/dataset/0001
---

De beschikbare endpoints zijn:

- [Search](/nl/apis/nisv-media-catalog#search)
- [SPARQL](/nl/apis/nisv-media-catalog#sparql)

## Search

Doorzoek de mediacatalogus met behulp van een full-text zoekindex op de metadata. In een [full-text search](https://en.wikipedia.org/wiki/Full-text_search) wordt elk woord uit een opgeslagen set documenten geanalyseerd en geïndexeerd door de zoekmachine.

Gebruikers kunnen proberen de informatie te vinden waarin ze geïnteresseerd zijn door een tekstquery te formuleren (bijvoorbeeld zoals in Google) die het beste past bij het document waarnaar ze op zoek zijn.

#### Voorbeelden

Nog toe te voegen

## SPARQL

Het SPARQL-eindpunt vergemakkelijkt het opvragen van de open data van de mediacatalogus, gemodelleerd met [schema.org](https://schema.org/), een op RDF gebaseerde standaard voor het representeren van bijna elk type data.

Resource Description Framework of RDF is een standaard van het World Wide Web Consortium (W3C), oorspronkelijk ontworpen als een metadata-model, maar gaandeweg gebruikt als een formaat om gegevens in het algemeen voor te stellen en uit te wisselen. [Wikipedia](https://nl.wikipedia.org/wiki/Resource_Description_Framework)

Meer specifieke informatie over de syntax en semantiek van de SPARQL-querytaal voor RDF is [hier](https://www.w3.org/TR/rdf-sparql-query/) te vinden.

We bieden een HTML-interface voor menselijke gebruikers die de eindpunt-URL invoeren in de adresbalk van een browser. Dezelfde URL kan direct worden gebruikt door machines (scripts of andere toepassingen) die met de server kunnen onderhandelen over het retourformaat.

#### Voorbeelden

- [SPARQL endpoint in een browser](https://cat.apis.beeldengeluid.nl/sparql)
- Gebruik een programma als **curl** om ruwe JSON resultaten op te vragen:

`curl -H "Accept: application/sparql-results+json" https://cat.apis.beeldengeluid.nl/sparql?query="SELECT%20*%20%7B%20%3Fs%20%3Fp%20%3Fo%20%7D%20LIMIT%2010"`

## License

Open metadata voor de [Beeld & Geluid media catalogus](/nl/datasets/nisv-media-catalog) is beschikbaar gemaakt onder de Creative Commons Zero License (CC0).
