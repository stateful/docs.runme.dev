---
sidebar_position: 2
title: Document-level Options
---

Alternatively, you can run the entire document in your Markdown file.

> Runme does not just retain [Frontmatter](https://docs.runme.dev/getting-started/vs-code#frontmatter), it also supports top-level settings that will affect all cells in the document.

### Set custom shell

```yaml {"id":"01HPF4AYF8APQXC4YRBANMNA4H"}
---
shell: bash
# or
shell: zsh
# or
shell: /bin/ksh
---
```

### Current working directory

It is not unusual to store docs in a sub-directory, e.g. `docs/`. It's often implied that commands need to run from the base directory. To reliably execute commands in this case it's handy to explicitly set a working directory in the frontmatter.

```yaml {"id":"01HPF4AYF82V87RYY7C23D2PCM"}
---
# relative for file inside of `docs/`
cwd: ..
# absolute works too, however, less commonplace
cwd: /tmp
---
```
