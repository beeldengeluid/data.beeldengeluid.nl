---
id: http://data.beeldengeluid.nl/id/dataset/0010
title: GTAA (Gemeenschappelijke Thesaurus Audiovisuele Archieven)
subtitle: Het Nederlands Instituut voor Beeld & Geluid heeft samen met andere Nederlandse organisaties die audiovisueel cultureel erfgoed beheren de Gemeenschappelijke Thesaurus voor Audiovisuele Archieven (GTAA) ontwikkeld. De GTAA wordt gebruikt voor het doeltreffend karakteriseren van de inhoud van audiovisueel materiaal uit het archief met labels afkomstig uit een gecontroleerde en gestructureerde lijst van termen, een thesaurus.
color: ''
image: /uploads/gtaa_network_image.jpg
tags:
  - thesaurus
---

Gemeenschappelijke Thesaurus Audiovisuele Archieven GTAA)

Het Nederlands Instituut voor Beeld & Geluid heeft samen met andere Nederlandse organisaties die audiovisueel cultureel erfgoed beheren de Gemeenschappelijke Thesaurus voor Audiovisuele Archieven (GTAA) ontwikkeld. De GTAA wordt gebruikt voor het doeltreffend karakteriseren van de inhoud van audiovisueel materiaal uit het archief met labels afkomstig uit een gecontroleerde en gestructureerde lijst van termen, een thesaurus.

Een thesaurus is een gecontroleerde woordenschat met onderlinge semantische relaties en verwijzingen tussen de termen, waardoor het zoeken in de catalogus gerichter en eenvoudiger kan plaatsvinden. Deze relaties tussen de termen zijn hiërarchisch of associatief van aard. Ze geven antwoord op vragen als: welke termen worden gebruikt die ruimer of juist specifieker het gewenste onderwerp aanduiden; op welke termen kan ik zoeken die met het onderwerp te maken hebben? Daarnaast wordt met behulp van de thesaurus voorzien in het vraagstuk van synoniemen, quasi-synoniemen, spellingvarianten en homoniemen.

Beeld & Geluid beheert de GTAA en is verantwoordelijkheid voor het regelmatig aanpassen van de thesaurus aan de actualiteit en het beschikbaar maken voor externe partijen. Voor meer informatie over (het gebruik van) de GTAA kunt u contact opnemen met de afdeling Metadatabeheer van het Nederlands Instituut voor Beeld & Geluid: [thesaurus@beeldengeluid.nl](mailto:thesaurus@beeldengeluid.nl).

