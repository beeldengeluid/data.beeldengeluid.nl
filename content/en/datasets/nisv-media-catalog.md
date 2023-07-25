---
id: http://data.beeldengeluid.nl/id/dataset/0001
title: Sound & Vision Catalog Open Data
subtitle: Metadata for the catalogue objects that are provided by Netherlands Institue for Sound & Vision.
color: ''
image: /uploads/beeld_en_geluid_wall.jpg
tags:
  - Metadata
  - CC0
  - Creative Commons
---

This dataset contains the [catalogue metadata of the majority of the collections of the Netherlands Institute of Sound & Vision](https://www.beeldengeluid.nl/collectie). We have selected those metadata fields that are not protected by copyright, or to which Sound & Vision itself is the rights holder, and released them under a [Creative Commons CC0 license](https://creativecommons.org/share-your-work/public-domain/cc0/ 'CC0 License').

To facilitate users of this dataset we made the following decisions:

- We map relevant metadata fields from our internal metadata format to [Schema.org](https://schema.org/ 'Schema.org').
- We provide links from the catalog items metadata to our General Public Portal, where materials can be ordered or played.
- The metadata about the objects contains machine-readable rights and licensing information from [rightsstatement.org](https://rightsstatements.org/en/ 'rightsstatement.org') and [creativecommons.org](https://creativecommons.org/ 'creativecommons.org').
- If an object is also available on our [Open Images](https://openimages.eu/) platform, we included a link to this item in the metadata. Using this link media can be downloaded in various formats.
- We offer a SPARQL endpoint, which allows users to build their own queries or use and modify sample queries in the user interface.
- The items are presented with a [coolURI](https://www.w3.org/TR/cooluris/), of the form `http://data.beeldengeluid.nl/id/{cat_type}/{daan_id }`, where **cat_type** is one of these values: 'series', 'season', 'program', 'scene' and **daan_id** is a unique number given to the object in DAAN. Items of cat_type 'scene' correspond to a logtrackitem of type 'scene description' in DAAN.

We will continue to expand and improve on this dataset. Please contact us with any specific requirements or use case that you might have.

### APIs

For working with the Sound & Vision media catalog open data several [APIs](/apis/nisv-media-catalog) are available.
