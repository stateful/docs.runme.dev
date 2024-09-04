---
runme:
  id: 01J6YWZ6PHZM16VX6EE5RBTQH5
  version: v3
---

# Dev containers - kargo

The **ContainerCraft DevContainer (CCIO)** is a user-friendly, DevOps-focused container designed to offer a consistent development environment tailored for DevOps practitioners. This container comes pre-configured with essential tools and configurations, ensuring you have everything you need for efficient DevOps workflows. Included by default are key utilities such as Runme, Kubernetes, Helm, Kubectl, K9s, Tmux, go, python, and more, making it easier to manage and deploy your infrastructure.

This guide will help you set up and use the `ContainerCraft/devcontainer` repository as your development environment with Runme. It also includes instructions for testing your own projects inside this container.

## Prerequisites

Ensure you have the following installed:

- **Git**: For cloning the repository.
- **Docker**: For building and running the container.
- **Visual Studio Code (VS Code)**: For opening and interacting with the dev container.
- **VS Code Remote - Containers extension**: To work with containers directly in VS Code.
- **Runme**: To run and manage your scripts directly within the dev container.

## Clone the Repository

Start by cloning the `ContainerCraft/devcontainer` repository to your local machine:

```bash {"id":"01J6YWZ6PHZM16VX6EE3JYY98Y"}
git clone https://github.com/ContainerCraft/devcontainer.git
cd devcontainer
```

## Open the Repository in VS Code

1. Open Visual Studio Code.
2. Use the command palette by pressing `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) and search for `Remote-Explorer: Focus on Dev Containers...`.


3. Select the folder where you cloned the repository.

## Rebuild and Open the Container

- VS Code should prompt you to reopen the folder in a container. If it doesn’t, open the command palette again and select `Remote-Explorer: Focus on Dev Containers...`.
- VS Code will build the Docker container defined in the `.devcontainer` folder and open the workspace inside the container once the build is complete.

## Test Your Project Inside the Dev Container

Your container environment is set up with pre-configured tools and config required for DevOps  including tools like Runme, Kubernetes, Helm, Kubectl, K9s, Tmux, python, go and more.  You can use these tools directly within the VS Code terminal, which runs inside the container.

**Add Your Project Files**:

- Copy your project files into the dev container workspace. You can do this by placing them in the cloned repository folder or by mounting an additional volume in the `devcontainer.json` file.

```jsx {"id":"01J6YWZ6PHZM16VX6EE3RR3QER"}
cp -r ~/my-project/* .
```

The command above copies your project the workspace

For this guide I will be building a simple go-app

You can add your project to the dev container repository

## Customize the Environment

If your project requires additional tools or dependencies:

- Edit the `Dockerfile` or `devcontainer.json` in the `.devcontainer` folder to include what’s needed.
- Rebuild the container to apply these customizations.

## Shutting Down the Container

When you’ve finished your work:

- Close the VS Code window, which will automatically stop the container.
- Your project files and changes will persist on your local machine.
