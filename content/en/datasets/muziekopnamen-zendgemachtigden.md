---
id: http://data.beeldengeluid.nl/id/dataset/0028
title: Muziekopnamen zendgemachtigden (MOZ)
subtitle: The audio collection (with also a small amount of video) 'Muziekopnamen zendgemachtigden (MOZ)' contains original concert and studio recordings intended for broadcast, whether or not they were actually broadcast. The collection consists of raw material.
color: ''
image: '/uploads/NL-HaNA_2.24.01.05_0_923-3652-groot.jpg'
tags: []
showDashboard: true
---

### Summary

The MOZ (Muziekopnamen Zendgemachtigden) collection contains recordings of concerts in the 20th and 21st centuries,
intended for broadcast by Dutch public service broadcasters on TV and Radio. The collection contains mainly audio recordings for radio.
See [below for more details](#details) about this collection.

### Access

Get to know the MOZ dataset via:

<ul>
<li>- the <a href="https://mediasuite.clariah.nl/tool/single-search?queryId=6688eee0-db29-4f6e-9eae-fdc28d38cc64">Media Suite</a> (metadata available for everyone, audio/video available for users with an account)</li>
<li>- the <a href="https://cat.apis.beeldengeluid.nl/#transientDatasources=https%3A%2F%2Fcat.apis.beeldengeluid.nl%2Fsparql&query=PREFIX%20sdo%3A%20%3Chttps%3A%2F%2Fschema.org%2F%3E%0A%0A%23%20Show%20the%20ID%20and%20title%20of%20all%20concerts%20that%20are%20part%20of%20the%20Dutch%20Broadcast%20Concert%20%0A%23%20(MOZ)%20collection%2C%20in%20alphabetical%20order%0A%0ASELECT%20DISTINCT%20%3FprogramUri%20%3FprogramName%0AWHERE%0A%7B%0A%20%23%20Filter%20for%20programmes%20belonging%20to%20the%20series%20%22Muziekopnamen%20Zendgemachtigden%20(MOZ)%22%2C%20using%20its%20ID%0A%20%3FprogramUri%20sdo%3ApartOfSeason%2Fsdo%3ApartOfSeries%20%3Chttp%3A%2F%2Fdata.beeldengeluid.nl%2Fid%2Fseries%2F2101608030025711131%3E%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20sdo%3Aname%20%3FprogramName%20.%20%0A%7D%20ORDER%20BY%20%3FprogramName">SPARQL endpoint</a> (metadata)</li>
<li>- the <a href="/apis/nisv-media-catalog#search">Search API</a> (metadata)</li>
</ul>
<br>
The metadata (descriptive information) for this dataset is published using <a href="https://beeldengeluid.github.io/beng-lod-ontospy/">a subset of schema.org</a>.
<br>
<br>

### Links

<ul>
<li> - View this dataset in the <a href="https://datasetregister.netwerkdigitaalerfgoed.nl/show.php?lang=nl&uri=http%3A%2F%2Fdata.beeldengeluid.nl%2Fid%2Fdataset%2F0028">NDE dataregister</a></li>
<li> - Discover some statistics about this collection in this <a href="https://colab.research.google.com/github/mwigham/linked_data_notebooks/blob/main/MOZ%20Linked%20Data%20visualisations.ipynb">interactive notebook</a>
<li> - Discover more about the MOZ collection in <a href="/showcases//moz-dataset-blog">this article</a></li>
</ul>
<br>

### Details

From Beethoven to Metallica, from Pinkpop to The Big Sing. The MOZ (Muziekopnamen Zendgemachtigden) collection contains concert
recordings intended for broadcast by the Dutch public TV and radio broadcasters. The collection primarily consists of audio recordings for radio.

The earliest recordings are from early in the 20th century. New concerts are still broadcast and periodically added to the collection.
The concerts are very diverse; almost 200 different musical genres are represented.
The largest genre is classical music, but jazz, theatre music, folk, indie and pop also appear.
The concerts are predominantly - but not exclusively - produced by public broadcasters.

Most of the concerts in the collection contain information about the artists involved. There are more than 36,000 artists, both individuals and musical groups.
Some of the persons are linked to WikiData or Discogs.

Persons are linked to a concert in a particular role, such as artist or creator. For some persons, more specific role information is available, such as the instrument
they played. There are 282 roles that are simple text, 311 roles that are linked to [Wikidata](https://www.wikidata.org/) entities, and 201 roles that are linked to the [Performance Medium](https://rdacommissie.home.blog/uitvoeringsmedium/) ontology.
Note that the same role may be linked to both Wikidata and Performance Medium.

The metadata includes recording locations. For approximately a third of the concerts, these locations have been linked to Wikidata locations.

This dataset is part of the dataset [Sound & Vision catalog Open Data](/nl/datasets/nisv-media-catalog).
This collection has been made available as Linked Data, with support from the [Polifonia](https://polifonia-project.eu/) and [Podiumkunst.net](https://www.podiumkunst.net/) projects. It can also be viewed in the <a target="_blank" href="https://mediasuite.clariah.nl/tool/single-search?queryId=6688eee0-db29-4f6e-9eae-fdc28d38cc64">Media Suite</a> (metadata available for everyone, users with a Media Suite account can also play certain concerts)

Don't forget to take a look at the 'Facts' en 'Dashboard' tabs on this page.
