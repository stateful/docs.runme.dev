---
runme:
  id: 01HG8G0PEA62Y82EQD0BY2SRJW
  version: v2.0
sidebar_position: 4
title: Reference
---

# Reference

Everything in one place.

### Document Options

Frontmatter in yaml, json, or toml on top of markdown document.

| Configuration  | Description                              | Default value             |
| ------------- | ----------------------------------------- | ------------------------- |
| cwd           | Overwrites the default working directory  | [markdown file's basedir] |
| shell         | Overwrites shell with custom preference   | [system/user default]     |
| skipPrompts   | Bypasses interactive prompts              | [system/user default]     |

### Cell Options

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
| skipPrompts            | Bypasses interactive [prompts](/Cell-level-Options) that require inputting environment vars or authentication confirmations. |false     |

<Infobox type="sidenote" title="SkipPrompts">

This feature can be used to prevent [prompting](/document-level) when exporting an environment variable. By configuring the [cell options](/cell-level) appropriately, you can streamline your workflow and make your environment setup more efficient.

</Infobox>

### Supported MIME types

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
