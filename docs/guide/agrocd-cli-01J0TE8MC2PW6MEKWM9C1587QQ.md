---
runme:
  id: 01J0QP74QNFG58ANB2DYKDGEZ6
  version: v3
  document:
    relativePath: agrocd-cli.md
  session:
    id: 01J0TE8MC2PW6MEKWM9C1587QQ
    updated: 2024-06-21 10:19:44+01:00
---

# Advanced Guide to Argo CD and Runme

This guide provides an advanced tutorial on using Argo CD with the Runme extension in VS Code. Follow the steps to set up your environment, deploy applications, and manage them using Argo CD and Runme.

## **Prerequisites**[](ht*********************************************es)

To follow up on this tutorial, ensure you have the following:

### Basic Requirement

- Basic familiarity with YAML and Kubernetes resource definitions
- **Runme Extension**: Install the [Runme extension](ht**************************************************************me) in your VS Code editor and set it as your [default Markdown viewer](ht***********************************************************************************************er).

### Clone Our Repository

- **Clone Repository**: We have provided an example repository to help you follow this tutorial. You can clone the [repository here](ht************************************************************ve).

```sh {"id":"01J0TF9A888ZBTPEJZGRBPPCVW"}
git clone ht************************************************************ve

```

### Installation

Run the following commands to install the necessary tools and set up your environment:

```sh {"id":"01J0TF9A888ZBTPEJZGTBE987F"}
/bin/bash -c "$(curl -fsSL ht**************************************************************sh)"
brew install git
brew install kind
brew install docker
brew install argocd

```

The command above installs `brew` and `git,` creates a local Kubernetes Cluster using [kind](ht********************io/)

💡 For your kind cluster to run, you need to have docker running.

### Setting Up Your Cluster

```sh {"id":"01J0QP7HM4HB9NY43B10CQYNDK"}
kind create cluster --name runme-argocd
```

Checks whether the cluster is running and healthy.

```sh {"id":"01J0TG40SSNCDSW1A0F4Q0K87Y"}
kubectl cluster-info — context kind-runme-argocd
```

Check namespaces

```sh {"id":"01J0QPCQXAWZ0ZG837CEKH1CA1"}
kubectl get ns
```

Create a namespace

```sh {"id":"01J0QPDF85VJKWXB4SB4HTBJDF"}
kubectl create namespace argocd
```

Install Argo CD

```sh {"id":"01J0R7GVV6AH9639D5A0KH0CWR"}
kubectl apply -n argocd -f ht****************************************************************************ml
```

Get Argo CD Pods in the Argo CD namespace

```sh {"id":"01J0R7H9M56S007HYKPASR2639"}
kubectl get po -n argocd
```

![Agro CD pods](../../static/img/guide-page/runme-argo-pods.png)

Port Forward Argo CD Server

