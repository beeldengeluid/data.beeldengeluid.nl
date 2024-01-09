---
id: http://data.beeldengeluid.nl/id/dataset/0028
title: Music recordings for licensed broadcasters (Muziekopnamen zendgemachtigden - MOZ)
subtitle: The audio collection 'Music recordings for licensed broadcasters' contains original concert and studio recordings intended for broadcast on TV or radio, whether they were actually broadcast or not. 
color: ''
tags: []
showDashboard: true
---

**Finding the collection**

The MOZ collection is registered in the NDE and Clariah data registries. It can be viewed in the <a target="_blank" href="https://mediasuite.clariah.nl/tool/single-search?queryId=6688eee0-db29-4f6e-9eae-fdc28d38cc64">Media Suite</a>  (metadata available for everyone, users with a Media Suite account can
also play audio/video of some concerts), and as Linked Data on the Sound & Vision <a target="_blank" href="https://cat.apis.beeldengeluid.nl/#transientDatasources=https%3A%2F%2Fcat.apis.beeldengeluid.nl%2Fsparql&query=PREFIX%20sdo%3A%20%3Chttps%3A%2F%2Fschema.org%2F%3E%0A%0A%23%20Show%20the%20ID%20and%20title%20of%20all%20concerts%20that%20are%20part%20of%20the%20Dutch%20Broadcast%20Concert%20%0A%23%20(MOZ)%20collection%2C%20in%20alphabetical%20order%0A%0ASELECT%20DISTINCT%20%3FprogramUri%20%3FprogramName%0AWHERE%0A%7B%0A%20%23%20Filter%20for%20programmes%20belonging%20to%20the%20series%20%22Muziekopnamen%20Zendgemachtigden%20(MOZ)%22%2C%20using%20its%20ID%0A%20%3FprogramUri%20sdo%3ApartOfSeason%2Fsdo%3ApartOfSeries%20%3Chttp%3A%2F%2Fdata.beeldengeluid.nl%2Fid%2Fseries%2F2101608030025711131%3E%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20sdo%3Aname%20%3FprogramName%20.%20%0A%7D%20ORDER%20BY%20%3FprogramName">linked data endpoint</a>.
An interactive overview of the collection statistics can be found in <a target="_blank" href="https://github.com/mwigham/linked_data_notebooks/blob/main/MOZ%20Linked%20Data%20visualisations.ipynb">this Jupyter Notebook</a>, which you can run locally. Alternatively, you can try it out online in <a target="_blank" href="https://colab.research.google.com/github/mwigham/linked_data_notebooks/blob/main/MOZ%20Linked%20Data%20visualisations.ipynb">Google Colab</a> (disclaimer: this is hosted by a third party).

