## Installation of SOPS

To use SOPS for encrypting and decrypting secrets, follow these installation steps:


Step 1: Download SOPS Binary

```sh {"id":"01HRQ889ED4XMYJ854F19AH21E"}
curl -LO https://github.com/getsops/sops/releases/download/v3.8.1/sops-v3.8.1.linux.amd64
```

Step 2: Move the Binary to Your PATH

```sh {"id":"01HRQ88TT2RK0AX08N30BWK3PR"}
# Move the binary in to your PATH
mv sops-v3.8.1.linux.amd64 /usr/local/bin/sops
```

Step 3: Make the Binary Executable

```sh {"id":"01HRQ894MN8TG1YM7CCPC0R9DT"}
# Make the binary executable
chmod +x /usr/local/bin/sops
```

## Configure SOPS


Configure SOPS with your key and preferred settings. In this example, we are using AWS KMS, learn how to create a [KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html)

```sh {"id":"01HRQ8AFJBJVENQ3NB8RM29H2J"}
echo "creation_rules
  - kms: arn:aws:kms:us-east-1:001301279896:alias/test" > ~/.sops.yaml
```

Verify the configuration by checking the contents of ~/.sops.yaml

```sh {"id":"01HRQ8B3AKVMS82K79TX1Y94BP"}
cat ~/.sops.yaml
```

## Encrypt Your Secrets

Encrypt your secrets using SOPS with AWS KMS.

```sh {"id":"01HRQ8C1D77PYW52WETXV5C50K"}
sops --encrypt --kms arn:aws:kms:us-east-1:001301279896:key/b3f4dd5b-a217-46b5-aef2-152fa66be8f4 --encryption-context Role:sops-runme-kms-role --encrypted-regex password runme-secrets.yaml > runme-secrets-enc.yaml
```

## Decrypt Your Secrets

Retrieve and decrypt your secrets when needed.

```sh {"id":"01HRQ8D0KD158MVP57BR61D2X0"}
kubectl get secret sops-runme -n test -o jsonpath="{.data.password}” | base64 --decode
```

```sh {"id":"01HRQ8DDRA2FC1NBCSFQ08RQJX"}
sops --decrypt --kms arn:aws:kms:us-east-1:001301279896:key/b3f4dd5b-a217-46b5-aef2-152fa66be8f4 --encryption-context Role:sops-runme-kms-role --encrypted-regex password runme-secrets-enc.yaml > runme-secrets.yaml
```

Ensure to replace placeholders such as {region}, {account-id}, and {alias} with your actual AWS region, account ID, and alias. Customize the encryption and decryption commands based on your specific use case.

# Apply Encrypted secret

**Warning**: It's not advise to deploy the file directly, it should be part of your IAC or CI/CD process

```sh {"id":"01HRQ8EGJ9NGKPQ8NZDBKXWJ8R"}
sops -d runme-secrets-enc.yaml | kubectl apply -f -
```