You can run your code cells as a [background process](../how-runme-works/vscode#background-processes)

```sh {"background":"true","id":"01J0R8FX97QQR7ME2DH3C54C6E"}
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

![Background process](../../static/img/guide-page/runme-background-agrocdcli.png)

Retrieve Initial Admin Password

```sh {"id":"01J0R8GGMCBAYYEMEG7K4WSE2Q"}
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | ba**64 --decode
```

## **Login to Argo CD CLI**

```sh {"id":"01J0V0PQ2TA2MC9A2JB92RGQPF"}
argocd login <ARGOCD_SERVER> --username admin --password <r****************d> --insecure
```

```sh {"id":"01J0R8H2WGKEHE1J2J8EYHBTW7"}
argocd login lo*****st:8080 --username admin --password kS************ZL --insecure

```

## **Deploy an Application Using Argo CD**

Create a Project (if you haven't already)

```sh {"id":"01J0R8JSF8RTE86JN7SXFQX4Y9"}
argocd proj create my-project
```

### Register a Repository

```sh {"id":"01J0RBRQ824D1SVC4X9Z4GXPMV"}
argocd repo add ht*****************************************it
```

(Add the flag `--username` myuser `--password` or SSH key if you're behind authentication.)

### Create an Application:

```sh {"id":"01J0REC9ZN15FP8XN1D4KCGMQD"}
argocd app create my-app \
--repo ht*************************************es  \
--path cloud-native/argocd /runme-app-repo/manifests \
--dest-server ht**************************vc \
--dest-namespace runme-app \
--project my-project
```

```sh {"id":"01J0TQAWCHF87ZDKPHKNCNFVR8"}
argocd app create guestbook --repo ht***********************************************it --path guestbook --dest-namespace default --dest-server ht**************************vc --directory-recurse
```

### Sync Application

```sh {"id":"01J0RECRAKE385EBM7R62GYF3N"}
argocd app sync guestbook
```

### Check Status

```sh {"id":"01J0REE4N5XT06VH48M2SV2ARC"}
argocd app get guestbook
```

## **CLI Operations**

## Argo CD History

To view the deployment history of your application, you can use the `argocd app history` command. This command provides a list of all the revisions that have been deployed, along with timestamps, commit messages, and other relevant details.

```bash {"id":"01J0TF9A888ZBTPEJZGVZRFF28"}
argocd app history guestbook
```

### **Argo CD Rollback**

Argo CD maintains a history of application deployments, allowing you to roll back to a previous state if needed. To list the history:

```sh {"id":"01J0TF9A888ZBTPEJZGZHDXGNZ"}
argocd app history guestbook
```

To rollback to a specific revision, use:

```sh {"id":"01J0TF9A888ZBTPEJZH14W89P0"}
argocd app rollback guestbook 1
```

Replace `<REVISION>` with the desired revision number from the history.

## Managing Repositories with Argo CD CLI

1. **Add a Repository**: Register a new public repository.

```sh {"id":"01J0TF9A888ZBTPEJZH2648SDC"}
argocd repo add ht*********************************it
```

2. **Update the Repository**: Change the repository URL and update authentication credentials.

```sh {"id":"01J0TF9A89KN0GBESXMNG6K3PR"}
argocd repo update ht*********************************it --url ht**************************************it
argocd repo update ht**************************************it --username newuser --password ne***ss
```

3. **Remove the Repository**: Unregister the repository when it's no longer needed.

```sh {"id":"01J0TF9A89KN0GBESXMR266BWR"}
argocd repo rm ht**************************************it
```

## Accessing Application Logs with Argo CD CLI

1. **View All Logs**: Start by viewing all logs for the application to get a broad overview.

```sh {"id":"01J0TF9A89KN0GBESXMTV8QV04"}
argocd app logs guestbook
```

2. **Filter by Pod**: Identify a specific pod that may be experiencing issues and view its logs.

```sh {"id":"01J0TF9A89KN0GBESXMW3Z0QT9"}
argocd app logs my-app --pod my************45
```

3. **Filter by Container**: Narrow down to the logs of a particular container within that pod.

```sh {"id":"01J0TF9A89KN0GBESXMZZX8W0D"}
argocd app logs my-app --pod my************45 --container my-container
```

4. **Stream Logs**: Continuously monitor the logs to observe real-time application behavior.

```sh {"id":"01J0TF9A89KN0GBESXN2BFXZB8"}
argocd app logs guestbook --follow
```

5. **Tail Specific Logs**: Retrieve and follow the last 100 lines of logs for a focused troubleshooting session.

```sh {"id":"01J0TF9A89KN0GBESXN30NM9WH"}
argocd app logs my-app --tail 100 --follow
```

## Customizing Argo CD

1. **Define an Application with CRD**: Create a YAML file for the application.

```sh {"id":"01J0TF9A89KN0GBESXN48STWQR"}
cat << EOF > sample-project.yaml
apiVersion: ar*******io/v1****a1
kind: Application
metadata:
  name: my-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: ht*****************************************it
    path: cloud-native
    targetRevision: HEAD
  destination:
    server: ht**************************vc
    namespace: default
  syncPolicy:
    automated:
      prune: true
      selfHeal: true

EOF

```

2. **Apply the Application CRD**:

```sh {"id":"01J0TF9A89KN0GBESXN5H4NFQ7"}
kubectl apply -f sample-project.yaml
```

3. **Configure a Plugin**: Add a custom plugin to `argocd-cm`.

```sh {"id":"01J0TF9A89KN0GBESXN61QE8VK"}
cat << EOF > runme-agrocd-cm.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: runme-argocd-cm
  namespace: argocd
data:
  configManagementPlugins: |
    - name: my-plugin
      init:
        command: ["/bin/sh", "-c"]
        args: ["echo initializing..."]
      generate:
        command: ["/bin/sh", "-c"]
        args: ["echo generating manifests..."]
EOF
```

4. **Apply the Plugin Configuration**:

```sh {"id":"01J0TF9A89KN0GBESXN7T1EEJ6"}
kubectl apply -f runme-agrocd-cm.yaml

```

5. **Define an Application Using the Plugin**:

```sh {"id":"01J0TF9A89KN0GBESXN817NCCD"}
cat << EOF > runme-agrocd-plugins.yaml
apiVersion: ar*******io/v1****a1
kind: Application
metadata:
  name: my-run-with-plugin
  namespace: argocd
spec:
  project: default
  source:
    repoURL: ht*****************************************it
    path: cloud-native
    plugin:
      name: my-plugin
  destination:
    server: ht**************************vc
    namespace: default
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
EOF

```

6. **Apply the Application Configuration**:

```sh {"id":"01J0TF9A89KN0GBESXN8Y7FDNQ"}
kubectl apply -f runme-agrocd-plugins.yaml
```

## Scaling and Performance Tuning

As Argo CD is increasingly adopted in large-scale environments, ensuring optimal performance and scalability becomes critical. Proper configuration and monitoring can significantly enhance Argo CD's efficiency, reliability, and responsiveness. This section covers strategies for optimizing Argo CD for large-scale deployments, performance monitoring, tuning tips, and setting up disaster recovery procedures.

### Optimizing Argo CD for Large-Scale Deployments

Large-scale deployments often involve managing hundreds or thousands of applications, which can place considerable demands on Argo CD. Here are key practices for optimizing Argo CD for such environments:

### Resource Allocation

Ensure that the Argo CD components (e.g., server, controller, repo server, and application controller) have adequate CPU and memory resources. This can be configured in the Helm chart or directly in the Kubernetes manifests.

Example Helm values:

```yaml {"id":"01J0TF9A89KN0GBESXNBNJ3KHW"}
controller:
  resources:
    requests:
      memory: "512Mi"
      cpu: "250m"
    limits:
      memory: "1Gi"
      cpu: "500m"
repoServer:
  resources:
    requests:
      memory: "256Mi"
      cpu: "125m"
    limits:
      memory: "512Mi"
      cpu: "250m"
server:
  resources:
    requests:
      memory: "256Mi"
      cpu: "125m"
    limits:
      memory: "512Mi"
      cpu: "250m"
```

### Repository Caching

Enable and configure repository caching to reduce the load on the repo server and speed up application syncing.

Example configuration:

```sh {"id":"01J0TF9A89KN0GBESXNBTG0ARH"}
cat << EOF > ru**********************ml
  data:
    repository.credentials: |
      - url: ht*********************************it
        cacheDuration: 30m
EOF
```

```sh {"id":"01J0X1GA9H2MJ4HTR6JX26RP3P"}
brew install yq
```

```sh {"id":"01J0TWDFWAA01HWKDDY8MAM2CP"}
yq eval-all 'select(fileIndex == 0) * select(fileIndex == 1)' agrocd-cm.yaml ru**********************ml > merged.yaml

```

Update `runme-agrocd-cm.yaml`

### Sharding Controllers

Distribute the workload by sharding the Argo CD controllers. This involves running multiple instances of the application controller, each responsible for a subset of applications.

Example configuration:

```yaml {"id":"01J0TX6F0V8DS3WQQ3CWW7JH4S"}
argocd-cm:
  data:
    application.instanceLabelKey: instance
```

```sh {"id":"01J0TF9A89KN0GBESXND4MJMWA"}
cat << EOF > runme-agrocd-shard-controllers.yaml
    application.instanceLabelKey: instance
EOF
```

Update `runme-agrocd-cm.yaml`

Label your applications to distribute them among controller instances:

```yaml {"id":"01J0TF9A89KN0GBESXNEC7FP0Q"}
kubectl label app my-app in**************e1
kubectl label app another-app in**************e2
```

### Performance Monitoring and Tuning Tips

Monitoring Argo CD's performance is crucial to identify bottlenecks and optimize the system. Here are some tips for effective monitoring and tuning:

### Metrics and Alerts

Enable Prometheus metrics to monitor the performance of Argo CD components. Use Grafana dashboards to visualize metrics and set up alerts for critical thresholds.

Example Prometheus configuration:

```yaml {"id":"01J0TF9A89KN0GBESXNH3ZAHW5"}
metrics:
  enabled: true
```

Create alerts in Prometheus:

```yaml {"id":"01J0TF9A89KN0GBESXNKTFJ7DE"}
groups:
  - name: argo-cd-alerts
    rules:
      - alert: HighCPUUsage
        expr: rate(container_cpu_usage_seconds_total{na*****ce="ar**cd"}[5m]) > 0.8
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High CPU usage on Argo CD components"
          description: "CPU usage is above 80% for more than 5 minutes."

```

### Log Aggregation

Use log aggregation tools like Elasticsearch, Fluentd, and Kibana (EFK) or Loki and Grafana to collect and analyze logs from Argo CD components. This helps in identifying issues and understanding system behavior.

Example Fluentd configuration:

```yaml {"id":"01J0TF9A89KN0GBESXNPAWMY2Y"}
<source>
  @type tail
  path /var/log/argocd/*.log
  pos_file /var/log/td-agent/argocd.log.pos
  tag argocd.*
  format none
</source>

<match argocd.**>
  @type elasticsearch
  host elasticsearch
  port 9200
  logstash_format true
</match>
```

### Setting Up Disaster Recovery Procedures

Having robust disaster recovery procedures is essential for ensuring business continuity and minimizing downtime. Here are key practices for setting up disaster recovery in Argo CD:

### Regular Backups

Regularly back up Argo CD configurations, including the Kubernetes manifests and Git repositories. Use tools like [Velero](ht*************io/) for Kubernetes backups and Git hooks or cron jobs for repository backups.

```sh {"id":"01J0TZFQFH1RJ0PKHBKQFJD10P","promptEnv":"yes"}
docker run -v ~/.kube:/home/argocd/.kube --rm quay.io/argoproj/argocd:$VERSION argocd admin export > backup.yaml
```

Import from a backup

```sh {"id":"01J0TZGNY9QJZYBD4F5PJ02YTP"}
docker run -i -v ~/.kube:/home/argocd/.kube --rm quay.io/argoproj/argocd:$VERSION argocd admin import - < backup.yaml
```

### High Availability

Configure Argo CD for high availability (HA) by running multiple replicas of its components and distributing them across different nodes and availability zones.

Example HA configuration in Helm:

```yaml {"id":"01J0TF9A89KN0GBESXNRRX7YSE"}
replicaCount: 3
```

Deploying with high availability ensures that Argo CD can continue operating even if some instances fail.

### Disaster Recovery Testing

Regularly test your disaster recovery procedures to ensure they work as expected. Simulate failures and validate that you can restore from backups and that your HA setup can handle node failures.

Example testing procedure:

1. Simulate a failure by stopping a node or deleting a pod.
2. Verify that the HA setup handles the failure and Argo CD remains operational.
3. Restore from a backup and verify that the system state is correct.
