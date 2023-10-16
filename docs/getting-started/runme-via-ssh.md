# Getting Started With Runme via SSH

Runme is committed to delivering an exceptional experience right from the start. By using Runme, you can easily connect to an instance and carry out specific instructions using markdown docs. Before exploring various ways to utilize Runme through SSH, it's important to make sure that you have installed Runme for [VS Code] ((/install#runme-for-vs-code)) or [CLI](https://docs.runme.dev/getting-started/cli) by referring to the [installation](https://docs.runme.dev/getting-started/) guide, as well as ensuring that you have access to the remote server you need.

### Executing Commands With Runme

Currently, Runme only runs executable commands. To use it effectively, please follow these guidelines:

* Specify File Path: Ensure to provide the accurate file path to the executable command.
* Connection Details: Include the necessary SSH connection details, such as username and host.
* Sequential Execution of Multiple Commands: To execute multiple commands in a sequence, utilize the `&&` logical operator. This ensures that subsequent commands are executed only if the preceding command succeeds.

Example:

```sh
 ssh username@your_server_ip 'mkdir runme'
```

Yes, you can run multiple commands at a time using Runme. You can use any script tool that you are comfortable with to execute multiple commands. Simply follow the guidelines mentioned in the previous section to ensure that your commands are executed sequentially and accurately

```sh
ssh username@your_server_ip 'chmod +x ./install.sh && ./install.sh'
```

Another convenient way to use Runme is by integrating it with VS Code Remote Development

### VS Code Remote Development

Using runme on a remote server with VSCode enhances efficiency by streamlining the execution of tasks. It minimizes the need for manual commands, automating repetitive tasks, thereby saving time and reducing errors. This approach also optimizes performance by ensuring consistent and reliable execution of scripts and processes, ultimately improving the development workflow.

**SSH Connection:**

