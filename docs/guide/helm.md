# Running Helm with Runme

If you find yourself performing a task repeatedly, it's best to automate it - this is a core principle of DevOps. This mindset has led to numerous initiatives focused on automation. For instance, we package and containerize our applications and write documentation as a guide to understand what needs to be done. With Runme, your documentation can be transformed into an interactive notebook where users can apply and perform the actions outlined in your documentation. 

Helm is a package manager for Kubernetes, an open-source orchestration platform. It assists users in defining, installing, and managing applications and their dependencies on a Kubernetes cluster. Conversely, Runme is an IDE that converts Markdown files into executable notebooks. Both platforms aim to simplify users' deployment processes.

Runme is designed to enhance communication between teams and facilitate knowledge sharing. It has the technical capability to execute your code or deploy your application, and it is accompanied by clear documentation that everyone can comprehend.

This guide demonstrates how to integrate Helm with Runme. This integration simplifies and documents your deployments, improves consistency, and enhances collaboration between development and operations teams.

## **Prerequisite**

To follow up on this tutorial, ensure you have the following:

- **Runme Extension**: Install the [Runme extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) in your VS Code editor and set it as your [default Markdown viewer](https://docs.runme.dev/installation/installrunme#how-to-set-vs-code-as-your-default-markdown-viewer).
- **Clone Repo**: We've provided an example repository to help you follow this tutorial. You can clone the [repo here](https://github.com/stateful/blog-examples/blob/main/Cloud-native/helm/helm.md).
- **Require Packages**: Install the required packages ([Brew](https://brew.sh/), [kind](https://kind.sigs.k8s.io/docs/user/quick-start/),[Docker](https://docs.docker.com/get-docker/),kubectl and [Helm](https://helm.sh/docs/intro/install/) ) inside your Markdown file. *Runme allows you to achieve this! Simply run the command in the [prerequisite section](https://github.com/stateful/blog-examples/blob/main/Cloud-native/helm/helm.md#prerequiste) in the repo.*

Create a cell in your Rume notebook and run the command below to install the necessary packages.

Follow the instructions and commands in the above [notebook](https://github.com/stateful/blog-examples/blob/main/Cloud-native/helm/helm.md) for this guide.

## **Creating A Helm Chart Within Your Runme Environment**

You can create your [helm chart](https://helm.sh/docs/intro/using_helm/#creating-your-own-charts) to suit your specific use case but for this guide, We will be using a helm chart from the `helm repo` , The repository is a collection that comprises of packaged Helm charts for easy discovery, distribution, and installation. In the `Helm Repo` section of this notebook, we guide you on how to add a repo to your local Helm configuration. We also show you how to list the charts in your repo and search through them to select the specific chart you need.

For this guide, The repo adds a Kubernetes Ingress controller called `ingress-nginx` it helps manage external access to services within the Kubernetes cluster.

Runme is dynamically set. You can run the entire markdown file using the [Run all](https://docs.runme.dev/configuration/document-level#run-all-button) feature. If you want to run just a particular section, you can also do that, or run just a single cell.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/runme-section.mp4" type="video/mp4" />
  <source src="/videos/runme-section.webm" type="video/webm" />
</video>

## **Installing Helm Packages with Runme**

The `helm install` command installs a Helm chart into your Kubernetes cluster. When you run `helm install`, you specify the release name, the chart name (either local or from a repository), and any necessary configuration values or overrides. Helm fetches the specified chart from the repository (if not already locally available) and installs it into your cluster, creating a new release.

The `helm install` section of this guide installs the  Kubernetes Ingress controller & checks the status of the deployment to make sure everything is installed appropriately.

![helm status](../../static/img/guide-page/runme-helm-status.png)

Successfully installed with your Runme terminal:tada:

To uninstall Ingress Controller :

```sh
helm uninstall ingress-nginx
```

## **Upgrading Helm Packages With Runme**

`helm upgrade` is a Helm command used to upgrade a release to a new version of a chart or to apply changes to an existing release. It allows you to modify the configuration, resources, or versions associated with a Helm release in your Kubernetes cluster.

In this guide, I expanded the replica set of my Ingress controller to 3 and customized my `values.yaml`.

With Runme, you can modify the [working directory](https://docs.runme.dev/configuration/cell-level#cells-current-working-directory) for your code cell to a file directory of your choice. This enables you to easily run `values.yaml` even if the file is not located in the same directory as your markdown file.

```sh
helm upgrade ingress-nginx ingress-nginx/ingress-nginx --values values.yaml
```

To check the status of your deployment

```sh
helm status ingress-nginx
```

## **Implementing Helm Rollback**

In your Runme notebook, you can revert to a specific historical version of a Helm release within your Kubernetes cluster. Using the `helm rollback` command, Along side the name of the release and the revision number you want to deploy.

![helm rollback](../../static/img/guide-page/runme-helm-rollback.png)

```sh
helm status ingress-nginx
```

## **Retrieve Information with Runme**

The `helm get` command in Helm is used to retrieve information about a specific release or resource within a release. It provides various subcommands to fetch different types of information related to Helm releases.

```sh
helm get manifest ingress-nginx
```

## **Add Helm Plugin**

Helm plugins are external tools or extensions that enhance the functionality of the Helm CLI. Plugins allow users to extend Helm’s capabilities by adding new commands or features without modifying the core Helm codebase.

For this guide, we installed the sops plugin to use it encrypt our kubernetes secret

![runme-plugins](../../static/img/guide-page/runme-helm-plugins.png)

```sh
helm secrets encrypt secrets.yaml > sops-secrets.yaml
```

Using Runme can give your documentation a fresh look. It provides a platform to share knowledge, test, and execute documented tasks, leading to easier knowledge sharing among teams. Additionally, integrating Runme with Helm enhances the management of your Kubernetes applications.
