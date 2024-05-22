---
runme:
  id: 01HX525D9E10RVX8R4VE708M5H
  version: v3
---

# Running Bash Scripts in Runme

Looking to automate your workflow?

Runme makes it easy to run bash scripts directly within your Markdown files. With Runme, you can create, manage, and run scripts to automate repetitive tasks, saving time and effort.

This is not just limited to bash; [Runme](https://runme.dev/) supports scripting in various languages like PowerShell, Python, and more. This flexibility allows you to tailor automated solutions to your specific requirements.

In this guide, we will walk you through running a bash script on Runme.

## **Setting Up Your Environment**

To get started with Bash scripts in Runme, you are required to first install and configure [Runme on your VS Code](https://docs.runme.dev/installation/installrunme) editor. If you do not have Runme on VS Code installed yet, proceed to the Extension tab of your VS Code and search for “**Runme DevOps Notebook**.”

![install runme](../../static/img/guide-page/runme-notebooks.png)

You can configure your code editor to make Runme your [default Markdown viewer](https://docs.runme.dev/installation/installrunme#how-to-set-vs-code-as-your-default-markdown-viewer). This means you `.md` will be displayed as a runbook whenever you open a Markdown.

## **Writing Your First Bash Script in Runme**

Runme integrates easily with Bash scripts via the [Shebang](https://docs.runme.dev/configuration/shebang) feature, which allows you to run any script you choose directly from the Markdown file in your preferred programming language.

This section will provide a step-by-step guide to creating a simple bash script within a Markdown file and executing it with Runme.

Let’s get started.

1. Create a new folder and open it with your VS code. In your VS code, create a new README.md file.
2. Click on the + Code icon

![create code block](../../static/img/guide-page/codeblock.png)

3. Enter the script you want to run. For this tutorial, we will be using the simple bash script below.

![scripting-outputs](../../static/img/guide-page/scripting-outputs.png)

4. Click on the programming language at the button of the cell. This will display a list of supported languages. .

![cell language](../../static/img/guide-page/language-mode.png)

5. Search for Shell script.
6. Now click on the Run button beside your script to execute it.

![run codeblock](../../static/img/guide-page/executionpromt.png)

After an execution time of 2.3 seconds, you will get a similar output:

![run-code](../../static/img/guide-page/runme-users.png)
You have successfully executed your first bash script with Runme!🎉

Runme makes it incredibly easy! Previously, you would have to create a .sh   file to execute bash scripts, but with Runme, you do not need to create a new file from scratch. All you need to do is install the Runme extension in VS Code, and you can save yourself the stress of environment issues, as bash scripts run swiftly in Runme regardless of your machine's environment and operating system.

Let’s dive into more advanced bash scripting actions.

## **Advanced Bash Scripting Techniques in Runme**

Bash scripts have several advanced techniques that can be integrated with Rume. In this section, we will explore some of the advanced features of bash scripting and how they can be integrated with Runme.

* **Variable Manipulation**:

   Variable manipulation involves modifying or extracting parts of a variable’s value to suit your needs without changing the original data. This can be done and executed in your Markdown file without external dependencies.

   The image below provides an example of how a user can manipulate variables in bash scripts in Runme and the corresponding output the user will get in the terminal.

![example](../../static/img/guide-page/var-maniuplation.png)

* **Conditional Statements**:

   If you have a series of conditional statements in a Bash script that you would love to execute, Runme makes this easy. All you need to do is create a .md file in your editor, enter your script, and click the Run cell button.

   The image below shows how a conditional statement in a Bash script is executed in Runme in VS Code.

![if-statement](../../static/img/guide-page/ifstatement.png)

* **Integrating Runme with Docker**:
   You can use Runme to write several bash scripts that execute Docker commands. The script below manages a Docker container for an Nginx web server.

![bash-docker](../../static/img/guide-page/docker-bash.png)

### How to optimize Bash scripts using Runme's key features:

- **Lifecycle Identity for Versioning and Tracking**

Runme’s [lifecycle identity](https://docs.runme.dev/configuration/lifecycle-identity) for versioning and tracking enables you to assign unique identifiers and versions to cells. This will ensure easy version control and tracking of the script whenever an update is made.

- **Auto-save feature and separate session outputs**

The [auto-save](https://docs.runme.dev/configuration/auto-save) feature provides a uniform approach to task automation by ensuring that the history of the Markdown command and all cell output produced while running your file is stored without manual intervention.

Runme auto-save incorporates a [separate session](https://docs.runme.dev/configuration/auto-save#session-outputs) output method that securely saves the time each cell was run and its exit codes. It stores this output in an external file for easy reference.

<br />
<Infobox type="sidenote" title="Note">

When working with this feature, you are not to push the session outputs to git or any version control software as they have sensitive details.

</Infobox>

Incorporating these features into your bash scripts simplifies your automation process, reduces scalability in managing infrastructure, and ensures service availability, whether troubleshooting incidents, automating routine tasks, or optimizing system performance.

### Conclusion

Using Runme to execute your Bash scripts automates your process, whether it is a development, testing, or deployment task. This enables you to avoid repetitive tasks and environment compatibility issues. In this tutorial, we delved into how you can execute your first Bash script in Runme, advanced Bash scripts you can execute in Runme, and lastly, features in Runme that make the execution of tasks as an SRE expert, DevOps engineer, or system administrator easier.

You can easily integrate Runme with your favourite cloud native tools. Take a look at our [tutorial page](https://docs.runme.dev/guide/) to learn more ways to use Runme to make your tasks seamless.

