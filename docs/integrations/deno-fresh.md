---
sidebar_position: 2
title: Runme with Fresh App on Deno Cloud
---

We created an example in `fresh` folder which sets up a Fresh service with Deno. You can manually check out this example by [opening it with Runme](https://runme.dev/api/runme?repository=https%3A%2F%2Fgithub.com%2Fstateful%2Fvscode-runme.git&fileToOpen=examples%2Ffresh%2FREADME.md).

### Local Environment

Runme makes setting up your local environment easy! Here, you can see a few install scripts that will automatically set everything up:

![Runme Local Environment](../../static/img/runme-local-enviroment.png)

In the next version release of Runme, we plan on only showing installers relevant to your current operating system/environment. Stay tuned! 😃

### Environment Variables

Runme can also be used to establish local environment variables for the current session.

![establish environmental variables in vs code](../../static/img/environmental-variables-vs-code.png)

Environment variables support in Runme is currently a work in progress. We have a lot planned for supporting the environment/secrets in the future, so stay tuned!

### Deploying

For a deploy script, such as the one below, running as a Background task is a great idea, since it is a long-running script.

![deploy script in vs code](../../static/img/deploying-a-script.png)

