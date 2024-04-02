# B&G Data Website

These are the sources for the B&G Data Website, including the content (md) and website (nuxt/vue).

## Prerequisites

- [Node.js](https://nodejs.org/) v20.x.

If you use [`nvm`](https://github.com/nvm-sh/nvm) to manage different Node versions, running `nvm use` will activate the required version through `.nvmrc`.

## Ingredients

Frontend:

- [Nuxt](https://nuxt.com) v3 as application framework, and for static site generation.
- [Vuetify](https://vuetifyjs.com/en/) as component library.
- [Nuxt Content](https://content.nuxtjs.org/) to fetch content, see the [`content/`](./content/) directory in this repository.
- [Nuxt Image](https://image.nuxtjs.org/) to convert and include images in various formats.
- [nuxtjs/i18n](https://i18n.nuxtjs.org/) for localization.

Content Management:

- ~~[Forestry CMS](https://forestry.io/) to manage [`./content`](./content/).~~ ) _Deprecated and waiting for replacement. Until that time content can be managed directly in this repository ._

LOD DataCatalog:

- Datasets from [DataCatalog](https://data.beeldengeluid.nl/id/datacatalog/0001), fetched during build

## Development Setup

The following commands require [Node.js](https://nodejs.org/) and NPM (ships with Node) to be installed globally.

NB: we've switched from Yarn to NPM after encountering [issues](https://github.com/yarnpkg/berry/issues/3416#issuecomment-932397620) with dependabot updates.

```bash
# install dependencies
npm install

# start the development server
npm run dev
```

other commands, which might come in handy as needed

```bash
# fetching latest datacatalog in JSON-LD format
npm run fetch

# generate static project
npm run generate

# build app for production
npm run build

# locally preview production build
npm run preview
```

For detailed explanation on how things work, the [Nuxt docs](https://nuxt.com) are a good starting point.

## Development Process

We branch from `main` to work on changes to the website. Use the steps under _Development Setup_ to work on your changes locally. To share your changes with others, create a draft pull request on GitHub. This deploys your branch through [Vercel for Github](https://vercel.com/docs/concepts/git/vercel-for-github) to a new environment, and posts a shareable preview URL to the pull request. If your changes are ready to be released, set the pull request to 'ready for review' and ask someone for a code review. After review, the change is deployed by merging to `main`.

## Further docs:

- [Troubelshooting](./docs/troubleshooting.md)
- [Workarounds](./docs/workarounds.md)
