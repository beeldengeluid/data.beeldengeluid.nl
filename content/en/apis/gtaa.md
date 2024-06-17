---
title: GTAA APIs
subtitle: Common Thesaurus for Audiovisual Archives
image: apis/gtaa_network_image.jpg
datasets:
  - http://data.beeldengeluid.nl/id/dataset/0010
---

Since early 2022 the Netherlands Institute for Sound & Vision has deployed a brand new service layer for the thesaurus. The OpenSKOS repository that was used for several years was end-of-life and needed replacement.

The service layer provides several endpoints that can be used to work with the GTAA data. Also, using the concept URI, the data for the concept can be found either in HTML or other formats, like RDF/XML, JSON-LD and Turtle.

The available endpoints are:

- [OAI-PMH](/apis/gtaa#oai-pmh)
- [Search](/apis/gtaa#search)
- [autocomplete](/apis/gtaa#autocomplete)
- [SPARQL](/apis/gtaa#sparql)
- [GraphQL](/apis/gtaa#graphql)

## OAI-PMH

All the concepts within a ConceptScheme are available for download in RDF/XML using the [OAI-PMH](https://www.openarchives.org/pmh/) data provider. The service layer provides this so that others can harvest the contents of the GTAA, and keep track of the changes. Both SKOS modelled data and SKOS-XL (eXtension for Labels) can be found using the appropriate prefix.

#### Examples

- [Retrieve descriptive information about the repository](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=Identify)
- [List of all available ConceptSchemes](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListSets)
- [List of concepts in SKOS format](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf)
- [List of all concepts in GTAA](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf&set=beng:gtaa) (100 concepts per request)
- [List the next 100 concepts in GTAA](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf&resumptionToken=!!beng:gtaa!oai_rdf!430816!1643020890483!430916) (use resumptionToken)
- [List of concepts in SKOS-XL](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf_xl)
- [List of concepts in SKOS-XL and specific ConceptScheme](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf_xl&set=beng:gtaa:Onderwerpen)
- [Ask for one specific concept in SKOS-XL](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=GetRecord&metadataPrefix=oai_rdf_xl&identifier=oai:gtaa.apis.beeldengeluid.nl:123456)

## Search

The full-text search endpoint supports a user in searching for a concept in the GTAA, whereby the user, by entering the correct search term, finds the desired concept in the search results.

#### Examples

- [Find a term that contains the word 'vinci'](https://gtaa.apis.beeldengeluid.nl/search?q=vinci)
- [Find a term using a multiple character wildcard '\*' match](https://gtaa.apis.beeldengeluid.nl/search?q=vinc*)
- [Find a term using a single character wildcard '?' match](https://gtaa.apis.beeldengeluid.nl/search?q=vin?i)

## Autocomplete

Autocomplete, or word completion, is a feature in which the service layer predicts the rest of a word a user is typing. Autocomplete speeds up human-computer interactions when it correctly predicts the word a user intends to enter after only a few characters have been typed into a text input field. [(source: Wikipedia)](https://en.wikipedia.org/wiki/Autocomplete)

#### Examples

[Suggestions for the partial search term 'aar', match and return alt- and prefLabels and include the context](https://gtaa.apis.beeldengeluid.nl/autocomplete?text=aar&collection=gtaa&tenant=beng&matchMode=MATCHMODE_PREFIXLABEL&searchLabel=prefLabel&searchLabel=altLabel&returnLabel=altLabel&returnLabel=prefLabel&includeContext=True)

## SPARQL

SKOS is an ontology build in RDF. RDF is a directed, labeled graph data format for representing information in the Web. RDF is often used to represent, among other things, personal information, social networks, metadata about digital artifacts, as well as to provide a means of integration over disparate sources of information. [W3C](https://www.w3.org/TR/rdf-sparql-query/#introduction)

More specific information on the syntax and semantics of the SPARQL query language for RDF can be found [here](https://www.w3.org/TR/rdf-sparql-query/).

The service layer provides a SPARQL endpoint to enable other parties to connect components, like the [network of terms](https://termennetwerk.netwerkdigitaalerfgoed.nl/faq#what-is)

#### Examples

- [SELECT a concept](https://gtaa.apis.beeldengeluid.nl/sparql?&query=SELECT%20%3Fsubject%20%3Fpredicate%20%3Fobject%0AWHERE%20%7B%0A%20%20VALUES%20%3Fsubject%20%7B%20%3Chttp%3A%2F%2Fdata.beeldengeluid.nl%2Fgtaa%2F123456%3E%20%7D%0A%20%20%3Fsubject%20%3Fpredicate%20%3Fobject%0A%7D%20%0A)

## GraphQL

The [Network of Terms](https://termennetwerk.netwerkdigitaalerfgoed.nl/faq) is a new service being developed by the Dutch Digital Heritage Network for finding terms in terminology sources such as thesauri, classification systems, and reference lists. [Github](https://github.com/netwerk-digitaal-erfgoed/network-of-terms-api)

#### Examples

- [Link to the demonstrator UI and search for the term 'film' ](https://termennetwerk.netwerkdigitaalerfgoed.nl/?q=film&datasets=https://data.beeldengeluid.nl/id/datadownload/0028,https://data.beeldengeluid.nl/id/datadownload/0029,https://data.beeldengeluid.nl/id/datadownload/0031)

- [Query interactively using the GraphiQL UI](https://termennetwerk-api.netwerkdigitaalerfgoed.nl/graphiql)
