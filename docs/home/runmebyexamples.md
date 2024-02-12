# Runme by Example

Discover the various ways you can use Runme to run your code straight from your markdown file. In this section, you will find variety of features and examples to help you get the most out of Runme..

## **Environment Variable Prompts**

Set and use environment variables in your code. For example:

```bash

export SLEEP_SECS=5
echo "Sleeping for $SLEEP_SECS seconds..."
sleep $SLEEP_SECS
echo "Awake now!"
```

## **Advanced Usage of Piping and Variables**

Runme allows for complex piping and usage of variables across cells. Here is an example using Git:

1. **List Git Branches Matching a Pattern**:

    ```bash

    git branch | grep "feature-"
    ```

2. **Process the Output in a Subsequent Cell**:

    ```bash
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

```python
print('Hello World!')
```

## **Working with Stdin, Stdout, and Stderr**

1. **Reading from `stdin` and Writing to `stdout`**:

    ```bash
    $ cat
    Enter your text here.
    ^D
    ```

    Use **`cat`** to read from **`stdin`** and write to **`stdout`**.

2. **Redirecting `stdin` and `stdout`**:

    ```bash

    $ cat < input.txt > output.txt
    ```

    Redirects **`stdin`** from **`input.txt`** and **`stdout`** to **`output.txt`**.

3. **Appending to an Existing File**:

    ```bash
    $ echo "New content." >> existing_file.txt
    ```

    Appends text to **`existing_file.txt`**.

4. **Redirecting `stderr`**:

    ```bash
    $ ls non_existent_dir 2> error_log.txt
    ```

    Redirects **`stderr`** to **`error_log.txt`**.

5. **Redirecting `stderr` to `stdout`**:

    ```bash
    $ ls non_existent_dir 2>&1
    ```

    Redirects both **`stderr`** and **`stdout`**.

6. **Piping Output**:

    ```bash
    $ ls | grep ".txt"
    ```

    Pipes the output of **`ls`** to **`grep`**.

7. **Redirecting `stdout` and `stderr` to Different Files**:

    ```bash
    $ myprogram > output.log 2> error.log
    ```

    Separately redirects **`stdout`** and **`stderr`**.


## **Installation via Terminal**

```bash
brew install runme
```

## Unnamed vs named cells

 On Runme cells are unnamed by default. Unless a user names a cell manually, a generated name is provided for each cell. We recommend you DO NOT name a cell when using the CLI mode, you can use the VS code extension to name the file in the configuration settings.

{ADD IMAGES TO ILLUSTRATE CELL NAMING ON VSCODE}

These examples showcase improved ways you can use Runme in your documentation to enhance your workflow and overall documentation process.

If you encounter any challenge with these practices, please don't hesitate to [reach out us](https://discord.com/invite/runme). We're here to help and would be glad to assist you.
