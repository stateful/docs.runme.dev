---
sidebar_position: 2
title: Document-level Options
---

Runme does not just retain frontmatter, it supports top-level settings that will affect all cells in the document.

### Set custom shell

Runme will default to the system's default shell unless specified in the frontmatter. Both relative (be sure shell is included in `$PATH`) and absolute paths work. This is useful when notebooks are being shared amongst users with different shell setups.

```yaml {"id":"01HPGW1N17ZGN6STQF6FHVQWB0"}
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

```yaml {"id":"01HPGW1N17Y9CM9EGP9J3A02QH"}
---
# relative for file inside of `docs/`
cwd: ..
# absolute works too, however, less commonplace
cwd: /tmp
---
```