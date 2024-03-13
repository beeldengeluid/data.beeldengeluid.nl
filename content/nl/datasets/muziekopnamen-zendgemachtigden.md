---
id: http://data.beeldengeluid.nl/id/dataset/0028
title: Muziekopnamen zendgemachtigden (MOZ)
subtitle: De audiocollectie (met een kleine hoeveelheid videomateriaal) Muziekopnamen Zendgemachtigden (MOZ) bevat originele, al of niet uitgezonden concert- en studioregistraties. De collectie bestaat uit ruw materiaal. 
color: ''
image: '/uploads/NL-HaNA_2.24.01.05_0_923-3652-groot.jpg'
tags: []
showDashboard: true
---

### Samenvatting
De MOZ (Muziekopnamen Zendgemachtigden) collectie bevat opnamen van concerten in de 20e en 21e eeuw,
bedoeld voor uitzending door Nederlandse publieke omroepen op TV en Radio. De collectie bevat overwegend audio-opnamen voor radio.
Zie [hieronder voor meer details](#details) over deze collectie.

### Toegang
Leer de MOZ dataset kennen via:
<ul>
<li>- <a href="https://mediasuite.clariah.nl/tool/single-search?queryId=6688eee0-db29-4f6e-9eae-fdc28d38cc64">de Media Suite</a> (metadata beschikbaar voor iedereen, audio/video beschikbaar voor gebruikers met een log-in)</li>
<li>- de <a href="https://cat.apis.beeldengeluid.nl/#transientDatasources=https%3A%2F%2Fcat.apis.beeldengeluid.nl%2Fsparql&query=PREFIX%20sdo%3A%20%3Chttps%3A%2F%2Fschema.org%2F%3E%0A%0A%23%20Show%20the%20ID%20and%20title%20of%20all%20concerts%20that%20are%20part%20of%20the%20Dutch%20Broadcast%20Concert%20%0A%23%20(MOZ)%20collection%2C%20in%20alphabetical%20order%0A%0ASELECT%20DISTINCT%20%3FprogramUri%20%3FprogramName%0AWHERE%0A%7B%0A%20%23%20Filter%20for%20programmes%20belonging%20to%20the%20series%20%22Muziekopnamen%20Zendgemachtigden%20(MOZ)%22%2C%20using%20its%20ID%0A%20%3FprogramUri%20sdo%3ApartOfSeason%2Fsdo%3ApartOfSeries%20%3Chttp%3A%2F%2Fdata.beeldengeluid.nl%2Fid%2Fseries%2F2101608030025711131%3E%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20sdo%3Aname%20%3FprogramName%20.%20%0A%7D%20ORDER%20BY%20%3FprogramName">SPARQL endpoint</a> (metadata)</li>
<li>- de <a href="/nl/apis/nisv-media-catalog#search">Search API</a> (metadata)</li>
<li>- deze download (metadata) [dit is nep, gewoon om het idee te geven]</li>
</ul>
<br>
De metadata (beschrijvende informatie) voor deze dataset is gepubliceerd in <a href="https://beeldengeluid.github.io/beng-lod-ontospy/">een subset van schema.org</a>.
<br>
<br>

### Links
<ul>
<li> - Bekijk deze dataset in de <a href="https://datasetregister.netwerkdigitaalerfgoed.nl/show.php?lang=nl&uri=http%3A%2F%2Fdata.beeldengeluid.nl%2Fid%2Fdataset%2F0028">NDE dataregister</a></li>
<li> - Bekijk deze dataset in de Clariah dataregister [dit is nep, gewoon om het idee te geven]</li>
<li> - Ontdek enkele statistieken over deze dataset in deze <a href="https://colab.research.google.com/github/mwigham/linked_data_notebooks/blob/main/MOZ%20Linked%20Data%20visualisations.ipynb">interactieve notebook</a>
</ul>
<br>

### Details
Van Beethoven tot Metallica, van Pinkpop tot The Big Sing. De MOZ (Muziekopnamen Zendgemachtigden) collectie bevat opnames van concerten 
bedoeld voor uitzending door Nederlandse publieke omroepen op TV en Radio. De collectie bevat overwegend audio-opnames voor radio.

De eerste opnames stammen van vroeg in de 20e eeuw. Nieuwe concerten worden steeds uitgezonden en periodiek toegevoegd aan de collectie. 
De concerten zijn heel divers; bijna 200 verschillende muziekgenres zijn vertegenwoordigd. 
Het grootste genre is klassieke muziek, maar jazz, theatermuziek, volksmuziek, indie en pop komen ook voor.
De concerten zijn overwegend - maar niet uitsluitend - geproduceerd door publieke omroepen.

De meeste concerten in de collectie bevatten informatie over de betrokken artiesten. Er zijn meer dan 30.000 artiesten, zowel individueen als muziekgezelschappen. 
De personen zijn deels gelinkt aan Wikidata en Discogs.

Personen zijn aan een concert gelinkt via een bepaalde rol, zoals artiest of maker. Voor sommige personen is specifiekere rolinformatie beschikbaar, zoals welk
instrument ze speelden. Er zijn 282 rollen die gewoon tekst zijn, 311 rollen die zijn gelinkt aan [Wikidata](https://www.wikidata.org/) entiteiten, en 201 rollen die zijn gelinkt aan de [Uitvoeringsmedium](https://rdacommissie.home.blog/uitvoeringsmedium/) ontologie.
NB: dezelfde rol kan aan zowel Wikidata als Uitvoeringsmedium gelinkt zijn.

De metadata bevat opnamelocaties. Voor ongeveer een derde van de concerten zijn deze locaties gelinkt aan Wikidata locaties.

Deze collectie is beschikbaar gemaakt als Linked Data, met ondersteuning vanuit de [Polifonia](https://polifonia-project.eu/) en [Podiumkunst.net](https://www.podiumkunst.net/) projecten. 

Ontdek meer over de MOZ collectie in <a href="/nl/showcases//moz-dataset-blog">dit artikel