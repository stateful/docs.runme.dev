---
sidebar_position: 3
title: Web browser
---

# Web browser

Runme can run as a self-contained web app. Since Runme's Notebook UX is built on the VS Code platform, we can leverage the [code-server](https://github.com/coder/code-server) project to run it as a local, self-contained web app.

## Getting Started With Runme on Web

To get started with Runme on the web, you first need to [install Runme on your CLI](/installation/cli).

Once that is done, in your CLI, navigate to the directory you would love to open on the Web and run the command below

```sh {"id":"01J4PACV3TRAVE12G3GGKK92T5"}
runme open
```

This command will first install all necessary extensions to open your directory on the web and then open the directory in your default web browser.

```ini {"id":"01J4PC7Q3A0Z0TQ5H2255ST8V0"}
Installing extensions...
Extension 'stateful.runme' is already installed.
[2024-08-06T13:35:36.920Z] info  code-server 4.91.1 1962f48b7f71772dc2c060dbaa5a6b4c0792a549
[2024-08-06T13:35:36.924Z] info  Using user-data-dir /Users/macbookpro/.local/share/code-server
[2024-08-06T13:35:36.933Z] info  Using config file /Users/macbookpro/Library/Application Support/runme/code-server/config.yaml
[2024-08-06T13:35:36.933Z] info  HTTP server listening on http://127.0.0.1:8080/
[2024-08-06T13:35:36.933Z] info    - Authentication is disabled
[2024-08-06T13:35:36.933Z] info    - Not serving HTTPS
[2024-08-06T13:35:36.933Z] info  Session server listening on /Users/macbookpro/.local/share/code-server/code-server-ipc.sock
[2024-08-06T13:35:37.131Z] info  Opened http://127.0.0.1:8080/
```

From the above code block, it is clear that the configuration of Runme uses the local IP `127.0.0.1:8080`. It is possible to change the IP from `127.0.0.1:8080` to `0.0.0.0:8080` so you can have access to the server outside of your local host IP. manually edit the `config.yaml` file

![runme via web](/img/how-runme-works/runme-via-web.png)

## Features of Runme on Web

Installing Runme on the Web allows you to use VS Code right at your local host address on your default web browser and set up a Runme `code-server`.

On the web app, the features and actions that can be performed are quite similar to running [Runme in VS Code](/getting-started/vscode). The features include:

![VS Code Marketplace](/img/installation-page/runme-for-vscode.png)

### Notebooks Explorer

If you have more than one Markdown file that exists in a directory, you can easily access any of the Markdown files using the Notebooks Explorer.

![notebooks explorer](/img/how-runme-works/runme-notebooks-explorer.png)

### Cell Execution Status Indicator

After a code or command cell block is executed, the execution can either fail or pass. The Cell execution status indicator helps a user know the status of the executed cell.

![status indicator](/img/how-runme-works/runme-status-indicator.png)

### Cell Execution Result

Runme provides an embedded Notebook terminal that works just like the VS Code integrated terminal. With the Runme terminal, you can view the execution result of your codes and commands right inside your Markdown file.

![execution result](/img/how-runme-works/runme-cell-execution-result.png)

### Run Cell Button

Run codes and commands in a Markdown file with a single click.

![run cell button](/img/how-runme-works/runme-cell-button.png)

### Cell Code Block

Runme provides a cell code block that provides a visual representation of commands to be executed with syntax highlighting.

![runme code block](/img/how-runme-works/runme-code-block.png)

### Notebook Global Actions

Runme provides several options that can be executed in the context of a notebook thus making users more productive at their tasks.

![global actions](/img/how-runme-works/runme-network-global-actions.png)

### Cell Code Block Actions

To configure a cell code block, this feature provides a list of actions that can be used to define the code block executions. This includes a [cell programming language](https://docs.runme.dev/usage/shebang), [configurations](https://docs.runme.dev/configuration/cell-level), etc.

![cell code block actions](/img/how-runme-works/runme-block-actions.png)

### Cell Execution Result Actions

This feature allows users to perform specific actions, such as copying the output or previewing a gist. [Runme Gis](https://docs.runme.dev/usage/runme-gist)t allows users to store and share plain texts or code snippets with others without needing a full repository while also masking sensitive information.

![executionresult actions](/img/how-runme-works/runme-cells-execution-result-actions.png)

## Additional Resources

To learn more about how Runme works on several other client interfaces, see these resources:

- [Getting started in VS Code](/getting-started/vscode)
- [Getting started on the Web](/getting-started/web)
- [Getting started with VS Code SSH and Remote](/getting-started/vscode-ssh)
- [Getting started in the CLI](/getting-started/cli)
