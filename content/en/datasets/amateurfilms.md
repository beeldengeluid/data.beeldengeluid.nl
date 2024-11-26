---
id: http://data.beeldengeluid.nl/id/dataset/0029
title: Amateurfilms
subtitle: Family films, travelogues, fiction films and animation
color: ''
image: /uploads/amateurfilms-1.jpg
tags: []
showDashboard: false
---

### Summary

The amateurfilm collection contains films recorded from the 1910’s until now. It consists of family films, travelogues, fiction films and animation. It was intended for screenings at home or at the filmclubs in the Netherlands. Nowadays they are loved by historians and filmmakers.  

See [below for more details](#details) about this collection.

### Access

Get to know the Amateurfilms dataset via:

<ul>
<!-- <li>- the <a href="https://mediasuite.clariah.nl/tool/single-search?queryId=xxx">Media Suite</a> (metadata available for everyone, audio/video available for users with an account)</li> -->
<li>- the <a href="https://cat.apis.beeldengeluid.nl/sparql#transientDatasources=https%3A%2F%2Fcat.apis.beeldengeluid.nl%2Fsparql&query=PREFIX%20sdo%3A%20%3Chttps%3A%2F%2Fschema.org%2F%3E%0A%0ASELECT%20DISTINCT%20%3Fprogram_id%20%3Ftitle%0AWHERE%20%7B%0A%20%20GRAPH%20%3Chttp%3A%2F%2Fdata.rdlabs.beeldengeluid.nl%2Fcat%2F%3E%20%7B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%3Fprogram_id%20sdo%3ApartOfSeries%2Fsdo%3AadditionalType%20%22Bewegend%20beeld%20-%20Smalfilm%22%5E%5Esdo%3AText%20.%0A%20%20%20%20%7D%0A%20%20%20%20UNION%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%3Fprogram_id%20sdo%3AadditionalType%20%22Bewegend%20beeld%20-%20Smalfilm%22%5E%5Esdo%3AText%20.%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%3Fprogram_id%20a%20sdo%3ACreativeWork%0A%20%20OPTIONAL%20%7B%0A%20%20%20%20%3Fprogram_id%20sdo%3Aname%20%3Fprogram_title%0A%20%20%7D%0A%20%20BIND(STR(COALESCE(%3Fprogram_title%2C%20'Untitled'%5E%5Exsd%3Astring))%20AS%20%3Ftitle)%0A%7D">SPARQL endpoint</a> (metadata)</li>
<li>- the <a href="/apis/nisv-media-catalog#search">Search API</a> (metadata)</li>
</ul>
<br>
The metadata (descriptive information) for this dataset is published using <a href="https://beeldengeluid.github.io/beng-lod-ontospy/">a subset of schema.org</a>.
<br>
<br>

### Links

<ul>
<li> - View this dataset in the <a href="https://datasetregister.netwerkdigitaalerfgoed.nl/show.php?lang=nl&uri=http%3A%2F%2Fdata.beeldengeluid.nl%2Fid%2Fdataset%2F0029">NDE dataregister</a></li>
</ul>
<br>

### Details
The first amateur filmmaker in the Netherlands was Dick Laan, author of the famous children’s books Pinkeltje. He made fictional films in the 1910s about the Boy Scouts. But amateur film only really started in the 1920s with the arrival of the smaller film formats 9.5mm and 16mm and later in the 1930s with the 8mm format. 

The collection of amateur films from Beeld & Geluid shows a history of domestic life in the Netherlands and its former colonies. These are often images that were never captured with a professional camera and now prove so valuable to our history. The collection also includes films made by the film hobbyist. These are films that have been recorded with a script and often provided with titles or music. These filmmakers were usually affiliated with one of the many film clubs in the country. 

The collection contains a few thousand amateur films and also a number of videos.

This dataset is part of the dataset [Sound & Vision catalog Open Data](/nl/datasets/nisv-media-catalog).
This collection has been made available as Linked Data, with support from [DC4EU](https://www.dc4eu.eu/) and [CLARIAH](https://clariah.nl/). It can also be viewed in the <a target="_blank" href="https://mediasuite.clariah.nl/tool/single-search?queryId=xxx">Media Suite</a> (metadata available for everyone, users with a Media Suite account can also play certain concerts)

Don't forget to take a look at the 'Facts' tab on this page.
