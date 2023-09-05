# docs.runme.dev

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```sh { name=npm-install }
npm install
```

### Local Development

```sh { name=npm-run-start background=true }
rm -rf build/
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh { name=npm-run-build }
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This website is auto-deployed via Vercel's GitHub integration.
