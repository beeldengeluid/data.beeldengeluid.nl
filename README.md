# B&G Labs Website

Welcome to the online home of Sound & Vision Labs (B&G Labs in Dutch).

## Prerequisites

- [Node.js](https://nodejs.org/) v16.x.

If you use [`nvm`](https://github.com/nvm-sh/nvm) to manage different Node versions, running `nvm use` will activate the required version through `.nvmrc`.

## Ingredients

- [Nuxt.js](https://nuxtjs.org)
- [Forestry CMS](https://forestry.io/)
- Datasets from [DataCatalog](https://data.beeldengeluid.nl/id/datacatalog/0001), fetched during build

## Development Setup

The following commands require [Node.js](https://nodejs.org/) and NPM (ships with Node) to be installed globally.

NB: we've switched from Yarn to NPM after encountering [issues](https://github.com/yarnpkg/berry/issues/3416#issuecomment-932397620) with dependabot updates.

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# (optionally) fetch latest datacatalog in JSON-LD format
$ npm run fetch

# generate static project (does not include fetch)
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Development Process

We branch from `main` to work on changes to the labs website. Use the steps under _Development Setup_ to work on your changes locally. To share your changes with others, create a draft pull request on GitHub. This deploys your branch through [Vercel for Github](https://vercel.com/docs/concepts/git/vercel-for-github) to a new environment, and posts a shareable preview URL to the pull request. If your changes are ready to be released, set the pull request to 'ready for review' and ask someone for a code review. After review, the change is deployed by merging to `main`.
