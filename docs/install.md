---
sidebar_position: 2
title: Install Extension
---

# Install Runme

## The VS Code Extension

Open the `Extensions Tab` in the VS Code sidebar and search for **"Runme"**.

![install runme gif](static/img/install.gif)

Alternatively, you can go to the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stateful.runme) and click the green `Install` button.

That's it. Now, any time you open a Markdown file (`*.md` or `*.mdx`) it will open as a Runme notebook.

If you want to test drive cutting-edge features, Runme offers regular edge releases you can switch channels from the ⚙️ (gear) icon's "Switch to Pre-Release/Release" respectively.

## The Command Line Interface

On macOS you can install Runme via Homebrew.sh which receives regular updates:

```
    $ brew install stateful/tap/runme
```

If you don’t have homebrew, you can download it from [here](https://github.com/degrammer/runme-getting-started/blob/main/img/https:/brew.sh). Follow all the instructions and ensure brew is added to your PATH.

Alternatively, check out [runme's releases](https://github.com/stateful/runme/releases) and select a binary for your OS/arch. Let us know [on Discord](https://discord.gg/stateful) if you have a preferred distribution mechanism.

With Go dev tools installed, you can install `Runme` with `go install`:

```
$ go install github.com/stateful/runme@latest
```

If you don't have go developer tools installed and still want to use this method, [download and install go](https://go.dev/doc/install)

A pre-release version is offered for curious developers who want to try our latest enhancements to the extension. Head to the extension configuration and click Switch to Pre-release Version to use it. If you don’t see such an option, ensure your VS Code is at least 1.63.0.

![Find runme in vs code](static/img/runme-in-vscode.png)

### Download binaries

Download a binary from runme CLI [release page](https://github.com/degrammer/runme-getting-started/blob/main/img/https:/github.com/stateful/runme/releases)

Binaries are offered for Windows, MacOS, and Linux

### The TLDR;

Install the VS Code runme extension just like every other VS Code extension, open any .md/.mdx file in VS Code with commands, then click to run them (and much more). Then go create your own custom runnable markdown files!
