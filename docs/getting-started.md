# Getting Started

Runme lets you seamlessly turn your existing Markdown docs, such as README.md, into runnable notebooks. This enables static docs to become interactive for its readers and greatly improve their learning experience. As a VS Code user, just [click here](vscode://stateful.runme?command=setup&fileToOpen=docs/getting-started.md&repository=https://github.com/stateful/runme.dev.git) to *run this getting started guide*.

## Why Runme?

While markdown docs are ubiquitous in software and the written word foundational to documentation, bit-rot and "broken docs" are all too commonplace. The low coupling between documentation's static text and the code of the documented system exposes our docs to breakage. Runme is here to address this fundamental problem.

Runme's goal is to makes existing markdown docs both **runnable** and subsequently **testable**. Much in the same way how unit tests relates to your code.

## Jump Right In
Just [open this guide](vscode://stateful.runme?command=setup&fileToOpen=docs/getting-started.md&repository=https://github.com/stateful/runme.dev.git) as notebook inside VS Code to experience Runme first-hand.

### Inside VS Code

```sh { background=false interactive=false }
export MY_NAME=Enter your name
$ echo "Hi $MY_NAME, just let Runme run your docs for you."
```

### In The Terminal

Alternatively, you could use Runme's CLI in your terminal. On MacOS:

```sh
$ brew install stateful/tap/runme
$ runme --filename getting-started.md
```

Check [Runme's releases page](https://github.com/stateful/runme/releases) to download the CLI for all other platforms.

## Key Features

- Execute command blocks via a simple ▶️ play button instead of copy&paste-ing into your terminal
- Leverage placeholder and prompts to have readers interactively complete ENV VARs 
- Fine-tune your doc's executable notebook cells to streamline the execution experience for others
- Run watchers for compilation/bundling in as background tasks
- Capture non-interactive output directly inside the respective notebook's cell output
- Control whether or not a cell's terminal should remain open after successful execution
- Set a cell's output MIME type to render images, JSON, or any other format in human-compatible ways
