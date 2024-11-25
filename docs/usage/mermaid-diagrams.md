---
title: Render Mermaid Diagrams
---

# Rendering Mermaid Diagrams in your Notebooks

If you want to render Mermaid diagrams in your Runme Notebooks it can actually be done pretty easily by installing an extension and using the right syntax.

### Install the VS Code extension

Either from [this link](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) or in the VS Code extension panel, search for "Markdown Preview Mermaid Support". We recommend adding `bierner.markdown-mermaid` to your project's `.vscode/extensions.json` file.

### Put the following syntax in a Markdown block

````text
```mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
```
````

### You should get a diagram rendering, like the following:

![Mermaid example](/img/mermaid.svg)

### If you want a cell do display the source of a Mermaid diagram, add the following annotation:
````text
```mermaid {"transform":"true"}
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
```
````
