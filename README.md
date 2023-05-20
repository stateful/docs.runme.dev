# Runme.dev Website

This repository contains several packages that make up the [`runme.dev`](https://runme.dev) website. In `workspaces` you find the following sub-projects:

- __docs__: Docusaurus page serving Runme documentation
- __frontpage__: Next.js marketing page

## Setup

After you have cloned the project, install the dependencies via:

```sh { name=install }
npm install
```

then, setup all workspaces via:

```sh
# tbd
```

## Development

In order to make changes in any of the workspaces, run:

```sh
npm run watch
```

This will create a watch task that will update files in distinguished places.

## Deployment

This website is auto-deployed via Vercel's GitHub integration.
