---
runme:
  id: 01HGAW03Y6QJQASC1QM0XC76P3
  version: v3
sidebar_position: 1
title: Home
---

# **Quick Start ⚡️**

Welcome to ▶️ Runme's docs. Thanks for stopping by!

Runme makes markdown actually runnable, by loading it into a notebook interface which makes it much easier to complete step-by-step instructions. Let's jump right in!

> This document is a self-contained notebook which will guide you through Runme's key features. If you have *VS Code* installed locally, you can open this document in Runme by clicking the *"Open with Runme"* badge on **[docs.runme.dev](https://docs.runme.dev/)** which will open this document as a notebook locally. If you are already inside VS Code, you can skip over the next paragraph.

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

Let's quickly run through Runme's top features. 🚨 Please be absolutely sure that you have cloned into the repository and opened the `docs/index.md` file in the notebook UI inside VS Code. Otherwise you will not be able to - literally - run ▶️ the next steps. What you see should resemble following screenshot.

![Runme in VS Code](/img/doc-in-vscode.png)

### **Make Docs Generic Using Prompts**

Write generic docs and notebooks using Runme's smart prompting. This is useful when you want to platform others. Per default, exported environment variables will trigger prompts for users to input values. If the export is declared without any quotes, Runme will prompt with the value as a message. With quoted values (no matter if single or double quotes), Runme will prompt with the value as a placeholder value for confirmation.

<video autoPlay loop muted playsInline controls>
  <source src="videos/prompting.mp4" type="video/mp4" />
  <source src="../static/videos/prompting.mp4" type="video/mp4" />
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

### **Piping and Referencing Cells**

<br />
<Infobox type="sidenote" title="Keep going!">

Learn more about Runme and what problems it solves for you.

</Infobox>
