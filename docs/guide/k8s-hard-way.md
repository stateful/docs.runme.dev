---
runme:
  id: 01J2BKDAKAGY6M0XKDWDC8G863
  version: v3
---

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