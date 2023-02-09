---
title: More Examples
sidebar_position: 3
---

import Infobox from "../../src/components/Infobox.tsx"

Previously, you learned the basic editing tools for creating and editing README files.

In this guide, you'll be exposed to a few example usages for Runme. Hopefully this helps inspire you to use Runme in interesting and useful ways!

## Setup

Go ahead and clone the `stateful/vscode-runme` repo:

```sh
git clone https://github.com/stateful/vscode-runme
```

These examples are from the `examples` sub-folder!

## Fresh Service

The first example is in the `fresh` folder, and sets up a fresh service with deno.

### Local Environment

Runme makes setting up your local environment a breeze! Here, you can see a few install scripts that will set everything up:

<p align="center">
  <img src="/img/installers.png" width="800px" />
</p>

<Infobox type="sidenote">

In a future version of Runme, we plan on only showing installers relevant to your current operating system/environment.

Stay tuned!

</Infobox>

### Environment Variables

Runme can also be used to establish local environment variables for the current session.

<p align="center">
  <img src="/img/export-environment.png" width="800px" />
</p>

<Infobox type="warning">

Environment variable support in Runme is currently largely a work in progress.

We have a lot planned for supporting environment/secrets in the future, so stay tuned!

</Infobox>

### Deploying

For a deploy script, such as the one below, running as a Background task is a great idea, since it is a long-running script.

<p align="center">
  <img src="/img/deno-deploy.png" width="800px" />
</p>

## Next.js App

This example can be found in the `vercel` sub-folder.

### Setup/Environment

Similar to the last example, we can do our setup, starting, and opening of the web browser using Runme:

<p align="center">
  <img src="/img/next-app-local.png" width="800px" />
</p>

<Infobox type="sidenote">

In a future version of Runme, we'd like to support "execution groups," so that you can execute all of the above script in one go!

</Infobox>

### Authentication

Interactive terminals are perfect for providing a CLI login to the user:

<p align="center">
  <img src="/img/vercel-login.png" width="800px" />
</p>

### List Projects

Remember, cells can capture the output of commands in non-interactive mode!

In this case, this can be used to get a list of the user's current registered projects with the Vercel platform.

<p align="center">
  <img src="/img/list-projects.png" width="800px" />
</p>