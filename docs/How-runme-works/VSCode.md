---
runme:
  id: 01HMXXTDTGRXFDKE9MF2KA3QH1
  version: v2.2
---

# Runme on Vscode

Runme strives to provide a great experience right out of the box. In this section we we will guide you through making the most of your markdown docs with Runme. 

If you haven't already installed Runme for VS Code, please complete the steps in [installation](https://docs.runme.dev/install#runme-for-vs-code) before proceeding.

# Your First Runme

You can get started in one click with the following badge:

https://badgen.net/badge/Run%20this/Tutorial/5B3ADF?icon=https://runme.dev/img/logo.svg

Simply follow the instructions provided by VS Code to get started in seconds:

!https://docs.runme.dev/assets/images/run-commands-vscode-42e1649bfd403ad839a4703248c87fac.gif

Alternatively, clone into the [Example Repo](https://github.com/stateful/blog-examples) to follow along! This guide follows the `node-streams` sub-package - simply open its README file and runme will do the rest.

If you want to use Runme outside VS Code, you can install the CLI standalone. Learn about the [Runme CLI](https://docs.runme.dev/install#runme-cli)

## Running Scripts[](https://docs.runme.dev/getting-started/vs-code#running-scripts)

Runme automatically converts all bash codeblocks in your README into runnable scripts. This makes getting started with a new project a breeze - say goodbye to annoying copy-and-pasting!

To run a script, click the Run button on its left-hand side. Start by running the first script under "Prerequisites":

![Screenshot 2024-01-16 at 15.00.26.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7bdfc8c7-487f-41e6-807a-9ced7913eafe/6e6190e3-303e-47f7-a1ba-86e78f7a1c9e/Screenshot_2024-01-16_at_15.00.26.png)

As you can see, we have downloaded the `business_data.csv` file, which contains business statistics about New Zealand in the years 2000-2021. It's a pretty big file!

### **Warning!**

For the set-up script to work, you'll need to have the `curl` and `unzip` utilities installed. The remaining scripts will also require `node.js` to be installed. In a future version of Runme, we plan to provide a solution to help you manage these dependencies from within the notebook. Stay tuned!

## Command Output[](https://docs.runme.dev/getting-started/vs-code#command-output)

Scroll down to the [**Examples**](https://github.com/stateful/blog-examples/blob/main/node-streams/README.md) section of the notebook. From there, try running Steps 1 and 2.

If everything goes right, you should get an output like the following:

!https://docs.runme.dev/assets/images/command-output-vscodess-a662b7620b4562db74388bd17ebc8589.png

Great! You can see the terminal output from each command beneath its respective cell. Our Node.JS script was able to parse that massive file with no problems!

### Successful Execution[](https://docs.runme.dev/getting-started/vs-code#successful-execution)

Wondering how you know when a command is finished executing? Look out for the checkmark in the bottom left:

!https://docs.runme.dev/assets/images/checkmark-vs-codes-13c85cef797985b92c182bc4138f1aee.jpg

If the command fails, it will be an "X" mark instead!

### Copying Output[](https://docs.runme.dev/getting-started/vs-code#copying-output)

Runme provides a handy "**Copy**" button to easily copy the output of a command!

!https://docs.runme.dev/assets/images/copy-output-vscodes-3f59179ae854c51d71573b55c118b527.png

### Clearing Output[](https://docs.runme.dev/getting-started/vs-code#clearing-output)

Sometimes, the output of a command can clutter up the screen. To prevent this, use the "**Clear Cell Outputs**" menu option.

Alternatively, select the output and use the **Option+Delete shortcut**.

!https://docs.runme.dev/assets/images/clear-output-vscodes-e8a5295be5e93de818b808b591fb44cf.png

Congratulations on running your first Runme notebook! 🎉While you've understood the basics, there's more to discover about Runme's powerful features. Let's get ready to dive deeper.

# Runme Editing & Authoring

Runme combines running, viewing, and editing into one experience.

## From Scratch[](https://docs.runme.dev/getting-started/vs-code#from-scratch)

Start by initializing a new project and adding a new `README.md` file. Alternatively, you can select `Runme Notebook` from the `File->New File` menu. When you open it, you should get an empty canvas, like this:

!https://docs.runme.dev/assets/images/start-readme-projects-8e77a8dc94f1e2cdf8be446472657cd9.png

## Adding Markdown[](https://docs.runme.dev/getting-started/vs-code#adding-markdown)

To add a new Markdown section, click the "**+ Markdown"** button in the top left or center:

!https://docs.runme.dev/assets/images/add-markdown-vscodes-61a71d1be1b0613c668bb3003317b8dc.png

You can then edit the markdown block directly. 

As shown in the image below, once you're done editing a block, use the **Check** icon (the one with the checkmark):

!https://docs.runme.dev/assets/images/checkmark-editing-vscodes-61c7ff34d36688030c3fa22016154515.png

To edit the cell again, use the **Edit Cell** icon:

!https://docs.runme.dev/assets/images/starting-editing-vscodes-a51fe72e40ca7b61e45bbabf1b023fd4.png

Finally, you can remove a cell at any time using the **Delete Cell** icon:

!https://docs.runme.dev/assets/images/delete-markdown-cells-45e8153003717964b66744bfb8f94a27.png

Note that the usual shortcuts (like `Ctrl + Z`) work perfectly in this environment too!

### **Shortcuts**

You can use `ESC` or `Ctrl+Enter` to quickly finish editing a cell.

You can use `Enter` on its own to start editing a selected cell.

You can also use `CMD+Delete` to quickly remove a cell.

## Adding Code[](https://docs.runme.dev/getting-started/vs-code#adding-code)

Code cell blocks work similarly to Markdown blocks, and can be edited/saved/deleted in the same way.

To create a new code block, use the **+ Code** button in the top left or center:

!https://docs.runme.dev/assets/images/add-code-vscodes-1a2079becf7fa1447e51ea94388bc354.png

You can then freely add runnable code:

!https://docs.runme.dev/assets/images/echo-hello-world-fe5b7cf2dd3f68f3bdd4dec231323fe1.png

## Interactive Mode[](https://docs.runme.dev/getting-started/vs-code#interactive-mode)

By default, our script will run in “Interactive Mode”. This will run the script in a separate terminal window, rather than in the notebook itself.

As the name implies, the interactive mode is great for interactive scripts. Our script, however, prints output and has no interactivity whatsoever. 

Wouldn’t it be great to see the output in the terminal?

If we just try to run this as it is, we will experience the following:

To fix this easily, we'll need to access the Configure foldout by clicking on the **Configure** button:

!https://docs.runme.dev/assets/images/configure-vs-codes-f2ef67121519ef590fa78e47e7fd87b5.png

From here, we can easily disable interactive mode:

!https://docs.runme.dev/assets/images/disable-interactives-b0a3a1743d87682997cc31576f14a45a.png

Our code block will now display its output exactly as below:

![Screenshot 2024-01-16 at 15.32.12.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7bdfc8c7-487f-41e6-807a-9ced7913eafe/41fa72c6-78fd-4a58-83da-3729a8b55350/Screenshot_2024-01-16_at_15.32.12.png)

## Frontmatter[](https://docs.runme.dev/getting-started/vs-code#frontmatter)

[Frontmatter](https://jekyllrb.com/docs/front-matter/) is a common occurrence in markdown documents. At the moment Runme won’t break your frontmatter, but we also haven’t yet implemented an interface for managing or editing it from within the notebook. Stay tuned!

## Runme Settings for VS Code[](https://docs.runme.dev/getting-started/vs-code#runme-settings-for-vs-code)

In the VS Code settings, several configurable settings influence general Runme behavior and enable experimental functionality.

!https://docs.runme.dev/assets/images/runme-configuration-vs-codes-361e072bf534082df0903887a3273c71.png

### Background Processes[](https://docs.runme.dev/getting-started/vs-code#background-processes)

Suppose that you have a script that intends to run in the background (like a dev watcher). To simulate this, we'll use the script `sleep 10000`.

You *could* run this like other scripts, however, Runme supports a special "Background" mode for these kinds of tasks. This mode gives special tools to help manage them!

You can enable Background mode in the same foldout you configured Interactive mode:

!https://docs.runme.dev/assets/images/background-process-vs-codes-103fce445b882d00239b224efa361fc1.png

### **Warning!**

Background mode only works in tandem with Interactive mode!

Now, when you run the script, it will be part of a long-running terminal session:

As is demonstrated by the previous video, background tasks are delineated by the **Background Task** label:

!https://docs.runme.dev/assets/images/background-tasks-cb3dc44d54c92a8e0b2d1fb30617adb9.png

Background Task also has a **Stop Task** button to end their execution long after starting:

!https://docs.runme.dev/assets/images/background-stop-tassk-87e831f517c225bae71129eebac0a1f6.png

### Markdown Script Metadata[](https://docs.runme.dev/getting-started/vs-code#markdown-script-metadata)

Configuration fields like `background` and `interactive` are set using Markdown's script metadata feature:

!https://docs.runme.dev/assets/images/config-background-f69a56ab4b7ffd7ecdc5bd96e3a08060.png

### **Warning!**

Be sure not to strip this data if you want to use it!

## Great work![](https://docs.runme.dev/getting-started/vs-code#great-work)

Hopefully, you now feel comfortable making your own Runme notebooks! If you run into any issues please [file a ticket](https://github.com/stateful/runme.dev/issues) or tell us about it [on Discord](https://discord.gg/runme).

Please see the [integrations section](https://docs.runme.dev/integrations) to see more sophisticated use cases of Runme or learn about all the [cell configuration options](https://docs.runme.dev/configuration) available to streamline the reading and running experience.

## Useful Tips & Tricks[](https://docs.runme.dev/getting-started/vs-code#useful-tips--tricks)

### How to ensure Runme is working properly?[](https://docs.runme.dev/getting-started/vs-code#how-to-ensure-runme-is-working-properly)

It’s easy. Open your project README file and see it is now opened as a Notebook file! Check that shell commands are now rendered as runnable blocks. That’s pretty nice. Finally, you’re seeing the future of running your README files now. We bet you won’t want to return to plain markdown viewers.

### How to open a README file as a markdown file?[](https://docs.runme.dev/getting-started/vs-code#how-to-open-a-readme-file-as-a-markdown-file)

Sometimes, you will want to see the file as a regular markdown file, and you don’t need to disable or uninstall Runme. You can right-click on the file and pick one of the options displayed when clicking Open with. You can select the built-in text editor or markdown preview for such cases.

!https://docs.runme.dev/assets/images/open-readme-file-758fcd8ba24c35771cdbfc3ccd75bd64.gif

### Notebook Explorer[](https://docs.runme.dev/getting-started/vs-code#notebook-explorer)

To help you navigate the Markdown files in your project, Runme adds a super handy **Runme Notebooks** panel. Clicking any markdown file will open it in your code editor view:

{{video}}