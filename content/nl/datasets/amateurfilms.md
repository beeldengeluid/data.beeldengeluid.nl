---
id: http://data.beeldengeluid.nl/id/dataset/0029
title: Amateurfilms
subtitle: Familiefilms, reisfilms, fictiefilms en animatie
color: ''
image: /uploads/amateurfilms-1.jpg
tags: []
showDashboard: true
---

### Samenvatting

De amateurfilmcollectie bevat films gemaakt vanaf de jaren 1910 tot nu. Het bevat familiefilms, reisfilms, fictiefilms en animatie. De films waren bedoeld voor vertoningen thuis of op de filmclubs in Nederland. Inmiddels zijn het geliefde onderwerpen voor historici en mediamakers. 

Zie [hieronder voor meer details](#details) over deze collectie.

### Toegang

Leer de Amateurfilm Collectie kennen via:

<ul>
<li>- de <a href="https://mediasuite.clariah.nl/tool/single-search?queryId=a66581b0-509c-4527-8bd0-559cb513ec58">Media Suite</a> (metadata beschikbaar voor iedereen, audio/video deels beschikbaar voor iedereen, volledig beschikbaar voor gebruikers met een account)</li>
<li>- de <a href="https://cat.apis.beeldengeluid.nl/sparql#transientDatasources=https%3A%2F%2Fcat.apis.beeldengeluid.nl%2Fsparql&query=PREFIX%20sdo%3A%20%3Chttps%3A%2F%2Fschema.org%2F%3E%0A%0ASELECT%20DISTINCT%20%3Fprogram_id%20%3Ftitle%0AWHERE%20%7B%0A%20%20GRAPH%20%3Chttp%3A%2F%2Fdata.rdlabs.beeldengeluid.nl%2Fcat%2F%3E%20%7B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%3Fprogram_id%20sdo%3ApartOfSeries%2Fsdo%3AadditionalType%20%22Bewegend%20beeld%20-%20Smalfilm%22%5E%5Esdo%3AText%20.%0A%20%20%20%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%3Fprogram_id%20sdo%3AadditionalType%20%22Bewegend%20beeld%20-%20Smalfilm%22%5E%5Esdo%3AText%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%3Fprogram_id%20a%20sdo%3ACreativeWork%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fprogram_id%20sdo%3Aname%20%3Fprogram_title%0A%20%20%7D%0A%20%20BIND(STR(COALESCE(%3Fprogram_title%2C%20'Untitled'%5E%5Exsd%3Astring))%20AS%20%3Ftitle)%0A%7D">SPARQL endpoint</a> (metadata)</li>
<li>- de <a href="/nl/apis/nisv-media-catalog#search">Search API</a> (metadata)</li>
</ul>
<br>
De metadata (beschrijvende informatie) voor deze dataset is gepubliceerd met gebruik van <a href="https://beeldengeluid.github.io/beng-lod-ontospy/">een subset van schema.org</a>.
<br>
<br>

### Links

<ul>
<li> - Bekijk deze dataset in het <a href="https://datasetregister.netwerkdigitaalerfgoed.nl/show.php?lang=nl&uri=http%3A%2F%2Fdata.beeldengeluid.nl%2Fid%2Fdataset%2F0029">NDE dataregister</a></li>
</ul>
<br>

### Details

De eerste amateurfilmer in Nederland was kinderboekenschrijver Dick Laan. Hij maakte fictiefilmpjes in de jaren 10 over onder andere de padvinderij. Maar smalfilm begint pas echt in de jaren 20 met de komst van de kleinere filmformaten 9,5mm en 16mm en later in de jaren 30 met het 8mm-formaat. 

De collectie amateurfilms van Beeld & Geluid laat een geschiedenis zien van het huiselijke leven in Nederland en zijn voormalige koloniën. Het zijn vaak beelden die nooit met de professionele camera zijn vastgelegd en nu zo waardevol blijken voor onze geschiedenis. De collectie bevat ook films gemaakt door de filmhobbyist. Het zijn films die vooraf met een scenario en draaiboek zijn bedacht en vaak met titels of muziek voorzien. Meestal waren deze filmers aangesloten bij één van de vele filmclubs in het land. 

De collectie bevat een paar duizend smalfilms en ook een aantal video’s. 

Deze dataset is onderdeel van de dataset [Sound & Vision catalog Open Data](/nl/datasets/nisv-media-catalog).
Deze collectie is beschikbaar gemaakt als Linked Data, met ondersteuning vanuit [DC4EU](https://dc4eu.nl/) en [CLARIAH](https://clariah.nl/).
De collectie kan ook bekeken worden in de <a target="_blank" href="https://mediasuite.clariah.nl/tool/single-search?queryId=a66581b0-509c-4527-8bd0-559cb513ec58">Media Suite</a>

Kijk ook eens naar het 'Facts' tab op deze pagina.
