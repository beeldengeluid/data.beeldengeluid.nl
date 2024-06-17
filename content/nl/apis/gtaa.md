---
title: GTAA APIs
subtitle: Gemeenschappelijke Thesaurus Audiovisuele Archieven
image: apis/gtaa_network_image.jpg
datasets:
  - http://data.beeldengeluid.nl/id/dataset/0010
---

Sinds begin 2022 stelt het Nederlands Instituut voor Beeld & Geluid een gloednieuwe service layer beschikbaar voor de thesaurus. OpenSKOS, het systeem waarin de beschikbaarstelling meerdere jaren is gedaan, was end-of-life en aan vervanging toe.

In de nieuwe thesaurus service layer maakt Beeld & Geluid meerdere endpoints beschikbaar om met de GTAA te werken. Ook kan een GTAA concept URI worden gebruikt om de bijbehorende data op te vragen in HTML of andere formaten als RDF/XML, JSON-LD of Turtle, etc.

De beschikbare endpoints zijn:

- [OAI-PMH](/nl/apis/gtaa#oai-pmh)
- [search](/nl/apis/gtaa#search)
- [autocomplete](/nl/apis/gtaa#autocomplete)
- [SPARQL](/nl/apis/gtaa#sparql)
- [GraphQL](/apis/gtaa#graphql)

### OAI-PMH

Met de [OAI-PMH](https://www.openarchives.org/pmh/) data provider kunnen alle concepten in een concept schema kunnen gedownload worden in RDF/XML formaat. Ook de wijzigingen kunnen op deze manier opgevraagd worden. Door gebruik te maken van de juiste metadataPrefix kunnen concepten opgevraagd worden in zowel het SKOS model als in SKOS-XL (eXtension for Labels).

De OAI identifiers in de service layer zijn conform [OAI richtlijnen](http://www.openarchives.org/OAI/2.0/guidelines-oai-identifier.htm). Ten opzichte van OpenSKOS zijn deze gewijzigd en
daardoor is het nodig om de repository opnieuw te harvesten. Daarna kunnen alle wijzigingen weer worden opgehaald.

#### Voorbeelden

- [Beschrijvende informatie over de repository ophalen](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=Identify)
- [Lijst met alle beschikbare ConceptSchemes](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListSets)
- [Lijst met concepten in SKOS](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf)
- [Lijst met alle Concepten in GTAA](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf&set=beng:gtaa) (100 concepten per request)
- [Lijst met de volgende 100 Concepten in GTAA](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf&resumptionToken=!!beng:gtaa!oai_rdf!430816!1643020890483!430916) (gebruik resumptionToken)
- [Lijst met concepten in SKOS-XL](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf_xl)
- [Lijst met concepten in SKOS-XL en specifiek ConceptScheme](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=ListRecords&metadataPrefix=oai_rdf_xl&set=beng:gtaa:Onderwerpen)
- [Vraag één specifiek concept op in SKOS-XL](https://gtaa.apis.beeldengeluid.nl/oai-pmh?verb=GetRecord&metadataPrefix=oai_rdf_xl&identifier=oai:gtaa.apis.beeldengeluid.nl:123456)

## Search

Het full-text search endpoint ondersteunt een gebruiker bij het zoeken naar een concept in de GTAA, waarbij de gebruiker, door middel van het invoeren van de juiste zoekterm, het gewenste concept vindt in de zoekresultaten.

#### Voorbeelden

- [Vind een term die het woord 'vinci' bevat ](https://gtaa.apis.beeldengeluid.nl/search?q=vinci)
- [Vind een term met meerdere tekens match '\*' wildcard](https://gtaa.apis.beeldengeluid.nl/search?q=vinc*)
- [Vind een term met enkel teken match '?' wildcard](https://gtaa.apis.beeldengeluid.nl/search?q=vin?i)

## Autocomplete

Bij autocomplete voorspelt de service layer het woord of de zin die de gebruiker wil typen zonder dat deze dit al volledig heeft ingetikt. Automatische aanvulling maakt de interactie met de computer sneller en aangenamer. [(bron: Wikipedia)](https://nl.wikipedia.org/wiki/Automatische_aanvulling)

#### Voorbeelden

[Suggesties matchend op een gedeeltelijke zoekterm 'aar' in de alt- en/of prefLabels](https://gtaa.apis.beeldengeluid.nl/autocomplete?text=aar&collection=gtaa&tenant=beng&matchMode=MATCHMODE_PREFIXLABEL&searchLabel=prefLabel&searchLabel=altLabel&returnLabel=altLabel&returnLabel=prefLabel&includeContext=True)

## SPARQL

SKOS is een ontologie in het Resource Description Framework of RDF, een standaard van het World Wide Web Consortium (W3C), oorspronkelijk ontworpen als een metadata-model, maar gaandeweg gebruikt als een formaat om gegevens in het algemeen voor te stellen en uit te wisselen. [(bron: Wikipedia)](https://nl.wikipedia.org/wiki/Resource_Description_Framework)

Meer specifieke informatie over de syntaxis en semantiek van de SPARQL-querytaal voor RDF is te vinden [hier](https://www.w3.org/TR/rdf-sparql-query/).

De service layer stelt een SPARQL endpoint beschikbaar om andere partijen in staat te stellen componenten te koppelen, zoals het [termennetwerk](https://termennetwerk.netwerkdigitaalerfgoed.nl/faq).

#### Voorbeelden

- [SELECT een concept](https://gtaa.apis.beeldengeluid.nl/sparql?&query=SELECT%20%3Fsubject%20%3Fpredicate%20%3Fobject%0AWHERE%20%7B%0A%20%20VALUES%20%3Fsubject%20%7B%20%3Chttp%3A%2F%2Fdata.beeldengeluid.nl%2Fgtaa%2F123456%3E%20%7D%0A%20%20%3Fsubject%20%3Fpredicate%20%3Fobject%0A%7D%20%0A)

## GraphQL

Het [termennetwerk](https://termennetwerk.netwerkdigitaalerfgoed.nl/faq) is een service ontwikkeld door het Netwerk Digitaal Erfgoed om termen te vinden in meerdere terminologiebronnen (zoals thesauri, classificatie systemen en referentielijsten) tegelijk.
[Github](https://github.com/netwerk-digitaal-erfgoed/network-of-terms-api)

#### Voorbeelden

- [Zoek op de term 'film' in demonstrator termennetwerk](https://termennetwerk.netwerkdigitaalerfgoed.nl/?q=film&datasets=https://data.beeldengeluid.nl/id/datadownload/0028,https://data.beeldengeluid.nl/id/datadownload/0029,https://data.beeldengeluid.nl/id/datadownload/0031)

- [Zoek interactief, gebruikmakend van de GraphiQL UI](https://termennetwerk-api.netwerkdigitaalerfgoed.nl/graphiql)
