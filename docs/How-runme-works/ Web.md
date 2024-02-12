---
runme:
  id: 01HMXXQ4A2JWWEQ8B80M2H6YVW
  version: v2.2
---

# Runme on Web

If you haven't already installed Runme CLI, please complete the steps in [installation](https://docs.runme.dev/install) before proceeding.

Runme can run as a self-contained web app. Since Runme's notebook UX is built on top of the VS Code platform, we can leverage the [code-server](https://github.com/coder/code-server) project to run it as a local self-contained web app.

Just run following command:

```sh {"id":"01HMXXQX8CN23XC7W67TAEX39B"}
runme open
```

Runme will download and setup `code-server` for you and VS Code should be automatically opened in your default browser.