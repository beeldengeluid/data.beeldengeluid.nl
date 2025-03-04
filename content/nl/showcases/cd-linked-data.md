---
title: "Linked data in de praktijk: Welke cd's zijn Nederlands erfgoed?"
subtitle: Hoe je met linked data Nederlands cultureel erfgoed kan ontdekken in een berg van cd's
image: articles/cds_depot.jpg
imageCaption: "Opslag van cd's bij Beeld & Geluid. Foto: Margot Knijn"
tags: linked data
lab: opendatalab
publishedOn: '2025-02-13'
datasets: []
---

De potentie van Linked Data wordt breed erkend. Maar het is veel werk om data te modelleren en te publiceren, en daarna nog een ingewikkeld karwei om de data te linken aan andere collecties. Soms vraag je je af: gaan we er ooit de vruchten van plukken? Nou, het antwoord is absoluut - ja!

## Een muzikale puzzel

Tot 2012 was de Beeld & Geluid cd collectie beschikbaar voor de omroepen via de uitleen. Wilde een programmamaker of DJ muziek draaien, dan kwam het vaak bij ons vandaan. Daarom stonden er anno 2024 in de depots van Beeld & Geluid in Hilversum rekken met meer dan 220.000 cd's. Bovendien is Muziekweb sinds 2022 onderdeel van Beeld en Geluid. Via Muziekweb kunnen cd's geleend en beluisterd worden via de openbare bibliotheken. De collectie van Muziekweb, op dit moment gehuisvest in Rotterdam, bevat ruim 700.000 cd's. Dat is bij elkaar 10 kilometer aan cd’s!

Er is een flinke overlap tussen deze collecties. Op de cd’s in Hilversum passen we daarom ons Collectiebeleid toe en willen we het Nederlands erfgoed identificeren en fysiek bewaren. In dit geval definiëren we Nederlands erfgoed als cd's met aan Nederland gerelateerde uitvoerenden of componisten, of die opgenomen zijn op een Nederlandse locatie [^1]. 

Voor veel van de populaire muziek cd's kunnen we de erfgoedstatus vaststellen op basis van de informatie vastgelegd in de metadata. Maar dat is niet waterdicht want de beschikbare metadata over de nationaliteit van de artiesten beperkt zich tot de meest belangrijke uitvoerenden. Dus de Nederlandse Frans Elsen (pianist) die meespeelt met Chet Baker zou je dan zomaar missen. En voor klassieke muziek is alleen vastgelegd wat de nationaliteit is van de componist en niet van de musici, dus het Concertgebouworkest dat Mahler uitvoert wordt op basis van de metadata niet als NL erfgoed herkend.

Dus hoe stellen we vast wat Nederlands erfgoed is? Met zoveel cd's is langs de rekken lopen en elk hoesje lezen geen optie.

## De kracht van Linked Data

