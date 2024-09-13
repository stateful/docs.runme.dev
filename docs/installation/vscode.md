---
sidebar_position: 2
title: Install in VS Code
---

# Install in VS Code

Runme can be easily installed on your VS Code editor. This installation will give you access to all the features of Runme directly within your code editor. In VS Code, Runme works using the Runme Notebook extension, which is the primary component installed in your editor.

With the extension you will be able to create and manage runbooks, as well as perform various runbook operations.
The sections below will guide you through installing Runme on VS Code executing code command right inside your Markdown file.

## Installing Runme on VS Code

To get started, follow the steps below:

1. Open up VS Code on your local machine.
2. Navigate to the **`Extension`** tab, which can be located on the dashboard on your left.
3. In your search bar, type "Runme". This will display the Runme Notebook extension.
4. Now click on Install to install the Notebook extension

![install runme gif](/img/install.gif)

## Installing Runme From the VS Code Marketplace

Alternatively, you can install Runme from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stateful.runme). To do this, follow the steps below.

1. Go to the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=stateful.runme)
2. Next, click on the **`Install`** button.

![VS Code Marketplace](/img/installation-page/VSCodemarketplace.png)

You have successfully installed Runme! 🎉

With Runme installed, every Markdown file you open on your VS Code editor, will open using Runme.

## Full Display of Runme’s Action on a Markdown File in VS Code

After successfully installing Runme on your VS Code, you can open any Markdown file (**`*.md`** or **`*.mdx`**) with VS Code, and it will open as a Runme notebook.

Below is a full display of Runme’s action on a Markdown file in VS Code.

![VS Code Marketplace](/img/installation-page/runme-for-vscode.png)

1. **Notebooks Explorer:** You can easily access all your Markdown files using the Notebook Explorer. This will display all Markdown files existing in your project directory.
2. **Cell Execution Status Indicator:** When a code block is executed, the status indicator displays an icon that indicates the status of the executed code. If the code fails, an “X” symbol is returned, indicating failure; however, if the code is successfully run, a symbol, as seen in the image above, is displayed.
3. **Cell Execution Result:** View the executed cell result using the integrated VS Code terminal and prevent context switching using this terminal.
4. **Run Cell Button:** Running code in Markdown files is now easier with just one click.
5. **Cell Code Block:** Get a visual representation of commands to be executed with syntax highlighting.
6. **Notebook Global Actions:** View common options that define your code input and execution in the context of the Notebook.
7. **Cell Code Block Actions:** List of actions that define code block execution. This includes cell language, [configurations](../configuration/index.md) etc.
8. **Cell Execution Result:** Copy your generated output.

## How to Set VS Code as Your Default Markdown Viewer

We believe that at this point, you have become a fan of Runme. If you want to make Runme your default Markdown file viewer in your VS Code editor, follow the steps below:

1. Right-click on any `.md` or `.mdx` file in the explorer window (in the directory file list, not under **Open Editors**).
2. Select **Open With**
3. Select **Configure default editor** at the bottom of the list
4. Select **Run your README.md - Runme**

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

### Bleeding Edge Features

Are you a curious developer who loves trying out new things? Runme has a pre-release version with every new update made to the extension. You can try out these new updates and additions firsthand. Follow these steps to access the pre-release version of Runme:

1. Go to the Extension tab on VS Code
2. Search for **Runme**
3. Click **Switch to Pre-release Version** to access new pre-released updates.

If you don't see this option, make sure your VS Code is updated to at least version `1.63.0`.

![Find runme in VS Codet](/img/bleed-edge-feature.png)

### How Runme Works in VS Code

Congratulations on successfully installing the Runme extension on VS Code. We have a lot in store for you. Explore how [How Runme Works with VS Code](/getting-started/vscode) and all you can achieve with the Runme extension.
