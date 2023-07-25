---
id: http://data.beeldengeluid.nl/id/dataset/0001
title: Beeld & Geluid Catalogus Open Data
subtitle: Metadata voor de catalogusobjecten die ter beschikking worden gesteld door het Nederlands Instituut voor Beeld & Geluid.
color: ''
image: /uploads/beeld_en_geluid_wall.jpg
tags:
  - Metadata
  - CC0
  - Creative Commons
---

Deze dataset bevat de catalogusmetadata van het merendeel van de [collecties van het Nederlands Instituut voor Beeld & Geluid](https://www.beeldengeluid.nl/collectie). We hebben die metadatavelden geselecteerd die niet auteursrechtelijk beschermd zijn, of waarvan Beeld & Geluid zelf de rechthebbende is, en vrijgegeven onder een [Creative Commons CC0-licentie](https://creativecommons.org/publicdomain/zero/1.0).

Om gebruik van deze dataset te vergemakkelijken hebben we de volgende beslissingen genomen:

- We mappen relevante metadatavelden uit ons interne metadataformaat naar [schema.org](https://schema.org/).
- We voorzien in links vanuit de catalogus items metadata naar onze General Public Portal, van waaruit materialen kunnen worden besteld of worden afgespeeld.
- De metadata over de items bevatten machineleesbare rechten en licentie-informatie van [rightsstatements.org](https://rightsstatements.org/nl/) en [creativecommons.org](https://creativecommons.org/).
- Als het object ook beschikbaar is op het [Open Beelden platform](https://openbeelden.nl/) platform, is er een directe link naar dat item opgenomen in de metadata. Met deze link kan media worden gedownload in verschillende formaten.
- We bieden een SPARQL endpoint aan, waarmee gebruikers hun eigen query's kunnen bouwen of voorbeeldquery's in de gebruikersinterface kunnen gebruiken en aanpassen.
- De items worden aangeboden met een [coolURI](https://www.w3.org/TR/cooluris/), met de vorm `http://data.beeldengeluid.nl/id/{cat_type}/{daan_id}`, waarbij **cat_type** één van deze waardes is: 'series', 'season', 'program', 'scene' en **daan_id** is een uniek nummer dat het object in DAAN heeft gekregen. Items van het cat_type 'scene' corresponderen met logtrackitems van het type 'scene description' in DAAN.

We zullen deze dataset blijven uitbreiden en verbeteren. Neem contact met ons op met specifieke vereisten of use-cases die u mogelijk heeft.

### APIs

Om met de open data uit de media catalogus te werken zijn er verschillende [APIs](/nl/apis/nisv-media-catalog) beschikbaar.
