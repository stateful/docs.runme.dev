---
title: CLI
---

# CLI

Runme can be run not only as VS Code extension but also as CLI tool to run certain code snippets within your `Readme.md`.

![Runme CLI](/img/terminal.png "Runme CLI")

## Install

The easiest way on MacOS is to use Homebrew:

```sh
$ brew update
```

Install runme

```sh
$ brew install stateful/tap/runme
```

Alternatively, check out runme's [releases](https://github.com/stateful/runme/releases) and select a binary for your operating system.

If you have Go developer tools installed, you can install it with go install:

```sh
$ go install github.com/stateful/runme@latest
```

## Usage

Runme parses every shell or bash code block of a markdown file and allows you to execute it within your terminal environment. It comes with several commands that help you to run code blocks in your markdown successfully:

```
runme --help
Parses commands directly from a README (best-effort) to make them executable under a unique name.

Usage:
  runme [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  help        Help about any command
  list        List available commands.
  print       Print a selected snippet.
  run         Run a selected command.

Flags:
      --chdir string      Switch to a different working directory before exeucing the command. (default ".")
      --filename string   A name of the README file. (default "README.md")
  -h, --help              help for runme
  -v, --version           version for runme
```


By default Runme will try to open a `Readme.md` file in your current work directory but you can modify this by using the `filename` and `chdir` flags, e.g.:

```sh
runme ls --filename SUPPORT.md --chdir ./.github
```
