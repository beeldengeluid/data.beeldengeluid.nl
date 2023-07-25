---
title: First results of the Open Data Lab
subtitle: An open endpoint to the Sound & Vision catalogue
image: placeholders/placeholder-blog.jpg
tags: Metadata, Linked Open Data
lab: opendatalab
datasets: []
---

**Over the past year the Open Data Lab of Sound & Vision has worked on the infrastructure to provide public access to its catalogue metadata. We have now realised a SPARQL endpoint which allows external users to run advanced queries over our data. In this blog we will tell you more about the process and the choices that were made.**

**Zero in on CC0**

An important first step was to establish the copyright status of the catalogue metadata. The Sound & Vision collection is varied, and the provenance of various metadata can play a role in determining the copyright status. We determined that for factual statement in the metadata no copyright applies, because it does not constitute a 'work' in the legal sense. For descriptions however, one could argue a creative effort was performed. In some cases it was difficult to determine the provenance of these descriptions and the conditions under which these were transferred to Sound & Vision. We therefore made the decision to exclude all descriptions from the open dataset for the time being. All other metadata were released under the [CC0 license](https://creativecommons.org/choose/zero/?lang=en 'CC0 license'), which means the least restrictions for third party users of the dataset. We hope to be able to do more research into the provenance of descriptions of specific subsets and where possible add these to the catalogue metadata in the future.

**Improve interoperability through standards**

The Sound & Vision catalogue has its own datamodel, which caters to the needs of internal workflows and primary users of the archive. It contains a lot of information that will not be relevant to third party users and the datamodel is very specific. We therefore decided to select relevant fields and map these to [schema.org](https://schema.org/ 'Schema.org'). We also mapped our own rights and licensing information of the objects to machine readable standards from rightsstatement.org and creativecommons.org. Filtering the catalogue on open licenses will render results which have been published on [Open Images](https://openimages.eu/ 'Open Images'), from where these items can be downloaded.

**Persistence is key**

To fulfill the requirements of linked data, we set up an infrastructure to generate, manage and publish persistent identifiers to objects from the collection. These are published under the data.beeldengeluid.nl domain. The data.beeldengeluid.nl domain was already in use for terms in our thesaurus, the GTAA. Wherever thesaurus terms are used within the catalogue data these are accompanied by the URI of the thesaurus term.

**SPARQL queries**

To provide access to the catalogue dataset described above, we built a [SPARQL endpoint](https://cat.apis.beeldengeluid.nl/sparql). This endpoint is publicly accessible and has a front-end supported by [Communica](https://comunica.dev/ 'Communica'), a knowledge graph querying framework. The front-end contains several example queries that should help users in compiling their own queries.

We believe that publishing our metadata in this way is a big step towards connecting our collection sustainably and meaningfully to the world around us. By doing so we expect to reach a larger audience, provide more context and improve the quality of our data. We will continue to improve upon this work so keep an eye out for further updates!
