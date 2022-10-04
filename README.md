# Runme.dev

This project contains the application for [runme.dev](https://runme.dev) and also acts as a guinea pig to showcase the [Runme Extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme).

## Prerequisites

This project is based on [Fresh](https://fresh.deno.dev/) and requires Deno to run. To install Deno, run:

```sh
# macOS or Linux
curl -fsSL https://deno.land/x/install/install.sh | sh
```

### Development

Start the project:

```sh { background=true }
deno task start
```

Open project in your browser:

```sh
open http://localhost:8000/
```

This will watch the project directory and restart as necessary.

### Deployment

To deploy this project you need to have `deployctl` installed on your system. To install, please run:

```sh
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```

Once installed successfully, you can run a staging deploy via:

```sh
deployctl deploy --project=runme-staging --import-map=import_map.json main.ts
```

To deploy to production, run:

```sh
deployctl deploy --project=runme --import-map=import_map.json main.ts
```

---

<p align="center"><small>Copyright 2022 © <a href="http://stateful.com/">Stateful</a> – Apache 2.0 License</small></p>
