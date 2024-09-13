---
sidebar_position: 1
---

# Run a cell

This is what Notebooks are all about, running commands (which combined with configuration is what we call cells in Notebook land).

## Run a cell in VS Code

- Make sure the [Runme VS Code extension is installed](/installation/vscode)
- Find or create a Markdown file in the VS Code file explorer
- Open that file, you should see a Notebook instead of Markdown
- Navigate to the specific cell you wish to run
- Click the **Run** icon on the left side of the code block

![cell-level](/img/configuration-page/cell-level-npm-install.png)

This action will run your command and return an executed output, you can configure how your cell should run using the configuration options.

## Run a cell in the CLI

- Make sure the [Runme CLI is installed](/installation/cli)

```sh
$ runme run [name of cell]
```
