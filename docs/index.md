---
sidebar_position: 1
---

# ▶ Welcome

## Why Runme? ⚡️

The goal of Runme is to enable engineers to capture an operational process as a reliable, refinable, reusable asset we call a Runme Notebook. All DevOps engineers have experienced the frustration of not being able to get work done because documentation is out of date, hard to find and not able to integrate with cloud native processes. By building, and curating, reliable Runme Notebooks, you can break through this frustration and open up hours of productivity!

## What is Runme?

Runme makes Markdown documentation actually runnable. Runme is a Cloud-native Shell Kernel with a notebook, editor, terminal, and CLI interface. Runme helps you build and curate Notebooks and also run them making it easy to automate step-by-step instructions especially in cloud-native environments. Runme Notebooks are perfect for capturing and persisting operational knowledge making operational docs reliable and less likely to become outdated.

Another way to think about it:

> 💡 Runme is like Jupyter but with a Shell/Bash Kernel and lightweight dependencies.

## Built on Open Technologies & Standards

Runme is Markdown compatible (and superset) and open source licensed under Apache 2.0. We also work hard to use open standards for interoperability. Get more details in our [open source](/resources/open-source) section.

<RunmeStars /><br /><br />

All the code for Runme can be found in 4 repositories on Github:

- [Kernel / CLI](https://github.com/stateful/runme)
- [VS Code extension](https://github.com/stateful/vscode-runme)
- [Github action](https://github.com/stateful/runme-action)
- [Docs](https://github.com/stateful/docs.runme.dev)

## Introduction video

A fun introduction to the problem Runme is trying to solve.
<video autoPlay loop muted playsInline controls>

  <source src="https://runme.dev/videos/hero.mp4" type="video/mp4" />
  <source src="https://runme.dev/videos/hero.webm" type="video/webm" />
</video>

## Runme in 2 minutes

A quick hands on example of Runme in action.
<video autoPlay loop muted playsInline controls>

  <source src="https://runme.dev/videos/runme-hello-world.mp4" type="video/mp4" />
</video>

<br /><br />
<Infobox type="sidenote" title="Jump forward">
[Install Runme](/installation) or [get started](/getting-started).
</Infobox>

## What makes a Runme Notebook?

When you create a Notebook using Markdown, and then either open it's Notebook form in VS Code (or use the CLI) we are adding important capabilities that don't exist in a pure Markdown rendering.

The Notebook interface makes:

- commands and code executable
- behavior and output configurable (stored transparently in the Markdown)
- commands aware of .ENV dependencies

A great example of this is when you specify the **mimetype**, that config metadata tells the Notebook to automatically render an image or a sortable table instead of text for output. We can also interpret URL's to cloud console's as an interactive dashboard UI.

<br />
<img src="/img/notebook-components.png" style={{width: "80%", display: "inline"}} alt="What is runme"/>
<br /><br />

## Runme's architecture

Runme is built on the VS Code platform running in Codespaces, Coder's [code-server](https://github.com/coder/code-server), Google IDX, GCP Cloud Editor, Gitpod, VSCodium, etc. Under the hood, much like other Notebook technologies such as Jupyter, you can read more on the [Architecture page](/resources/architecture).

<br />
<img src="/img/venn.png" style={{width: "60%", display: "inline"}} alt="What is runme"/>
<br /><br />

## What's next?

- First you need to [install Runme](/installation) for the client you want to use.
- Next follow the [getting started](/getting-started) guide

If you've already done that, skip to [configuring Notebooks](/configuration) or our [guides](/guide).
