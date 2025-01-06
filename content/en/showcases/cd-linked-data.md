---
title: "Linked data in het praktijk: Welke cd's zijn Nederlands Erfgoed?"
subtitle: Hoe linked data Nederlands cultureel erfgoed kan ontdekken in een berg van cd's
image: articles/cds_depot.jpg
imageCaption: "Opslag van cd's bij Beeld & Geluid. Foto: Margot Knijn"
tags: linked data
lab: opendatalab
publishedOn: '2025-01-12'
datasets: []
---

De potentie van Linked Data wordt breed erkend. Maar het is veel werk om data te modelleren en te publiceren, en daarna nog een ingewikkelde karwei om de data te linken aan andere collecties. Soms vraag je je af: gaan we er ooit de vruchten van plukken? Nou, het antwoord is absoluut - ja!

## Een muzikale puzzel

Tot 2012 beheerde Beeld & Geluid de uitleencollectie van cd's voor de omroepen. Wilde een DJ een cd draaien, kwam het vaak bij ons vandaan. Daarom staan er nu in de depots van Beeld & Geluid in Hilversum rekken met meer dan 220.000 cd's. Muziekweb, sinds 2022 onderdeel van Beeld & Geluid, regelt het uitleen van cd's van bibliotheken, dus in Rotterdam hebben we er ruim 700.000. Dat is bij elkaar 10 kilometer aan cd’s!

Er is een flinke overlap tussen deze collecties. Het is niet noodzakelijk om de cd's twee keer te bewaren en het neemt, zoals gezegd, veel ruimte in. Op de cd’s in Hilversum passen we daarom ons Collectiebeleid toe en willen we het Nederlands Erfgoed identificeren en fysiek bewaren. De resterende cd's vinden dan een andere bestemming.

Voor veel van de populaire muziek cd's kunnen we de erfgoedstatus vaststellen op basis van informatie over landen of afkomst die al eerder is vastgelegd in de metadata. Maar niet voor alles. En voor klassieke muziek hebben we meestal geen indicatie van in welk land de opnamelocatie is, of welke nationaliteit de componist, crew of uitvoerder heeft. Dus hoe stellen we vast wat Nederlands Erfgoed is? Met zoveel cd's is langs de rekken lopen en elk hoesje lezen geen optie.

## De kracht van Linked Data

