---
sidebar_position: 3
title: Configuration
---

# Configuration

## Code Block Annotations

Runme supports a variety of code block annotations that allow users to modify the behavior of the cell and how it is being executed.

### `background`

Some scripts are supposed to run within the background to not disturb you from development. With the `background` annotation, you can tell Runme to have this command run as a background task and don't have it pop up in a terminal.

__Default:__ `false`<br />
__Example:__

```
    ```sh { background=true }
    npm run watch
    ```
```

### `interactive`

With the interactive flag, you can decide whether the stdout of the process should be printed directly within the result cell or as part of a VS Code terminal. __Note:__ printing stdout within the result cell doesn't allow you to interact with the process, e.g. through `stdin` input. However, it allows you to copy out the process output which is useful in many situations to continue with your dev-ops process.

__Default:__ `true`<br />
__Example:__

```
    ```sh { interactive=false }
    openssl rand -base64 32
    ```
```

### `closeTerminalOnSuccess`

If you execute a command within a VS Code terminal window you can have it stick around even after successful execution using the `closeTerminalOnSuccess` flag.

Default: `true`

Example:

```
    ```sh { closeTerminalOnSuccess=false }
    docker ps | grep runme/demo:latest
```

## Available commands

**Help**

```sh
$ runme help
```

**List**

```sh
$ runme list
```

**Print**

```sh
$ runme print echo-hello-world
```

**Run selected command, Example: Update brew**

```sh
$ runme run brew-update
```

#### Check the CLI is working

Once the CLI is installed, ensure you have a markdown file named README.md in the working directory you are running the CLI and run the following command:

```sh
runme fmt
```

You should see the markdown file contents from your working directory. If you want to run the command against a different markdown file, you can use the filename flag in combination with the chdir flag:

```
runme ls --filename SUPPORT.md --chdir ./.github
```

### RUNME usage

NOTE: This usage example should be at a separate project since it depends on Node.js to work, it shouldn't be part of the extension getting started guide.

Let’s learn how to leverage RUNME powerful features to provide a fantastic README experience. We will use [zx](https://github.com/google/zx), a powerful tool for writing complex scripts.

Node.js is required for running the following examples.

Check if Node.js is already installed by running

```sh
node --version
```

Ensure you are running at least Node version >= 16.0.0

**Installing Node.js**

**MacOS**

Install using brew

```
brew install node
```

Alternatively, you can head to the [Node.js download page](https://nodejs.org/en/)

Once Node.js is installed, install project dependencies by running the following command:

```
npm i
```

Now we have all of our project dependencies installed, it's time to try some zx features.

### Get the last git logs

```sh
#!/usr/bin/env zx

let flags = [
    '--oneline',
    '--decorate',
    '--color',
  ]
await $`git log ${flags}`
npx zx git-log.mjs
```

### Use node-fetch to get runme package dependencies

```sh
#!/usr/bin/env zx

const req = await fetch('https://cdn.jsdelivr.net/gh/stateful/vscode-runme/package.json')
const { dependencies } = await req.json()
await $`echo The runme project has ${Object.keys(dependencies).length} dependencies`
npx zx node-fetch.mjs
```

### Print current date

```sh
#!/usr/bin/env zx

const date = await $`date`
await $`echo Current date is ${date}.`
npx zx date.mjs
