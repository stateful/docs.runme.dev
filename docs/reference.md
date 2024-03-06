---
runme:
  id: 01HG11HG1XY3V7DCQVQ32Q71ZZ
  version: v2.0
sidebar_position: 12
title: Reference
---

# **Reference**

Runme executes commands inside your runbooks, documentation, and READMEs. It parses commands directly from Markdown files to make them executable.

### **NAME**

Runme [command]: Specific commands or actions in Runme to perform different tasks.

Runme [flags]:  Optional configurations to modify the behaviour of our Runme runbook.

### **Runme Commands**:

Below are some available commands within Runme

`branch`  Suggest a branch name (aka branchGPT)

`completion`  Generate the autocompletion script for the specified shell

`extension`  Check your Stateful VS Code extension status

`fmt`  Format a Markdown file into canonical format

`help` Help about any command

`list`  List available commands

`login`  Log in to Runme (optional)

`logout` Log out from Runme

`open`  Launch Runme in a headless web client

`print`  Print a selected snippet

`run`  Run a selected command

`suggest`  Use our suggestion engine to give contextual advice

`tui` Run the interactive TUI

### **Runme Flags**

Runme supported configuration flags.

`--allow-unknown`

Display snippets without known executor (default true)

`--allow-unnamed`

 Allow scripts without explicit names

`--background`

Enable running background blocks as background processes

`--chdir string`

Switch to a different working directory before executing the command (default "~/oss/docs.runme.dev")

`--entries int`

Number of entries to show in TUI (default 5)

`--env-order stringArray`

 List of environment files to load in order. (default [.env.local,.env])

`--exit`

Exit TUI after running a command

`--filename string`

 Name of the README file (default "[README.md](http://readme.md/)")

`--filter string`

  Regular expression to filter results, by filename and task name

`--git-ignore`

Whether to respect .gitignore file(s) in project (default true)

`-h, --help`

Help for Runme

`--ignore-pattern stringArray`

Patterns to ignore in project mode (default [node_modules])

`--insecure`

 Run command in insecure-mode

`--load-env`

  Load env files from a local project. Control which files to load with --env-order (default true)

`--project string`

  Root project to find runnable tasks

`-s, --server string`

 Server address to connect runner to

`--tls string`

    Directory for TLS authentication (default "~/Library/Application Support/runme/tls")

`-v, --version`

   Version of Runme

### **Document Options**

Frontmatter in yaml, json, or toml on top of markdown document.

| Configuration  | Description                              | Default value             |
| ------------- | ----------------------------------------- | ------------------------- |
| cwd           | Overwrites the default working directory  | [markdown file's basedir] |
| shell         | Overwrites shell with custom preference   | [system/user default]     |
| skipPrompts   | Bypasses interactive prompts              | [system/user default]     |

### **Cell Options**

Metadata inside markdown's fenced code blocks.

| Configuration          | Description                                                     | Default value            |
| ---------------------- | --------------------------------------------------------------- | ------------------------ |
| background             | Indicates if the cell should be runned as a background process  | false                    |
| closeTerminalOnSuccess | Hide Terminal after cell successful execution                   | true                     |
| category               | Execute this code cell within a category                        | [empty]                  |
| cwd                    | Modify current working directory for cell execution             | [empty]                  |
| excludeFromRunAll      | Prevent executing this cell during the "Run All" operation      | false                    |
| interactive            | Indicates if run should allow interactive input                 | false                    |
| interpreter            | The program or command line inserted into shebang (aka #!) line | inferred from languageId |
| mimeType               | Cell’s output content MIME type                                 | text/plain               |
| name                   | Cell’s canonical name useful for referencing the cell via CLI   | auto-generated           |
| terminalRows           | Number of rows to display in the notebook terminal              | auto-set                 |
| promptEnv              | Prompt user to set exported environment vars                    | true                     |
| skipPrompts            | Bypasses interactive [prompts](../configuration/cell-level) that require inputting environment vars or authentication confirmations. |false     |

<Infobox type="sidenote" title="SkipPrompts">

This feature can be used to prevent [prompting](../configuration/document-level) when exporting an environment variable. By configuring the [cell options](../configuration/cell-level) appropriately, you can streamline your workflow and make your environment setup more efficient.

</Infobox>

### **Supported MIME types**

Runme supports the standard VS Code MIME types alongside custom Runme MIME types.

**Standard VS Code MIME types**

- text/plain
- application/javascript
- text/html
- image/svg+xml
- text/markdown
- image/png
- image/jpeg

**MIME types for rendering code**

- text/x-json
- text/x-javascript
- text/x-html
- text/x-rust
- text/x-LANGUAGE_ID for any other built-in or installed languages.


# Reference

Runme executes commands inside your runbooks, documentation, and READMEs. It parses commands directly from Markdown files to make them executable.

### NAME

Runme [command]: Specific commands or actions in Runme to perform different tasks.

Runme [flags]:  Optional configurations to modify the behaviour of our Runme runbook.

### Runme Commands:

Below are some available commands within Runme

`branch`  Suggest a branch name (aka branchGPT)

`completion`  Generate the autocompletion script for the specified shell

`extension`  Check your Stateful VS Code extension status

`fmt`  Format a Markdown file into canonical format

`help` Help about any command

`list`  List available commands

`login`  Log in to Runme (optional)

`logout` Log out from Runme

`open`  Launch Runme in a headless web client

`print`  Print a selected snippet

`run`  Run a selected command

`suggest`  Use our suggestion engine to give contextual advice

`tui` Run the interactive TUI

### Runme Flags

Runme supported configuration flags.

`--allow-unknown`

Display snippets without known executor (default true)

`--allow-unnamed`

 Allow scripts without explicit names

`--background`

Enable running background blocks as background processes

`--chdir string`

Switch to a different working directory before executing the command (default "~/oss/docs.runme.dev")

`--entries int`

Number of entries to show in TUI (default 5)

`--env-order stringArray`

 List of environment files to load in order. (default [.env.local,.env])

`--exit`

Exit TUI after running a command

`--filename string`

 Name of the README file (default "[README.md](http://readme.md/)")

`--filter string`

  Regular expression to filter results, by filename and task name

`--git-ignore`

Whether to respect .gitignore file(s) in project (default true)

`-h, --help`

Help for Runme

`--ignore-pattern stringArray`

Patterns to ignore in project mode (default [node_modules])

`--insecure`

 Run command in insecure-mode

`--load-env`

  Load env files from a local project. Control which files to load with --env-order (default true)

`--project string`

  Root project to find runnable tasks

`-s, --server string`

 Server address to connect runner to

`--tls string`

    Directory for TLS authentication (default "~/Library/Application Support/runme/tls")

`-v, --version`

   Version of Runme
