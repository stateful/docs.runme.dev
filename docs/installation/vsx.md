---
sidebar_position: 2
title: Install from Open VSX
---

# Install from Open VSX

Runme can be easily installed in your editor as an extension.

The sections below will guide you through installing Runme and executing commands right inside your Markdown file.

## Installing Runme in the editor

To get started, follow the steps below:

1. Open up the editor on your local machine
2. Navigate to the **`Extension`** tab, which can be located on the dashboard on your left
3. In your search bar, type "Runme" (This will display the Runme Notebooks extension)
4. Now click on Install to install the Notebook extension

![install runme gif](/img/install.gif)

## Installing Runme From Open VSX

Alternatively, you can install Runme from the [Open VSX Marketplace](https://open-vsx.org). To do this, follow the steps below.

![Download](/img/installation-page/open-vsx-download.png)

1. Go to the [Open VSX Marketplace](https://open-vsx.org/extension/stateful/runme)
2. Search for Runme, find the "Runme Notebooks" extension
3. **Download the `.vsix` file** you want to install
4. Open your editor locally
5. Go to the **Extensions view** by either:
   - Clicking on the Extensions icon on the left sidebar, or
   - Using the keyboard shortcut `Ctrl+Shift+X`
6. In the Extensions view, click the **three dots (`...`)** in the top-right corner
7. Select **Install from VSIX...** from the dropdown menu
8. Navigate to the location where you downloaded the `.vsix` file, select it, and click **Open**.
9. The extension should get installed, and you should see it in the Extensions list once the installation is complete

After installation, you might need to reload the window for the extension to take effect.

You have successfully installed Runme! 🎉

## Available features

After successfully installing Runme, you can open any Markdown file (**`*.md`** or **`*.mdx`**), and it will open as a Runme Notebook.

![Marketplace](/img/installation-page/runme-for-vscode.png)

1. **Notebooks Explorer:** You can easily access all your Markdown files using the Notebook Explorer. This will display all Markdown files existing in your project directory.
2. **Cell Execution Status Indicator:** When a code block is executed, the status indicator displays an icon that indicates the status of the executed code. If the code fails, an “X” symbol is returned, indicating failure; however, if the code is successfully run, a symbol, as seen in the image above, is displayed.
3. **Cell Execution Result:** View the executed cell result using the integrated terminal and prevent context switching using this terminal.
4. **Run Cell Button:** Running code in Markdown files is now easier with just one click.
5. **Cell Code Block:** Get a visual representation of commands to be executed with syntax highlighting.
6. **Notebook Global Actions:** View common options that define your code input and execution in the context of the Notebook.
7. **Cell Code Block Actions:** List of actions that define code block execution. This includes cell language, [configurations](/configuration/index.md) etc.
8. **Cell Execution Result:** Copy your generated output.

## Change your default Markdown viewer

Follow the steps below:

1. Right-click on any `.md` or `.mdx` file in the explorer window (in the directory file list, not under **Open Editors**).
2. Select **Open With**
3. Select **Configure default editor** at the bottom of the list

Here is a visual representation of these steps:

![Find runme in vs code](/img/switch-notebook-viewers.gif)

Alternatively, set the following in your .vscode/settings.json file of your project:

```javascript {"id":"01HMXWAXX8WA6KTQPG7QNR43MV"}
// ...
"workbench.editorAssociations": {
    "*.md": "runme"
    // ...
  },
  // ...
```

Next up, [Get Started](/getting-started/vscode), and explore verything you can do with the extension.
