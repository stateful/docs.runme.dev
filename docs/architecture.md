---
sidebar_position: 10
title: Kernel Architecture
---

# Kernel Architecture

Runme is built on the VS Code platform running in Codespaces, Coder's [code-server](https://github.com/coder/code-server), Google IDX, GCP Cloud Editor, Gitpod, VSCodium, etc. Under the hood, much like other Notebook technologies such as Jupyter, Runme breaks down into the following components:

- A serializer that transforms Markdown into executable cells with input and output
- A universal task runner that's native to markdown and works with all language-specific runners
- A portable runner interface that supports multimodal clients
- A kernel that retains state across execution in sessions akin to a terminal
- A raw-Markdown editor (inside VS Code) client for the runner
- A CLI client for the runner
- A notebook client (inside VS Code) for the runner
- A visual Markdown viewer and editor (inside VS Code)
- A cloud-native web component renderer that can embed any cloud resource

The kernel architecture allows Runme to be seamlessly embedded into various User Interface modalities (notebook, editor, webapp, CLI) as well as headless execution as part of CI/CD pipelines. Runme strives to provide the best possible out-of-the-box experience for every client modality.

<br />
<img src="/img/venn.png" style={{width: "60%", display: "inline"}} alt="What is runme"/>
