---
title: NISV Media Catalog APIs
subtitle: Query the open data from the NISV media catalog
image: /uploads/beeld_en_geluid_wall.jpg
datasets:
  - http://data.beeldengeluid.nl/id/dataset/0001
---

The available endpoints are:

- [Search](/apis/nisv-media-catalog#search)
- [SPARQL](/apis/nisv-media-catalog#sparql)

## Search

Search the media catalog using a full-text search index on the metadata. In a [full-text search](https://en.wikipedia.org/wiki/Full-text_search), every word from a stored set of documents is analysed and indexed by the search engine. Users can try to find the information they are interested in by formulating a text query (e.g. like in Google) that matches best to the document they are looking for.

#### Examples

To be added

## SPARQL

The SPARQL endpoint facilitates querying the media catalog open data modeled using [schema.org](https://schema.org/), an RDF based standard for representing almost any type of data.

The Resource Description Framework (RDF) is a World Wide Web Consortium (W3C) standard originally designed as a data model for metadata. It has come to be used as a general method for description and exchange of graph data. [Wikipedia](https://en.wikipedia.org/wiki/Resource_Description_Framework)

More specific information on the syntax and semantics of the SPARQL query language for RDF can be found [here](https://www.w3.org/TR/rdf-sparql-query/).

We provide an HTML interface for human users that entering the endpoint URL in a browser address bar. The same URL can be used directly by machines (scripts or other applications) that can negotiate the return format with the server.

#### Examples

- [SPARQL endpoint in a browser](https://cat.apis.beeldengeluid.nl/sparql)

Send a query, for example using **curl**, and get JSON results:

`curl -H "Accept: application/sparql-results+json" https://cat.apis.beeldengeluid.nl/sparql?query="SELECT%20*%20%7B%20%3Fs%20%3Fp%20%3Fo%20%7D%20LIMIT%2010"`

(Please note that the query string must be [urlencoded](https://www.urlencoder.org/).)

### License

Open metadata for the [NISV media catalog](/nl/datasets/nisv-media-catalog) is made available under the Creative Commons Zero License (CC0).
