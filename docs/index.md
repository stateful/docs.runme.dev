---
sidebar_position: 1
title: Home
---

import Infobox from "../src/components/Infobox.tsx"

# Why Runme?

Runme bridges the gap between workflow documentation and task definitions required to develop locally and execute runbooks. It allows project contributors to execute instructions step-by-step, checking intermediary results as they go, to ultimately complete and verify the desired results.

Runme achieves this by literally running markdown (ubiquitous for docs inside repos). More specifically Runme runs your fenced code blocks (shell, bash, zsh). Keep using your language platform's task definitions (Makefile, Gradle, Grunt, NPM scripts, Pipfile or Deno tasks, etc), let Runme worry about how to execute them.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/runme-illustration.mp4" type="video/mp4" />
  <source src="/videos/runme-illustration.webm" type="video/webm" />
</video>

## What is Runme?

Runme comes with interfaces for terminal, editor, and notebooks attached to a kernel that makes them interoperable. While all client inferfaces share core features, namely execution, they excel in different use cases.

Develop successfully irrespective of the environment: a local laptop, a VM, a Devcontainer, or Cloud Development Environment, etc:

- Narrow down on a small set of tasks, describe their purpose alongside the use case, and make execution a no-brainer. Guard-rails included.
- Get ahead of docs bit-rot and repo reverse-engineering executing tasks directly where they are described: markdown docs inside your project's repo.
- Increase portability of dev workflows by decoupling tasks from personal _dotfiles_ or _bash_history's_ without getting in the way.

## The User Interface

Runme comes with a headless and a graphical user interface to author, run, and verify workflows centered around code. It achieves this by making markdown files containing your documentation interactive and intelligent. Runme consists of following parts:

- **[Runme CLI](/install#runme-cli)**. Understands markdown, discovers command blocks, and offers a guided terminal UI to execute command blocks and individual subcommands for power usage and CI/CD.
- **Runme Kernel**. Much like Jupyter's, it shares session state across clients inter-operably. Kernel and CLI are bundled inside the [same binary](https://github.com/stateful/runme) for ease of use and distribution.
- **[Runme for VS Code](/install#runme-for-vs-code)** first-party integration into VS Code. Allows execution of command blocks from code editor and notebook UI. The notebook UI offers a rich viewing, execution, and authoring experience leveraging web-app-like features.
- **[Runme for Web](/install#runme-for-web)** a self-contained web app version of Runme you can run locally. Mirrors VS Code's Notebook & Editor UX without having to run the IDE.

<Infobox type="sidenote" title="Try it now">

Learn how to install Runme and [get started](/getting-started).

</Infobox>

## Under The Hood

Architecturally, Runme breaks down into the following parts:

- A serializer that transforms markdown into executable tasks & workflows
- A portable task runner interface that supports multimodal clients
- A kernel that retains state across execution in sessions akin to a terminal
- A raw-markdown editor (inside VS Code) client for the workflow runner
- A CLI client for the workflow runner
- A notebook client (inside VS Code) for the workflow runner
- A visual markdown viewer and editor (inside VS Code)

## Known Limitations

- Runme currently only has rudimentary support for PowerShell. While PowerShell is not limited to Windows, it is its primary platform. We recommend using [WSL](https://learn.microsoft.com/en-us/windows/wsl/).
- Please [report any issues](https://github.com/stateful/runme/issues/new) you encounter big or small to help us make Runme better.

## Telemetry Information

Please help making Runme better. Any information emitted by Runme is pseudo-anonymized (no PII whatsoever) and the emitter will respect VS Code's global "send no telemetry" (id: `telemetry.telemetryLevel`) setting. The purpose of collecting this information is to continuously improve the Runme experience for developers.

Telemetry collected includes:

- Buttons clicked & commands triggered
- Total cells and how many are being executed
- Extension activation and deactivation
- Notebook opened and saved (incl. metadata; file names are obfuscated)

<Infobox type="sidenote" title="Join Runme community!">

Make sure to [get in touch](https://discord.gg/runme) with us if you are missing a feature or have other ideas.

</Infobox>
