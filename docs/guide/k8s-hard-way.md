---
runme:
  id: 01J2BKDAKAGY6M0XKDWDC8G863
  version: v3
---

Provisioning Compute Resources

### Create Jumpbox

```sh {"id":"01J2EFYQDQGF2JKSNXETZH4WDX"}
gcloud compute instances create jumpbox \
    --project=runme-ci \
    --zone=us-central1-a \
    --machine-type=t2a-standard-1 \
    --network-interface=network-tier=PREMIUM,nic-type=GVNIC,stack-type=IPV4_ONLY,subnet=default \
    --maintenance-policy=MIGRATE \
    --provisioning-model=STANDARD \
    --create-disk=auto-delete=yes,boot=yes,device-name=server,image=projects/debian-cloud/global/images/debian-12-bookworm-arm64-v20240709,mode=rw,size=10,type=projects/runme-ci/zones/us-central1-a/diskTypes/pd-balanced \
    --no-shielded-secure-boot \
    --shielded-vtpm \
    --shielded-integrity-monitoring \
    --labels=goog-ec-src=vm_add-gcloud \
    --reservation-affinity=any
```

### Create Server

```sh {"id":"01J2EFJ0RSNRV3G243XD2A1554"}
gcloud compute instances create server \
    --project=runme-ci \
    --zone=us-central1-a \
    --machine-type=t2a-standard-1 \
    --network-interface=network-tier=PREMIUM,nic-type=GVNIC,stack-type=IPV4_ONLY,subnet=default \
    --maintenance-policy=MIGRATE \
    --provisioning-model=STANDARD \
    --create-disk=auto-delete=yes,boot=yes,device-name=server,image=projects/debian-cloud/global/images/debian-12-bookworm-arm64-v20240709,mode=rw,size=20,type=projects/runme-ci/zones/us-central1-a/diskTypes/pd-balanced \
    --no-shielded-secure-boot \
    --shielded-vtpm \
    --shielded-integrity-monitoring \
    --labels=goog-ec-src=vm_add-gcloud \
    --reservation-affinity=any
```

### Create Node-0

```sh {"background":"true","id":"01J2EFXEKG9XY2ADRRB4AHPNMN"}
gcloud compute instances create node-0 \
    --project=runme-ci \
    --zone=us-central1-a \
    --machine-type=t2a-standard-1 \
    --network-interface=network-tier=PREMIUM,nic-type=GVNIC,stack-type=IPV4_ONLY,subnet=default \
    --maintenance-policy=MIGRATE \
    --provisioning-model=STANDARD \
    --create-disk=auto-delete=yes,boot=yes,device-name=server,image=projects/debian-cloud/global/images/debian-12-bookworm-arm64-v20240709,mode=rw,size=20,type=projects/runme-ci/zones/us-central1-a/diskTypes/pd-balanced \
    --no-shielded-secure-boot \
    --shielded-vtpm \
    --shielded-integrity-monitoring \
    --labels=goog-ec-src=vm_add-gcloud \
    --reservation-affinity=any
```

### Create Node-1

```sh {"background":"true","id":"01J2EFWVT10CPYT8V7QZEV152P"}
gcloud compute instances create node-1 \
    --project=runme-ci \
    --zone=us-central1-a \
    --machine-type=t2a-standard-1 \
    --network-interface=network-tier=PREMIUM,nic-type=GVNIC,stack-type=IPV4_ONLY,subnet=default \
    --maintenance-policy=MIGRATE \
    --provisioning-model=STANDARD \
    --create-disk=auto-delete=yes,boot=yes,device-name=server,image=projects/debian-cloud/global/images/debian-12-bookworm-arm64-v20240709,mode=rw,size=20,type=projects/runme-ci/zones/us-central1-a/diskTypes/pd-balanced \
    --no-shielded-secure-boot \
    --shielded-vtpm \
    --shielded-integrity-monitoring \
    --labels=goog-ec-src=vm_add-gcloud \
    --reservation-affinity=any
```

```sh {"id":"01J2EFJX6T90E5QYS2WEHQ1936"}
export PROJECT_ID="runme-ci"
echo "PROJECT_ID set to $PROJECT_ID"
```

```sh {"id":"01J2EFJNGW4265DRWR2N90JJXJ"}
https://console.cloud.google.com/compute/instances?project=$PROJECT_ID
```

### Set Up The Jumpbox

