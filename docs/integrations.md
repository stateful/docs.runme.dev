---
sidebar_position: 6
title: Integrations
---

import Infobox from "../src/components/Infobox.tsx"

Previously, you learned the basic editing tools for creating and editing README files.

In this guide, you'll be exposed to a few ways you can integrate Runme with different environment or 3rd party services.

## GitHub Action

Runme provides a GitHub action that allows you to seamlessly use the tool in CI/CD. It enables to re-use the workflows that your contributor use in CI/CD and therefore verifies that your contributing guidelines are still up to date.

### Setup

In `.github/workflows/test.yaml` create a new file with the following contents:

```yaml
name: Test Changes

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Clone Repository
        uses: actions/checkout@v2
      - name: Setup Node version
        uses: actions/setup-node@v2
        with:
          node-version: 18.x
      - name: Install dependencies
        run: npm ci
      # execute workflows through Runme
      - name: Build / Test Project
        uses: stateful/runme-action@v2
        with:
          workflows: |
            build
            test
```

Now, you can define what should be done for building and testing your project in e.g. a `CONTRIBUTING.md` and have your contributors be able to run the same flows through the CLI, e.g. via: `runme run build tes`.

## Fresh App on Deno Cloud

The first example is in the `fresh` folder and sets up a fresh service with deno.

### Local Environment

Runme makes setting up your local environment a breeze! Here, you can see a few install scripts that will set everything up:

![Runme Local Environment](../static/img/runme-local-enviroment.png)

<Infobox type="sidenote">

In a future version of Runme, we plan on only showing installers relevant to your current operating system/environment. Stay tuned!

</Infobox>

### Environment Variables

Runme can also be used to establish local environment variables for the current session.

![establish environmental variables in vs code](../static/img/environmental-variables-vs-code.png)

<Infobox type="warning">

Environment variable support in Runme is currently a work in progress. We have a lot planned for supporting the environment/secrets in the future, so stay tuned!

</Infobox>

### Deploying

For a deploy script, such as the one below, running as a Background task is a great idea, since it is a long-running script.

![deploy script in vs code](../static/img/deploying-a-script.png)

## Next.js App on Vercel

This example can be found in the `vercel` sub-folder.

### Setup/Environment

Similar to the last example, we can do our setup, starting, and opening of the web browser using Runme:

![setup environment in vs code](../static/img/setup-environment.png)

<Infobox type="sidenote">

In a future version of Runme, we'd like to support "execution groups," so that you can execute all of the above scripts in one go!

</Infobox>

### Authentication

Interactive terminals are perfect for providing a CLI login to the user:

![deploy application in vercel](../static/img/deploy-in-vercel.png)

### List Projects

Remember, cells can capture the output of commands in non-interactive mode!

In this case, this can be used to get a list of the user's current registered projects with the Vercel platform.

![list projects in vercel](../static/img/list-projects-vercel.png)

![run hello world in vs code](../static/img/run-hello-world.gif)

<Infobox type="sidenote">

So what if you want to have both interactivity _and_ stay within the notebook? - Making this work with VS Code is a challenge. We are currently working on a solution to this limitation. Stay tuned!

</Infobox>
