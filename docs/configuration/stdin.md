---
title: Stdin, Stdout, Stderr
---

## **Working with Stdin, Stdout, and Stderr**

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

If **`ls`** encounters an error (like trying to list a non-existent directory), the error message will be redirected to **`error_log.txt`**.

- **Redirecting `stderr` to `stdout`**:

```sh {"id":"01HRVZAJG8NYGF6YQCPFK6VKFY"}
$ ls non_existent_dir 2>&1
```

This redirects both `stderr` and `stdout` to the same destination, which is typically the terminal.

- Piping Output:

```sh {"id":"01HRVZCAWM3AT6YRCV4VCMN5B0"}
$ ls | grep ".txt"
```

This pipes the output of **`ls`** (which lists files and directories) to **`grep`**, which filters lines containing ".txt".

- **Redirecting `stdout` and `stderr` to Different Files**:

```sh {"id":"01HRVZD04JQ48QWPHT46EMG1F3"}
$ myprogram > output.log 2> error.log
```

This runs myprogram, directing `stdout` to `output.log` and stderr to `error.log`, allowing for separate logging of standard output and error messages.

If you encounter any challenges with these practices, please don't hesitate to [reach out to us](https://discord.com/invite/runme). We would be glad to assist you.