This machine will be used to run commands in this tutorial. 

```sh {"id":"01J2EM0SF9EN8T7W99ZHKBCH6E"}
https://console.cloud.google.com/compute/instances?project=$PROJECT_ID
```

```sh {"background":"true","id":"01J2EM21QGX57JX6PMTV6B3B5E"}
echo "Connecting to instance via SSH..."
gcloud compute ssh --zone "us-central1-a" "jumpbox" --project "runme-ci"
```

click on the jumpbox ssh, to ssh into the server

login as root user

**Install Command Line Utilities**

Now that you are logged into the jumpbox machine as the root user, you will install the command line utilities that will be used to preform various tasks throughout the tutorial.

```ini {"id":"01J2EM5J43MZHAMQ0AA1H72YHV"}
apt-get -y install wget curl vim openssl git
```

**Sync GitHub Repository** 

Now it's time to download a copy of this tutorial which contains the configuration files and templates that will be used build your Kubernetes cluster from the ground up. Clone the Kubernetes The Hard Way git repository using the git command:

```ini {"id":"01J2EM8T4Q7W0995182EE2BR9G"}
git clone --depth 1 \
  https://github.com/kelseyhightower/kubernetes-the-hard-way.git
```

Change into the kubernetes-the-hard-way directory:

```ini {"id":"01J2EMA7CRMYFDAW30DCFDN156"}
cd kubernetes-the-hard-way
```

**Download Binaries**

From the kubernetes-the-hard-way directory create a downloads directory using the mkdir command:

```ini {"id":"01J2EMK3YQ9VYXAGGZQQEB5TQ0"}
mkdir downloads
```

The binaries that will be downloaded are listed in the downloads.txt file, which you can review using the cat command:

```ini {"id":"01J2EMM377W7160DAANPDV8EXF"}
cat downloads.txt
```

Download the binaries listed in the downloads.txt file using the wget command:

wget -q --show-progress \
  --https-only \
  --timestamping \
  -P downloads \
  -i downloads.txt

Depending on your internet connection speed it may take a while to download the `584` megabytes of binaries, and once the download is complete, you can list them using the `ls` command:

```ini {"id":"01J2EN8NR5VJ0G252016RKNVP5"}
ls -loh downloads
```

**Install kubectl**

In this section you will install the kubectl, the official Kubernetes client command line tool, on the jumpbox machine. `kubectl will be used to interact with the Kubernetes control once your cluster is provisioned later in this tutorial.

Use the chmod command to make the kubectl binary executable and move it to the /usr/local/bin/ directory:

```ini {"id":"01J2ENKDWTGXM84GVA6D47F41M"}
chmod +x downloads/kubectl
cp downloads/kubectl /usr/local/bin/
```

Configure networking between your machines. Ensure each node can communicate with the others via both private and public IP addresses.
TLS Bootstrapping

Generate TLS certificates for Kubernetes components using cfssl.
Distribute these certificates securely to each component.
Setting Up Kubernetes Configuration Files

Create configuration files (kubeconfig) for each Kubernetes component (kube-apiserver, kube-controller-manager, kube-scheduler).
Deploying the Kubernetes API Server

Configure and deploy the Kubernetes API server. This includes setting flags and ensuring it’s accessible.
Setting Up the Kubernetes Controller Manager

Configure and deploy the Kubernetes controller manager, ensuring it connects to the API server securely.
Deploying the Kubernetes Scheduler

Configure and deploy the Kubernetes scheduler, ensuring it connects to the API server securely.
Setting Up Kubernetes Worker Nodes

Configure worker nodes, including installing necessary software (kubelet and kube-proxy) and generating kubeconfig files for authentication.
Deploying Pod Networking

Set up a pod network using a network plugin like Calico or Flannel. This enables communication between pods across nodes.
Deploying DNS Add-On

Deploy a DNS add-on (CoreDNS or kube-dns) to enable service discovery within the cluster.
Smoke Test

Perform a smoke test to ensure your Kubernetes cluster is functioning correctly. This includes deploying a sample application and verifying its accessibility.
Cleaning Up

Once everything is confirmed to be working, clean up temporary files and configurations used during the setup.

```sh {"id":"01J2BNYA17S1XXGDTYW4ZKRDN0"}
export PROJECT_ID="runme-ci"
echo "PROJECT_ID set to $PROJECT_ID"
```

```sh {"id":"01J2BS41AXRX67RZKRBQAZZM5J"}
gcloud compute instances create arm-vm \
  --project=runme-ci \
  --zone=us-central1-a \
  --machine-type=t2a-standard-1 \
  --image=custom-debian-12-arm64 \
  --image-project=runme-ci \
  --network-interface=nic-type=GVNIC

