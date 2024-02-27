---
runme:
  id: 01HMXTKR1S6D784CWGFQ3F9D73
  version: v2.2
---

# Runme by Example

Discover the various ways you can use Runme to run your code straight from your markdown file. In this section, you will find variety of features and examples to help you get the most out of Runme..

## **Environment Variable Prompts**

Set and use environment variables in your code. For example:

```sh {"id":"01HMXTSA9MJMVAYNK01D3V7Z07"}
export SLEEP_SECS="5"
echo "Sleeping for $SLEEP_SECS seconds..."
sleep $SLEEP_SECS
echo "Awake now!"
```

There are two prompt modes: using 1.) a placeholder or 2.) a prompt message. Learn more about them at [Environment Variable Prompts](https://docs.runme.dev/configuration/cell-level#set-environment-variables).

```sh
export PROJECT_ID=Enter a valid project ID
cli make-call --project-id $PROJECT_ID describe
```

## **Advanced Usage of Piping and Variables**

Runme allows for complex piping and usage of variables across cells. Here is an example using Git:

1. **List Git Branches Matching a Pattern**:

```sh {"id":"01HMXTTDG7DM4KCCYE70QTYSH0"}
  git branch | grep "feature-"
```

2. **Process the Output in a Subsequent Cell**:

```sh {"id":"01HMXTXDPF03T1R6J4TVDTJ4YR"}
echo "$__" | while read line
    do
      if [ ! -z "$line" ]; then echo "Feature branch: ${line}"; fi
    done
```

## **Key Configuration Feature/Flags**

Customize your file executing using Runme configuration feature

You can control (or customize) how your Markdown file is executed with the configurations feature (add link). This feature gives you the option to execute individual cells or the entire file based on your selected option.

## **Shebangs**

Specify the interpreter path in your cell [configuration setting](https://docs.runme.dev/configuration/shebang) :

```python {"id":"01HMXTYGEVN4EKY97CQY1TKFXG"}
print('Hello World!')
```

## **Working with Stdin, Stdout, and Stderr**

1. **Reading from `stdin` and Writing to `stdout`**:

```sh {"id":"01HMXTZPWH0P1762C4QCG6KBAA"}
 $ cat
    Enter your text here.
    ^D
```

Use **`cat`** to read from **`stdin`** and write to **`stdout`**.

2. **Redirecting `stdin` and `stdout`**:

```sh {"id":"01HMXV1Y7WS60S4XKCFX9EAYW4"}
  $ cat < input.txt > output.txt
```

Redirects **`stdin`** from **`input.txt`** and **`stdout`** to **`output.txt`**.

3. **Appending to an Existing File**:

```sh {"id":"01HMXV3DHZK2ZKYH4DADGSRCSN"}
  $ echo "New content." >> existing_file.txt
```

Appends text to __`existing_file.txt`__.

4. **Redirecting `stderr`**:

```sh {"id":"01HMXV4FQDC80Y6D2M4C9Y8WKR"}
  $ ls non_existent_dir 2> error_log.txt
```

Redirects __`stderr`__ to __`error_log.txt`__.

5. **Redirecting `stderr` to `stdout`**:

```sh {"id":"01HMXV5S2KK5T7C3Q6NZXWS5YR"}
$ ls non_existent_dir 2>&1
```

Redirects both **`stderr`** and **`stdout`**.

6. **Piping Output**:

```sh {"id":"01HMXV6QHHGFR7GA5TN4TXXCZ3"}
 $ ls | grep ".txt"
```

Pipes the output of **`ls`** to **`grep`**.

7. **Redirecting `stdout` and `stderr` to Different Files**:

```sh {"id":"01HMXV7T7GN3XHZ0BK6CY6C4Z7"}
 $ myprogram > output.log 2> error.log
```

Separately redirects **`stdout`** and **`stderr`**.

## **Installation via Terminal**

```sh {"id":"01HMXTQZ83PZTH2B158JBWMSWW"}
brew install runme
```

These [examples](https://runme.dev/examples) showcase improved ways you can use Runme in your documentation to enhance your workflow and overall documentation process.

If you encounter any challenge with these practices, please don't hesitate to [reach out us](https://discord.com/invite/runme). We're here to help and would be glad to assist you.