De oplossing komt vanuit Linked Data. De resultaten van voorbije B&G projecten waarbij bepaalde personen in onze thesaurus zijn gelinked aan externe bronnen hebben we hier met succes ingezet. Via [Discogs](https://www.discogs.com/), een populaire online muziek-database, en [Wikidata](https://www.wikidata.org/), de gestructureerde data equivalent van Wikipedia, kunnen we automatisch ontdekken welke personen Nederlands zijn. 

In Wikidata staat de nationaliteit van een persoon meestal expliciet aangegeven. Direct gepiept, zou je zeggen. Echter zit er een addertje onder het gras. Opgenomen muziek is een relatief recent fenomeen, maar de componisten van klassieke werken komen uit verschillende tijdperken uit de geschiedenis. Inclusief tijdperken waarin 'Nederland' als zodanig niet bestond, maar bijv. de 'Republiek der Zeven Verenigde Nederlanden' wel. We moesten dus de relevante historische entiteiten ook uitzoeken. Daarnaast zijn de overzeesgrondgebieden en ex-koloniën van Nederland onderdeel van ons cultureel erfgoed, dus nemen we bijvoorbeeld ook Suriname en Indonesië mee. Zoals bij elke data-vraag, is dus een goed begrip van de achterliggende domein onontbeerlijk. Daarom werkten we met data-experts en muziek-experts samen.

Bij Discogs is het ingewikkelder. Daar is namelijk geen expliciete informatie over de nationaliteit van een artiest in de metadata opgenomen. We moeten zoeken op termen in de beschrijving van een persoon die kunnen duiden op hun afkomst, rekening houden met zowel Engels als Nederlands. Termen zoals "Netherlands", "Nederland", "Dutch", "Netherlands Antilles" enz. Detectie van één van deze termen vinden we genoeg om een persoon te bestempelen als onderdeel van Nederlands Erfgoed. Uiteraard gaat dit niet altijd perfect. Bijvoorbeeld, wordt Galina Oestvolskaja onterecht als Nederlandse aangewezen, omdat haar Discogs beschrijving de volgende tekst bevat: "Галина Ивановна Уствольская in Russian, usually romanized as Galina Ivanovna Ustvolskaya in English, Ustwolskaja in German, Oustvolskaïa in French and *Oestvolskaja in Dutch*.". Steekproeven door muziekexperts geven ons desondanks genoeg vertrouwen om de resultaten te gebruiken. 

De opnamelocaties van de cd's waren nog niet gelinkt aan Wikidata, dus moest die stap eerst worden gezet. We gebruiken de [OpenRefine](https://openrefine.org/) tool daarvoor, die de locaties matcht met Wikidata. Onzekere matches hebben we met de hand goed- of afgekeurd. OpenRefine haalt dan de bijbehorende landen op uit Wikidata, zodat we Nederlandse locaties kunnen identificeren. 

Locaties en personen kunnen of op cd niveau of op track niveau aangegeven worden, en personen kunnen daarbij in veel verschillende rollen zijn aangegeven. We hebben dus code geschreven om volledige lijsten van locaties en personen uit de cd collectie te halen, en vervolgens nationaliteiteninformatie over de personen op te zoeken in Wikidata en Discogs, en de locaties te exporteren voor verwerking in OpenRefine. 

Bij raadplegen van bronnen zoals Discogs en Wikidata is het essentieel om rekening te houden met hun voorwaarden. Daarom zijn er limieten in onze code ingebouwd, waardoor het best lang duurt om beide bronnen te checken voor alle personen. Dus zetten we onze code in een zogenaamde 'container', waardoor het makkelijk in de cloud gedraaid kan worden - velemaal sneller en handiger dan op een eigen laptop.

## De kracht van de expert

Niet alle personen zijn gelinkt naar Discogs of Wikidata, en waar er wel een link is, is er niet altijd genoeg informatie beschikbaar om automatisch hun nationaliteit te bepalen. De resterende personen zijn door onze dappere muziekexperts handmatig doorgenomen. Door een lijst te genereren van de personen, hun eventuele links naar Discogs/Wikidata en het aantal cd's waaraan ze zijn gekoppeld, was het mogelijk voor de experts om gericht en efficiënt te werk te gaan. 

## Mooie resultaat

We combineren alle informatie over personen en locaties van Wikidata, Discogs en muziek-experts om per cd aan te kunnen geven of het wel of geen Nederlands Erfgoed is. Daarbij wordt het 'bewijs' daarvoor vastgelegd. Bijv. "Great pianists of the 20th century" is ondanks zijn Engelse naam toch Nederlands Erfgoed omdat uitvoerende Edo de Waart Nederlands is, volgens Discogs en Wikidata. Op deze wijze houden we het proces transparant en maken we het mogelijk om de resultaten gericht te checken. Muziek-experts hebben dit steekproefsgewijs gedaan, met positief resultaat. Zo komen we op een lijst van ruim 12.000 klassieke cd’s (van de 100.000) ***nog te doen - de getallen voor popmuziek** die Nederlands Erfgoed zijn: dat betekent tenminste één aan Nederland gerelateerde uitvoerende, crew, componist of locatie. Deze cd's blijven bij Beeld & Geluid fysiek opgeslagen voor toekomstige generaties. De andere cd's zijn op te vragen via Muziekweb.

## Mooie bijvangst

Linked data hebben we hier ingezet met als doel het antwoord op de vraag - is deze cd Nederlands Erfgoed, ja of nee? De informatie die we vergaard hebben kunnen we echter ook voor andere doelen inzetten. Bijvoorbeeld via de coördinaten-informatie van locaties in Wikidata kan je nu de cd's met locatie-informatie ontdekken via deze kaart van Nederland. De grote steden domineren, maar opname-locaties zijn wijd verspreid over het land, van Uithuizen in het noorden tot Noorbeek in het zuiden; van Vrouwenpolder in het westen tot Oldenzaal in het oosten.

<iframe src='https://flo.uri.sh/visualisation/18381044/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/18381044/?utm_source=embed&utm_campaign=visualisation/18381044' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

Wil je weten wat er in een locatie is opgenomen? Kijk dan naar onderstaande overzicht. Browse door de lijst, of zoek op de locatie die jou interesseert. Ontdek op deze wijze welk instrument de vier bovengenoemde locaties verbindt.

<iframe src='https://flo.uri.sh/visualisation/18381413/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/18381413/?utm_source=embed&utm_campaign=visualisation/18381413' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

