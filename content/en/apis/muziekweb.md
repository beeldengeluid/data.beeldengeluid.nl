---
title: NISV Muziekweb APIs
hidden: true
subtitle: Query the music library of the Netherlands
image: apis/beng-muziekweb.jpg
datasets:
  - http://data.beeldengeluid.nl/id/dataset/0026
---

In Linked Open Data (LOD), data is offered in a structured way so that it can be easily interpreted by computers. This allows automatic linking of entities from different sources on the internet, also known as the semantic web. It makes the data richer and more useful for the user.

Muziekweb offers a large part of its metadata via Linked Data protocols. This makes it possible to deploy the information present on the website for wider use such as search engines that can search in multiple sources simultaneously (for example in the [Network of Terms](https://termennetwerk.netwerkdigitaalerfgoed.nl/) from Dutch Digital Heritage Network) or publishing enriched data from many sources as has been done on War Resources (Dutch).

An ontology was designed for Muziekweb's data that extends the standards of schema.org. The full vocabulary can be found at the following location:
https://data.muziekweb.nl/MuziekwebOrganization/vocabulary

The data offered as Linked Open Data is available at https://data.muziekweb.nl/. At this address, the Linked Data can be accessed directly and it is possible to perform searches using the SPARQL interface, a query language to search and select in data from Resource Description Framework (RDF) sources.

## SPARQL

More specific information on the syntax and semantics of the SPARQL query language for RDF can be found [here](https://www.w3.org/TR/rdf-sparql-query/).

#### Examples

- [Open a user interface to the SPARQL endpoint in a browser](https://data.muziekweb.nl/MuziekwebOrganization/Muziekweb/sparql/Muziekweb)
- Use **curl** to send a query and get JSON results. For example:

```
curl -H "Accept: application/sparql-results+json" https://api.data.muziekweb.nl/datasets/MuziekwebOrganization/Muziekweb/services/Muziekweb/sparql?query="PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%20PREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%20SELECT%20%2A%20WHERE%20%7B%20%3Fsub%20%3Fpred%20%3Fobj%20.%20%7D%20LIMIT%2010"
```


Please note that the query string must be [urlencoded](https://www.urlencoder.org/).

### License

Linked open data for [NISV Muziekweb](/datasets/muziekweb) is made available under the Open Data Commons Attribution License (ODC-By).
