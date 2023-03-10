---
sidebar_position: 2
title: Install Extension
---

# Install Runme

While VS Code extension and CLI can be used separately, consider installing both to get the most out of GUI and TUI experiences, respectively.

## The VS Code Extension

Open the `Extensions Tab` in the VS Code sidebar and search for **"Runme"**.

![install runme gif](../static/img/install.gif)

Alternatively, you can go to the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stateful.runme) and click the green `Install` button.

That's it. Now, any time you open a Markdown file (`*.md` or `*.mdx`) it will open as a Runme notebook.

## The Command Line Interface

On macOS you can install Runme via Homebrew.sh which receives regular updates:

```sh
    $ brew install stateful/tap/runme
```

If you don’t have homebrew, you can download it from [here](https://github.com/degrammer/runme-getting-started/blob/main/img/https:/brew.sh). Follow all the instructions and ensure brew is added to your PATH.

Alternatively, check out [runme's releases](https://github.com/stateful/runme/releases) and select a binary for your OS/arch. Let us know [on Discord](https://discord.gg/stateful) if you have a preferred distribution mechanism.

With Go dev tools installed, you can install `Runme` with `go install`:

```sh
$ go install github.com/stateful/runme@latest
```

If you don't have go developer tools installed and still want to use this method, [download and install go](https://go.dev/doc/install).

## Pre-release: Test drive new features early

A pre-release version is offered for curious developers who want to try our latest enhancements to the extension. Head to the extension configuration and click Switch to Pre-release Version to use it. If you don’t see such an option, ensure your VS Code is at least 1.63.0.

![Find runme in vs code](../static/img/runme-in-vscode.png)

## Download binaries

Download a binary from runme CLI [release page](https://github.com/degrammer/runme-getting-started/blob/main/img/https:/github.com/stateful/runme/releases)

Binaries are offered for Windows, MacOS, and Linux

## Runme as Default Markdown Viewer

Install the VS Code Runme extension just like every other VS Code extension, open any `.md` / `.mdx` file in VS Code with commands, then click to run them (and much more). Then go create your own custom runnable markdown files! If you like to use Runme as your default markdown file viewer in VS Code, follow these steps:

1. Right-click on any `*.md` or `*.mdx` file in the explorer window (in the directory file list, not under "Open Editors").
1. Pick "Open With"
1. Pick "configure default editor" at the bottom of the list
1. Pick "Run your README.md - Runme"

or set the following in your `/.vscode/settings.json` file of your project:

```json
  // ...
  "workbench.editorAssociations": {
    "*.md": "runme"
    // ...
  },
  // ...
```

You can also switch by just doing a right-click on the file and go to `"Open With ..."`, e.g.:

![Find runme in vs code](../static/img/switch-notebook-viewers.gif)
