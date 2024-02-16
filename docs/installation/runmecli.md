---
runme:
  id: 01HMXWCY2H423QQTC496NY7S34
  version: v2.2
---

# Install Runme on CLI

## [](https://docs.runme.dev/installation/runmecli)

The Runme CLI is ideal for power users who want to run markdown documentation from their terminal.

![cli](../../static/img/terminal.png)

### **On MacOS**

The easiest way on MacOS is to use [Homebrew](https://brew.sh/):

```sh {"id":"01HMXXFJFXWEN7ER7PSYKQNH3C"}
brew update
```

Install Runme

```sh {"id":"01HMXXF11NA3BJNCDYQAED3654"}
brew install runme
```

### **On Windows **

On Windows, we distribute the binary through [Scoop.sh](https://scoop.sh/):

```sh {"id":"01HMXWP6WJP70JQEBKRMZWR955"}

scoop bucket add stateful https://github.com/stateful/scoop-bucket.git
scoop install stateful/runme

```

### **Other Platforms**

Alternatively, check out Runme's [releases](https://github.com/stateful/runme/releases) and select a binary for your operating system. Let us know [on Discord](https://discord.gg/runme) if you have a different preferred distribution mechanism.

If you have Go developer tools installed, you can install it with go install:

```sh {"id":"01HMXWNACJGQCWXQCBZA7ERQB5"}
go install github.com/stateful/runme@latest
```

If you don't have Go developer tools installed and still want to use this method, [download and install go](https://go.dev/doc/install).

### **Download Binaries directly**

You can find a binary for your `OS/arch` on our [releases page](https://github.com/stateful/runme/releases). Let us know on [Discord](https://discord.gg/runme) if you have a preferred distribution mechanism.

See [the doc page on the cli](https://docs.runme.dev/installation/runmecli) for CLI installation instructions.

### **Basic Usage**

Runme has a nice TUI that you can use simply like so:

`# short for "runme tui"runme`

{{ Video example }}

This allows you to quickly execute any script present in the README.

### **Warning!**

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
  extension   Check your Stateful VS Code extension status
  fmt         Format a Markdown file into canonical format
  help        Help about any command
  list        List available commands
  login       Log in to Runme (optional)
  logout      Log out from Runme
  open        Launch Runme in a headless web client
  print       Print a selected snippet
  run         Run a selected command
  tui         Run the interactive TUI

Flags:
      --allow-unknown                Display snippets without known executor (default true)
      --allow-unnamed                Allow scripts without explicit names
      --background                   Enable running background blocks as background processes
      --chdir string                 Switch to a different working directory before executing the command (default "/Users/macbookpro/Desktop/ssh")
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

By default, Runme will try to open a `Readme.md` file in your current work directory but you can modify this by using the `filename` and `chdir` flags, e.g.:

```sh {"id":"01HMXWG5N41B5V7JKQG2FZDMC7"}
runme ls --filename SUPPORT.md --chdir ./.github
```

### **Running Commands Directly**

The TUI is nice, but what if you just want to run a specific command quickly?

Simply run a specific script by name, using the `runme run <command>` subcommand.
