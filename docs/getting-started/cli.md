---
sidebar_position: 3
title: Runme for CLI
---

import Infobox from "../../src/components/Infobox.tsx"

# Getting started with Runme CLI

<Infobox type="sidenote" title="Install Runme">

If you haven't already installed Runme CLI, please complete the steps in [installation](/install) before proceeding.

</Infobox>

Runme has a nice TUI that you can use simply like so:

```sh
# short for "runme tui"
$ runme
```

![Runme TUI Usage](../../static/img/runme-tui.gif)

This allows you to quickly execute any script present in the README.

<Infobox type="warning" title="Warning!">

Runme won't work if your current working directory doesn't contain a README file at the top level!

You can use the `--chdir` flag to alter the working directory or `--filename` to specify any other markdown file, without changing the environment's working directory.

</Infobox>

### Available commands

Runme parses every shell or bash code block of a markdown file and allows you to execute it within your terminal environment. It comes with several commands that help you to run code blocks in your markdown successfully:

```sh
Runme executes commands inside your runbooks, docs, and READMEs. Parses commands
directly from markdown files to make them executable.

Usage:
  runme [flags]
  runme [command]

Available Commands:
  branch      Suggest a branch name (aka branchGPT)
  completion  Generate the autocompletion script for the specified shell
  extension   Check your Stateful VS Code extension status
  fmt         Format a Markdown file into canonical format
  help        Help about any command
  list        List available commands
  login       Log in to Runme (optional)
  logout      Log out from Runme
  open        Launch Runme in a headless web client
  print       Print a selected snippet
  run         Run a selected command
  suggest     Use our suggestion engine to give contextual advice
  tui         Run the interactive TUI

Flags:
      --allow-unknown                Display snippets without known executor (default true)
      --allow-unnamed                Allow scripts without explicit names
      --background                   Enable running background blocks as background processes
      --chdir string                 Switch to a different working directory before executing the command (default "~/oss/docs.runme.dev")
      --entries int                  Number of entries to show in TUI (default 5)
      --env-order stringArray        List of environment files to load in order. (default [.env.local,.env])
      --exit                         Exit TUI after running a command
      --filename string              Name of the README file (default "README.md")
      --filter string                Regular expression to filter results, by filename and task name
      --git-ignore                   Whether to respect .gitignore file(s) in project (default true)
  -h, --help                         Help for runme
      --ignore-pattern stringArray   Patterns to ignore in project mode (default [node_modules])
      --insecure                     Run command in insecure-mode
      --load-env                     Load env files from local project. Control which files to load with --env-order (default true)
      --project string               Root project to find runnable tasks
  -s, --server string                Server address to connect runner to
      --tls string                   Directory for TLS authentication (default "~/Library/Application Support/runme/tls")
  -v, --version                      Version of runme
[...]
```

### Run a markdown file

By default, Runme will try to open a `Readme.md` file in your current work directory but you can modify this by using the `filename` and `chdir` flags, e.g.:

```sh
runme ls --filename SUPPORT.md --chdir ./.github
```

### Running Commands Directly

The TUI is nice, but what if you just want to run a specific command quickly?

To run a specific script by name, use the `runme run <command>` subcommand.
