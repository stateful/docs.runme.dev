---
sidebar_position: 2
title: Document-level Options
---

RUNME does not just retain frontmatter, it supports top-level settings that will affect all cells in the document.

### Set custom shell

RUNME will default to the system's default shell unless specified in the frontmatter. Both relative (be sure shell is included in `$PATH`) and absolute paths work. This is useful when notebooks are being shared amongst users with different shell setups.

```yaml
---
shell: bash
# or
shell: zsh
# or
shell: /bin/ksh
---
```

### Current working directory

It is not unusual to store docs in a, e.g. `docs/` sub-directory. It's often times implied that commands need running from the base directory. To reliably execute commands in this case it's handy to set explicitly set a working directory in the frontmatter.

```yaml
---
# relative for file inside of `docs/`
cwd: ..
# absolute works too, however, less commonplace
cwd: /tmp
---
```