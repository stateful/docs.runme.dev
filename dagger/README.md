---
cwd: ..
runme:
  id: 01JBWW23ENADYZXX5KFGME12KR
terminalRows: 20
---

# The Docs, daggerized

See what functions are available in the `docs` module, and how to use them.

```sh {"id":"01JBW9KGZT5XE4B0G1Z8GK1239","terminalRows":"8"}
dagger functions
```

Inspect a local instance of the docs before deploying it to the cloud.

```sh {"background":"true","id":"01JBWGTT8R91VNCV1JSG8KF1K5","name":"serve-locally"}
dagger call --site . \
  serve \
  up
```

## Deploy a docs site preview

```sh {"id":"01JBWVFDXVDBBMRQAQA61NN6CB","name":"check","terminalRows":"3"}
echo "Deploying preview into \"${DOCS_GCP_PROJECT_ID}\" in \"${DOCS_GCP_REGION}\" from registry repo \"${DOCS_GCP_ARTIFACTS_REPO}\"."
```

This will deploy a preview of the docs site to the cloud.

```sh {"background":"false","id":"01JBWA2741XJE0KZZTGP7P1WKB","name":"DEPLOY_URL"}
dagger call --site . \
  deploy \
    --project="${DOCS_GCP_PROJECT_ID}" \
    --region="${DOCS_GCP_REGION}" \
    --repo="${DOCS_GCP_ARTIFACTS_REPO}" \
    --credentials="env:DOCS_GCP_CREDENTIALS"
```

```sh {"id":"01JBWV44M5ZJCAERKS9E5KP7RS","interactive":"true"}
echo "Opening ${DEPLOY_URL}"
open ${DEPLOY_URL}
```

## See what services are running

```sh {"id":"01JBX0HGR3DBKSC6PJM57845EK"}
https://console.cloud.google.com/run?project=${DOCS_GCP_PROJECT_ID}
```
