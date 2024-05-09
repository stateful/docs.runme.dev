---
runme:
  id: 01HMXTKR1S6D784CWGFQ3F9D73
  version: v3
---

# Runme by Example

Discover the various ways you can use Runme to run your code straight from your Markdown file. Explore our [example page](https://runme.dev/examples) to learn more exciting ways you can use Runme. These examples showcase improved ways you can use Runme, such as in [hardening your Ubuntu server](https://runme.dev/blog/hardening-ubuntu), within your dev container, etc. In this section, you will find a variety of features and examples to help you get the most out of Runme.

## **1. Advanced Usage of Piping and Variables**

Runme works a lot like a terminal, however, unlike Python's Jupyter it does not allow block-scope sharing of variables. Instead, you are encourage to use environment variables for inter-referencing of cells. Similar to how piping in and out of commands would work. Piping works in two ways. 1.) It's declared using `$__` to pass a variable declared in a previous execution to another cell or 2.) using a ENV variable.

Runme swiftly allows for complex piping and usage of variables across cells. Here is an example using Git with `$__` (reference the previous execution result):

- **List Git Branches Matching a Pattern**:

```sh {"id":"01HRVZ3W00K4ZPSXSH2PSGMQ1Z","name":"GIT_BRANCHES"}
git branch -l | grep -v "chore"
```

- __Process the Output in `$__` a Subsequent Cell__:

```sh {"id":"01HRVZ4RR371G2PTEPCADCP58A"}
echo "$__" | while read line
do
  if [ ! -z "$line" ]; then echo "Feature branch: ${line}"; fi
done
```

- **Process a ENV-variable-named Output**:

Please notice how above's cell is conveniently available in the environment via `$GIT_BRANCHES` (please inspect raw markdown). Only cells named with uppercase letters and separated by underscores (min length is 3) are exported as environment variables:

The convention is simple e.g.:

- MY_VARIABLE
- SOME_OUTPUT
- A2B3C4

```sh {"id":"01HXFK8E3M7CYHBXQ4MTGD8PDT"}
echo -n "$GIT_BRANCHES" | grep -v "main"
```

## **2. Working with Stdin, Stdout, and Stderr**

As a system administrator or developer, using standard streams for scripting, automation, error handling, and managing system resources is one common task in your day-to-day life.

In this section, we have crafted examples to demonstrate various ways to work with `stdin`, `stdout`, and `stderr`, in Runme.

- **Reading from `stdin` and writing to `stdout`**:

```sh {"id":"01HRVZ63TDRDBDB1K8YE3MJFRW"}
$ cat
Enter your text here.
^D
```

In this example, `cat` is invoked without any arguments, so it waits for input from `stdin`. After entering text and pressing `^D` (Ctrl+D), it writes the input to `stdout`.

- **Redirecting `stdin` and `stdout`**:

```sh {"id":"01HRVZ74ZHBXBJS0HHTEXERNN4"}
$ cat < input.txt > output.txt
```

Here, cat reads from `input.txt` (redirected `stdin`) and writes to `output.txt` (redirected stdout).

- **Appending to an Existing File**:

```sh {"id":"01HRVZ86BFADA7SQVM0BVRB1SM"}
$ echo "New content." >> existing_file.txt
```

This appends the text "New content." to the file `existing_file.txt`.

- **Redirecting stderr**:

```sh {"id":"01HRVZ9CT9SB0QR5ZEEMAK4XCG"}
$ ls non_existent_dir 2> error_log.txt
```

If __`ls`__ encounters an error (like trying to list a non-existent directory), the error message will be redirected to __`error_log.txt`__.

- **Redirecting `stderr` to `stdout`**:

```sh {"id":"01HRVZAJG8NYGF6YQCPFK6VKFY"}
$ ls non_existent_dir 2>&1
```

This redirects both `stderr` and `stdout` to the same destination, which is typically the terminal.

* Piping Output:

```sh {"id":"01HRVZCAWM3AT6YRCV4VCMN5B0"}
$ ls | grep ".txt"
```

This pipes the output of **`ls`** (which lists files and directories) to **`grep`**, which filters lines containing ".txt".

- **Redirecting `stdout` and `stderr` to Different Files**:

```sh {"id":"01HRVZD04JQ48QWPHT46EMG1F3"}
$ myprogram > output.log 2> error.log
```

This runs myprogram, directing `stdout` to `output.log` and stderr to `error.log`, allowing for separate logging of standard output and error messages.

You have just seen some improved ways you can use Runme in your documentation, but *that’s not all!*

If you encounter any challenges with these practices, please don't hesitate to [reach out to us](https://discord.com/invite/runme). We would be glad to assist you.
