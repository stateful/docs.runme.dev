---
runme:
  id: 01J82Z98G1JA35Y4AAWMYDJW0T
  version: v3
---

# Sealed Secrets

This guide will explore Kubernetes secrets, with a specific focus on sealed secrets.

In this guide, we will demonstrate the steps required to encrypt Kubernetes secrets with sealed secrets in Runme successfully.

## Prerequisites

To get started, ensure you have the following:

### Clone the repository

We created a [notebook repository](https://github.com/stateful/blog-examples/tree/main/kubernetes/k8s-secret/sealed-secret) containing all the instructions and commands required for this guide.

```sh {"id":"01HYBANSBEGDG8RCXAJB3P75FH"}
git clone https://github.com/stateful/blog-examples.git
cd kubernetes/k8s-secret/sealed-secret
```

### Install Runme

Install the [Runme extension on VS Code](https://marketplace.visualstudio.com/items?itemName=stateful.runme) and set it as your [default Markdown viewer.](/installation/vscode#how-to-set-vs-code-as-your-default-markdown-viewer)

This guide will focus on using the Mac specifications. If you use a Linux OS, follow the instructions in the [Linux Markdown files.](https://github.com/stateful/blog-examples/blob/main/kubernetes/k8s-secret/sealed-secret/linux-sealedsecrets.md)

### Install all dependencies

To follow up on securing your secrets using Sealed Secrets, ensure you install the necessary dependencies in the notebook's prerequisite section. In your Runme cell, run the commands below to install all dependencies required for this guide.

```sh {"id":"01HYBAST575EKGMG6PW081YNFK"}
brew install kind
brew install kubectl
brew install kubeseal
```

<video autoPlay loop muted playsInline controls>
  <source src="/videos/sealed-secrets-runme.mp4" type="video/mp4" />
  <source src="/videos/sealed-secrets-runme.webm" type="video/webm" />
</video>

### Encrypt a secret in Runme

To encrypt a secret, you must create a Kubernetes secret and then using `kubeseal` you can encrypt it. Run the command below in your Runme cell to encrypt your secret.

```sh {"id":"01HYBAVNNJQ40YSKKAXF3653J2"}
kubectl create secret generic mysecret --from-literal=username=myuser --from-literal=password=mypassword --dry-run=client -o yaml | kubeseal > mysealedsecret.yaml
```

Or you can encrypt a manifest file mysecret.yaml (containing your secret).

```sh {"id":"01HYBAW0WC6R9QYK6W19NP6W34"}
kubeseal < mysecret.yaml > mysealedsecret.yaml
```

Or you can use the sealed-secrets-controller installed in your cluster to encrypt secret before deploying.

```sh {"id":"01HYBAX0N8475XQ1Y49YMNDW1J"}
cat mysecret.yaml | kubeseal --controller-namespace kube-system --controller-name sealed-secrets-controller --format yaml > mysealedsecret.yaml
```

For all of the above, Runme will automatically create a sealed secret resource containing the encrypted data, the **`mysealedsecret.yaml`**

### Adding a new value to a secret

To add a new value to a secret, you only need to update your manifest file with the new values, re-encrypt the secrets, and then reapply them to the cluster. All of these can be executed in your Runme cell. To do this, run the command below

```sh {"id":"01HYBAYYWG89SF0SNTY27YH468"}
kubeseal --controller-namespace=kube-system --controller-name=sealed-secrets-controller < new_secret.yaml > mysealedsecret.yaml
kubectl apply -f mysealedsecret.yaml
```

Here's what it looks like when the command is executed in Runme.

![add value](/img/guide-page/add-secret.png)

From the output you can see that your new value has successfully been added.

### Decrypt a secret

To retrieve the original version of `runme-secrets.yaml`, you can decrypt the encrypted secret, `mysealedsecret.yaml`. Run the command below

```sh {"id":"01HYBANBSHN43RFRRNP1J6P7YA"}
kubeseal --controller-name=sealed-secrets-controller --controller-namespace=kube-system  < mysealedsecret.yaml > mysecrets.yaml
```

When you run the code in your Runme cell, here is what it looks like.

![decrypt sealed secret](/img/guide-page/decrypt-sealed-secrets.png)

### Delete a secret

```sh {"id":"01HYBANBSHN43RFRRNP3Q0KKFB"}
kubectl delete -f mysealedsecret.yaml
```

### Deploy the sealed secret

```sh {"id":"01HYBANBSHN43RFRRNP5PR5P9S"}
kubectl apply -f mysealedsecret.yaml
```

![deploy sealed](/img/guide-page/sealed-secret-apply.png)

The Sealed Secrets controller will decrypt the Sealed Secret and create a Kubernetes Secret with the decrypted data.

Make sure to replace placeholders like **`mysecret.yaml`** and **`mysealedsecret.yaml`** with your secret and Sealed Secret filenames. Adjust controller-specific details such as the namespace and name according to your environment.