De GTAA is beschikbaar gemaakt onder de [Open Database License (OdbL)](https://opendatacommons.org/licenses/odbl/1.0/) en als [linked open data](https://nl.wikipedia.org/wiki/Linked_data). Voor het beschrijven van de termen is gebruik gemaakt van het wijdverbreide [SKOS](https://www.w3.org/2004/02/skos/) model dat onder andere één van de [standaarden](https://www.forumstandaardisatie.nl/open-standaarden/skos) is voor de Nederlandse overheid en een best practice voor [terminologiebronnen](https://netwerk-digitaal-erfgoed.github.io/requirements-terminologiebronnen/) in het Netwerk Digitaal Erfgoed .

Elke term in de GTAA is een SKOS Concept met minimaal één voorkeurslabel en een [HTTP URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier). De URI's worden uitgegeven op het domein **data.beeldengeluid.nl**, met daarachter het pad **/gtaa/{nummer}**. Een voorbeeld is: http://data.beeldengeluid.nl/gtaa/123456.

De GTAA heeft meerdere delen waarin termen die tot eenzelfde categorie behoren zijn gegroepeerd. Elke categorie is een SKOS ConceptScheme, zodat gericht gezocht kan worden naar inhoudelijke termen. De categorieën van termen die voor het toegankelijk maken van het materiaal gebruikt worden, zijn:

#### [Classificatie](https://data.beeldengeluid.nl/gtaa/Classificatie)

Classificatie-as uit de GTAA met hoofd- en subrubrieken bij de as Onderwerpen. Elke hoofd- en subrubriek is een SKOS Concept met labels, notes, onderlinge relaties en relaties met topconcepten uit Onderwerpen.

#### [Genre](https://data.beeldengeluid.nl/gtaa/Genre)

Genres en programmasoorten: deze termen geven een typering of aanduiding van de productie als geheel, ze verwijzen naar de vorm, het genre of het type programma (bijvoorbeeld: 'korte film', 'lifestyleprogramma', 'hoorspel', 'politieserie'). Elk genre, inclusief labels, notes en relaties, is een SKOS Concept.

#### [Geografische Namen](https://data.beeldengeluid.nl/gtaa/GeografischeNamen)

As met geografische namen in de GTAA. Bevat namen van steden, dorpen, provincies, snelwegen, landen, etc. Elke geografische naam, inclusief labels en notes, is een SKOS Concept.

#### [Namen](https://data.beeldengeluid.nl/gtaa/Namen)

As met diverse soorten eigennamen van o.a. organisaties, muziekensembles, bevolkingsgroepen, oorlogen, verdragen, feest(dag)en, prijzen, producten, en titels van tijdschriften, boeken, films, radio- en televisieprogramma’s (bijvoorbeeld: 'KLM', 'Hindoestanen', 'Kerstmis', 'Golfoorlog', 'De aanslag'). Elke naam, inclusief labels en notes, is een SKOS Concept.

#### [Onderwerpen](https://data.beeldengeluid.nl/gtaa/Onderwerpen)

Onderwerpen of wel begrippen (bijv. 'zwemmen', 'daklozen', 'binnenvaartschepen', 'audiovisuele archieven'). Hierbij hoort de as Classificatie. Elk onderwerp, inclusief labels, notes en relaties, is een SKOS Concept.

#### [OnderwerpenBenG](https://data.beeldengeluid.nl/gtaa/OnderwerpenBenG)

As voor onderwerpstermen, bevat naast de begrippen uit de as Onderwerpen toegevoegde concepten voor specifiek beeld (shots en stockshots) en geluid. Voorbeelden: 'dorpsbeelden', 'blaffen', 'begroetingen', 'gapen', enz. Hierbij hoort de as Classificatie. Elk onderwerp, inclusief labels, notes en relaties, is een SKOS Concept.

#### [Persoonsnamen](https://data.beeldengeluid.nl/gtaa/Persoonsnamen)

Persoonsnamen zijn eigennamen van personen die als inhoudelijk element in een productie, of als Spreker, Cast-lid of Uitvoerende kunnen voorkomen. Ook komen hier de namen in voor van programmamakers en medewerkers aan de totstandkoming van audiovisuele producties. (Dit was voorheen de afzonderlijke as Makers). Elke persoonsnaam, inclusief labels en notes, is een SKOS Concept.

Daarnaast is er voor intern gebruik:

#### [Genre_Filmmuseum](https://data.beeldengeluid.nl/gtaa/Genre_Filmmuseum)

Genres in gebruik voor EYE filmmuseum.

### Opschoonactie

In 2020 is de data in de GTAA opgeschoond: Het betreft hoofdzakelijk niet gecontroleerde persoonsnamen en namen die rond de muziekcollectie van Beeld & Geluid ingestroomd waren. Via een aantal [alignments](https://www.pldn.nl/wiki/Vocabulary_alignment) hebben we zoveel mogelijk niet gecontroleerde termen gematcht en goedgekeurd. Wat overbleef hebben we uiteindelijk uit de thesaurus verwijderd.

### Verbinding Wikidata

Voor een groot aantal concepten uit GTAA/Persoonsnamen is er een alignment gemaakt met Wikidata. Door het toevoegen van de property [GTAA ID](https://www.wikidata.org/wiki/Property:P1741) op Wikidata (bijv. voor http://www.wikidata.org/entity/Q345526), kan de GTAA aan een groot aantal andere bronnen gerelateerd worden.

Om met de GTAA te werken zijn er verschillende [APIs](/nl/apis/gtaa) beschikbaar.
