---
runme:
  id: 01HX525D9HYD6QHP138A69XKJ1
  version: v3
---

# How to Automate Kubernetes Secrets Encryption with SOPS and Runme

In this guide, we will walk you through automating your [Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/) encryption with Runme to ensure your encryption and decryption processes are automated and properly documented to improve your secret management.

## **Prerequisites**[](/guide/k8s-secret#prerequisites)

To get started, ensure you have the following:

- **Clone the Repository**: We have created a notebook repository containing all the instructions and commands required for this guide. Ensure to [clone the repository](https://github.com/stateful/blog-examples/tree/main/kubernetes/k8s-secret).

```sh {"id":"01HYB8PHFXW143RJBD4D54M13J"}
git clone https://github.com/stateful/blog-examples.git
cd kubernetes/k8s-secret/sops
```

- **Install Runme:** Install the [Runme extension on VS Code](https://marketplace.visualstudio.com/items?itemName=stateful.runme) and set Runme as your [default Markdown viewer.](https://docs.runme.dev/installation/vscode#how-to-set-vs-code-as-your-default-markdown-viewer)

This guide will focus on using the Mac specifications. If you use a Linux OS, follow the instructions in the [Linux Markdown files](https://github.com/stateful/blog-examples/blob/main/kubernetes/k8s-secret/sops/sops-linux.md).

## **Securing Secrets with SOPS**[](/guide/k8s-secret#securing-secrets-with-sops)

To encrypt your Kubernetes secrets using SOPS, you need an advanced security measure, access to a cloud provider, and a Key Management Service (KMS). For this guide, we will use an [AWS KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys).

Navigate to the [SOPS file](https://github.com/stateful/blog-examples/tree/main/kubernetes/k8s-secret/sops) in the repository you cloned earlier and open the Markdown file based on the specifications of your operating system to follow up on this section of the guide.

### **Installation of SOPS**[](/guide/k8s-secret#installation-of-sops)

Run the command within your Runme cell to install `kind`, `kubectl`, `sops`, and `awscli`

```sh {"id":"01HYB8WW0CTPYGZQF5M3AJ9DZV"}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install kind
brew install kubectl
brew install awscli
aws --version
aws configure
```

Here is a pictorial representation of the command in Runme and the corresponding output when it is successfully executed.

![pre-requiste](/img/guide-page/prerequiste-sops.png)

Finally, configure the installed AWS CLI in your Runme Terminal.

installation of SOPS

```sh {"id":"01HYB8ZHQ50C7XCAQHZBTDGQW2"}
brew install sops
```

<video autoPlay loop muted playsInline controls>
  <source src="/videos/runme-sops.mp4" type="video/mp4" />
  <source src="/videos/runme-sops.webm" type="video/webm" />
</video>

### **Create a KMS Key within your Runme Cell**[](/guide/k8s-secret#create-a-kms-key)

You need a [KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html) to encrypt and decrypt your secrets. As mentioned, we will use the AWS KMS key to carry out this action.

Create a cell for this section and run the command below in your Runme cell:

```sh {"id":"01HYB94C7Z7PSNSQDSNCQF3JZ1"}
export alias

aws kms create-key --description "key-runme" | jq -r '.KeyMetadata.KeyId'
keyid=$(aws kms create-key --description "key-runme" | jq -r '.KeyMetadata.KeyId')
aws kms create-alias --alias-name "alias/$alias" --target-key-id $keyid

```

This command will prompt you to input a value for `alias` and create a KMS key. It will filter the output only to show the key ID and turn it into an environment variable called `keyid`. Once you run this command, you will get an output similar to the one in the image below.

![kms](/img/guide-page/kms-key-runme.png)

You can also save this output to the Runme cloud for future use with the [Runme auto-save](https://docs.runme.dev/configuration/auto-save) feature.

### **Configure SOPS in Runme** [](/guide/k8s-secret#configure-sops)

To configure your SOPS, specify how to encrypt your secrets, then define the encryption keys. To do this, run the command below in your Runme cell.

```sh {"id":"01HYB966JRP1S03E8RZBVDGRVB"}
export region
export accountid
export alias

echo "creation_rules:
  - kms: arn:aws:kms:${region}:${accountid}:alias/${alias}" > ~/.sops.yaml

# Verify the configuration
cat ~/.sops.yaml
```

Once this is executed, it returns the configuration of your sops.yaml file to ensure that it is correct, as shown in the image below.

![sops](/img/guide-page/configure-sops-runme.png)

### **Encrypt Your Secrets**[](/guide/k8s-secret#encrypt-your-secrets)

To encrypt your secret using SOPS with AWS KMS, ensure you have set the following:

- Your environment variables.
- Your manifest `runme-secrets.yaml` file containing your secrets. If you have not done this, create one using the following YAML manifest in [our repository ](https://github.com/stateful/blog-examples/blob/main/kubernetes/k8s-secret/sops/runme-secrets.yaml).
- Click the **execute cell** button.

```sh {"id":"01HYB97H8JC4MJNTW68Z9TYWHA"}
keyid=$(aws kms create-key --description "runme-key312" | jq -r '.KeyMetadata.KeyId')

sops --encrypt --kms arn:aws:kms:${region}:${accountid}:key/$keyid --encryption-context Role:runme-test --encrypted-regex password runme-secrets.yaml > runme-secrets-enc.yaml
```

Now, we have successfully encrypted your secrets within `runme-secrets.yaml`. Runme automatically transfers your information to `run me-secrets-enc.yaml`.

### **Decrypt Your Secrets within the Runme cell.**[](/guide/k8s-secret#decrypt-your-secrets)

Similar to the encryption process, Runme you can decrypt your encrypted security in your Markdown file. This will ensure that every process is properly automated. You can do this in two ways.

- To check for your secret within the cluster, run the command below:

```sh {"id":"01HYB9A1R7T6JZSMTHMB3914AA"}
kubectl get secret runme -n test -o jsonpath="{.data.password}" | base64 --decode
```

- To decrypt your SOPS secret, run the command below:

```sh {"id":"01HYB8K0MS4B3PMA8ZSZSA3MJ0"}
sops --decrypt --kms arn:aws:kms:${region}:${accountid}:key/${keyid} --encryption-context Role:runme-test --encrypted-regex password runme-secrets-enc.yaml > runme-secrets.yaml
```

Here is a pictorial representation on what happens when you decrypt your secrets within your Runme cell.

![decrypt](/img/guide-page/runme-decrypts.png)

When you decrypt the secret, it moves the decrypted secrets from a SOPS-encrypted secret `runtime-secrets-enc.yaml` into the original version before it was encrypted `runme-secrets.yaml`

### **Apply Encrypted Secret**[](/guide/k8s-secret#apply-encrypted-secret)

To apply the encrypted secrets in your `runme-secrets-enc.yaml` file, run the command below.

```sh {"id":"01HYB8K0MTHK21S2GDK42MH3EQ"}
sops -d runme-secrets-enc.yaml | kubectl apply -f -
```

![apply](/img/guide-page/secrets-apply-runme.png)

This runs the `runme-secrets-enc.yaml` file decrypts it and then applies the file.

## **Improved Documentation Experience with Runme Notebook**[](/guide/k8s-secret#improve-documentation-experience-with-runme-notebook)

We successfully encrypted our Kubernetes secrets inside our Markdown file. Runme makes your automation process easy with its features.

One of the useful features within the notebook environment is the [environment variable prompt](/getting-started/features#environment-variable-prompts) feature, which allows users to input values directly within the notebook environment and use them whenever needed rather than inputting them again.

Another amazing key feature of Runme is the [Autosave](https://docs.runme.dev/configuration/auto-save) feature, which automatically records and tracks every change and activity in your processes without manual intervention.

Visit the [Runme Documentation](https://docs.runme.dev/) to learn more about Runme and explore its features. Then, begin your journey to automating your operations processes.
