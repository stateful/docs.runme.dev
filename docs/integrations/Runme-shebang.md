---
sidebar_position: 7
---

# Runme Integrated With Shebang

Runme revolutionizes the execution of runbooks by transforming them into executable documents, streamlining the process of following step-by-step instructions. This innovation ensures that operational documents, such as runbooks, playbooks, and procedural guides, remain reliable and are less prone to becoming outdated or incorrect over time.

Shebang, on the other hand, is a versatile utility designed to execute scripts written in various scripting languages including Shell, Perl, Python, and more. The term 'Shebang' is derived from the '#!' symbol, which is used at the beginning of scripts to define the interpreter that should be used to run the script.

### Why are Shebangs Important?

Including a shebang line is crucial for specifying the interpreter for each code block. This allows for seamless execution of mixed-language scripts. The shebang line dictates to the platform which environment to use, ensuring that the code runs correctly and efficiently within the interface provided.

## Prerequisites

Before proceeding with the integration of Shebang in [Runme](/install#runme-cli), ensure that Runme is properly [installed](/install#runme-cli) on your system. This is a crucial step to guarantee the smooth execution of your runbooks

## Configuring Shebang in Visual Studio Code

Visual Studio Code (VSCode) provides a user-friendly interface for configuring Shebang. Follow the steps below to set up Shebang in VSCode.

You can switch to the programming language using the feature for selecting a language interpreter that allows users to configure the environment for running code directly within the editor

![shebang-language-mood](../../static/img/shebang-language-mood.png)

Follow the steps below to set up Shebang in VSCode:

1. Open your script (markdown file) in VSCode
2. Click on "Configure" menu at the buttom right of your code block
3. Click on "Advance"
4. Set the path to the interpreter


![shebang-interpreter](../../static/img/shebang-interpreters.png)
5. close the modular
6. Execute the Runme command:

```sh
# short for "runme tui" is 
runme
```

![shebang-output](../../static/img/shebang-outputt.png)

## Setting Up Shebang Using CLI

Shebang can be easily configured for different scripting languages using the command line interface (CLI). Below is an example of how to set up Shebang for a Bash script:

```sh
#!/bin/bash
echo "Hello, World!"
```

In this example, the **#!/bin/bash** line tells the system to use Bash as the interpreter for the code. You can replace /bin/bash with the path to the interpreter for the scripting language of your choice.

To execute the code using Runme CLI, simply navigate to the directory containing your code and run the following command:

```sh
runme run test.md
```

Replace test.md with the name of your script file.

## Examples of Shebang Lines for Different Languages

### Python

To run the Python code, you need to set the path to the Python interpreter, which is ***/usr/bin/python3***, in the advanced section of your configuration in your code block.

```python
# This Python code prints "RUNME !!"
print("RUNME !!")
```

### Bash

To use Bash, you need to set the Interpreter to point to the Bash interpreter, which is ***/usr/bin/bash***, in the advanced section of your configuration in your code block.

```sh
# This Bash script echoes "RUNME !!"
echo "RUNME !!"
```

### Ruby

To use Ruby, you need to add the path to the Ruby interpreter, which is ***/usr/bin/ruby***, in the advanced section of your configuration in your code block.

```sh
# This Ruby code outputs "RUNME !!"
puts "RUNME !!"
```

### PHP

To use PHP, you need to add the path to the PHP interpreter, which is ***/usr/bin/php***, in the advanced section of your configuration in your code block..

```sh
<?php
# This PHP script will print "RUNME !!"
echo "RUNME !!";
?>
```

### Node

To use Node.js, you need to add the path to the node interpreter, which is ***/usr/bin/node***, in the advanced section of your configuration in your code block.

```sh
// This Node.js logs "RUNME !!"
console.log("RUNME !!");
```

## Combining Multiple Languages in Your Notebook

It's possible to combine multiple languages in a single notebook by using different shebang lines for each script block. For an example of a notebook with multiple languages, see the [Shebang Notebooks example on GitHub](https://github.com/stateful/Shebang-Notebooks/blob/main/shebang-example.md).

