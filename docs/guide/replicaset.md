# How to Optimize Kubernetes Replicaset Using Runme

Runme provides a platform that allows you to create standardized procedures for configuring, deploying, and managing your everyday operational tools and resources.
Working with essential components like ReplicaSets ensures that operations are consistent across different environments. With Runme, you can optimize these operations right within your Markdown file!

This guide will show you a step-by-step guide to configure and deploy your Kubernetes ReplicaSets within your Runme Notebook.

## Prerequisites
To follow up on this tutorial, ensure you have the following:

- **Runme Extension**: Install the [Runme extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) in your VS Code editor and make it your [default Markdown viewer](https://docs.runme.dev/installation/installrunme#how-to-set-vs-code-as-your-default-markdown-viewer). Runme also provides other client interfaces where you can run your Markdown file. See the [Runme installation](../installation/index) guide.

- **Clone Repo**: We have provided an example repo to help you follow this tutorial. Clone the [repo here](https://github.com/stateful/blog-examples/tree/main/kubernetes/replicaset).

- **Require Packages**: Install the required packages (brew, kind, and kubectl) inside your Markdown file. *Runme allows you to achieve this! Simply run the command in the [prerequisite section](https://github.com/stateful/blog-examples/blob/main/kubernetes/replicaset/replicaset-mac.md#prerequisites) in the repo*.

To get started, we have already [created a ReplicaSet](https://github.com/stateful/blog-examples/blob/main/kubernetes/replicaset/manifest.yaml) using a YAML configuration file. Here, we will demonstrate how you can manage the deployment of the Replicaset with Kubernetes. But before we deploy the ReplicaSet to Kubernetes, let's apply functionalities to this file within your Runme cell.

## Configure your ReplicaSet for deployment in Runme

1. Apply ReplicaSet Configurations in Runme

In your cell, run the command below. This command instructs Kubernetes to create and update the resources specified in the YAML file. :

{img}

With this command, you can create the resources for ReplicaSets based on the definitions provided in the file.

However, if your `manifest.yaml` file does not exist in the same directory as your Markdown file, you can use [Runme’s cell working directory feature](../configuration/cell-level#cells-current-working-directory) to set its directory.

2.  Get Information About ReplicaSets

In your Runme notebook, you can retrieve information about your ReplicaSets. This is crucial for monitoring, troubleshooting, and managing your applications running on the cluster. To do this, run the command below in your Runme cell:

{img}

Once the command is executed, Runme returns a table with columns for the ReplicaSet name, desired replicas, current replicas, age, and selector.

3. Scale the Number of Replicas in a ReplicaSet

If you want to modify the desired number of replicas for the specified ReplicaSet, instructing Kubernetes to either create or terminate pods until the desired number is achieved, run the command below:

{img}

When the command is executed, Runme displays a confirmation message indicating that the ReplicaSet has been scaled.

4. Get Logs From a Specific Pod in a ReplicaSet

To follow the logs of a specific pod in real time, run the command below

{img}

When this command is executed, Runme returns logs about the specific Pod. This information can be used to debug or troubleshoot a pod.

## How to Manage ReplicaSets Using a Deployment in Runme

By using a Deployment, you delegate the management of ReplicaSets to Kubernetes and simplify the process of updating, scaling, and rolling back changes to your application. With Runme, you can write all these processes down in your Markdown file.

This section will walk you through the step-by-step process of managing ReplicaSets using a Deployment in Runme.

**Step One**: Deploy your application with Runme
You need to create a manifest file to deploy your application to your Kubernetes cluster. For the tutorial, we will be deploying an  [NGINX web server application](https://github.com/stateful/blog-examples/blob/main/kubernetes/replicaset/nginx-deployment.yaml). This Kubernetes manifest deploys our NGINX application into the "runme" namespace and specifies that it should manage a set of 5 identical Pods running the NGINX web server.

**Step Two**: Update the Manifest File

If you have scaled the number of pods in your cluster up or down and want this reflected in your manifest file, you need to update it. To do this, you need to update your deployment file to the specific number of pods you want running and reapply your Deployment file.

In your Runme Cell, run the command below.

{img}

This will update your deployment with the defined ReplicaSet.

**Step Three**: Delete a Pod

ReplicaSet ensures that the specified number of identical pods are running at all times, so if a pod gets deleted, the ReplicaSet automatically creates a replacement pod to maintain the desired replica count. To delete a pod, run the command below in your Runme cell, and you will see an output that is identical to the one generated in the image.

{img}

**Step Four**: View Kubernetes Events in your Runme terminal

In Kubernetes, events are records of various occurrences and state changes within your cluster. By leveraging Runme, you can easily view events of your ReplicaSets right in your Markdown file.

To view events in your ReplicaSet, run the command below.

{img}

**Step Five**: Get Logs From a Specific Pod in the ReplicaSet

You can get logs from a specific pod in your ReplicaSet. To get logs from a specific pod in the ReplicaSet, run the command below

(img)

This command can be useful for troubleshooting issues or monitoring the activity of a specific pod within your Kubernetes cluster.

We have successfully explored how to manage your ReplicaSets right in your Markdown file with Runme. There are other examples of how you can use Runme to handle your automation tasks and ensure standardized procedures for routine tasks. Explore the [guide page](https://docs.runme.dev/guide/) for other integration examples.