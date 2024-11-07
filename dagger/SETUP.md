---
runme:
  id: 01JC47J0HS4KDB20J70M7BGE0A
  version: v3
---

# Getting started

Install Dagger and Google Cloud SDK:

```sh {"id":"01JC47JGZPDTZG7X7CGA75D7QK"}
brew install dagger google-cloud-sdk
```

Make sure you're logged into Google Cloud with your Application Default Credentials:

```sh {"id":"01JC47MNQCKFNSSQV97TD0672J"}
gcloud auth login
gcloud auth application-default login
```

Create a GCP project:

```sh {"id":"01JC47QPFTXMTRW8BDYJZYZXQE"}
export GOOGLE_CLOUD_PROJECT="owl-store-demo"
gcloud config set project $GOOGLE_CLOUD_PROJECT
```

```sh {"id":"01JC48855QXF9FJZ212BQNXZMV"}
gcloud projects create $GOOGLE_CLOUD_PROJECT --name="Owl Store Demo"
```

Enable services:

```sh {"id":"01JC47RW6PY49XZ8TYNGNYHF7G"}
gcloud services enable secretmanager.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com
```

Turn on billing.

```sh {"id":"01JC48EH8JP9AHJEPCET8R18CJ"}
gcloud artifacts repositories create runme-docs \
  --repository-format=docker \
  --location=us-central1 \
  --description="Docker for Runme Docs"
```

## Service Account

```sh {"id":"01JC47ZG7CMCZYFK9JEXS1HXDE"}
gcloud --project $GOOGLE_CLOUD_PROJECT iam service-accounts create docs-deployer --display-name="Account to deploy docs"
```

```sh {"id":"01JC481SQRND9M871G6ZQM4X8Q"}
gcloud projects add-iam-policy-binding $GOOGLE_CLOUD_PROJECT \
  --member="serviceAccount:docs-deployer@$GOOGLE_CLOUD_PROJECT.iam.gserviceaccount.com" \
  --role="roles/artifactregistry.createOnPushWriter" \
  --role="roles/iam.serviceAccountUser" \
  --role="roles/run.admin"
```

```sh {"id":"01JC48PAAYQ7KW56WADZV5F7MQ"}
gcloud iam service-accounts keys create key.json \
  --iam-account=docs-deployer@$GOOGLE_CLOUD_PROJECT.iam.gserviceaccount.com
```

## Create Entries in Secret Manager

```sh {"id":"01JC48Q5C34FBCHQX9R01ED9R5"}
gcloud secrets create "credentials" --replication-policy="automatic"
gcloud secrets versions add "credentials" --data-file=./key.json
gcloud secrets create "artifacts_repo" --replication-policy="automatic"
echo "runme-docs" | gcloud secrets versions add "artifacts_repo" --data-file=-
```