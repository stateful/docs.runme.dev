---
runme:
  id: 01J1AM4C0T1S197M3R3MKPXFDB
  version: v3
title: Runme Cloud Renderers via Google Cloud
---

Runme introduces a Cloud Native Renderer tailored for integration with your Google Cloud resources directly from your interactive notebook, essentially functioning as a mission control dashboard. This allows seamless integration of Google Cloud Console views into your Runbook environment, providing a unified interface for managing your Kubernetes clusters. With Runme Cloud Renderers, you can:

- Effortlessly list, manage, and connect to your cloud instances
- Perform GKE management tasks within a single, unified interface
- Simplify your workflow by consolidating cloud operations
- Experience streamlined cloud resource management with Runme, making it easier than ever to handle your Google Cloud and GKE instances efficiently

## Prerequisites

1. **Install Google Cloud SDK**

To interact with Google Cloud resources, you need the Google Cloud SDK. This SDK provides the necessary tools and libraries.

via [homebrew](https://brew.sh/)

```sh {"id":"01J1ANGXDNJ462THYDNVPWZJTP"}
$ brew install --cask google-cloud-sdk
```

For Other platforms Consult [GCP's official docs](https://cloud.google.com/sdk/docs/install)

2. **Authenticate with Google Cloud**

After installing the SDK, you need to authenticate your account to gain access to your Google Cloud resources.

```sh {"id":"01J1CX6BXBBQ433QSKDNYDX3Q5"}
$ gcloud auth login
```

3. **Setup default credentials**

Setting up default application credentials allows your applications and tools to access your Google Cloud resources without requiring further authentication prompts.

```sh {"id":"01J1CX90BA6VECCBJAWSWA369W"}
gcloud auth application-default login
```

With Runme's cloud rendering capabilities, you can visualize your Google Cloud dashboard directly within your notebook. Follow the steps below to set up and use this feature.

# Google Compute Engine via Runme Native Cloud Renderer

With Runme's cloud rendering capabilities, you can visualize your Google Cloud dashboard directly within your notebook. Follow the steps below to set up and use this feature.

**Set Your Project ID Using an Environment Variable**

First, set your Google Cloud project ID using an [environment vairable](https://docs.runme.dev/getting-started/features#environment-variable-prompts). This allows you to specify the project you want to work with and visualize in your notebook

```sh {"id":"01J1AQK0KF874HAGT2HGYG3VFK"}
export PROJECT_ID="runme-ci"
echo "PROJECT_ID set to $PROJECT_ID"
```

**Specify the Project for Visualization**

To utilize this feature, simply paste a link from the console, specifying the desired project for visualization.

```sh {"id":"01J1CXFZ8AS8VS42KX85A1D7HK"}
https://console.cloud.google.com/compute/instances?project=$PROJECT_ID
```

Here, `runme-ci` is the project identifier.

When you visit this link, you'll be presented with a table displaying your Google Compute Engine instances, akin to the Google Cloud Console.

![alt text](../../../static/img/Integration/gce-dashboard.png)

## Managing Your Instances

When you access the visualized dashboard within your Runme notebook, you can easily manage your instances. Here are the available actions:

1. **Pause an Instance**

- Click on the pause icon next to the instance you want to pause.

![pause](../../../static/img/Integration/test-runme-cloud.png)

- An interface will appear asking if you want to suspend the instance.
- Click `Yes` or `No` to confirm your choice.

![pause rendering](../../../static/img/Integration/runme-suspend.png)

Outcome:

![pause an instance ](../../../static/img/Integration/runme-suspending-2.png)

2. **Start instance**

- Click the start button next to the instance you want to start.

![start](../../../static/img/Integration/test-runme-cloud.png)

- An interface will appear asking if you want to start the instance.
- Click "Yes" or "No" to proceed.

![start instance](../../../static/img/Integration/runme-start.png)

Outcome:

the instance is starting

![starting instance](../../../static/img/Integration/starting-runme.png)

the instance is up

![instance is up](../../../static/img/Integration/rume-up.png)

3. ***Stop an Instance**

- Click on the stop button next to the instance you want to stop.

![stop](../../../static/img/Integration/test-runme-cloud.png)

- An interface will pop up asking if you want to stop the instance.

![yes or no](../../../static/img/Integration/runme-stop.png)

- Click "Yes" or "No" to confirm your action.

![stop](../../../static/img/Integration/runme-cloud-stop.png)

The instance has stopped

![stop](../../../static/img/Integration/stop-cloud-render.png)

4. **SSH into an Instance**

- Click the SSH button next to the desired instance.
- An interface will ask if you want to SSH into the instance.

![ssh](../../../static/img/Integration/runme-ssh-render.png)

- Upon confirmation, another code block will pop up, allowing you to establish an SSH connection to the instance.

![ssh into instance](../../../static/img/Integration/runme-ssh-render-server.png)

## Working with Google Kubernetes Cluster

With Runme's cloud rendering capabilities, you can visualize your Google Cloud dashboard directly within your notebook. Follow the steps below to set up and use this feature.

## List clusters

To utilize this feature, simply paste a link from the console, specifying the desired project for visualization.

You'll be presented with a resources table akin to the Google Cloud interface, seamlessly integrated into your Runbook environment!

Run the following command (ensure you have provided a valid value for project-id)

```sh {"id":"01J1D05NR48FG1QYVD6RDF9KJ5"}
https://console.cloud.google.com/kubernetes/list/overview?project=project-id
```

![click up](../../../static/img/Integration/list-cluster.png)

click on actions the button

```sh {"background":"false","id":"01J1D07SGQ84ZH1GZSYYVGFTC3"}
https://console.cloud.google.com/kubernetes/clusters/details/europe-central2-a/rejekts/details?project=runme-ci
```

![test](../../../static/img/Integration/cluster-detail.png)

You can also paste a cluster details link:

```sh {"id":"01J1D71J5NS0NH2KJS39JHYYS5"}
https://console.cloud.google.com/kubernetes/clusters/details/[location]/[account]/details?project=[project]
```

replace `location` `account` and `project`
