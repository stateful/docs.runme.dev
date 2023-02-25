---
sidebar_position: 4
title: Cell Configuration
---

# Cell Configuration

To provide the best possible README (interactive markdown) experience to your users, be sure to configure your document's cells.

# What You Need To Know

Runme turns arbitrary markdown files into runnable notebooks. If your markdown contains [fenced-code blocks](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks) with shell-compatible commands, Runme is your friend. You most commonly find these in `README.md`, `DEV.md`, `BUILD.md`, etc but is up to your editorial preference.

## Specify Language in Blocks

Runme, just like most Markdown viewers, will work best without ambiguity about what language is contained inside of fenced code blocks. If possible, always specify the language [according to the standard](https://www.markdownguide.org/extended-syntax/#syntax-highlighting) illustrated below.

```
    ```sh
    $ echo "language identifier in fenced code block"
    ```
```

Out of the box, Runme will leverage the [Guesslang](https://github.com/yoeo/guesslang) ML/AI model with a bias towards Shell to detect the languages for unidentified code blocks. While this works well in a lot of cases, the accuracy is nowhere near 100%.

## Handle long-running processes

You want to enable the `background` setting if notebook execution will continue indefinitely on a single command.

![long-running processes in vs code](../static/img/long-running-process.png)

It is very common to use file-watcher enabled compilers/bundlers (`npm start dev`, `watchexec...` etc) in the background during development. For any cell containing an instance of these commands be sure to tick the "background" cell setting. It prevents execution from permanently blocking the notebook UX. Once ticked notice the "Background Task" label shows up in the cell status bar.

![background task process in vs code](../static/img/background-task-process.png)

## Interactive vs non-interactive cells

If a cell's commands do not require any input from a reader it might be a good fit to include the cell's output inside the notebook. This is useful if the resulting output could be useful as input in a downstream cell. This is what `interactive=false` is for which defaults to *true*.

![interactive execution in vs code](../static/img/interactive-execution.png)

Please note that the Runme team is currently working on making output in both notebook & terminal default behavior.

## Terminal visibility post-execution

A cell's execution terminal is auto-hidden unless it fails. This default behavior can be overwritten if keeping the terminal open is in the interest of the Runme notebook reader. Just untick `closeTerminalOnSuccess` (`false`).

## Human-friendly output: JSON, text, images, etc

Not all cells’ output is plain text. Using the `mimeType` specifier it is possible to specify the expected output's type. Notebooks have a variety of renderers that will display them human friendly. The mime type defaults to *text/plain*.

![Human-centric output](../static/img/human-centric-output.png)

### Supported mime types

Runme supports the standard VS Code mime types alongside custom Runme mime types.

**Standard VS Code mime types**

* text/plain
* application/javascript
* text/html
* image/svg+xml
* text/markdown
* image/png
* image/jpeg

**Mime types for rendering code**

* text/x-json
* text/x-javascript
* text/x-html
* text/x-rust
* text/x-LANGUAGE_ID for any other built-in or installed languages.
