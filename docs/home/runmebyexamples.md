# Runme by Example

Discover the various ways you can use Runme to run your code straight from your markdown file. In this section, you will find variety of features and examples to help you get the most out of Runme..

## Environment Variable Prompts

Set and use environment variables in your code. For example:

```bash {"id":"01HPF2NC76JZGB371NTR98B2CY"}

export SLEEP_SECS=5
echo "Sleeping for $SLEEP_SECS seconds..."
sleep $SLEEP_SECS
echo "Awake now!"
```

## Advanced Usage of Piping and Variables

Runme allows for complex piping and usage of variables across cells. Here is an example using Git:

1. List Git Branches Matching a Pattern:

```bash {"id":"01HPF2NC7682963MSZB8GKDGV4"}

git branch | grep "feature-"
```

2. Process the Output in a Subsequent Cell:

```bash {"id":"01HPF2NC76AD0C6VRYM1CNADJE"}
echo "$__" | while read line
do
  if [ ! -z "$line" ]; then echo "Feature branch: ${line}"; fi
done
```

## Key Configuration Feature/Flags

Customize your file executing using Runme configuration feature

You can control (or customize) how your Markdown file is executed with the configurations feature (add link). This feature gives you the option to execute individual cells or the entire file based on your selected option.

## Shebangs

Specify the interpreter path in your cell [configuration setting](https://docs.runme.dev/configuration/shebang) :

```python {"id":"01HPF2NC76SASGJTP96K66E8QG"}
print('Hello World!')
```

## Working with Stdin, Stdout, and Stderr

1. Reading from `stdin` and Writing to `stdout`:

```bash {"id":"01HPF2NC76AWGJWYM8SHV0XQ93"}
$ cat
Enter your text here.
^D
```

Use `cat` to read from `stdin` and write to `stdout`.

2. Redirecting `stdin` and `stdout`:

```bash {"id":"01HPF2NC76S7XH2XN6D18TV762"}

$ cat < input.txt > output.txt
```

Redirects `stdin` from `input.txt` and `stdout` to `output.txt`.

3. Appending to an Existing File:

```bash {"id":"01HPF2NC76T2Y88ASGVYBC31R7"}
$ echo "New content." >> existing_file.txt
```

Appends text to __`existing_file.txt`__.

4. Redirecting `stderr`:

```bash {"id":"01HPF2NC76P6P72W9KCKQ5YWT9"}
$ ls non_existent_dir 2> error_log.txt
```

Redirects __`stderr`__ to __`error_log.txt`__.

5. Redirecting `stderr` to `stdout`:

```bash {"id":"01HPF2NC76MY4628TVNRXYWPED"}
$ ls non_existent_dir 2>&1
```

Redirects both **`stderr`** and **`stdout`**.

6. Piping Output:

```bash {"id":"01HPF2NC76Q61QKRMFENPHK6ZS"}
$ ls | grep ".txt"
```

Pipes the output of **`ls`** to **`grep`**.

7. Redirecting `stdout` and `stderr` to Different Files:

```bash {"id":"01HPF2NC764VJ8E4KVEF8HMN0Q"}
$ myprogram > output.log 2> error.log
```

Separately redirects `stdout` and `stderr`.

## Installation via Terminal

```bash {"id":"01HPF2NC76404G3CFBDQRVAQ8V"}
brew install runme
```

These examples showcase improved ways you can use Runme in your documentation to enhance your workflow and overall documentation process.

If you encounter any challenge with these practices, please don't hesitate to [reach out us](https://discord.com/invite/runme). We're here to help and would be glad to assist you.
