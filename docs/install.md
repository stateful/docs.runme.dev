---
sidebar_position: 2
title: Install Extension
---

# Install Runme

## The VS Code Extension

Open the `Extensions Tab` in the VS Code sidebar and search for **"Runme"**.

Alternatively you can go the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stateful.runme) and click the green `Install` button.

That's it. Now, any time you open a Markdown file (`*.md` or `*.mdx`) it will open as Runme notebook.

If you want to test drive cutting edge features, Runme offers regular edge-releases you can simply switch channels from the ⚙️ (gear) icon's "Switch to Pre-Release/Release" respectively.

## The Command Line Interface

On macOS you can install runme via Homebrew.sh which receives regular updates:

```sh
$ brew install stateful/tap/runme
```

Alternatively, check out [runme's releases](https://github.com/stateful/runme/releases) and select a binary for your OS/arch. Let us know [on Discord](https://discord.gg/stateful) if you have a preferred distribution mechansim.

With Go dev tools installed, you can install `runme` with `go install`:

```sh
$ go install github.com/stateful/runme@latest
```
