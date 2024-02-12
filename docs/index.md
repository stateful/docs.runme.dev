---
runme:
  id: 01HGAW03Y6QJQASC1QM0XC76P3
  version: v2.0
sidebar_position: 1
title: Home
---

import Infobox from "../src/components/Infobox.tsx"

# Why Runme?

Runme makes runbooks _actually runnable_, making it effortless to complete step-by-step instructions. This makes it an excellent solution for runbooks, playbooks, and documentation that requires users to complete runnable steps incrementally—making operational docs reliable and much less susceptible to bitrot.

## Reliable Knowledge Sharing 🤝

Using notebook-based technology, users can execute instructions, check intermediate results, and ensure the desired outputs match expectations to complete the steps confidently. Authors can maintain golden paths for operational tasks, steps it takes to diagnose problems, or remedies to resolve problems and effectively share them with teammates.

In a nutshell, Runme combines the guardrails of a pipeline with the flexibility of scripting, where users can check intermediary results before moving on. Much like a terminal session, environment variables are retained across execution, and it is possible to pipe previous cells's output into successive cells.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/Key-feature-v2.mp4" type="video/mp4" />
  <source src="/videos/Key-feature-v2.webm" type="video/webm" />
</video>

<br />
<Infobox type="sidenote" title="Try it now">

Learn how to install Runme and [get started](/getting-started).

</Infobox>

## What is Runme?

Runme literally runs ubiquitous Markdown. More specifically, Runme runs your code and commands inside your fenced code blocks (shell, bash, zsh but also Ruby, Python, etc). It's 100% compatible with CommonMark (the standard) and won't interfere with existing markdown documentation or tooling you're already using.

Runme has interfaces for terminal, editor, and notebooks attached to a kernel, making them interoperable. While all client interfaces share core features, namely execution, they excel in different use cases.

> 💡 Runme is like Jupyter but with a Shell/Bash Kernel and lightweight dependencies.

<br/>
Runme runs everywhere, irrespective of the environment: a local laptop, a VM, a Devcontainer, Cloud Development Environment, or attached to a remote host via SSH:
<br/>
<br/>

- Split loose scripts into runbooks with separate cells, intermediate outputs, and controls to check before moving on.
- Get ahead of bit-rot and reverse-engineering runbooks executing them directly from markdown inside your project's repo.
- Increase shareability of runbooks by decoupling them from personal _dotfiles_ or _bash_history's_ without getting in the way.
- Codify golden paths without overly restricting the flexibility of "scripting".

Learn more about Runme's [Kernel Architecture](/architecture) to understand what powers Runme's portability.

## User Interfaces

Runme has a headless and graphical user interface to author, run, and verify runbooks. It achieves this by making markdown files containing your documentation interactive and intelligent. Runme consists of the following parts:

- **[Runme CLI](/how-runme-works/cli)**. Understands markdown, discovers command blocks, and offers a guided terminal UI to execute command blocks and individual subcommands for power usage and CI/CD.
- **Runme Kernel**. Much like Jupyter's, it shares session state across clients inter-operably. Kernel and CLI are bundled inside the [same binary](https://github.com/stateful/runme) for ease of use and distribution.
- **[Runme for VS Code](/how-runme-works/vs-code)** first-party integration into VS Code. Allows execution of command blocks from code editor and notebook UI. The notebook UI offers a rich viewing, execution, and authoring experience leveraging web-app-like features.
- **[Runme for Web](/how-runme-works/web)** is a self-contained web app version of Runme you can run locally. Mirrors VS Code's Notebook & Editor UX without running the IDE.

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