De oplossing komt vanuit Linked Data. De resultaten van eerdere B&G-projecten waarbij bepaalde personen in onze thesaurus zijn gelinkt aan externe bronnen hebben we hier met succes ingezet. Via [Discogs](https://www.discogs.com/), een populaire online muziekdatabase, en [Wikidata](https://www.wikidata.org/), de gestructureerde data-equivalent van Wikipedia, kunnen we automatisch ontdekken welke personen Nederlands zijn. 

In Wikidata staat de nationaliteit van een persoon meestal expliciet aangegeven. Direct gepiept, zou je zeggen. Echter zit er een addertje onder het gras. Opgenomen muziek is een relatief recent fenomeen, maar de componisten van klassieke werken komen uit verschillende tijdperken uit de geschiedenis. Inclusief tijdperken waarin 'Nederland' als zodanig niet bestond, maar bijv. de 'Republiek der Zeven Verenigde Nederlanden' wel. We moesten dus de relevante historische entiteiten ook uitzoeken. Daarnaast zijn de overzeesgrondgebieden en voormalige koloniën van Nederland onderdeel van ons cultureel erfgoed, dus nemen we bijvoorbeeld ook Suriname en Indonesië mee. Zoals bij elke datavraag, is dus een goed begrip van de achterliggende domein onontbeerlijk. Daarom werkten we met dataexperts en muziekexperts samen.

Bij Discogs is het ingewikkelder. Daar is namelijk geen expliciete informatie over de nationaliteit van een artiest in de metadata opgenomen. We moeten zoeken op termen in de beschrijving van een persoon die kunnen duiden op hun afkomst, rekening houdend met zowel Engels als Nederlands. Termen zoals "Netherlands", "Nederland", "Dutch", "Netherlands Antilles" enz. Detectie van één van deze termen vinden we genoeg om een persoon te bestempelen als onderdeel van Nederlands erfgoed. Uiteraard gaat dit niet altijd perfect. Bijvoorbeeld, wordt Galina Oestvolskaja onterecht als Nederlandse aangewezen, omdat haar Discogsbeschrijving de volgende tekst bevat: "Галина Ивановна Уствольская in Russian, usually romanized as Galina Ivanovna Ustvolskaya in English, Ustwolskaja in German, Oustvolskaïa in French and *Oestvolskaja in Dutch*.". Steekproeven door muziekexperts geven ons desondanks genoeg vertrouwen om de resultaten te gebruiken. 

De opnamelocaties van de cd's waren nog niet gelinkt aan Wikidata, dus moest die stap eerst worden gezet. We gebruiken de [OpenRefine](https://openrefine.org/) tool daarvoor, die de locaties matcht met Wikidata. Onzekere matches hebben we met de hand goed- of afgekeurd. OpenRefine haalt dan de bijbehorende landen op uit Wikidata, zodat we Nederlandse locaties kunnen identificeren. 

Locaties en personen kunnen of op cd-niveau of op trackniveau aangegeven worden, en personen kunnen daarbij in veel verschillende rollen zijn aangegeven. We hebben dus code geschreven om volledige lijsten van locaties en personen uit de cd-collectie te halen, en vervolgens informatie over nationaliteit van personen op te zoeken in Wikidata en Discogs, en de locaties te exporteren voor verwerking in OpenRefine. 

Bij raadplegen van bronnen zoals Discogs en Wikidata is het essentieel om rekening te houden met hun voorwaarden. Daarom zijn er limieten in onze code ingebouwd, waardoor het best lang duurt om beide bronnen te checken voor alle personen. Dus zetten we onze code in een zogenaamde 'container', waardoor het makkelijk in de cloud gedraaid kan worden - vele malen sneller en handiger dan op een eigen laptop.

## De kracht van de expert

Niet alle personen zijn gelinkt naar Discogs of Wikidata, en waar er wel een link is, is er niet altijd genoeg informatie beschikbaar om automatisch hun nationaliteit te bepalen. De resterende personen zijn door onze dappere muziekkenners handmatig doorgenomen. Door een lijst te genereren van de personen, hun eventuele links naar Discogs/Wikidata en het aantal cd's waaraan ze zijn gekoppeld, was het mogelijk voor de experts om gericht en efficiënt te werk te gaan. 

## Mooi resultaat

We combineren alle informatie over personen en locaties van Wikidata, Discogs en muziekexperts om per cd aan te kunnen geven of het wel of geen Nederlands erfgoed is. Daarbij wordt het 'bewijs' daarvoor vastgelegd. Bijv. "Great pianists of the 20th century" is ondanks zijn Engelse naam toch Nederlands erfgoed omdat uitvoerende Edo de Waart Nederlands is, volgens Discogs en Wikidata. Op deze wijze houden we het proces transparant en maken we het mogelijk om de resultaten gericht te checken. Muziekexperts hebben dit steekproefsgewijs gedaan, met positief resultaat. Zo komen we op een lijst van ruim 12.000 klassieke cd’s en 36.500 populaire cd’s die Nederlands erfgoed zijn: dat betekent tenminste één aan Nederland gerelateerde uitvoerende, crew, componist of locatie. Deze cd's zullen opgenomen worden in de collectie van Beeld & Geluid, waar ze duurzaam bewaard zullen worden. 

## Mooie bijvangst

Linked data hebben we hier ingezet met als doel het antwoord op de vraag: welke cd's behoren tot het Nederlands erfgoed? De informatie die we vergaard hebben kunnen we echter ook voor andere doelen inzetten. Bijvoorbeeld, met behulp van de informatie over coördinaten van locaties in Wikidata kan je nu de cd's met locatie-informatie ontdekken via deze kaart van Nederland. De grote steden domineren, maar opnamelocaties zijn wijdverspreid over het land, van Uithuizen in het noorden tot Noorbeek in het zuiden; van Vrouwenpolder in het westen tot Oldenzaal in het oosten.

<iframe src='https://flo.uri.sh/visualisation/21633532/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/21633532/?utm_source=embed&utm_campaign=visualisation/21633532' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

Wil je weten wat er in een locatie is opgenomen? Kijk dan naar onderstaande overzicht. Browse door de lijst, of zoek op de locatie die jou interesseert. Ontdek op deze wijze welk instrument de vier bovengenoemde locaties verbindt.

<iframe src='https://flo.uri.sh/visualisation/21633536/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/21633536/?utm_source=embed&utm_campaign=visualisation/21633536' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

[^1]: De complete definitie van Nederlands erfgoed voor muziek gebruikt bij Beeld & Geluid is veel breder, en bevat bijvoorbeeld muziek uitgevoerd op unieke Nederlandse instrumenten, of muziek die deel is gaan uitmaken van ons collectieve geheugen. Zulke aspecten zijn onmogelijk te controleren op basis van de metadata die we beschikbaar hebben, vandaar dat we een beperktere definitie hebben gebruikt. De definitie van Nederlands erfgoed is sowieso een onderwerp waarover er nog wordt gedebateerd. 