1. Setup [SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) configuration.
2. Remote host you want to connect to
3. Have [Visual Studio Code](https://code.visualstudio.com/download) Installed
4. Install the [Runme extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme)
5. Ssh into remote host using [Visual Studio Code Remote - SSH](https://code.visualstudio.com/docs/remote/ssh)
6. Install [Runme extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) on the Remote Server and leverage the notebook UX to excute what you want
7. Create a block of code `command` to excute

Example

```sh
mkdir vsc
cd vsc
touch example.txt
```

![ssh with Vsc](https://i.imgur.com/UgU9ypj.png)

### Key-Based Authentication

To enhance security when using Runme, it is recommended to use [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) for authentication. This eliminates the need for password transmission and reduces the risk of brute-force attacks.

Here are the steps to set up an SSH connection with Runme:

1. Set up SSH key configuration: Follow the instructions [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) to generate your SSH key and configure it for use with Runme.
2. Remote server: Make sure you have access to the remote server and the necessary permissions to execute commands.
3. Create a Markdown file: Create a `.md` file that will connect to the remote server and execute the desired commands.
4. Create a block of code: In the `.md` file, create a block of code that uses the SSH command to connect to the remote server and execute the desired command. Here is an example:

```sh
ssh username@your_server_ip 'mkdir'
```

Replace `username` and `your_server_ip` with the appropriate SSH username and host address, and `command` with the command you want to execute on the remote server.

By following these steps and using SSH keys for authentication, you can enhance the security of your Runme commands and reduce the risk of unauthorized access or attacks.

5. Excute the Runme command:

```sh
# short for "runme tui" is 
runme
```

6. Select the markdown file `.md` you want to excute (if you have multiple `.md` files or different codeblocks and instruction in a `.md`)

![runme](https://i.imgur.com/5CGxKCZ.png)

### How To Use Runme To Excute Multiple Commands via SSH

Here are the steps to execute a bash script on a remote server using Runme:

1. Set up SSH key configuration: Follow the instructions [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) to generate your SSH key and configure it for use with Runme.
2. Have a server you want to SSH into: Make sure you have access to the remote server and the necessary permissions to execute commands.
3. Create a Markdown file: Create a `.md` file from the machine you want to SSH from that will connect to the remote server and execute the desired commands.
4. Create a bash script: In the same directory as the Markdown file, create a bash script with all the commands and configurations you want to run on the remote server.
5. Install `scp`: This is a command-line utility that allows you to securely copy files between your local machine and a remote server. Install it if it is not already installed on your machine.
6. Copy the bash script to the remote server: Use `scp` to copy the bash script to the remote server. Here is an example command:

```sh
scp /path/to/bash/script user@host:/path/on/remote/server
```

Replace `/path/to/bash/script` with the path to your bash script on your local machine, and `user@host:/path/on/remote/server` with the appropriate SSH username, host address, and path to the destination directory on the remote server.

7. Create a block of code: In the `.md` file, create a block of code that uses the SSH command to connect to the remote server and execute the desired command. Here is an example:

```sh
ssh user@host 'bash /path/on/remote/server/script.sh'
```

Replace `user` and `host` with the appropriate SSH username and host address, and `/path/on/remote/server/script.sh` with the path to your bash script on the remote server.

By following these steps, you can execute a bash script on a remote server using Runme and ensure that your commands are executed securely and accurately

***This is an example of running bash script in a server***

![Bash](https://i.imgur.com/nizv2CB.png)

### Password Authentication Using SSHPass

If you prefer to use password authentication instead of SSH keys for your Runme commands, you can use the [sshpass]((https://www.redhat.com/sysadmin/ssh-automation-sshpass) tool to automate the SSH connection process.

`sshpass` is a command-line tool that allows you to provide a password to the SSH command without having to interactively enter it. This can help automate the process of connecting to a remote server and executing commands.

To safeguard your SSH password when using `sshpass`, it is recommended to use an environment variable to store the password. This helps to prevent the password from being displayed in plain text in your commands and scripts.

Here are the steps to use `sshpass` with an environment variable for password authentication with Runme:

1. Install `sshpass`: If it is not already installed on your machine, install `sshpass` using the appropriate package manager for your operating system.
2. Set up environment variable: Set an environment variable with the name `SSHPASS` and the value of your SSH password. Here is an example command:

```sh
export SSHPASS=mypassword
```

Replace `mypassword` with your actual SSH password.

3. Create a Markdown file: Create a `.md` file that will connect to the remote server and execute the desired commands.
4. Create a block of code: In the `.md` file, create a block of code that uses the `sshpass` command to connect to the remote server and execute the desired command. Here is an example:

```sh
sshpass -e ssh user@host 'command'
```

Replace `user` and `host` with the appropriate SSH username and host address, and `command` with the command you want to execute on the remote server.

By following these steps, you can use `sshpass` with an environment variable to automate the process of connecting to a remote server and executing commands securely with Runme.

**Excute the .md file with Runme:**

```sh
# short for "runme tui" is
runme
```

### Output

![shh using password](https://i.imgur.com/VZq7bCk.png)

When it comes to authentication for Runme commands, there are two main options: Password Authentication and Key-based Authentication.

**Password Authentication** is the simpler option as it only requires a password to authenticate the SSH connection. However, this method comes with notable security risks, especially when automating and storing passwords in scripts or environment variables. This can make it easier for attackers to gain unauthorized access to your remote server.

**Key-based Authentication** on the other hand, provides a higher level of security and is recommended for most use cases, especially in production environments. With this method, instead of using a password, a key pair is used to authenticate the SSH connection. This method requires a bit more setup initially but provides a more secure way to authenticate the connection.

By using Key-based Authentication, you can reduce the risk of unauthorized access to your remote server and ensure that your Runme commands are executed securely and accurately.

Choosing the right authentication method for your Runme commands often involves considering the balance between ease of use and security. In scenarios where security is paramount, opting for SSH key authentication is .

Ultimately, when choosing an authentication method for your Runme commands, it is essential to consider the balance between ease of use and security and choose the method that best fits your use case while keeping security as a top priority