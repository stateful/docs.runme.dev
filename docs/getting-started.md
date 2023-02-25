---
sidebar_position: 3
title: Getting Started
---

# Getting Started

Copypasta menu is over.

Ever wondered if there is a better way of experiencing READMEs; forget copy&pasting into terminals? Skip right to dessert, and enjoy Runme sweetness to streamline reading, running, and editing.

# Your First Runme

You can get started in one click with the following badge:
<!-- [![Run Locally via Runme](https://badgen.net/badge/Run%20this/Markdown/5B3ADF?icon=https://runme.dev/img/logo.svg)](vscode://stateful.runme?command=setup&fileToOpen=docs/intro.md&repository=https://github.com/stateful/runme.dev.git) -->

Simply follow the instructions provided by VS Code to get started in seconds:

![run commands in vs code](../static/img/run-commands-vscode.gif)

Alternatively, clone into the [Example Repo](https://github.com/stateful/blog-examples) to follow along! This guide follows the `node-streams` sub-package - simply open its README file and runme will do the rest.

If you want to use Runme outside VS Code, you can install the CLI standalone. Learn about the [Runme CLI](/docs/cli)


## Running Scripts

Runme automatically converts all bash codeblocks in your README into runnable scripts. This makes getting started with a new project a breeze - say goodbye to annoying copy-and-pasting!

To run a script, click the Run button on its left-hand side. Start by running the first script under "Prerequisites":

![run scripts in vs code](../static/img/run-script-vscode.gif)

As you can see, we have downloaded the `business_data.csv` file, which contains business statistics about New Zealand in the years 2000-2021. It's a pretty big file!

> In order for the set-up script to work, you'll need to have the `curl` and `unzip` utilities installed. The remainder of the scripts will also require `node.js` to be installed.
> In a future version of Runme, we plan to provide a solution to help you manage these dependencies from within the notebook. Stay tuned!

## Command Output

Scroll down to the "Examples" section of the notebook. From there, try running Steps 1 and 2.

If everything goes right, you should get an output like the following:

![Command output vs code](../static/img/command-output-vscode.png)

Great! You can see the terminal output from each command beneath its respective cell. Our Node.JS script was able to parse that massive file with no problems!

### Successful Execution

Wondering how you know when a command is finished executing? Look out for the checkmark in the bottom left:

![checkmar in vs code](../static/img/checkmark-vs-code.png)

If the command fails, it will be an "X" mark instead!

### Copying Output

Runme provides a handy "Copy" button to easily copy the output of a command!

![copy output vs code](../static/img/copy-output-vscode.png)

### Clearing Output

Sometimes, the output of a command can clutter up the screen. To prevent this, use the "Clear Cell Outputs" menu option.

Alternatively, select the output and use the Option+Delete shortcut.

![clear output vs code](../static/img/clear-output-vscode.png)

Hopefully, you've successfully run your first Runme notebook, and understand the basics of Runme! As you'll soon see, however, you've still barely scratched the surface of Runme's capabilities.

# Runme Editing & Authoring

Runme combines running, viewing, and editing into one experience.

## From Scratch

Start by initializing a new project and adding a new `README.md` file. Alternatively you can select `Runme Notebook` from the `File->New File` menu. When you open it, you should get an empty canvas, like so:

![start readme project](../static/img/start-readme-project.png)

## Adding Markdown

To add a new Markdown section, click the "+ Markdown" button in the top left or center:

![add markdown vs code](../static/img/add-markdown-vscode.png)

You can then edit the markdown block directly:

![edit the markdown block](../static/img/edit-markdown-block.gif)

As shown in the video, once you're done editing a block, use the "Stop Editing Cell" button (the one with the checkmark):

![Stop Editing Cell vs code](../static/img/checkmark-editing-vscode.png)

If you ever want to edit the cell again, use the "Edit Cell" button:

![start editing markdown in vs code](../static/img/start-editing-vscode.png)

Finally, you can remove a cell at any time using the "Remove Cell" button:

![remove cell in markdown](../static/img/delete-markdown-cell.png)

Note that the usual shortcuts (like Ctrl + Z) work perfectly in this environment too!

> You can use `ESC` or `Ctrl+Enter` to quickly finish editing a cell.

> You can use Enter on its own to start editing a selected cell.

> You can also use `CMD+Delete` to quickly remove a cell.

## Adding Code

Code cell blocks work similarly to Markdown blocks, and can be edited/saved/deleted in the same way.

To create a new code block, use the "+ Code" button in the top left or center:

![add new code block vs code](../static/img/add-code-vscode.png)

You can then freely add runnable code:

![run hello world from vs code](../static/img/echo-hello-world.gif)

## Interactive Mode

By default, our script will run in "Interactive Mode." This will run the script in a separate terminal window, rather than in the notebook itself.

This is great for, as the name implies, interactive scripts. Our script, however, just prints output and has no interactivity whatsoever. It would be great to see the output in the terminal!

If we just try to run this as-is, we will experience the following:

![run hello world in vs code](../static/img/hello-world-vscode-error.gif)

To fix this easily, we'll need to access the Configure foldout by clicking on the Configure button:

![configure vs code](../static/img/configure-vs-code.png)

From here, we can easily disable interactive mode:

![disable interactive vs cose](../static/img/disable-interactive.png)

And our code block will now display its output exactly as in the previous guide:

## Frontmatter

[Frontmatter](https://jekyllrb.com/docs/front-matter/) is common occurrence in markdown documents. At the moment Runme won’t break your frontmatter, but we also haven’t yet implemented an interface for managing or editing it from within the notebook. Stay tuned!

# Runme Settings for VS Code

In the VS Code settings, several configurable settings influence general Runme behavior and enable experimental functionality.

![Runme Configuration for VS Code](../static/img/runme-configuration-vs-code.png)

### Background Processes

Suppose that you have a script that intends to run in the background (like a dev watcher). To simulate this now, we'll use the script `sleep 10000`.

You *could* run this like other scripts, however, Runme supports a special "Background" mode for these kinds of tasks. This mode gives special tools to help manage them!

You can enable Background mode in the same foldout you configured Interactive mode:

![Background Processes in vs code](../static/img/background-process-vs-code.png)

### Warning!

Background mode only works in tandem with Interactive mode!

Now, when you run the script, it will be part of a long-running terminal session:

![background mode vs code](../static/img/background-mode.gif)

As is demonstrated by the previous video, background tasks are delineated by the "Background Task" label:

![background task vs code](../static/img/background-task.png)

Background Tasks also get a "Stop Task" button to end their execution long after starting:

![stop task in background in vs code](../static/img/background-stop-task.png)

### Sidenote

Configuration fields like `background` and `interactive` are set using markdown's script metadata feature:

![configuration of background vs code](../static/img/config-background.png)

Be sure not to strip this data if you want to use it!

<!-- ### Changing Language -->
<!-- (TODO: show how to change language; need issues fixed for this since language selection is broken at the moment) -->

## Summary

Hopefully, you now feel comfortable making your own notebooks!

In the next guide, you'll see some more practical examples, so you can get some ideas on how to use these tools in action.

## How to ensure Runme is working properly?

It’s easy. Open your project README file and see it is now opened as a Notebook file! Check that shell commands are now rendered as runnable blocks. That’s pretty nice. Finally, you’re seeing the future of running your README files now. We bet you won’t want to return to plain markdown viewers.

## How to open a README file as a markdown file?

Sometimes, you will want to see the file as a regular markdown file, and you don’t need to disable or uninstall RUNME. You can right-click on the file and pick one of the options displayed when clicking Open with. You can select the built-in text editor or markdown preview for such cases.

![open a README file as a markdown file](../static/img/open-readme-file.gif)

## Getting the best of Runme

To get the best of RUNME, and to offer a fantastic README experience, RUNME has a cell configuration option, which allows you to indicate HOW the cell will be executed. The cell represents an execution block, usually shell commands.

## Cell configuration

### Options

| Configuration         | Description                                                    | Default value |
| ------------ | ---------------------------------------------------------------| ------------- |
|  background  | Indicates if the cell should be runned as a background process | false         |
|  interactive | Indicates if run should allow interactive input                | false         |
|  closeTerminalOnSuccess | Hide Terminal after cell successful execution       | true          |
|  mimeType    |  Cell’s output content MIME type                               | text/plain    |
|  name        | Cell’s canonical name useful for referencing the cell via CLI  | auto-generated |

### Configure Cell's Execution

Not all commands are equal and expectations of how execution works differ. The most common cases are:

1. File-watchers for compilers & bundlers should run as background tasks
2. Interactive vs non-interactive execution
3. Human-centric output: JSON, text, images, etc
4. Terminal visibility when no errors occur

Just click "Configure" on the respective cell to make modifications to the cell execution behavior.

![Configure Cell's Execution in vs code](../static/img/configure-cell-execution.gif)

If you feel more comfortable editing the markdown file directly, you can do it by using the following configuration options schema:

```sh
```sh { interactive=false name=echo-hello-world }
echo hello world ```
```

Try out the previous command

```sh
echo hello world
```

The entire configuration schema as an example

```sh
```sh { interactive=true name=example mimeType=text/plain closeTerminalOnSuccess=false background=false }
echo hello world ```
```

Take a look at more [examples](https://github.com/stateful/vscode-runme/tree/main/examples) available inside the VS Code extension repo for a reference on how to apply these code block attributes in different use cases.

### State Management

This is an active area of development, but the currently released version of Runme doesn’t share an environment state between cells.

To get around this problem, you can make cells completely independent by having all of the pre-requisite commands also run in the same code cell. In the following example, I solve the problem by using the file system.

**Example with the environment (DOESN’T WORK):**

```sh
$ export NAME='Adam'

$ node ./run_server -name $NAME # This wont work!
```

**Example with the file system (WORKS):**

```sh
$ echo "Adam" > name.txt

$ NAME=$(&lt;name.txt)

$ node ./run_server -name $NAME # This works!
```

## Notebook Explorer

To help you navigate the markdown files in your project, Runme adds this super handy “RUNME NOTEBOOKS” panel. Clicking any markdown file will open it in your code editor view.

![notebook explorer](../static/img/notebook-explorer.png)
