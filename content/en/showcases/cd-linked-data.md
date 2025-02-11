---
title: "Linked data in practice: Which CDs are Dutch heritage?"
subtitle: How you can use linked data to discover Dutch heritage in a mountain of CDs
image: articles/cds_depot.jpg
imageCaption: "Storage of CDs at Sound & Vision. Photo: Margot Knijn"
tags: linked data
lab: opendatalab
publishedOn: '2025-02-15'
datasets: []
---

The potential of Linked Data is broadly acknowledged. But it is a lot of work to model and publish data, and after that it is a complex chore to link the data to other collections. Sometimes you ask yourself: will we ever reap the benefits? Well, the answer is definitely - yes! 

## A musical puzzle

Until 2012 the Sound & Vision collection was available for broadcasters via the lending library. If a programme maker or a DJ wanted to play music, then it often came from us. That is why in 2024 there were racks of more than 220,000 CDs in the depots of Sound & Vision. What is more, Muziekweb has been part of Sound & Vision since 2022. CDs can be borrowed and listened to via Muziekweb, via public libraries. The Muziekweb collection, at present housed in Rotterdam, contains more than 700,000 CDs. That's 10km of CDs in total!

There is a significant overlap betwen these collections. It's not necessary to store these CDs twice and, as already mentioned, they take up a lot of space. For this reason we are applying our Collection policy to the CDs in Hilversum, and we want to identify Dutch heritage so it can be physically preserved at Sound & Vision. In this case, we define Dutch heritage as CDs with Dutch performers or composers, or that is recorded in a Dutch location [^1]. The remaining CDs will be given another home.

For many of the pop CDs we can determine the heritage status based on information in the metadata. But this is not watertight, because the available metadata about the nationality of the artists is limited to the most important performers. So the Dutch Frans Elsen (pianist) who plays together with Chet Baker could be overlooked. And for classical music only the nationality of the composer is registered, not that of the musicians, so the Concertgebouworkest performing Mahler would not be recognised as Dutch heritage based on the metadata.

So how do we determine what is Dutch heritage? With so many CDs it is not an option to walk along the racks and read all the CD cases.


## The power of Linked Data

Linked Data offers the solution. The results of previous S&V projects in which specific persons were linked to external sources have been successfully applied to this case. Via [Discogs](https://www.discogs.com/), a popular online music database, and [Wikidata](https://www.wikidata.org/), the structured data equivalent of Wikipedia, we can automatically discover which persons are Dutch.

In Wikidata, the nationality of a person is mostly stated explicitly. Job done, you might say. However, there is a catch. Recorded music is a relatively recent phenomenon, but the composers of classical works come from many different historical eras. Including eras in which 'the Netherlands' as such didn't exist, but e.g. the 'Republic of the Seven United Netherlands' did. We therefore had to find all the relevant historical entities. In addition to this, the overseas territories and former colonies of the Netherlands are part of our cultural heritage, so we include Suriname and Indonesia, for example. Therefore, as with every data question, it is essential to have a solid understanding of the underlying domain. That is why we work together with data experts and music experts.

For Discogs, it is more complicated. There is no information about the nationality of an artist explicitly registered in the metadata. We have to search the description of a person for terms that could indicate their background, taking both Dutch and English languages into account. For example, terms such as "Netherlands", "Nederland", "Dutch", "Netherlands Antilles" etc. We regard detection of one of these terms as sufficient to indicate that someone belongs to Dutch cultural heritage. Of course, this doesn't always work perfectly. For example, Galina Oestvolskaja is incorrectly detected as being Dutch, because her Discogs description contains the following text: "Галина Ивановна Уствольская in Russian, usually romanized as Galina Ivanovna Ustvolskaya in English, Ustwolskaja in German, Oustvolskaïa in French and *Oestvolskaja in Dutch*.". However, checking samples with music experts gave us sufficient confidence to use the results. 

The recording locations of the CDs were not yet linked to Wikidata, so this step had to be carried out first. We used the [OpenRefine](https://openrefine.org/) tool for this, which matched the locations to Wikidata. Uncertain matches were manually approved or rejected. OpenRefine then retrieved the associated countries from Wikidata, so that we could identify Dutch locations. 

Locations and persons can be listed at the level of the CD or a track, and persons can be listed in many different roles. So we wrote code to extract complete lists of locations and persons from the CD collection, and to subsequently look up the nationality of the persons in Wikidata and Discogs, and export the locations for processing in OpenRefine.

When consulting sources such as Discogs and Wikidata, it is essential to comply with their terms and conditions. For this reason, we built in time limits in our code, which meant that it took quite a long time to check both sources for all persons. So we put our code into a so-called 'container', so that it could be easily run in the cloud - much faster and more convenient than running it on a personal laptop.


## The power of the expert

Not all persons are linked to Discogs or Wikidata, and where a link is present, there is not always sufficient information available to automatically determine their nationality. The remaining persons were manually checked by our intrepid music specialists. By generating a list of the persons, their links to Discogs/Wikidata (if present) and the number of CDs they are related to, we made it possible for the experts to work in an efficient and targeted manner.

## Great result

We combined all the information about persons and locations from Wikidata, Discogs and music experts to be able to give an indication, per CD, of whether it is Dutch heritage or not. The 'evidence' is also registered. For example, despite its English name, "Great pianists of the 20th century" is Dutch heritage because the performer Edo de Waart is Dutch, according to Discogs and Wikidata. In this way we keep the process transparent and make it possible to check the results very specifically. Music experts did this for samples, with a positive result. In this way, we produced a list of more than 12,000 classical CDs and 36,500 pop CDs that are Dutch heritage: that means at least one crew member, performer, composer or location related to the Netherlands. These CDs will be included in the collection of Sound & Vision, where they will be sustainably preserved.

## Great unexpected benefit

We applied Linked data to this case with the aim of answering the question: which CDs belong to Dutch heritage? However, the information we gathered to answer this question can also be used for other purposes. For example, with the help of the coordinate information for locations in Wikidata you can now explore the CDs that have recording location information via this map of the Netherlands. The large cities dominate, yet recording locations are spread all over the country, from Uithuizen in the north to Noorbeek in the south; from Vrouwenpolder in the west to Oldenzaal in the east.

<iframe src='https://flo.uri.sh/visualisation/21572628/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/21572628/?utm_source=embed&utm_campaign=visualisation/21572628' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

Do you want to know what was recorded in a particular location? Look at the overview below. Browse through the list, or search for the location that interests you. In this way, you can discover which instrument connects the four locations mentioned above.

<iframe src='https://flo.uri.sh/visualisation/21572668/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/21572668/?utm_source=embed&utm_campaign=visualisation/21572668' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

[^1]: The complete definition of Dutch heritage for music used at Sound & Vision is much broader, including for example music that is performed on uniquely Dutch instruments, or that has became part of the collective consciousness. Such aspects are impossible to check based on the metadata we have available, which is why we used a more limited definition. The definition of Dutch heritage is in any case a subject for continuing debate.