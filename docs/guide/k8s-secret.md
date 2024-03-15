# How to Secure and Automate Kubernetes Secrets with Runme and SOPS/Sealed Secrets

The default [Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)  are either stored as plaintext or base64 encoded. Users can’t ship these secrets to a version control like git because revealing sensitive data like API keys, passwords, or tokens in version control in plaintext or base64 encoded poses a security risk.

In situations where a developer, or an infra-focused engineer wants to add secrets to the cluster or to version control, they have to leverage encryption-first tools to securely share and push these secrets to version control. Tools such as [sops](https://fluxcd.io/flux/guides/mozilla-sops/) and [sealed-secrets](https://archive.eksworkshop.com/beginner/200_secrets/installing-sealed-secrets/) are the encryption-first tools used by DevOps and SREs in today’s world.

With Runme, Platform Engineers can document how secrets are added to a Kubernetes cluster and ensure the commands/guides are repeatable, consistent and executable. Using Runme also allows engineers to pass off documentation as runbooks to enable other team members, including newer team members to add and encrypt secrets properly in the team without leaking the data and causing a significant security breach.

The guide below would show how to use [Runme](https://github.com/stateful/blog-examples/tree/main/k8s-secret) has your central knowledge hub and make your documentation the source of truth for all infrastructure operations

## **Prerequisites**

- An AWS account with privileges to create an [IAM User](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) and a [KMS Key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys).
- [AWS CLI](https://docs.aws.amazon.com/cli/v1/userguide/cli-chap-install.html) installed and configured.
- **Kubernetes Cluster:** A running Kubernetes cluster is required. For this guide, we will use `[kind](https://kind.sigs.k8s.io/docs/user/quick-start/)` for our Kubernetes cluster.
- **[Kubectl](https://kubernetes.io/docs/tasks/tools/):** The Kubernetes command-line tool should be installed on your machine.

Here is a [notebook](https://github.com/stateful/blog-examples/blob/main/k8s-secret/sops/prerequiste.md) to help you install these prerequisites. For this guide we are using either Linux or Mac OS

# **Securing Secrets with SOPS**

Encrypt your Kubernetes secrets using SOPS; you need enhanced security and access to your cloud provider. This requires a [Key Management Service](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys) (KMS). For this guide, we'll use an AWS KMS key. This service offers secure key management, key rotation, access control, auditing, and compatibility with cloud platforms.

## **Installation of SOPS**

### **Step 1: Download SOPS Binary**

```sh {"id":"01HRT2VDC4VKCGXFGTRD6QESJX"}
export version
export platform

curl -LO https://github.com/getsops/sops/releases/download/$version/sops-$version.$platform
```

By using the runme [env prompt](https://docs.runme.dev/getting-started/features#environment-variable-prompts) feature, all you need to do is input the latest version of SOPS for `{version}` and your platform for `{platform}` (e.g., *darwin* for macOS, *linux* for Linux). You don’t need to input `env prompt` again ones the values has been inputted once, other cell within the notebook can use, unless you resent `reset session` .

<video autoPlay loop muted playsInline controls>
  <source src="../../static/videos/runme-envprompt-k8s.mp4" type="video/mp4" />
  <source src="../../static/videos/runme-envprompt-k8s.webm" type="video/webm" />
</video>

For this guide, we are using a Linux operating system.

### **Step 2: Move the Binary to Your PATH**

```sh {"id":"01HRT20X8V73M6KA66WPB156JR"}
# Move the binary to your PATH
mv sops-{version}.linux.amd64 /usr/local/bin/sops

# Make the binary executable
chmod +x /usr/local/bin/sops
```

## **Create a KMS Key**

Next, create a [KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys) in AWS. This key will be used to encrypt and decrypt your secrets. Follow the steps below to create a KMS key:

To create a KMS key with a specific name, use the `--description` option followed by the name of the key, in this case, `runme-key`.

```sh {"id":"01HS1AC1XDX7K7R1TRCHVPEB3G"}
aws kms create-key --description "runme-key"
```

Next, create an alias.

```sh {"id":"01HS1ACBVNP56D9V53N398SPWT"}
# This will create an alias "alias/MyAliasName" associated with the newly created key
aws kms create-alias --alias-name alias/runme --target-key-id $key
```

Refer to the [Prerequisite](https://github.com/stateful/blog-examples/blob/main/k8s-secret/sealed-secret/prerequiste.md) notebook for installation instructions for your Linux OS.

Here is how your output will look like

```sh {"id":"01HS1E58Y030113R231JV0SG2C"}
{
    "KeyMetadata": {
        "AWSAccountId": "655675289698",
        "KeyId": "901e8117-84dd-43ca-aa41-ad319c48abcd",
        "Arn": "arn:aws:kms:us-east-1:655675289698:key/901e8117-84dd-43ca-aa41-ad319c48abcd",
        "CreationDate": "2024-03-15T10:44:46.284000+01:00",
        "Enabled": true,
        "Description": "runme-keys",
        "KeyUsage": "ENCRYPT_DECRYPT",
       
 }
```

You can save it straight to the runme cloud for future use or reference, using the runme [auto-save](../configuration/auto-save) feature

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

Encrypt your secrets seamlessly using SOPS and AWS KMS, no more cryptic commands; each step is laid out for you to follow along effortlessly.

```sh {"id":"01HRT1REM347HVT1YNEHNQ75M9"}
sops --encrypt --kms arn:aws:kms:$region:$account-id:key/$key --encryption-context Role:sops-runme-kms-role --encrypted-regex password runme-secrets.yaml > runme-secrets-enc.yaml
```

the secrets in your `runme-secrets.yaml`  gets encrypt an piped into another file `runme-secrets-enc.yaml`

### **Decrypt Your Secrets**

Retrieve and decrypt your secrets with confidence. Runme Notebook provides clear and concise instructions, ensuring the decryption process is as smooth as encrypting.

here is how to check for you secret within the cluster:

```sh {"id":"01HRSMKKZDA1MJMTEPK8CHS7YF"}
kubectl get secret sops-runme -n test -o jsonpath="{.data.password}” | base64 --decode
```

here is how to decrypt your sops secret:

```sh {"id":"01HRT1HVC0JY2JH7WKD1PRXW3H"}
sops --decrypt --kms arn:aws:kms:{region}:{account-id}:key/{key} --encryption-context Role:sops-runme-kms-role --encrypted-regex password runme-secrets-enc.yaml > runme-secrets.yaml
```

Decrypt the secret from a sops encrypted secret `runme-secrets-enc.yaml` into the original version before it was encrypted `runme-secrets.yaml`

### **Apply Encrypted Secret**

```sh {"id":"01HRSMKKZDED03HJNEATG1D3W9"}
sops -d runme-secrets-enc.yaml | kubectl apply -f -
```

## **Securing Secrets with Sealed Secrets**

This guide provides step-by-step instructions on setting up Sealed Secrets to encrypt secrets in a Kubernetes cluster. Here's a breakdown of the critical steps and commands:

Decrypt the secret from a sops encrypted secret runme-secrets-enc.yaml into the original version before it was encrypted runme-secrets.yaml

- **Kubeseal:** Install the Sealed Secrets Controller.

```sh {"id":"01HS1APA6Q2DF946SNP7NN0Y7E"}
export version
export platform

wget https://github.com/bitnami-labs/sealed-secrets/releases/download/v$version/kubeseal-$version-$platform.tar.gz
tar xfz kubeseal-$version-$platform.tar.gz
sudo install -m 755 kubeseal /usr/local/bin/kubeseal
```

using the `export` command prompts you to input the value of `version` or `platform`

![set var](../../static/img/set-var.png)

Installing the Custom Controller and CRD for SealedSecrets

```sh {"id":"01HS1AR998QYFRGSA30DNZ6KQC"}
wget https://github.com/bitnami-labs/sealed-secrets/releases/download/v$version/controller.yaml
kubectl apply -f controller.yaml
```

Check the status of the controller pod.

```sh {"id":"01HS1ARV0VY9NRX6C5QGCE8837"}
kubectl get pods -n kube-system | grep sealed-secrets-controller
```

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
2. Create a README file.
3. To execute each of your commands, paste them into the code block in Runme and click the run cell button beside the code block.

The image below illustrates how easy it is to download the SOPS binary using Runme.

![runme using sops](../../static/img/runme-sops.png)

To have a full view of these processes, you can clone this [repo](https://github.com/stateful/blog-examples/tree/main/k8s-secret), open it with VS Code on your local machine and click the run cell button to complete your tasks. However, ensure you have installed [Runme](../installation/index.md) first.

Embrace the Runme Notebook experience to secure your secrets and effortlessly enhance your Kubernetes knowledge. Visit [Runme Documentation](https://docs.runme.dev/) to embark on a guided journey to a more secure Kubernetes environment.
