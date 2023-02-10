---
sidebar_position: 2
title: Getting Started
---

## Overview

Runme is a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) that aims to provide developers the ability to navigate around any code repository by making Readme markdown files interactive and smart. It consists of two major parts:

- A [CLI tool](https://github.com/stateful/runme) that understands markdown and allows you to discover and run code snippets within it
- A [VS Code extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) that integrates these capabilities into VS Code and allows you to run markdown through a notebook UI

Runme allows you to craft dev-native markdown files and create an interactive runbook experience for VS Code.

![Readme as Notebook and Markdown side-by-side](static/README_side_by_side.png)

Make sure to [get in touch](https://discord.gg/BQm8zRCBUY) with us if you are missing a feature or have other ideas. You can review development progress in [Runme's roadmap](https://github.com/stateful/runme/projects).

## Install

### VS Code Extension

Like any other VS Code extension Runme can be installed through the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stateful.runme) or [directly within VS Code](vscode://stateful.runme?command=setup&fileToOpen=https://gist.githubusercontent.com/christian-bromann/df97ce3dace21564ffdf1900400ec099/raw/0a9b29c979d61e17032c855b04dbc4f5b962f847/ThankYou.md).

That's it. Now, any time you open a Markdown file (`*.md` or `*.mdx`) it will open as Runme notebook.

### Command Line Interface

On macOS you can install runme via Homebrew.sh which receives regular updates:

```sh
$ brew install stateful/tap/runme
```

Alternatively, check out [runme's releases](https://github.com/stateful/runme/releases) and select a binary for your OS/arch. Let us know [on Discord](https://discord.gg/stateful) if you have a preferred distribution mechansim.

With Go dev tools installed, you can install `runme` with `go install`:

```sh
$ go install github.com/stateful/runme@latest
```

## Features

- Easily onramp via your existing README.md (any markdown docs) with zero changes
- Intuitively run your commands (shell) in a [notebook UX](https://code.visualstudio.com/docs/datascience/jupyter-notebooks) inside your IDE
- Make edits and author markdown docs inside of a [notebook UX](https://code.visualstudio.com/docs/datascience/jupyter-notebooks)
- Alternatively the `runme` CLI is available for power users
- Curate developer experiences using Runme's subtle command block annotations
- Use commonplace git workflows to continuously improve your docs, just like code
- Continue to display your docs in Markdown-compatible viewers
