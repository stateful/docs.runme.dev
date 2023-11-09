---
sidebar_position: 7
---

# Shebang RunMe Toolkit

Runme enables users to complete step-by-step instructions with ease, making runbooks actually runnable. This makes it an ideal solution for runbooks, playbooks, and any documentation that requires users to complete runnable steps incrementally. Operational docs become more reliable and less susceptible to bitrot with the help of Runme.

Shebang, on the other hand, is a versatile utility designed to execute scripts written in various scripting languages including Shell, Perl, Python, and more. The term 'Shebang' is derived from the '#!' symbol, which is used at the beginning of scripts to define the interpreter that should be used to run the script.

### Why are Shebangs Important?

Including a shebang line is crucial for specifying the interpreter for each code block. This allows for seamless execution of mixed-language scripts. The shebang line dictates to the platform which environment to use, ensuring that the code runs correctly and efficiently within the interface provided.

## Prerequisites

Before proceeding with the integration of Shebang in [Runme](/install#runme-cli), ensure that Runme is properly [installed](/install#runme-cli) on your system. This is a crucial step to guarantee the smooth execution of your runbooks

## Configuring Shebang in Visual Studio Code

Visual Studio Code (VS Code) provides a user-friendly interface for configuring Shebang. Follow the steps below to set up Shebang in VS Code.

You can switch to the programming language using the feature for selecting a language interpreter that allows users to configure the environment for running code directly within the editor

![shebang-language-mood](../../static/img/shebang-language-mood.png)

Follow the steps below to set up Shebang in VS Code:

1. Open your script (markdown file) in VS Code
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

## Examples of Shebang Lines for Different Languages

### Python

To run the Python code, you need to set the path to the Python interpreter, which is ***/usr/bin/python3***, in the advanced section of your configuration in your code block.

```python
# List comprehension to create a list of squares of even numbers from 0 to 9
squares_of_even_numbers = [x**2 for x in range(10) if x % 2 == 0]

# Dictionary comprehension to create a dictionary where the key is a number and the value is its square
squares_dict = {x: x**2 for x in range(5)}

# Tuple unpacking to swap values
a, b = 1, 2
b, a = a, b

# Using the walrus operator to assign and print at the same time (Python 3.8+)
print(f"The squares of even numbers: {(squares := [x**2 for x in range(10) if x % 2 == 0])}")

# Print the results
print(f"Squares of even numbers: {squares_of_even_numbers}")
print(f"Dictionary of squares: {squares_dict}")
print(f"Values after swapping: a = {a}, b = {b}")

# A function that uses type hints (Python 3.5+)
def greet(name: str) -> str:
    return f"Hello, {name}!"

# Call the function and print the greeting
print(greet("Pythonista"))
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

# Open up the String class to add a new method
class String
  # Define a new method to reverse the words in a string
  def reverse_words
    self.split(' ').reverse.join(' ')
  end
end

# Use the new method on a string
sentence = "Hello Ruby world"
puts "Original sentence: #{sentence}"
puts "Reversed words: #{sentence.reverse_words}"
```

### PHP

To use PHP, you need to add the path to the PHP interpreter, which is ***/usr/bin/php***, in the advanced section of your configuration in your code block..

```php { interpreter=/opt/homebrew/bin/php }
<?php
// PHP Script Example: Greeting with Date and Time

// Define a variable for the greeting
$greeting = "Hello, World!";

// Get the current date and time
$currentDateTime = date('Y-m-d H:i:s');

// Concatenate the greeting with the current date and time
$fullGreeting = $greeting . " It's now " . $currentDateTime;

// Output the full greeting
echo $fullGreeting;
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

