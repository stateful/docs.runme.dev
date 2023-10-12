# Getting Started With Runme via SSH

Runme strives to provide a great experience right out of the box, with Runme you can connect to instance and perform explicit instruction using markdown docs. Before diving into different ways to use runme via ssh, ensure you've installed Runme for VS Code or CLI by following the [installation](/install#runme-for-vs-code) guide and the server you want to access to.

### Executing Commands With Runme

Runme only runs excutable commands for now,To utilize it effectively, adhere to the following guidelines:
* Specify File Path: Ensure to provide the accurate file path to the executable command.
* Connection Details: Include the necessary SSH connection details, such as username and host.
* Sequential Execution of Multiple Commands: To execute multiple commands in a sequence, utilize the `&&` logical operator. This ensures that subsequent commands are executed only if the preceding command succeeds.

Example:

```sh
gcloud compute ssh --zone "us-central1-a" "linux-instance"  --project "development" --command "mkdir runme && cd runme && ls -la"
```

or specify the path and ssh connection

```sh
gcloud compute ssh --zone "us-central1-a" "linux-instance"  --project "development" --command "mkdir runme"
gcloud compute ssh --zone "us-central1-a" "linux-instance"  --project "development" --command " cd runme"
gcloud compute ssh --zone "us-central1-a" "linux-instance"  --project "development" --command " ls -la "
```

 ### Remote-ssh via Cloud Provider SDK
 
Leverage the cloud provider's SDK you want to use to streamline SSH authentication. 

### Example: Using Google Cloud

Steps: 
1. Use gcloud [auth](https://cloud.google.com/sdk/gcloud/reference/compute/ssh#--command) to authenticate your account (from the machine you want to ssh from and runme is installed)
2. Have a Server you want to ssh into
3. Create a markdown file `.md` (from the machine you want to ssh from)
4. Create a block of code `gcloud compute ssh --zone ZONE INSTANCE --project "test" --command "excutable-command"`
5. Excute the runme command:

```sh
# short for "runme tui" is
runme
```

6. Select the markdown file `.md` you want to excute

![runme](https://i.imgur.com/5CGxKCZ.png)

***This is an example of runme setup that ssh into a server, clone a repo and makes a directory***

![Sample of ssh into gcp server](https://i.imgur.com/K4k79mM.png)

### Output

![output from ssh command](https://i.imgur.com/f2XPOLB.png)

 ### Key-Based Authentication 

Enhance security by using [SSH keys](https://docs.oracle.com/en/cloud/cloud-at-customer/occ-get-started/generate-ssh-key-pair.html#GUID-8B9E7FCB-CEA3-4FB3-BF1A-FD3406A2432F) for authentication, eliminating the need for password transmission and reducing the risk of brute-force attacks.

**SSH Connection:**

1. Setup [SSH key]((https://docs.oracle.com/en/cloud/cloud-at-customer/occ-get-started/generate-ssh-key-pair.html#GUID-8B9E7FCB-CEA3-4FB3-BF1A-FD3406A2432F)) configuration.
2. Have a Server you want to ssh into 
3. Create a markdown file `.md` (from the machine you want to ssh from)
4. create a block of code `ssh user@host 'command'`
5. Excute the Runme command:

```sh
# short for "runme tui" is 
runme
```

***This is an example of making a directory***

![ubuntu](https://i.imgur.com/gG90hHJ.png)

### Output 

![Imgur](https://i.imgur.com/2lbTrEi.png)

### Password Authentication Using SSHPass

with the use of [sshpass](https://www.redhat.com/sysadmin/ssh-automation-sshpass) it helps automate SSH connections with password authentication.

Safeguard your SSH password using an environment variable and [sshpass]((https://www.redhat.com/sysadmin/ssh-automation-sshpass)).

**Excute the Runme command:**

```sh
# short for "runme tui" is
runme
```

### Output

![shh using password](https://i.imgur.com/VZq7bCk.png)

- **Password Authentication** is straightforward but comes with notable security risks, especially when automating and storing passwords in scripts or environment variables.
- **Key-based Authentication** provides a higher level of security and is recommended for most use cases, especially in production environments, despite needing a bit more setup initially.

Choosing the right method often involves considering the balance between ease of use and security. In scenarios where security is paramount, opting for SSH key authentication is prudent.