```

```sh {"id":"01J2BNYKYNG8ASTRNNHB55X5V6"}
https://console.cloud.google.com/compute/instances?project=$PROJECT_ID
```

```sh {"background":"true","id":"01J2BZQMS4FDBT6JH7Z1SX35XA"}
echo "Connecting to instance via SSH..."
gcloud compute ssh --zone "us-central1-a" "instance-20240709-145129" --project "runme-ci"
```

```sh {"background":"true","id":"01J2BRTRGF1WW3Y3SX8ERQJ405"}
echo "Connecting to instance via SSH..."
gcloud compute ssh --zone "us-central1-a" "jumpbox" --project "runme-ci"
```

```sh {"id":"01J2BYVKCD1Y9GS63D47C0RY43"}
gcloud compute instances create arm-vm \
  --project=runme-ci \
  --zone=us-central1-a \
  --machine-type=t2a-standard-1 \
  --image=debian-12-arm64 \
  --image-project=runme-ci \
  --network-interface=nic-type=GVNIC

```

```sh {"id":"01J2EDBVQD6K4BN2F7CGXX1186"}
gcloud compute instances create jumpbox \
    --project=runme-ci \
    --image-family=debian-12 \
    --image-project=debian-cloud \
    --zone=us-central1-a \
    --machine-type=t2a-standard-1 \
    --boot-disk-size=10GB
```

```sh {"id":"01J2EDRXW24KPSCD85YXNHSNDV"}
gcloud compute instances create instance-20240710-133248 --project=runme-ci --zone=us-central1-a --machine-type=t2a-standard-1 --network-interface=network-tier=PREMIUM,nic-type=GVNIC,stack-type=IPV4_ONLY,subnet=default --maintenance-policy=MIGRATE --provisioning-model=STANDARD --service-account=502190750506-compute@developer.gserviceaccount.com --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append --create-disk=auto-delete=yes,boot=yes,device-name=instance-20240710-133248,image=projects/debian-cloud/global/images/debian-12-bookworm-arm64-v20240709,mode=rw,size=10,type=projects/runme-ci/zones/us-central1-a/diskTypes/pd-balanced --no-shielded-secure-boot --shielded-vtpm --shielded-integrity-monitoring --labels=goog-ec-src=vm_add-gcloud --reservation-affinity=any
```

```sh {"id":"01J2EE7H170GHD2717ZP89YXT7"}
gcloud compute instances create jumpbox \
    --project=runme-ci \
    --image-family=debian-12 \
    --image-project=debian-cloud \
    --zone=us-central1-a \
    --machine-type=e2-standard-2 \
    --boot-disk-size=10GB \
    --boot-disk-type=pd-balanced \
    --boot-disk-device-name=jumpbox-arm

```

```sh {"id":"01J2EEBANGNC6MHCRCXN6RNSW8"}
gcloud compute instances create server \
    --project=runme-ci \
    --zone=us-central1-a \
    --machine-type=t2a-standard-1 \
    --network-interface=network-tier=PREMIUM,nic-type=GVNIC,stack-type=IPV4_ONLY,subnet=default \
    --maintenance-policy=MIGRATE \
    --provisioning-model=STANDARD \
    --create-disk=auto-delete=yes,boot=yes,device-name=server,image=projects/debian-cloud/global/images/debian-12-bookworm-arm64-v20240709,mode=rw,size=20,type=projects/runme-ci/zones/us-central1-a/diskTypes/pd-balanced \
    --no-shielded-secure-boot \
    --shielded-vtpm \
    --shielded-integrity-monitoring \
    --labels=goog-ec-src=vm_add-gcloud \
    --reservation-affinity=any
```

```sh {"id":"01J2EE8Z2HZEK7H7FVQP8MV983"}
https://console.cloud.google.com/compute/instances?project=$PROJECT_ID
```

```sh {"background":"true","id":"01J2EFGMNGV1H7YSWT9TP0VA1R"}
echo "Connecting to instance via SSH..."
gcloud compute ssh --zone "us-central1-a" "server" --project "runme-ci"
```
