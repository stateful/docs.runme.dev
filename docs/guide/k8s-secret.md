# **Securing and Automating Kubernetes Secrets with Runme and SOPS/Sealed Secrets**

As a DevOps or site reliability engineer, you have probably come across the need to store sensitive information such as API keys, passwords, and tokens within the Kubernetes cluster, and as such, you resorted to using Kubernetes secrets.

Handling sensitive information and keys in itself is a risk, most often as DevOps and SRE engineers you have probably had not only to handle but store sensitive data like API keys, passwords, or tokens within your Kubernetes cluster. If you're nodding along, then you're likely resorted to using Kubernetes secrets.

Before our sensitive information is stored as Kubernetes secrets, keeping them as plain text is a huge risk, as they could easily get compromised leading to data breaches or unauthorized access, so we need to encrypt them before deploying them to the cluster.

In this guide, we will walk you through how you can secure Kubernetes secrets and also automate this process to create a source of truth and save more time using Runme and SOPS/Sealed Secrets.

## What is Runme?

Runme is a tool that helps you to execute interactive runbooks using Markdown files. It offers an interactive and user-friendly platform to walk you through the process of making secret encryption effortless.

## **Why Choose Runme?**

### **1. User-Friendly Interactive Documentation:**

Runme Notebook transforms the learning process into an interactive adventure. You no longer need to worry about tedious text-based guides; as you can easily follow along and execute step-by-step.

### **2. Live Code Execution:**

Execute commands directly within the Runme Notebook environment. Witness the magic unfold in real time as you encrypt and decrypt secrets without switching between your terminal and documentation.

### **3. Visually Appealing:**

Embrace a visually appealing and clutter-free guide. Runme Notebook's clean interface enhances your learning experience, making it enjoyable and easy to digest.

### **4. Centralized Knowledge Hub:**

Runme Notebooks can function as your source of truth and execution ground. Runme serves as a centralized hub for all your documentation. Find everything related to securing Kubernetes secrets here.
