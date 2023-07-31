---
sidebar_position: 3
title: Runme for Web
---

import Infobox from "../../src/components/Infobox.tsx"

# Getting started with Runme Web

<Infobox type="sidenote" title="Install Runme">

If you haven't already installed Runme CLI, please complete the steps in [installation](/install) before proceeding.

</Infobox>

Runme can run as a self-contained web app. Since Runme's notebook UX is built on top of the VS Code platform, we can leverage the [code-server](https://github.com/coder/code-server) project to run it as a local self-contained web app.

Just run following command:

```sh
$ runme open
```

Runme will download and setup `code-server` for you and VS Code should be automatically opened in your default browser.

![Runme for Web](../../static/img/runme-for-web.png)
