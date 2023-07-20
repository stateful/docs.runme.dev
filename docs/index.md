---
sidebar_position: 1
title: Home
---

import Infobox from "../src/components/Infobox.tsx"

# Why Runme?

Runme is a tool that makes runbooks actually _runnable_, making it easier to follow step-by-step instructions. Users can execute instructions, check intermediate results, and ensure the desired outputs are achieved. Authors can create predefined golden paths and share them with others. Runme combines the guardrails of a pipeline with the flexibility of scripting, where users can check intermediary results before moving on.

Runme achieves this by literally running markdown (ubiquitous for docs inside repos). More specifically, Runme runs your commands inside your fenced code blocks (shell, bash, zsh). It's 100% compatible with your programming language's task definitions (Makefile, Gradle, Grunt, NPM scripts, Pipfile or Deno tasks, etc.). Runme persists your runbooks in markdown, which your docs are likely already using.

<!-- ![What is Runme](../static/img/venn.png) -->

<br />
<img src="/img/venn.png" style={{width: "70%"}} alt="What is runme"/>

## What is Runme?

Runme has interfaces for terminal, editor, and notebooks attached to a kernel, making them interoperable. While all client interfaces share core features, namely execution, they excel in different use cases.

> 💡 Runme is like Jupyter but with a Shell/Bash Kernel and lightweight dependencies.

<br/>
Runme runs your runbooks everywhere, irrespective of the environment: a local laptop, a VM, a Devcontainer, Cloud Development Environment, or attached to a remote host via SSH:
<br/>
<br/>

- Split loose scripts into runbooks with separate cells, intermediate outputs, and controls to check before moving on.
- Get ahead of bit-rot and reverse-engineering runbooks executing them directly from markdown inside your project's repo.
- Increase shareability of runbooks by decoupling them from personal _dotfiles_ or _bash_history's_ without getting in the way.
- Codify golden paths without overly restricting the flexibility of "scripting".

## The User Interface

Runme has a headless and graphical user interface to author, run, and verify runbooks. It achieves this by making markdown files containing your documentation interactive and intelligent. Runme consists of the following parts:

- **[Runme CLI](/install#runme-cli)**. Understands markdown, discovers command blocks, and offers a guided terminal UI to execute command blocks and individual subcommands for power usage and CI/CD.
- **Runme Kernel**. Much like Jupyter's, it shares session state across clients inter-operably. Kernel and CLI are bundled inside the [same binary](https://github.com/stateful/runme) for ease of use and distribution.
- **[Runme for VS Code](/install#runme-for-vs-code)** first-party integration into VS Code. Allows execution of command blocks from code editor and notebook UI. The notebook UI offers a rich viewing, execution, and authoring experience leveraging web-app-like features.
- **[Runme for Web](/install#runme-for-web)** is a self-contained web app version of Runme you can run locally. Mirrors VS Code's Notebook & Editor UX without running the IDE.

<Infobox type="sidenote" title="Try it now">

Learn how to install Runme and [get started](/getting-started).

</Infobox>

## Under The Hood

Architecturally, Runme breaks down into the following parts:

- A serializer that transforms markdown into executable cells with input and output
- A portable runner interface that supports multimodal clients
- A kernel that retains state across execution in sessions akin to a terminal
- A raw-markdown editor (inside VS Code) client for the runner
- A CLI client for the runner
- A notebook client (inside VS Code) for the runner
- A visual markdown viewer and editor (inside VS Code)

<video autoPlay loop muted playsInline controls>
  <source src="/videos/runme-illustration.mp4" type="video/mp4" />
  <source src="/videos/runme-illustration.webm" type="video/webm" />
</video>

## Known Limitations

- Runme currently only has rudimentary support for PowerShell. While PowerShell is not limited to Windows, it is its primary platform. We recommend using [WSL](https://learn.microsoft.com/en-us/windows/wsl/).
- Please [report any issues](https://github.com/stateful/runme/issues/new) you encounter, big or small, to help us make Runme better.

## Telemetry Information

Please help to make Runme better. Any information emitted by Runme is pseudo-anonymized (no PII whatsoever), and the emitter will respect VS Code's global "send no telemetry" (id: `telemetry.telemetryLevel`) setting. The purpose of collecting this information is to improve the Runme experience for developers continuously.

Telemetry collected includes:

- Buttons clicked & commands triggered
- Total cells and how many are being executed
- Extension activation and deactivation
- Notebook opened and saved (incl. metadata; file names are obfuscated)

<Infobox type="sidenote" title="Join Runme community!">

Make sure to [get in touch](https://discord.gg/runme) with us if you are missing a feature or have other ideas.

</Infobox>
