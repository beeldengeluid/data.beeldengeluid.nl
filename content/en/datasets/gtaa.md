---
id: http://data.beeldengeluid.nl/id/dataset/0010
title: Common Thesaurus Audiovisual Archives
subtitle: Sound & Vision has teamed up with several other Dutch organizations that manage audiovisual cultural heritage to develop the Gemeenschappelijke Thesaurus voor Audiovisuele Archieven (Common Thesaurus for Audiovisual Archives, GTAA). The GTAA is used for efficient characterization of the content of audio-visual material from the archive with labels derived from a controlled and structured list of terms, a thesaurus.
color: ''
image: /uploads/gtaa_network_image.jpg
tags:
  - thesaurus
---

Sound & Vision has teamed up with other Dutch heritage organizations that manage audiovisual cultural heritage to develop the Common Thesaurus for Audiovisual Archives (Gemeenschappelijke Thesaurus voor Audiovisuele Archieven) or GTAA. The GTAA is used for characterization of the content of audiovisual material from the archive with labels derived from a controlled and structured list of terms, a thesaurus.

A thesaurus is a controlled vocabulary with mutual semantic relationships and references between the terms, which makes searching in the catalog more focused and easier. These relationships between the terms are hierarchical or associative in nature. They answer questions such as: which terms are used that more broadly or more specifically indicate the desired subject; What terms can I search for that have to do with the subject? In addition, the thesaurus helps to solve the problem of synonyms, quasi-synonyms, spelling variants and homonyms.

Sound & Vision manages the GTAA and is responsible for regularly updating the thesaurus to reflect current events and making it available to external parties. For more information about (the use of) the GTAA, please contact the Metadata Management department of the Netherlands Institute for Sound & Vision: [thesaurus@beeldengeluid.nl](mailto:thesaurus@beeldengeluid.nl).

The GTAA is made available under the [Open Database License (OdbL)](https://opendatacommons.org/licenses/odbl/1.0/) and as [linked open data](https://www.den.nl/aan-de-slag/uitvoeren/hoe-maak-je-het-beschikbaar/linked-open-data). For describing terms we use the [SKOS](https://www.w3.org/2004/02/skos/) model that is widely used. Every term in the GTAA is a SKOS Concept with at least one preferred label and an [HTTP URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier). In general, the labels and notes are in the Dutch language only.

Each term in the GTAA is a SKOS Concept with at least one preference label and a [HTTP URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier). The URIs are issued on the domain **data.beeldengeluid.nl**, followed by the path **/gtaa/{number}**. An example is: http://data.beeldengeluid.nl/gtaa/123456.

The GTAA has several parts in which terms belonging to the same category are grouped together. Each category is a SKOS ConceptScheme, so that specific terms can be searched for. The categories of terms used for making the material accessible are:

#### [Classification](https://data.beeldengeluid.nl/gtaa/Classificatie)

Classification axis from the GTAA with main and sub-categories at the Subjects axis. Each main and sub-section is a SKOS Concept with labels, notes, interrelations and relationships with top concepts from Subjects.

#### [Genre](https://data.beeldengeluid.nl/gtaa/Genre)

Genres and program types: these terms describe or indicate the production as a whole, they refer to the form, genre or type of program (for example: 'short film', 'lifestyle programme', 'radio play', 'police series'). Every genre, including labels, notes and relations, is a SKOS Concept.

#### [Geographical Names](https://data.beeldengeluid.nl/gtaa/GeografischeNamen)

Axis with geographic names in the GTAA. Contains names of cities, towns, provinces, highways, countries, etc. Each geographical name, including labels and notes, is a SKOS Concept.

#### [Names](https://data.beeldengeluid.nl/gtaa/Namen)

As with various types of proper names of organizations, music ensembles, population groups, wars, treaties, holidays, prizes, products, and titles of magazines, books, films, radio and television programs (for example: 'KLM', 'Hindoestanen' , 'Christmas', 'Gulf War', 'The Attack'). Every name, including labels and notes, is a SKOS Concept.

#### [Subjects](https://data.beeldengeluid.nl/gtaa/Onderwerpen)

Subjects or concepts (eg 'swimming', 'homeless people', 'inland vessels', 'audiovisual archives'). This includes the Classification axis. Every subject, including labels, notes and relations, is a SKOS Concept.

#### [SubjectsBenG](https://data.beeldengeluid.nl/gtaa/OnderwerpenBenG)

Axis for subject terms, contains additional concepts for specific images (shots and stock shots) and sound in addition to the concepts from the Subjects axis. Examples: 'village images', 'barking', 'greeting', 'yawning', etc. This includes the Classification axis. Every subject, including labels, notes and relations, is a SKOS Concept.

#### [Person names](https://data.beeldengeluid.nl/gtaa/Persoonsnamen)

Person names are proper names of persons who may appear as an element of content in a production, or as Speaker, Cast member or Performer. It also contains the names of program makers and employees involved in the creation of audiovisual productions. (This used to be the separate axis Makers). Each person's name, including labels and notes, is a SKOS Concept.

In addition, there is for internal use:

#### [Genre_Filmmuseum](https://data.beeldengeluid.nl/gtaa/Genre_Filmmuseum)

Genres in use for EYE film museum.

### Concept Cleanup

In 2020, the data in the GTAA has been cleaned up: It mainly concerns unverified personal names and names that had flown into the music collection of Sound & Vision. Through a number of [alignments](https://www.pldn.nl/wiki/Vocabulary_alignment) we matched and approved as many unchecked terms as possible. We eventually removed what was left from the thesaurus.

### Alignment Wikidata

An alignment has been made with Wikidata for a large number of concepts from GTAA Person names. By adding the property [GTAA ID](https://www.wikidata.org/wiki/Property:P1741) on Wikidata (e.g. for http://www.wikidata.org/entity/Q345526), the GTAA can be related to many other sources.

### APIs

For working with the GTAA several [APIs](/apis/gtaa) are available.
