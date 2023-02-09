---
title: Editing
sidebar_position: 2
---

import Infobox from "../../src/components/Infobox.tsx"

On the last page, you ran scripts in a readme file provided by us. Where Runme really starts to shine, though, is when you use it as an editor!

## Setup

Start by initializing a new project and adding a new `README.md` file. When you open it, you should get an empty canvas, like so:

<p align="center">
  <img src="/img/empty-runme.png" width="800px" />
</p>

## Adding Markdown

To add a new Markdown section, click the "+ Markdown" button in the top left or center:

<p align="center">
  <img src="/img/add-markdown.png" width="800px" />
</p>

You can then edit the markdown block directly:

<p align="center">
  <img src="/img/markdown-editing.gif" width="800px" />
</p>

As shown in the video, once you're done editing a block, use the "Stop Editing Cell" button (the one with the checkmark):

<p align="center">
  <img src="/img/done-button.png" width="800px" />
</p>

If you ever want to edit the cell again, use the "Edit Cell" button:

<p align="center">
  <img src="/img/edit-button.png" width="800px" />
</p>

Finally, you can remove a cell at any time using the "Remove Cell" button:

<p align="center">
  <img src="/img/delete-button.png" width="800px" />
</p>

Note that the usual shortcuts (like Ctrl + Z) work perfectly in this environment too!

<Infobox type="sidenote">

You can use Escape or Ctrl + Enter to quickly finish editing a cell.

You can use Enter on its own to start editing a selected cell.

You can also use Command + Delete to quickly remove a cell!

</Infobox>

## Adding Code

Code cell blocks work similar to Markdown blocks, and can be edited/saved/deleted in the same way.

To create a new code block, use the "+ Code" button in the top left or center:

<p align="center">
  <img src="/img/add-code-button.png" width="800px" />
</p>

You can then freely add runnable code:

<p align="center">
  <img src="/img/add-code-to-cell.gif" width="800px" />
</p>

### Interactive Mode

By default, our script will run in "Interactive Mode." This will run the script in a separate terminal window, rather than in the notebook itself.

This is great for, as the name implies, interactive scripts. Our script, however, just prints output, and has no interactivity whatsoever. It would be great to see the output in the terminal!

If we just try to run this as-is, we will experience the following:

<p align="center">
  <img src="/img/interactive-mode-demo.gif" width="800px" />
</p>

To fix this easily, we'll need to access the **Configure** foldout by clicking on the Configure button:

<p align="center">
  <img src="/img/configure-button.png" width="800px" />
</p>

From here, we can easily disable interactive mode:

<p align="center">
  <img src="/img/interactive-toggle.png" width="800px" />
</p>

And our code block will now display its output exactly as in the previous guide:

<p align="center">
  <img src="/img/run-non-interactive-demo.gif" width="800px" />
</p>

<Infobox type="sidenote">

So what if you want to have both interactivity _and_ stay within the notebook?

Unfortunately, making this work with VSCode is a challenge. We're working hard, however, to look for a good solution to this problem!

(TODO: maybe link to upstream VSCode issue here?)

</Infobox>

### Background Processes

Suppose that you have a script that intends to run in the background (like a dev watcher). To simulate this now, we'll use the script `sleep 10000`.

You _could_ run this like other scripts, however, Runme supports a special "Background" mode for these kinds of tasks. This mode gives special tools to help manage them!

You can enable Background mode in the same foldout you configured Interactive mode:

<p align="center">
  <img src="/img/configure-background-mode.png" width="800px" />
</p>

<Infobox type="warning">

Background mode only works in tandem with Interactive mode!

</Infobox>

Now, when you run the script, it will be part of a long-running terminal session:

<p align="center">
  <img src="/img/run-background-process.gif" />
</p>

As is demonstrated by the previous video, background tasks are delineated by the "Background Task" label:

<p align="center">
  <img src="/img/background-task-label.png" />
</p>

Background Tasks also get a "Stop Task" button to end their execution long after starting:

<p align="center">
  <img src="/img/stop-task-button.png" />
</p>

<Infobox type="sidenote">

Configuration fields like "background" and "interactive" are set using markdown's script metadata feature:

<p align="center">
  <img src="/img/script-metadata.png" />
</p>

Be sure not to strip this data if you want to use it!

</Infobox>

### Changing Language

(TODO: show how to change language; need issues fixed for this since language selection is broken at the moment)

## Summary

Hopefully, you now feel comfortable making your own notebooks!

In the next guide, you'll see some more practical examples, so you can get some ideas on how to use these tools in action.
