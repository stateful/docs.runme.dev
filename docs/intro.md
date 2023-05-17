---
sidebar_position: 1
title: Why Runme?
---

import Infobox from "../src/components/Infobox.tsx"

Runme bridges the gap between workflow documentation and task definitions required to develop locally and execute runbooks remotely. It allows project contributors to execute instructions step-by-step, checking intermediary results as they go, to ultimately complete and verify the desired results.

Runme achieves this by making markdown (ubiquitous for docs inside repos) interactive. Keep using your language platform's task definitions (Makefile, Gradle, Grunt, NPM scripts, Pipfile or Deno tasks, etc), let Runme worry about how to execute them.

## What is Runme?

Runme comes with interfaces for terminal, editor, and notebooks attached to a kernel that provides for interoperability. While all client inferfaces share core featuers, namely execution, they excel in different use cases.

Develop successfully irrespective of the environment: a local laptop, a VM, a Devcontainer, or Cloud Development Environment, etc:
- Narrow down on a small set of tasks, describe their purpose alongside the use case, and make execution a no-brainer.
- Get ahead of docs bit-rot and project reverse-engineering directly where tasks are already described in the documentation: markdown inside your project's repo.
- Increase portability of dev workflows by decoupling tasks from personal dotfiles or bash_history's without getting in the way.

## Getting Started

Runme's primary interface is a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) that provides developers with the ability to navigate workflows centered around code repositories by making Readme markdown files interactive and smart. Runme consists of two major parts:

- [Runme CLI](https://github.com/stateful/runme) and host of the kernel. It understands markdown, retains session state, and allows to discover and run command blocks.
- [Runme for VS Code](https://marketplace.visualstudio.com/items?itemName=stateful.runme) integrates capabilities into VS Code and allows you to run markdown from the raw editor and through notebook UIs.

<Infobox type="sidenote" title="Skip Ahead">
Learn how to <a href="/docs/install">install Runme</a> and get started.
</Infobox>

## Under Runme's hood

Architecturally Runme consists of the following parts:

- A serializer that transforms markdown into executable tasks & workflows
- A portable task runner interface that supports multimodal clients
- A kernel that retains state across execution in sessions akin to a terminal
- A raw-markdown editor (inside VS Code) client for the workflow runner
- A CLI client for the workflow runner
- A notebook client (inside VS Code) for the workflow runner
- A visual markdown viewer and editor (inside VS Code)

![Readme as Notebook and Markdown side-by-side](../static/img/sidebyside.png)

## Known limitations

- Runme currently only has rudimentary support for PowerShell. While PowerShell is not limited to Windows, it is its primary platform. We recommend using WSL.
- Please [report any issues](https://github.com/stateful/runme/issues/new) you encounter big or small to help us make Runme better.

<Infobox type="sidenote" title="Join Runme community!">

Make sure to [get in touch](https://discord.gg/runme) with us if you are missing a feature or have other ideas.

</Infobox>

## Telemetry Information

Please help making Runme better. Any information emitted by Runme is pseudo-anonymized (no PII whatsoever) and the emitter will respect VS Code's global "send no telemetry" (id: `telemetry.telemetryLevel`) setting. The purpose of collecting this information is to continuously improve the Runme experience for developers.

Telemetry collected includes:

- Buttons clicked & commands triggered
- Total cells and how many are being executed
- Extension activation and deactivation
- Notebook opened and saved (incl. metadata; file names are obfuscated)
