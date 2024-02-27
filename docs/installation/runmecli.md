---
runme:
  id: 01HMXWCY2H423QQTC496NY7S34
  version: v2.2
---

# Install Runme on CLI

Runme works effectively on the CLI. If you are a power user who enjoys running Markdown files from the terminal of your local machine, this section is for you.

![cli](../../static/img/terminal.png)

Here, we will give you detailed instructions on how to install Runme on your CLI.

## Install Runme On MacOS

To get started, one of the easiest ways to install Runme on MacOS is by using [Homebrew.](https://brew.sh/)

Before you proceed, ensure you have the latest version of Homebrew on your local machine, use the command below to update if needed:

```sh {"id":"01HMXXFJFXWEN7ER7PSYKQNH3C","name":"brew update"}
brew update
```

Once you have the latest version of Homebrew, proceed with installing Runme. Use the command below to install:

```sh {"id":"01HMXXF11NA3BJNCDYQAED3654"}
brew install runme
```

You should see a similar output if Runme is successfully installed.

```sh {"id":"01HQK3K4B8AC82PPT9370P49FD"}
==> Downloading https://ghcr.io/v2/homebrew/core/runme/manifests/3.0.2
##################################################################################################################################################################################################### 100.0%
==> Fetching runme
==> Downloading https://ghcr.io/v2/homebrew/core/runme/blobs/sha256:c8fb6b6c6b3ee65fd8ee8b24fe9e85bec007afb89623f7fc40a83705d9e182de
##################################################################################################################################################################################################### 100.0%
==> Pouring runme--3.0.2.arm64_sonoma.bottle.tar.gz
==> Caveats
zsh completions have been installed to:
 /opt/homebrew/share/zsh/site-functions
==> Summary
:beer: /opt/homebrew/Cellar/runme/3.0.2: 8 files, 21.9MB
==> Running `brew cleanup runme`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
```

## Installing Runme On Windows

For Windows users, you can conveniently install Runme using [Scoop.sh](https://scoop.sh/), a command-line installer for Windows.

Run the commands below on your terminal to install Runme:

```sh {"id":"01HMXWP6WJP70JQEBKRMZWR955"}

scoop bucket add stateful https://github.com/stateful/scoop-bucket.git
scoop install stateful/runme

```

## Other Platforms

Alternatively, you can explore Runme's [releases](https://github.com/stateful/runme/releases) and choose the binary that corresponds to your operating system. If you have a different preferred distribution mechanism, feel free to inform us on [Discord](https://discord.gg/runme).

We have also provided an option for Go developers to install Runme. If you are a Go developer or you have Go developer tools installed, you can install Runme with `go install`  command. Use the command below to carry out this installation:

```sh {"id":"01HQK3RSC9YSH5NM2AE503GRB5"}
go install github.com/stateful/runme@latest
```
If you don't have Go developer tools installed and still want to use this method, download and install Go.

## Basic Usage with Runme TUI

Runme provides a user-friendly text-based user interface (TUI) that allows users to interact with Runme through typed commands and responses displayed on their screen.

This TUI can be accessed using the command `runme tui` or just `runme` . These commands essentially allow you to quickly execute any script present in the README.

The video below displays Runme’s TUI and how to access its features using the command.

![Runme TUI Usage](../../static/img/runme-tui.gif)


### **Warning**

Runme would not work if your current working directory does not contain a README file at the top level! You can use the `--chdir` flag to alter the working directory or `--filename` to specify any other markdown file, without changing the environment's working directory.



Runme parses every shell or bash code block of a markdown file and allows you to execute it within your terminal environment. It comes with several commands that help you to run code blocks in your markdown successfully:

```sh {"id":"01HMXWHNSWH5DV8A9P289P8SSE"}
Runme executes commands inside your runbooks, docs, and READMEs. Parses commands
directly from markdown files to make them executable.

Usage:
  runme [flags]
  runme [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  extension   Check your Runme VS Code extension status
  fmt         Format a Markdown file into canonical format
  help        Help about any command
  list        List available commands
  open        Launch Runme in a headless web client
  print       Print a selected snippet
  run         Run a selected command
  tui         Run the interactive TUI

Flags:
      --allow-unknown                Display snippets without known executor (default true)
      --allow-unnamed                Allow scripts without explicit names
      --background                   Enable running background blocks as background processes
      --chdir string                 Switch to a different working directory before executing the command (default "/Users/macbookpro")
      --entries int                  Number of entries to show in TUI (default 5)
      --env-order stringArray        List of environment files to load in order. (default [.env.local,.env])
      --exit                         Exit TUI after running a command
      --filename string              Name of the README file (default "README.md")
      --filter string                Regular expression to filter results, by filename and task name
      --git-ignore                   Whether to respect .gitignore file(s) in project (default true)
  -h, --help                         Help for runme
      --ignore-pattern stringArray   Patterns to ignore in project mode (default [node_modules,.venv])
      --insecure                     Run command in insecure-mode
      --load-env                     Load env files from local project. Control which files to load with --env-order (default true)
      --log                          Enable logging
      --log-file string              Log file path (default "/var/tmp/runme.log")
      --project string               Root project to find runnable tasks
  -s, --server string                Server address to connect runner to
      --tls string                   Directory for TLS authentication (default "/Users/macbookpro/Library/Application Support/runme/tls")
  -v, --version                      Version of runme

Use "runme [command] --help" for more information about a command.

Feedback:
  For issues and questions join the Runme community at https://discord.gg/runme
```

Runme’s TUI is awesome however, if you want to run a specific command quickly, simply run a specific script by name using the runme run `command` subcommand.
