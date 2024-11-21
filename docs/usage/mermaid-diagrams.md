---
title: Render Mermaid Diagrams
---

# Rendering Mermaid Diagrams in your Notebooks

If you want to render Mermaid diagrams in your Runme Notebooks it can actually be done pretty easily by installing an extension and using the right syntax.

### Install the VS Code extension

Either from [this link](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) or in the VS Code extension panel, search for "Markdown Preview Mermaid Support".

### Put the following syntax in a Markdown block

<pre>
::: mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
:::
</pre>

### You should get a diagram rendering, like the following:

![Mermaid example](/img/mermaid.png)
