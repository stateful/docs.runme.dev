---
sidebar_position: 2
title: Install Extension
---

Open the `Extensions Tab` in the VS Code sidebar and search for **"Runme"**.

![install runme gif](../static/img/install.gif)

Alternatively, you can go to the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stateful.runme) and click the green `Install` button.

That's it. Now, any time you open a Markdown file (`*.md` or `*.mdx`) it will open as a Runme notebook.

## Runme for VS Code

![Overview of Runme for VS Code](../static/img/runme-for-vscode.png)

## Pre-release: Test drive early

A pre-release version is offered for curious developers who want to try our latest enhancements to the extension. Head to the extension configuration and click Switch to Pre-release Version to use it. If you don’t see such an option, ensure your VS Code is at least 1.63.0.

![Find runme in VS Code](../static/img/runme-in-vscode.png)

## Runme as Default Markdown Viewer

Install the VS Code Runme extension just like every other VS Code extension, open any `.md` / `.mdx` file in VS Code with commands, then click to run them (and much more). Then go create your own custom runnable markdown files! If you like to use Runme as your default markdown file viewer in VS Code, follow these steps:

1. Right-click on any `*.md` or `*.mdx` file in the explorer window (in the directory file list, not under "Open Editors").
2. Pick "Open With"
3. Pick "configure default editor" at the bottom of the list
4. Pick "Run your README.md - Runme"

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
