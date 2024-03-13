# Securing and Automating Kubernetes Secrets with Runme and SOPS/Sealed Secrets

Handling sensitive information and keys is a risk in itself, especially as a DevOps and site reliability engineer tasked with not only to handling but storing sensitive data like API keys, passwords, or tokens within your Kubernetes cluster. If you are nodding along, you likely resorted to using Kubernetes secrets.

Before storing sensitive information such as Kubernetes secrets, saving it as plain text is a huge risk, as it could easily get compromised leading to data breaches or unauthorized access, therefore, we need to encrypt them before deploying them to the cluster.

This guide will show you how to secure Kubernetes secrets and automate this process using Runme and SOPS/Sealed Secrets, This will make your  documentation the source of truth and save you more time.

## **What is Runme?**

Runme is a tool for executing interactive runbooks using Markdown files. It offers an interactive and user-friendly platform to walk you through the process of effortlessly encrypting secrets.

## **Why Choose Runme?**

### **1. User-Friendly Interactive Documentation:**

Runme Notebook transforms the learning process into an interactive adventure. You no longer need to worry about tedious text-based guides, as you can easily follow along and execute step-by-step.

### **2. Live Code Execution:**

Execute commands directly within the Runme Notebook environment. Witness the magic unfold in real time as you encrypt and decrypt secrets without switching between your terminal and documentation.

### **3. Visually Appealing:**

Embrace a visually appealing and clutter-free guide using runme via [VS Code](../how-runme-works/vscode.md). Runme Notebook's clean interface enhances your learning experience, making it enjoyable and easy to digest.

### **4. Centralized Knowledge Hub:**

Runme Notebooks can function as your source of truth and execution ground. Runme serves as a centralized hub for all your documentation. Here, you can find everything related to securing Kubernetes secrets.

# **Securing Secrets with SOPS**

To encrypt your Kubernetes secrets using SOPS, you need another level of security and access to your cloud provider; this is where you need to use a key management service (KMS). For this guide, we will be using an [AWS KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys). This helps provide secure key management, key rotation, access control, auditing, and compatibility with cloud platforms.

### Prerequisite

