---
title: Your First Notebook
sidebar_position: 1
---

import Infobox from "../../src/components/Infobox.tsx"

Welcome to runme! You can get started in one click with the following badge:

<a 
  href="vscode://stateful.runme?command=setup&repository=git@github.com:stateful/blog-examples.git&fileToOpen=node-streams/README.md" 
  style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--ifm-leading)' }}
>
  <img src="/img/runmebutton.png" />
</a>

Simply follow the instructions provided by VSCode to get started in seconds:

<p align="center">
  <img src="/img/install-from-link.gif" />
</p>

Alternatively, check out the [Install Guide][install-guide] and clone the [Example Repo][test-repo] to follow along! This guide follows the `node-streams` sub-package - simply open its README file and runme will do the rest.

[install-guide]: /docs/install
[test-repo]: https://github.com/stateful/blog-examples

## Running Scripts

Runme automagically converts all bash codeblocks in your README into runnable scripts. This makes getting started with a new project a breeze - say goodbye to annoying copy-and-pasting!

To run a script, click the Run button on its left-hand side. Start by running the first script under "Prerequisites":

<p align="center">
  <img src="/img/notebook-download-csv.gif" />
</p>

As you can see, we have downloaded the `business_data.csv` file, which contains business statistics about New Zealand in the years 2000-2021. It's a pretty big file!

<Infobox type="warning">

In order for the set-up script to work, you'll need to have the `curl` and `unzip` utilities installed. The remainder of the scripts will also require `node.js` to be installed.

In a future version of Runme, we plan to provide a solution to help you manage these dependencies from within the notebook. Stay tuned!

</Infobox>

## Command Output

Scroll down to the "Examples" section of the notebook. From there, try running Steps 1 and 2. 

If everything goes right, you should get an output like the following:

<p align="center">
  <img src="/img/command-output-basic.png" />
</p>

Great! You can see the terminal output from each command beneath its respective cell. Our Node.JS script was able to parse that massive file with no problems!

[blog-post]: https://stateful.com/blog/process-large-files-nodejs-streams

<Infobox type="sidenote">

Wondering how you know when a command is finished executing? Look out for the check mark in the bottom left:

<img src="/img/cell-finished-icon.png" width="100%" />

If the command failed, it will be an "X" mark instead!

</Infobox>

### Copying Output

Runme provides a handy "Copy" button to easily copy the output of a command!

<p align="center">
  <img src="/img/copy-button.png" width="600px" />
</p>

### Clearing Output

Sometimes, the output of a command can clutter up the screen. To prevent this, use the "Clear Cell Outputs" menu option.

Alternatively, select the output and use the Option+Delete shortcut.

<p align="center">
  <img src="/img/clear-button.png" width="700px" />
</p>

## Summary

Hopefully, you've successfully ran your first Runme notebook, and understand the basics of Runme! As you'll soon see, however, you've still barely scratched the surface of Runme's capabilities.

In the next page, you'll build your own Runme notebook.
