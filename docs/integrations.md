---
sidebar_position: 6
title: Integrations
---

Previously, you learned the basic editing tools for creating and editing README files.

In this guide, you'll be exposed to a few examples of usages for Runme. Hopefully, this helps inspire you to use Runme in interesting and useful ways!

## Setup

Go ahead and clone the `stateful/vscode-runme` repo:

```sh
git clone https://github.com/stateful/vscode-runme
```

These examples are from the `examples` sub-folder!

## Fresh App on Deno Cloud

The first example is in the `fresh` folder and sets up a fresh service with deno.

### Local Environment

Runme makes setting up your local environment a breeze! Here, you can see a few install scripts that will set everything up:

![Runme Local Environment](../static/img/runme-local-enviroment.png)

### Sidenote

In a future version of Runme, we plan on only showing installers relevant to your current operating system/environment.

Stay tuned!

### Environment Variables

Runme can also be used to establish local environment variables for the current session.

![establish environmental variables in vs code](../static/img/environmental-variables-vs-code.png)

> 💡 Warning: Environment variable support in Runme is currently a work in progress. We have a lot planned for supporting the environment/secrets in the future, so stay tuned!

### Deploying

For a deploy script, such as the one below, running as a Background task is a great idea, since it is a long-running script.

![deploy script in vs code](../static/img/deploying-a-script.png)

## Next.js App on Vercel

This example can be found in the `vercel` sub-folder.

### Setup/Environment

Similar to the last example, we can do our setup, starting, and opening of the web browser using Runme:

![setup environment in vs code](../static/img/setup-environment.png)

### Sidenote

In a future version of Runme, we'd like to support "execution groups," so that you can execute all of the above scripts in one go!

### Authentication

Interactive terminals are perfect for providing a CLI login to the user:

![deploy application in vercel](../static/img/deploy-in-vercel.png)

### List Projects

Remember, cells can capture the output of commands in non-interactive mode!

In this case, this can be used to get a list of the user's current registered projects with the Vercel platform.

![list projects in vercel](../static/img/list-projects-vercel.png)

![run hello world in vs code](../static/img/run-hello-world.gif)

### Sidenote

So what if you want to have both interactivity _and_ stay within the notebook?

Unfortunately, making this work with VS Code is a challenge. We're working hard, however, to look for a good solution to this limitation. Stay tuned!
