---
runme:
  id: 01HGAW03Y6QJQASC1QM0XC76P3
  version: v3
sidebar_position: 1
title: Welcome
---

# **Welcome**

## **Why Runme?**

The goal of Runme is to enable engineers to capture an operational process as a reliable, refinable, reusable asset we call a Runme Notebook. All DevOps engineers have experienced the frustration of not being able to get work done because documentation is out of date, hard to find and not able to integrate with cloud native processes. By building, and curating, reliable Runme Notebooks, you can break through this frustration and open up hours of productivity!

## **What is Runme?**

Runme makes Markdown documentation actually runnable. Runme is a Cloud-native Shell Kernel with a notebook, editor, terminal, and CLI interface. Runme helps you build and curate Notebooks and also run them making it easy to automate step-by-step instructions especially in cloud-native environments. Runme Notebooks are perfect for capturing and persisting operational knowledge making operational docs reliable and less likely to become outdated.

Another way to think about it:

> 💡 Runme is like Jupyter but with a Shell/Bash Kernel and lightweight dependencies.

## **Built on Open Technologies & Standards**

Runme is Markdown compatible (and superset) and open source licensed under Apache 2.0. We also work hard to use open standards for interoperability. Get more details in our [open source](/resources/open-source) section.

<RunmeStars /><br /><br />

All the code for Runme can be found in 4 repositories on Github:

- [Kernel / CLI](https://github.com/stateful/runme)
- [VS Code extension](https://github.com/stateful/vscode-runme)
- [Github action](https://github.com/stateful/runme-action)
- [Website](https://github.com/stateful/runme.dev)
- [Docs](https://github.com/stateful/docs.runme.dev)

## **Introduction video**

A fun introduction to the problem Runme is trying to solve.
<video autoPlay loop muted playsInline controls>

  <source src="https://runme.dev/videos/hero.mp4" type="video/mp4" />
  <source src="https://runme.dev/videos/hero.webm" type="video/webm" />
</video>

## **Runme in 2 minutes**

A quick hands on example of Runme in action.
<video autoPlay loop muted playsInline controls>

  <source src="https://runme.dev/videos/runme-hello-world.mp4" type="video/mp4" />
</video>

<br /><br />
<Infobox type="sidenote" title="Jump forward">
[Install Runme](https://docs.runme.dev/installation) or [get started](https://docs.runme.dev/get-started).
</Infobox>

## **What makes a Runme Notebook?**

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

Runme is built on the VS Code platform running in Codespaces, Coder's [code-server](https://github.com/coder/code-server), Google IDX, GCP Cloud Editor, Gitpod, VSCodium, etc. Under the hood, much like other Notebook technologies such as Jupyter, you can read more on the [Architecture page](/architecture).

<br />
<img src="/img/venn.png" style={{width: "60%", display: "inline"}} alt="What is runme"/>
<br /><br />

## **What's next?**

- First you need to (install Runme)(/installation) for the client you want to use.
- Next you need to (write a hello world)(/hello-world) Notebook

If you've already done that, skip to [configuring Notebooks](/configuration) or our [tutorials](/tutorials).

<!--
# **Quick Start ⚡️**

### Welcome to ▶️ Runme's docs

Runme makes your Markdown documentation actually runnable. Runme achieves this by seamlessly loading Markdown into a notebook interface and rendering an interactive UI of runnable commands. Runme is inherently designed to streamline cloud-native DevOps processes. Let's jump right in!

<RunmeStars /><br /><br />

> 💡 This document is a self contained Runme Notebook which will guide you through Runme's key features. If you have _VS Code_ installed locally, you can open this document in Runme by clicking the _"Open with Runme"_ badge on **[docs.runme.dev](https://docs.runme.dev/)** which will open this document as a notebook locally. If you are already inside VS Code, you can skip over the next paragraph.

## **Clone the Repository**

```sh {"id":"01HY0Y62WJCT2BVD5VA2HZ32TG"}
git clone --depth=1 https://github.com/stateful/docs.runme.dev.git
cd docs.runme.dev
```

Unless you already have VS Code installed locally, go ahead and install the Runme CLI. Otherwise skip to the next paragraph please.

### **MacOS**

```sh {"cwd":"docs.runme.dev","id":"01HY0SZCMGA291TVE2R1QKNVX4"}
brew install runme && runme open
```

### **Linux & Windows**

```sh {"cwd":"docs.runme.dev","id":"01HY0SZCMGA291TVE2R40BDNJ9"}
npx runme open
```

## **Runme by Example**

Let's quickly run through examples that best illustrate how Runme can unleash your docs and make them much more useful for everybody.

> 🚨 Please be absolutely sure that you have cloned into the repository and opened the `docs/index.md` file in the notebook UI inside VS Code. Otherwise you will not be able to - literally - run the next steps.

<br/>

After clicking the _"Open with Runme"_ badge or cloning into the repo what you see should resemble following screenshot.

![Runme in VS Code](/img/doc-in-vscode.png)

## **Generic Docs Using Prompts**

Write generic docs and notebooks using Runme's smart prompting. This is useful when you want to platform others. Per default, exported environment variables will trigger prompts for users to input values. If the export is declared without any quotes, Runme will prompt with the value as a message. With quoted values (no matter if single or double quotes), Runme will prompt with the value as a placeholder value for confirmation.

<video autoPlay loop muted playsInline controls>
  <source src="videos/prompting.mp4" type="video/mp4" />
  <source src="../static/videos/prompting.mp4" type="video/mp4" />
  <source src="videos/prompting.webm" type="video/webm" />
  <source src="../static/videos/prompting.webm" type="video/webm" />
</video>
<br/>

Runme's prompting default is _"auto"_. It will not prompt again on re-runs if values are already known. Click _"Configure"_ on the cell, to switch **promptEnv** to **no** (never prompt; run as is) or **yes** (always prompt; overwrite previous values). Try it yourself... just click the play button.

```sh {"id":"01HY0Z7HSFFV7KHPX559SNVSHN","terminalRows":"4"}
export PROJECT_NAME=[Enter your project id]
echo "PROJECT_NAME set to $PROJECT_NAME"

export CLUSTER_ZONE="us-central1-c"
echo "CLUSTER_ZONE set to $CLUSTER_ZONE"
```

You can reset all environment variables using the **Reset Session** button in the top bar or choose _"Execute and always prompt for input"_ from the caret menu next to the play button. Learn more [here](https://docs.runme.dev/configuration/cell-level#set-environment-variables).

## **Piping and Referencing Cells**

Runme, unlike [Jupyter](https://jupyter.org/), does not allow block-scope variables and functions sharing. This means that variables declared in one cell are not per se available in another cell. However, Runme is aware of environment variables. As seen above, `export` variable declarations ulitmately will be stored in the environment.

Outside of that, you can reference cells in two ways. This is particularly useful when different languages (Bash/Shell, Python, Ruby, PHP, etc.) are used in different cells.

<video autoPlay loop muted playsInline controls>
  <source src="videos/referencing.mp4" type="video/mp4" />
  <source src="../static/videos/referencing.mp4" type="video/mp4" />
  <source src="videos/referencing.webm" type="video/webm" />
  <source src="../static/videos/referencing.webm" type="video/webm" />
</video>
<br/>

### **1. Reference Last Cell Output**

The most recent cell output will be stored in a special environment variable called `$__` (double underscore).

```sh {"id":"01HY18GGPG1C8KT40T8D41885F","name":"FILE_LIST"}
ls *.md | head -n 5
```

This is useful when you want to reference the output of the last cell. When `$__` is reference the cells have to be executed back-to-back.

```sh {"id":"01HY192SQK8VCQ9DXX2KGR249N"}
echo -n "Previous cell's output was:\n\n$__"
```

### **2. Reference by Cell Name**

Notice how the cell above is named `FILE_LIST` (visible in notebook UI & [raw Markdown](https://raw.githubusercontent.com/stateful/docs.runme.dev/main/docs/index.md)). This allows you to reference the output of that cell by using the cell name as an environment variable. This makes reference outputs more robust since they no longer have to run back-to-back. However, sequence still matters. The referenced cells has to run first.

```sh {"id":"01HY18W7RX74HFNZSBNYB9SEFR"}
echo "Reference a cell via the ENV using its name \"\$FILE_LIST\":"
echo "\n$(echo -n $FILE_LIST | sort | uniq -c)"
```

## **Seamlessly Fits into DevOps Stack**

Runme is 100% Markdown compatible and seamlessly integrates with tooling in your DevOps stack.

Distribute ready-made [Devcontainers](https://docs.runme.dev/guide/devcontainer) to lock dependencies and configuration to make workflows reproducible. Runme is a perfect fit for DevOps workflows. Run docs and notebooks against [SSH jumphosts](https://docs.runme.dev/how-runme-works/runme-via-ssh#vs-code-remote-development) or inside of popular Cloud Development Environments like GitHub Codespaces, Google IDX & Cloud Editor, Gitpod, or run as self-hosted [webapp](https://docs.runme.dev/how-runme-works/web) anywhere.

And so much [more](https://docs.runme.dev/getting-started/).

<br />
<Infobox type="sidenote" title="Keep going!">

Learn more about Runme and what problems it [solves for you](/why).

</Infobox> -->
