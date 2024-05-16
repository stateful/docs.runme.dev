---
runme:
  id: 01HGAW03Y6QJQASC1QM0XC76P3
  version: v3
sidebar_position: 1
title: Home
---

# **Quick Start ⚡️**

### Welcome to ▶️ Runme's docs. Thanks for stopping by!

Runme makes markdown actually runnable. Runme achieves this by seamlessly loading markdown into a notebook interface which makes it much easier to complete step-by-step instructions. Let's jump right in!

> 💡 This document is a self-contained notebook which will guide you through Runme's key features. If you have *VS Code* installed locally, you can open this document in Runme by clicking the *"Open with Runme"* badge on **[docs.runme.dev](https://docs.runme.dev/)** which will open this document as a notebook locally. If you are already inside VS Code, you can skip over the next paragraph.

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

After clicking the *"Open with Runme"* badge or cloning into the repo what you see should resemble following screenshot.

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

Runme's prompting default is *"auto"*. It will not prompt again on re-runs if values are already known. Click *"Configure"* on the cell, to switch **promptEnv** to **no** (never prompt; run as is) or **yes** (always prompt; overwrite previous values). Try it yourself... just click the play button.

```sh {"id":"01HY0Z7HSFFV7KHPX559SNVSHN","terminalRows":"4"}
export PROJECT_NAME=[Enter your project id]
echo "PROJECT_NAME set to $PROJECT_NAME"

export CLUSTER_ZONE="us-central1-c"
echo "CLUSTER_ZONE set to $CLUSTER_ZONE"
```

You can reset all environment variables using the **Reset Session** button in the top bar or choose *"Execute and always prompt for input"* from the caret menu next to the play button. Learn more [here](https://docs.runme.dev/configuration/cell-level#set-environment-variables).

## **Piping and Referencing Cells**

Runme, unlike [Jupyter](https://jupyter.org/), does not allow block-scope variable sharing. This means that variables declared in one cell are not per se available in another cell. However, Runme is aware of environment variables. As seen above, `export` variable declarations ulitmately will be stored in the environment.

Outside of that, you can reference cells in two ways. This is particularly useful when different languages (Bash/Shell, Python, Ruby, PHP, etc.) are used in different cells.

<video autoPlay loop muted playsInline controls>
  <source src="videos/referencing.mp4" type="video/mp4" />
  <source src="../static/videos/referencing.mp4" type="video/mp4" />
  <source src="videos/referencing.webm" type="video/webm" />
  <source src="../static/videos/referencing.webm" type="video/webm" />
</video>
<br/>

### **1. Reference Last Cell Output**

The most recent cell output will be stored in a special environment variable called `__` (double underscore).

```sh {"id":"01HY18GGPG1C8KT40T8D41885F","name":"FILE_LIST"}
ls *.md | head -n 5
```

This is useful when you want to reference the output of the last cell. When `$__` is reference the cells have to be executed back-to-back.

```sh {"id":"01HY192SQK8VCQ9DXX2KGR249N"}
echo -n "Previous cell's output was:\n\n$__"
```

### **2. Reference by Cell Name**

Notice how the cell above is named `FILE_LIST` (visible in notebook UI & [raw markdown](https://raw.githubusercontent.com/stateful/docs.runme.dev/main/docs/index.md)). This allows you to reference the output of that cell by using the cell name as an environment variable. This makes reference outputs more robust since they no longer have to run back-to-back. However, sequence still matters. The referenced cells has to run first.

```sh {"id":"01HY18W7RX74HFNZSBNYB9SEFR"}
echo "Reference a cell via the ENV using its name \"\$FILE_LIST\":"
echo "\n$(echo -n $FILE_LIST | sort | uniq -c)"
```

## **Seamlessly Fits into DevOps Stack**

Lock and distribute read-made [Devcontainers](https://docs.runme.dev/guide/devcontainer) to lock dependencies and configuration to make workflows reproducible. Runme is a perfect fit for DevOps workflows. Run notebooks against [SSH jumphosts](https://docs.runme.dev/how-runme-works/runme-via-ssh#vs-code-remote-development) or inside of popular Cloud Development Environments like GitHub Codespaces, Google IDX & Cloud Editor, Gitpod, or run as self-hosted [webapp](https://docs.runme.dev/how-runme-works/web) anywhere.

<br />
<Infobox type="sidenote" title="Keep going!">

Learn more about Runme and what problems it [solves for you](/why).

</Infobox>
