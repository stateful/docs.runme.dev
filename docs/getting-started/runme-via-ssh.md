# Getting Started With Runme via SSH

Runme strives to provide a great experience right out of the box, with Runme you can connect to instance and preform explicit instruction using markdown docs. Before diving into different ways to use runme via ssh, ensure you've installed Runme for VS Code or CLI by following the [installation](/install#runme-for-vs-code) guide.

# Remote-SSH

Secure Shell (SSH) is pivotal for secure remote server access. Here, we explore various authentication and exuction methods in which can be intergrated with runme, each with its unique setup and security level.

 ### Remote-ssh via Cloud Provider SDK
 
Leverage your cloud provider's SDK to streamline SSH authentication. Here’s how you can do it using Google Cloud SDK:
#### Steps:
* Install Google Cloud SDK: Follow the official guide to [install]() and initialize the SDK.
* Authenticate: Use gcloud auth [login](https://cloud.google.com/sdk/gcloud/reference/compute/ssh#--command) to authenticate your Google Cloud account.

### Example

Steps: 
1. Use gcloud auth to authenticate your account
2. Create a markdown file `.md` 
3. Create a block of code `gcloud compute ssh --zone ZONE INSTANCE --project "test" --command "excutable-command"`
4. Excute the runme command:

```sh
# short for "runme tui"
runme
```

![Sample of ssh into gcp server](https://i.imgur.com/K4k79mM.png)

### Output

![output from ssh command](https://i.imgur.com/f2XPOLB.png)

### Executing Commands with "RunMe"

Runme only runs excutable commands for now,To utilize it effectively, adhere to the following guidelines:
* Specify File Path: Ensure to provide the accurate file path to the executable command.
* SSH Connection Details: Include the necessary SSH connection details, such as username and host.
* Sequential Execution of Multiple Commands: To execute multiple commands in a sequence, utilize the && logical operator. This ensures that subsequent commands are executed only if the preceding command succeeds.

Example:

```sh
gcloud compute ssh --zone "us-central1-a" "linux-instance"  --project "development" --command "mkdir runme && cd runme"
```

or specify the path and ssh connection

```sh
gcloud compute ssh --zone "us-central1-a" "linux-instance"  --project "development" --command "mkdir runme && cd runme"
gcloud compute ssh --zone "us-central1-a" "linux-instance"  --project "development" --command " cd runme"
```

 ### Remote-ssh via Key-Based Authentication 

Enhance security by using SSH keys for authentication, eliminating the need for password transmission and reducing the risk of brute-force attacks.

### Steps

* Generate SSH key Pair: Use `ssh-keygen` to create a new SSH key pair

```sh
ssh-keygen
```

* Transfer Public key: Employ `ssh-copy-id` to copy your public key to the remote server's authorized keys.

```sh
ssh-copy-id user@host
```

SSH Connection: 

you will now be able to establish an SSH and excute commands. Add it to your markdown `ssh user@host 'command'` and you will be able to perfrom the task you need on the server

**Excute the Runme command:**

```sh
# short for "runme tui"
runme
```

### Password Authentication Using SSHPass

with the use of `sshpass` it helps automate SSH connections with password authentication.

### Steps

**Set Password:**

Safeguard your SSH password using an environment variable.

```sh
export SSHPASS="your_secure_password"
```

**SSH Connection:**

Employ sshpass to supply the password and establish an SSH connection.

```sh
sshpass -p "$SSHPASS" ssh -o StrictHostKeyChecking=no user@host 'command'
```

**Excute the Runme command:**

```sh
# short for "runme tui"
runme
```

### Output

![shh using password](https://i.imgur.com/VZq7bCk.png)

- **Password Authentication** is straightforward but comes with notable security risks, especially when automating and storing passwords in scripts or environment variables.
- **Key-based Authentication** provides a higher level of security and is recommended for most use cases, especially in production environments, despite needing a bit more setup initially.

Choosing the right method often involves considering the balance between ease of use and security. In scenarios where security is paramount, opting for SSH key authentication is prudent.