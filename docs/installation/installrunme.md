---
runme:
  id: 01HMXW3W0C2V6YSP2PPB33T61E
  version: v2.2
---

# Install Runme on Vscode

In this section, we will guide you through installing Runme on Vscode. 

Let's get started.

## Installing Runme on Vscode

To get started, open the `Extensions Tab` in your VS Code sidebar and search for **"Runme"**. The CLI is contained inside the extension.

!https://docs.runme.dev/assets/images/install-44dd79d42cdda47807552f51c15a8170.gif

Alternatively, you can go to the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stateful.runme) and click the green `Install` button.

That's it!

Now, whenever you open a Markdown file (**`*.md`** or **`*.mdx`**), it will open as a Runme notebook.

!https://docs.runme.dev/assets/images/runme-for-vscode-397776f424a116b7869b61b389f12912.png

### Bleeding Edge Features[](https://docs.runme.dev/install#bleeding-edge-features)

A pre-release version of Runme is offered for curious developers who want to try our latest enhancements to the extension. Head to the extension configuration and click “**Switch to Pre-release Version**” to access it.

!https://docs.runme.dev/assets/images/runme-in-vscode-57924fd289067e9d311951079afd66a0.png

[](https://docs.runme.dev/install#default-markdown-viewer)

If you don't see this option, make sure your VS Code is updated to at least version `1.63.0`.

### Default Markdown Viewer

Installing the VS Code Runme extension just like every other VS Code extension, open any `.md` / `.mdx` file in VS Code with commands, then click to run them (and much more). Then go create your own custom runnable markdown files! If you like to use Runme as your default markdown file viewer in VS Code, follow these steps:

1. Right-click on any `.md` or `.mdx` file in the explorer window (in the directory file list, not under "Open Editors").
2. Pick "Open With"
3. Pick "configure default editor" at the bottom of the list
4. Pick "Run your README.md - Runme"

or set the following in your `.vscode/settings.json` file of your project:

```javascript {"id":"01HMXW6480FV1JADHWVBBZ7YH3"}
// ...
  "workbench.editorAssociations": {
    "*.md": "runme"
// ...
  },
// ...
```

### Default Markdown Viewer

To use Runme as your default markdown file viewer in VS Code, follow these steps:

1. Right-click on any `.md` or `.mdx` file in the explorer window (in the directory file list, not under "Open Editors").
2. Choose "Open With."
3. Select "Configure Default Editor" at the bottom of the list.
4. Choose "Run your [README.md](http://readme.md/) - Runme."

Alternatively, you can set the following in your `.vscode/settings.json` file in your project:

```javascript {"id":"01HMXWAXX8WA6KTQPG7QNR43MV"}
// ...
"workbench.editorAssociations": {
    "*.md": "runme"
    // ...
  },
  // ...
```

Now, when you open any `.md` or `.mdx` file, it will default to the Runme viewer.

You can also switch by just doing a right-click on the file and go to `"Open With ..."`, e.g.:

!https://docs.runme.dev/assets/images/switch-notebook-viewers-c6af89c194bd0ac3a404069ed4634fdb.gif

### How it Works[](https://docs.runme.dev/install#how-it-works)

When Runme is run as a web app, it replicates the user experience of VS Code. For the next steps, explore the [Getting Started](https://docs.runme.dev/getting-started) guide.