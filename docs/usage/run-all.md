---
sidebar_position: 2
---

# Run all cells

You can run all both from VS Code and the CLI.

## Run All in the CLI

From the CLI you can _run all_ commands in a file or multiple files.

```yaml {"id":"01HRVWKPWWS93DG93X9R29QZCE"}
runme run --all --allow-unnamed --skip-prompts
```

## Run Specific Markdown File

You can also run a specific Markdown file:

```yaml {"id":"01HRVWMYEMRYPWHE5TEDATJAD5"}
runme run --all --allow-unnamed --skip-prompts --filename=test.md
```

This will run just that specific Markdown file, in this case,  `test.md`

## Run All in VS Code

In VS Code you can use the the “**Run All”** button (you will be prompted if you would like to run all scripts before they are executed).

![run all](../../static/img/configuration-page/runme-runall.png)
