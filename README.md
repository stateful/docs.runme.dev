# docs.runme.dev

This is the primary documentation website for Runme, located at docs.runme.dev. It primarily serves markdown using [Docusaurus 2](https://docusaurus.io/) to help runme users find installation, configuration, features, intergrations, faq and other information about using or contributing to Runme the open source project (runme.dev).

### Installation

Install all the dependencies using npm.

```sh { name=npm-install }
npm install
```

### Local Development

When developing locally we remove the build directory to avoid any confusion and run the docusaurus server.

```sh { name=npm-run-start background=true }
rm -rf build/
npm run start
```

Most changes are reflected live without having to restart the server.

### Build

To build the website locally, or to test/preview the build process that will run in CI.

```sh { name=npm-run-build }
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This website is auto-deployed via Vercel's GitHub integration, when your branch is merged into main.

The status can be found here: [https://vercel.com/stateful/docs-runme-dev](https://vercel.com/stateful/docs-runme-dev)
