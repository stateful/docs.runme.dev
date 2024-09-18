# Kubectl

In this guide, we will help you understand how to use kubectl to interact with your kubernetes cluster using Runme

Before we proceed, there are a few requirements needed to get started

## Prerequisites

- Runme Extension: Install the [Runme extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) in your VS Code editor. You can make Runme your [default Markdown viewer](/installation/vscode#how-to-set-vs-code-as-your-default-markdown-viewer), ensuring all your Markdown files are automatically opened as a Runme Notebook. Additionally, it provides other client interfaces where you can run your Markdown file. See the [Runme installation](/installation/index) guide.
- Basic knowledge of Kubernetes concepts (pods, services, deployments).
- Access to a Kubernetes cluster (for this guide, we will be using a kind cluster).
- Docker installed ( to create your kind cluster)
- `kubectl` installed on your system. [Official installation guide](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/). ( install with Brew if you have already)

```jsx {"id":"01J82YTHEHH70ZG99ZAZSW2PJF"}
brew install kubectl
```

### Verify `kubectl` is Installed

To check if `kubectl` is installed and configured correctly:

```bash {"id":"01J82YTHEHH70ZG99ZB2XP844G"}
kubectl version --client
```

Make sure you're connected to a Kubernetes cluster:

```bash {"id":"01J82YTHEHH70ZG99ZB41NWR6Y"}
kubectl cluster-info
```

Create a cluster ( if you have your intended cluster running ignore the section)

```sh {"id":"01J82YTHEHH70ZG99ZB6Z8HBK4"}
kind delete cluster --name kubectl-runme
```

We're using kind to create a Kubernetes cluster locally. The name of the Kubernetes cluster is `kubectl-runme`

```sh {"id":"01J82YTHEHH70ZG99ZBAQR2V18"}
kind create cluster --name kubectl-runme

```

Check if your cluster is running

```jsx {"id":"01J82YTHEHH70ZG99ZBCAKWHEP"}
kubectl get namespaces
```

## Basic Command

Here are some essential Kubernetes commands to help you interact with and monitor your cluster. These commands allow you to check the status of your cluster, view nodes, inspect running pods, and review services. Using Runme, you can execute these commands directly from this guide, streamlining the process and ensuring accuracy. Let’s get started with the basics

### Get Cluster Info

To check the status of your cluster:

```bash {"id":"01J82YTHEHH70ZG99ZBEYZDE5S"}
kubectl cluster-info
```

### Viewing Nodes

Nodes are the physical or virtual machines in your cluster.

```bash {"id":"01J82YTHEHH70ZG99ZBJF5G5KJ"}
kubectl get nodes
```

### Viewing Pods

Pods are the smallest deployable units in Kubernetes. To list all pods:

```bash {"id":"01J82YTHEHH70ZG99ZBP39658P"}
kubectl get pods
```

For more detailed information about a pod:

```bash {"id":"01J82YTHEHH70ZG99ZBP4FQRC7"}
kubectl describe pod <pod-name>
```

### Viewing Services

Services allow networking between different components in your cluster:

```bash {"id":"01J82YTHEHH70ZG99ZBSSHK5FS"}
kubectl get services
```

## Working with Deployments

Deployments in Kubernetes allow you to automate the process of scaling, updating, and managing the lifecycle of your applications. Whether you’re deploying a new app or updating an existing one, deployments offer a reliable way to manage your applications with ease. Below are some key commands to help you create, scale, and manage your deployments.

### Create a Deployment

You can create a deployment using a YAML file or via the command line. Here’s an example of creating a deployment for an NGINX server:

```bash {"id":"01J82YTHEHH70ZG99ZBXDDRXJT"}
kubectl create deployment nginx --image=nginx
```

### Check Deployment Status

```bash {"id":"01J82YTHEHH70ZG99ZBYV4GFR9"}
kubectl get deployments
```

### Scale the Deployment

You can easily scale your deployment to multiple replicas:

```bash {"id":"01J82YTHEHH70ZG99ZC1XDZPHM"}
kubectl scale deployment nginx --replicas=3
```

### Rolling Updates

To update the image version for a deployment:

```bash {"id":"01J82YTHEHH70ZG99ZC4BHEBTT"}
kubectl set image deployment/nginx nginx=nginx:1.19
```

To monitor the progress of the update:

```bash {"id":"01J82YTHEHH70ZG99ZC6S3EY9W"}
kubectl rollout status deployment/nginx
```

To rollback in case of an issue:

```bash {"id":"01J82YTHEHH70ZG99ZC8J3ZCF8"}
kubectl rollout undo deployment/nginx
```

## Using YAML Configuration Files

Most Kubernetes objects can be created using YAML files. Here’s an example of a simple pod definition:

```sh {"id":"01J82YTHEHH70ZG99ZCC6GHAWX"}

cat <<EOF | sudo tee ./myapp-pod.yaml > /dev/null
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  containers:
  - name: myapp-container
    image: nginx
    ports:
    - containerPort: 80

EOF

```

To create this pod, save it to a file (e.g., `myapp-pod.yaml`) and apply it using:

```bash {"id":"01J82YTHEHH70ZG99ZCFBVCCND"}
kubectl apply -f myapp-pod.yaml
```

To delete resources defined by a YAML file:

```bash {"id":"01J82YTHEHH70ZG99ZCG7Z04AV"}
kubectl delete -f myapp-pod.yaml
```

## Working with Pods

### Running a Pod

You can run a pod manually using the following command:

```bash {"id":"01J82YTHEHH70ZG99ZCKDNGR11"}
kubectl run myapp --image=nginx
```

To check the logs of a running pod:

```bash {"id":"01J82YTHEHH70ZG99ZCPSWMDYR"}
kubectl logs <pod-name>
```

If the pod has multiple containers, specify the container:

```bash {"id":"01J82YTHEHH70ZG99ZCSEED9GA"}
kubectl logs <pod-name> -c <container-name>
```

Executing Commands Inside a Pod

To execute a command inside a running pod:

```bash {"id":"01J82YTHEHH70ZG99ZCTC6G9FR"}
kubectl exec -it <pod-name> -- /bin/bash
```

This gives you a shell session in the pod's container.

## Services and Exposing Pods

To expose your deployment as a service:

```bash {"id":"01J82YTHEHH70ZG99ZCXSV1YZ2"}
kubectl expose deployment nginx --type=LoadBalancer --port=80
```

You can also expose it using NodePort for testing purposes on your local machine:

```bash {"id":"01J82YTHEHH70ZG99ZCZKAAP4Z"}
kubectl expose deployment nginx --type=NodePort --port=80
```

To view your exposed services:

```bash {"id":"01J82YTHEHH70ZG99ZD308RHG3"}
kubectl get services
```

## Monitoring and Debugging

### Get Logs

To get logs from a pod:

```bash {"id":"01J82YTHEHH70ZG99ZD61WWJAJ"}
kubectl logs <pod-name>
```

### Debugging

If a pod crashes, inspect the last few logs:

```bash {"id":"01J82YTHEHH70ZG99ZD9C62XMK"}
kubectl logs <pod-name> --previous
```

### Check Resource Usage

To check CPU and memory usage of nodes and pods:

```bash {"id":"01J82YTHEHH70ZG99ZD9PPJZWT"}
kubectl top nodes
kubectl top pod
```
