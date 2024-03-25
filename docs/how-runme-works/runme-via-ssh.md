---
sidebar_position: 3
---

# Runme for VS Code SSH & Remote

Runme is committed to delivering an exceptional experience right from the start. By using Runme, and [VS Code's native-SSH](https://code.visualstudio.com/docs/remote/ssh) capabilities you can easily connect to an instance and carry out specific instructions using Markdown docs. Before exploring various ways to utilize Runme through SSH, it's important to make sure that you have installed Runme for [VS Code](https://docs.runme.dev/installation/installrunme) or [CLI](https://docs.runme.dev/installation/runmecli) by referring to the [installation](https://docs.runme.dev/getting-started/) guide, as well as ensuring that you have access to the remote server you need.

## **VS Code Remote Development**

Using runme on a remote server with VS Code enhances efficiency by streamlining the execution of tasks. It minimizes the need for manual commands, automating repetitive tasks, thereby saving time and reducing errors. This approach also optimizes performance by ensuring consistent and reliable execution of scripts and processes, ultimately improving the development workflow.

> 💡 Note: Runme harnesses VS Code's [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extensions to attach VS Code to remote SSH hosts.

### SSH Connection

To set up your SSH key configuration, follow the steps below:

1. [Generate an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) if you haven't already.
2. Identify the remote host you want to connect to and make sure you have the necessary login credentials.
3. Ensure that you have [Visual Studio Code](https://code.visualstudio.com/download) installed on your local machine.
4. Install the [Runme extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) in Visual Studio Code.
5. Use the [Visual Studio Code Remote - SSH](https://code.visualstudio.com/docs/remote/ssh) extension to connect to the remote host via SSH.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/ssh-into-server.mp4" type="video/mp4" />
  <source src="/videos/runme-illustration.webm" type="video/webm" />
</video>

6. Install the [Runme extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) on the remote server and leverage the notebook UX to execute what you want.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/install-runme-on-server.mp4" type="video/mp4" />
  <source src="/videos/install-runme-on-server.webm" type="video/webm" />
</video>

7. Create a block of code called `command` to execute the desired actions on the remote host.

### Example: how to use Runme attached to SSH host

```sh {"id":"01HPQBHPSYHSX2F6SFBE7RCNT4"}
mkdir Vsc
cd Vsc
touch example.txt
```

![ssh with Vsc](https://i.imgur.com/91ImVIz.png)

## **Key-Based Authentication**

To enhance security when using Runme, it is recommended to use [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) for authentication. This eliminates the need for password transmission and reduces the risk of brute-force attacks.

To execute commands on a remote server using Runme, follow these steps:

1. Set up your SSH key configuration by following the instructions [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
2. Remote server: Make sure you have access to the remote server and the necessary permissions to execute commands.
3. Create a Markdown file: Create a `.md` file that will connect to the remote server and execute the desired commands.
4. In the `.md` file, create a block of code that uses the SSH command to connect to the remote server and execute the desired command.

### Example: how to use ssh inside of notebooks

```sh {"id":"01HPQBHPSY79T1NSR3P7E27BER"}
ssh user@remote.server.com 'bash -s' < script.sh
```

This command will run a bash script called `script.sh` on the remote server. Make sure to replace `user` and `remote.server.com` with your own username and the server's hostname or IP address.

By following these steps and using SSH keys for authentication, you can enhance the security of your Runme commands and reduce the risk of unauthorized access or attacks.

5. Execute the Runme command:

```sh {"id":"01HPQBHPSYNE6C9RPE3KXC51P7"}
# short for "runme tui" is
runme
```

6. Select the Markdown file `.md` you want to execute (if you have multiple `.md` files or different codeblocks and instruction in a `.md`)

![runme](https://i.imgur.com/5CGxKCZ.png)

### Example: how ssh into remote hosts from a notebook

If you need to securely copy files between your local machine and the remote server, you can install [SCP](https://www.geeksforgeeks.org/scp-command-in-linux-with-examples/) on your machine.

Setup [SSH Connection](https://docs-runme-56vudiq08-stateful.vercel.app/getting-started/runme-via-ssh#key-based-authentication)

```sh {"id":"01HPQBHPSYM2Z33GX8FR4RBGJ7"}
scp /path/to/bash/script user@host:/path/on/remote/server
ssh user@host 'bash /path/on/remote/server/script.sh'
```

***This is an example of running bash script in a server.***

![Bash](https://i.imgur.com/nizv2CB.png)
