---
runme:
  id: 01HG11HG1XY3V7DCQVQ32Q71ZZ
  version: v3
sidebar_position: 1
title: Options for Document and Cell
---

# Options for Document and Cell

Changing the behavior of executing code and commands in Runme can be done either at the [Document level](../configuration/document-level) or the [Cell level](../configuration/cell-level) inside the markdown document. This page is a reference for both.

### **Document Options**

Frontmatter in yaml, json, or toml on top of Markdown document.

| Configuration  | Description                              | Default value             |
| ------------- | ----------------------------------------- | ------------------------- |
| cwd           | Overwrites the default working directory  | [Markdown file's basedir] |
| shell         | Overwrites shell with custom preference   | [system/user default]     |
| skipPrompts   | Bypasses interactive prompts              | [system/user default]     |

### **Cell Options**

Metadata inside Markdown's fenced code blocks.

| Configuration          | Description                                                     | Default value            |
| ---------------------- | --------------------------------------------------------------- | ------------------------ |
| background             | Indicates if the cell should be runned as a background process  | false                    |
| closeTerminalOnSuccess | Hide Terminal after cell successful execution                   | true                     |
| category               | Execute this code cell within a category                        | [empty]                  |
| cwd                    | Modify current working directory for cell execution             | [empty]                  |
| excludeFromRunAll      | Prevent executing this cell during the "Run All" operation      | false                    |
| interactive            | Indicates if run should allow interactive input                 | false                    |
| interpreter            | The program or command line inserted into shebang (aka #!) line | inferred from languageId |
| mimeType               | If set skips auto-detection and uses specific media (MIME) type | [empty]                  |
| name                   | Cell’s canonical name useful for referencing the cell via CLI   | auto-generated           |
| terminalRows           | Number of rows to display in the notebook terminal              | auto-set                 |
| promptEnv              | Prompt user to set exported environment vars                    | auto                     |
| skipPrompts            | Bypasses interactive [prompts](../configuration/cell-level) that require inputting environment vars or authentication confirmations. |false     |

<Infobox type="sidenote" title="SkipPrompts">

This feature can be used to prevent [prompting](../configuration/document-level) when exporting an environment variable. By configuring the [cell options](../configuration/cell-level) appropriately, you can streamline your workflow and make your environment setup more efficient.

</Infobox>
