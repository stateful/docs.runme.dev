---
sidebar_position: 1
title: Document-level Options
---

# Document-level Options

These are the options specified in the front-matter that apply to all the cells in the Markdown file.

### Options

Cen be specified in yaml, json, or toml on top of the document.

| Configuration | Description                              | Default value             |
| ------------- | ---------------------------------------- | ------------------------- |
| cwd           | Overwrites the default working directory | [Markdown file's basedir] |
| shell         | Overwrites shell with custom preference  | [system/user default]     |
| skipPrompts   | Bypasses interactive prompts             | [system/user default]     |

## Set Custom Shell

To specify the custom shell of each cell block in your file, you can do so using the Frontmatter.

![custom-shell](/img/configuration-page/runme-customshell.png)

You can also specify the custom shell of each cell block in your file using the Runme Frontmatter. Once a custom shell is specified, Runme will switch to the system's default shell unless specified in the front matter. Both relative (be sure shell is included in $PATH) and absolute paths work. This is useful when notebooks are being shared amongst users with different shell setups.

```sh {"id":"01HRVWZJMS7DNA193PN87JY5N7"}
---
shell: bash
# or
shell: zsh
# or
shell: /bin/ksh
---
```

> Both front-matter and VS Code settings effect the execution of the document

## Global CWD

To simplify commands and avoid long pathnames in commands you can set the base directory using 'cwd' in the front-matter config.

```yaml {"id":"01HPF4AYF82V87RYY7C23D2PCM"}
---
# relative for file inside of `docs/`
cwd: ..
# absolute works too, however, less commonplace
cwd: /tmp
---
```
