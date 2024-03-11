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

