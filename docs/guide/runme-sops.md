## Installation of SOPS

To use SOPS for encrypting and decrypting secrets, follow these installation steps:

Step 1: Download SOPS Binary

```sh {"id":"01HRPH4T561JN9YEY0E8HA18NT"}
curl -LO https://github.com/getsops/sops/releases/download/v3.8.1/sops-v3.8.1.linux.amd64
```

Step 2: Move the Binary to Your PATH

```sh {"id":"01HRPK4WE1335ZCW3Y2ZMQEPHD"}
# Move the binary in to your PATH
mv sops-v3.8.1.linux.amd64 /usr/local/bin/sops
```

Step 3: Make the Binary Executable

```sh {"id":"01HRPK58XDH5EWKHDWWBEYHJZ8"}
# Make the binary executable
chmod +x /usr/local/bin/sops
```

## Configure SOPS

Configure SOPS with your key and preferred settings. In this example, we are using AWS KMS, learn how to create a [KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html)

```sh {"id":"01HRPM35EMN7V408S5SDM9EYYB"}
echo "creation_rules
  - kms: arn:aws:kms:us-east-1:001301279896:alias/{alias}" > ~/.sops.yaml
```

`kms: arn:aws:kms:{region}:{account-id}:alias/{alias}`

Verify the configuration by checking the contents of ~/.sops.yaml

```sh {"id":"01HRPKXCS6QA9EGDNH62FBZ4WE"}
cat ~/.sops.yaml
```

## Encrypt Your Secrets

Encrypt your secrets using SOPS with AWS KMS.

```sh {"id":"01HRPH2EZKWS5XEB602NGEH6D2"}
sops --encrypt --kms arn:aws:kms:us-east-1:001301279896:key/b3f4dd5b-a217-46b5-aef2-152fa66be8f4 --encryption-context Role:sops-runme-kms-role --encrypted-regex password runme-secrets.yaml > runme-secrets-enc.yaml
```

## Decrypt Your Secrets

Retrieve and decrypt your secrets when needed.

```sh {"id":"01HRPH01R31A3305NE6ZZ4NN3R"}
kubectl get secret sops-runme -n test -o jsonpath="{.data.password}” | base64 --decode
```

```sh {"id":"01HRPGWZWFZD34EPD6AGBGEBWB"}
sops --decrypt --kms arn:aws:kms:us-east-1:001301279896:key/b3f4dd5b-a217-46b5-aef2-152fa66be8f4 --encryption-context Role:sops-runme-kms-role --encrypted-regex password runme-secrets-enc.yaml > runme-secrets.yaml
```

Ensure to replace placeholders such as {region}, {account-id}, and {alias} with your actual AWS region, account ID, and alias. Customize the encryption and decryption commands based on your specific use case.

# Apply Encrypted secret

**Warning**: It's not advise to deploy the file directly, it should be part of your IAC or CI/CD process

```sh {"id":"01HRPNF4Z5ZHDZ6XEH8XC70TQN"}
sops -d runme-secrets-enc.yaml | kubectl apply -f -
```