- An AWS account with privileges to create an I[AM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) and a [KMS Key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys).
- [AWS CLI](https://docs.aws.amazon.com/cli/v1/userguide/cli-chap-install.html) installed and configured

```sh {"id":"01HRSZWCJZ8PG0T0EWGAP2ZS1Q"}
aws configure
```

- **Kubernetes Cluster**: Ensure you have a running Kubernetes cluster. For this guide, we will be using [kind](https://kind.sigs.k8s.io/docs/user/quick-start/) for my Kubernetes cluster.

```sh {"id":"01HRT007KXE45ESZTWN1JD6X5D"}
brew install kind
```

- **[Kubectl](https://kubernetes.io/docs/tasks/tools/):** Install the Kubernetes command-line tool on your machine.

```sh {"id":"01HRT011Y2QB3VFSW1XM2AGMFG"}
brew install kubectl
```

## **Installation of SOPS**

### Step 1: Download SOPS Binary

```sh {"id":"01HRT2VDC4VKCGXFGTRD6QESJX"}
curl -LO https://github.com/getsops/sops/releases/download/{version}/sops-{version}.linux.amd64
```

For this guide, we are using a Linux engine.

### Step 2: Move the Binary to Your PATH

```sh {"id":"01HRT20X8V73M6KA66WPB156JR"}
# Move the binary to your PATH
mv sops-{version}.linux.amd64 /usr/local/bin/sops
```

### Step 3: Make the Binary Executable

```sh {"id":"01HRT1WPJ6E5N1HPFQ3F1ZBYFZ"}
# Make the binary executable
chmod +x /usr/local/bin/sops
```

## **Create a KMS Key**

Next, you’ll need to create a [KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys) in AWS, which will be used to encrypt and decrypt your secrets. Follow the steps below to create a KMS key:

1. Sign in to the AWS Management Console and open the KMS console.
2. Click on the **Create key.**
3. For "Alias," enter a name for your key. For example, "runme-sops-key".
4. For "Key material origin," choose "AWS KMS generates the key material."
5. Add the AWS users or roles to manage the key under "Key administrators."
6. Click on **Next**.
7. Choose the options that best suit your "Key usage permissions" needs.
8. Click on **Next**.
9. Review your key settings and click on **Finish**.

![kms key](../../static/img/runme-kms-key.png)

## **Configure SOPS**

Configure SOPS effortlessly with your AWS KMS key

```sh {"id":"01HRT1SF7YAP44WFT0WS08WST5"}
echo "creation_rules
  - kms: arn:aws:kms:{region}:{account-id}:alias/{alias}" > ~/.sops.yaml
```

Verify the configuration by checking the contents of `~/.sops.yaml`

```sh {"id":"01HRT1S289XFGGR43ZFJSJN8G8"}
cat ~/.sops.yaml
```

## **Encrypt Your Secrets**

Encrypt your secrets seamlessly using SOPS and AWS KMS; no more cryptic commands; each step is laid out for you to follow along effortlessly.

```sh {"id":"01HRT1REM347HVT1YNEHNQ75M9"}
sops --encrypt --kms arn:aws:kms:{region}:{account-id}:key/{key} --encryption-context Role:sops-runme-kms-role --encrypted-regex password runme-secrets.yaml > runme-secrets-enc.yaml
```

### **Decrypt Your Secrets**

Retrieve and decrypt your secrets with confidence. Runme Notebook provides clear and concise instructions, ensuring the decryption process is as smooth as encrypting.

To check and decode your Kubernetes secret

```sh {"id":"01HRSMKKZDA1MJMTEPK8CHS7YF"}
kubectl get secret sops-runme -n test -o jsonpath="{.data.password}” | base64 --decode
```

To decrypt your sops files:

```sh {"id":"01HRT1HVC0JY2JH7WKD1PRXW3H"}
sops --decrypt --kms arn:aws:kms:{region}:{account-id}:key/{key} --encryption-context Role:sops-runme-kms-role --encrypted-regex password runme-secrets-enc.yaml > runme-secrets.yaml
```

### **Apply Encrypted Secret**

```sh {"id":"01HRSMKKZDED03HJNEATG1D3W9"}
sops -d runme-secrets-enc.yaml | kubectl apply -f -
```

## **Securing Secrets with Sealed Secrets**

This guide provides step-by-step instructions on setting up Sealed Secrets to encrypt secrets in a Kubernetes cluster. Here's a breakdown of the critical steps and commands:

### **Prerequisites:**

- **Kubernetes Cluster**: Ensure you have a running Kubernetes cluster. For this guide, we will be using [`kind`](https://kind.sigs.k8s.io/docs/user/quick-start/) for my Kubernetes cluster.

```bash {"id":"01HRSMKKZD5C28W9PK7C08SQH2"}
brew install kind
```

- **[Kubectl](https://kubernetes.io/docs/tasks/tools/):** Install the Kubernetes command-line tool on your machine.

```bash {"id":"01HRSMKKZDSPDPCCP2635VEAKN"}
brew install kubectl
```

- **Kubeseal:** Install the Sealed Secrets Controller.

### **Encrypt a Secret**

- Create a Kubernetes Secret and use **`kubeseal`** to encrypt it:

```sh {"id":"01HRSMKKZDHRFG7RMFFHDXWZAB"}
kubectl create secret generic mysecret --from-literal=username=myuser --from-literal=password=mypassword --dry-run=client -o yaml | kubeseal > mysealedsecret.yaml
```

- Alternatively, you can encrypt a manifest file:

```sh {"id":"01HRSMKKZD3YZ69HWSZNW9FRWP"}
kubeseal < mysecret.yaml > mysealedsecret.yaml
```

- Use the sealed-secrets-controller installed in your cluster to encrypt a secret before deploying:

```sh {"id":"01HRSMKKZDFC6E3DE7T5Z79GDT"}

cat mysecret.yaml | kubeseal --controller-namespace kube-system --controller-name sealed-secrets-controller --format yaml > mysealedsecret.yaml
```

This creates a SealedSecret resource (**`mysealedsecret.yaml`**) containing the encrypted data.

### **Add a New Value to a Sealed Secret**

```sh {"id":"01HRSMKKZDQ3BAD5TMBMC994MY"}
echo -n "my secret api key" | kubectl create secret generic xxx --dry-run=client --from-file=api_key=/dev/stdin -o json | kubeseal --controller-namespace=kube-system --controller-name=sealed-secrets --format yaml --merge-into sealed-secret.yaml
```

### **Delete Sealed Secret:**

- To delete the secret, use the **`kubectl`** command:

```sh {"id":"01HRSMKKZDEM5TGC0H49MCX158"}
kubectl delete -f mysealedsecret.yaml
```

### **Deploy the Sealed Secret:**

```sh {"id":"01HRSMKKZDFG16ASX22PJ26RP7"}
kubectl apply -f mysealedsecret.yaml
```

The Sealed Secrets controller will decrypt the SealedSecret and create a regular Kubernetes Secret with the decrypted data.

Make sure to replace placeholders like **`mysecret.yaml`** and **`mysealedsecret.yaml`** with your secret and sealed secret filenames. Adjust controller-specific details such as the namespace and name according to your environment.

## **Challenges with Manual Execution**

While the above processes help you secure your Kubernetes key, manually carrying out these operations can be take time and effort. This is where Runme comes in.

Runme is a READme documentation software that automates manual processes and gives you the time to jump right into a task, execute it, and save time.

You can quickly eliminate the hassle of learning and implementing secret encryption in Kubernetes by automating these processes with Runme.

## **Improve Documentation Experience with Runme Notebook**

Previously, we explored securing your Kubernetes secrets using sealed secrets and SOPS. Now, we will walk you through how to automate these processes with a single click right inside your Markdown file.

1. Open VS Code on your local machine. Navigate to the extensions tab and search for “Runme” Now, click Install.
2. Create a READme file.
3. To execute each of your commands, paste them into the code block in Runme and click the run cell button beside the code block.

The image below illustrates how easy it is to download the SOPS binary using Runme.

![runme using sops](../../static/img/runme-sops.png)

You can also create code blocks for each step required and execute them with a single click.

To have a full view of these processes, you can clone this repo, open it with VS Code on your local machine and click the run cell button to complete your tasks. However, ensure you have installed [Runme](../installation/index.md) first.

Embrace the Runme Notebook experience to secure your secrets and effortlessly enhance your Kubernetes knowledge. Visit [Runme Documentation](https://docs.runme.dev/) to embark on a guided journey to a more secure Kubernetes environment.
