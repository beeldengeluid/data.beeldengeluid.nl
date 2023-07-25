---
title: Mediascape
subtitle: Finding happiness in audiovisual archives without searching for it
image: projects/mediascape.png
tags:
  - generous interfaces
  - UI
datasets:
  - http://data.beeldengeluid.nl/id/dataset/0002
lab: content/en/labs/opendatalab.md
website: https://open-images-browser.vercel.app/
contacts:
  - name: Philo van Kemenade
    email: pvkemenade@beeldengeluid.nl
startDate: 2019-11-01T23:00:00Z
endDate: 2020-12-01T23:00:00Z
sortOrder: 9
---

The MediaScape project investigates how innovative interfaces can provide generous access to audiovisual collections in order to make connections between the interests of individuals and heritage objects. Or:

> How to find happiness in AV collections without searching for it?

Most collection interfaces employ a query-based interface model, usually in the form of search bar. This paradigm generally works great when a user:

1. knows what sorts of things are present in the collection
2. has a clear idea of what they are looking for
3. can express that idea as a textual keyword query

If one or more of these requirements doesn't hold, the search bar's convenience quickly breaks down.

An alternative is to be more forthcoming about what can be found in a collection and offering readily available paths to access different parts of it. This idea of 'generous interfaces' was first formulated by [Mitchell Whitelaw in 2012](http://mtchl.net/towards-generous-interfaces-for-archival-collections/) and since applied and expanded in various directions in the Digital Cultural Heritage field.

As part of our investigation in the MediaScape project, we are developing a series of generous user interface (UI) concepts for audiovisual collections.

## Open Images Browser

The Open Images Browser provides access to the Open Images collection, some 3.5 thousand videos with an open Creative Commons license. Instead of the usual search bar, this interface generously displays how these images are distributed across time, location and subject matter. This shows at a glance the scale and diversity of the collection and allows the user to step-by-step zoom in on interesting parts and easily watch them as a playlist.

The interface employs data visualisation and commonly used web elements to uphold the following generous design principles ([as formulated by Ben Ennis Butler](https://mw2013.museumsandtheweb.com/paper/visual-exploration-of-australian-prints-and-printmaking/)):

- **Show first, don’t ask**; not requiring the user to provide a query in order see content
- **Provide rich overviews**; showing how items are distributed over time per decade
- **Provide Samples**; using thumbnails to give an a visual feel for a video's content
- **Provide Context**; showing common location and subject filters as well as distribution over time, expanding items in the context of the full filtered set
- **Share high quality primary content**; embed the orginal video and link to the original record.

### Resources

Try the Open Images Browser live:  
https://open-images-browser.vercel.app/

Source Code:  
https://github.com/beeldengeluid/open-images-browser/

Component Library:  
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://beeldengeluid.github.io/open-images-browser)
