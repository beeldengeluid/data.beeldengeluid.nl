---
title: B&G Muziekweb APIs
hidden: true
subtitle: Bevraag de muziekbibliotheek van Nederland
image: apis/beng-muziekweb.jpg
datasets:
  - http://data.beeldengeluid.nl/id/dataset/0026
---

In Linked Open Data (LOD) worden data op een gestructureerde manier aangeboden zodat deze eenvoudig door computers kunnen worden geïnterpreteerd. Hierdoor kunnen entiteiten uit verschillende bronnen op internet automatisch gekoppeld worden, ook wel het semantisch web genoemd. Het maakt de gegevens rijker en nuttiger voor de gebruiker.

Muziekweb biedt een groot deel van haar metadata aan via Linked Data protocollen. Dit maakt het mogelijk de op de website aanwezige informatie in te zetten voor breder gebruik, zoals zoekmachines die in meerdere bronnen tegelijk kunnen zoeken (bijvoorbeeld in het [termennetwerk](termennetwerk.netwerkdigitaalerfgoed.nl/) van Netwerk Digitaal Erfgoed of het publiceren van verrijkte data uit vele bronnen zoals op Oorlogsbronnen is gebeurd.

Voor de gegevens van Muziekweb is een ontologie ontworpen die de standaarden van schema.org uitbreidt. Het volledige vocabulaire is te vinden op de volgende locatie:
https://data.muziekweb.nl/MuziekwebOrganization/vocabulary

De data die als Linked Open Data worden aangeboden zijn beschikbaar op https://data.muziekweb.nl/. Op dit adres zijn de Linked Data direct toegankelijk en is het mogelijk om zoekopdrachten uit te voeren met behulp van de SPARQL-interface, een zoektaal om te zoeken en selecteren in gegevens uit Resource Description Framework (RDF) bronnen.

## SPARQL

Meer specifieke informatie over de syntax en semantiek van de SPARQL-querytaal voor RDF is [hier](https://www.w3.org/TR/rdf-sparql-query/) te vinden.

#### Voorbeelden

- [Open een gebruikersinterface naar het SPARQL endpoint in een browser](https://data.muziekweb.nl/MuziekwebOrganization/Muziekweb/sparql/Muziekweb)
- Gebruik een programma als **curl** om ruwe JSON resultaten op te vragen:

```
curl -H "Accept: application/sparql-results+json" https://api.data.muziekweb.nl/datasets/MuziekwebOrganization/Muziekweb/services/Muziekweb/sparql?query="PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%20PREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%20SELECT%20%2A%20WHERE%20%7B%20%3Fsub%20%3Fpred%20%3Fobj%20.%20%7D%20LIMIT%2010"
```

Houd er rekening mee dat de query [urlencoded](https://www.urlencoder.org/) moet zijn.

## License

Linked open data voor [NISV Muziekweb](/nl/datasets/muziekweb) is beschikbaar gemaakt onder een Open Data Commons Attribution License (ODC-By).
