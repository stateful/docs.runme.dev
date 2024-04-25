# How to Use Docker with Runme

As a system administrator or a DevOps engineer, one tool that comes in handy when trying to ensure consistency across different environments is Docker. Docker provides the necessary isolation and security and enables the portability of applications across platforms.

Integrating Runme with Docker can turn your documentation into interactive, executable environments. This combination enables the automation of tasks, command execution, and application deployment within isolated Docker containers. Using Runme to execute instructions from your documentation and Docker’s containerization creates an efficient workflow for development and deployment processes.

In this guide, we will explore how to use Docker in Runme using a simple kitchen analogy.

## **Prerequisites**

To get started, ensure you have the following:

- **Clone the repository**: We created a [notebook repo](https://github.com/stateful/blog-examples/tree/T-doc-notebook/docker-notebook) containing all the instructions and commands required for this guide.
- **Install Runme**: Install the [Runme extension on VS Code](https://marketplace.visualstudio.com/items?itemName=stateful.runme) and set it as your [default Markdown viewer.](https://docs.runme.dev/installation/installrunme#how-to-set-vs-code-as-your-default-markdown-viewer)

## **Integrating Runme with Docker**

You can pull an image directly from the Docker Hub registry or build a custom one. This guide will explore both options.

### Docker Pull

Runme, like a chef, executes documentation like cooking recipes. The command `docker pull` fetches recipe books (Docker images) from a library (Docker Hub). In the example below, we used the `docker pull` command to pull an `nginx` image from the Docker Hub.

```sh
docker pull <image_name>
```

image

### Docker Images

Docker images are like pre-packaged recipe books stored in your library. When you execute `docker images` , you browse through your collection of recipe books before cooking with Runme in your Docker kitchen.

### **List Images**

`docker images` list recipe books (images) stored in your library; each image is a set of instructions and ingredients (software). They're ready for your chef (Runme) to use. It's like taking inventory before cooking.

List all downloaded images:

```sh
docker images
```

### **Remove Images**

To remove a recipe book (image) from your library, run `docker rmi` command to delete a specific recipe book (image) from your collection

Remove an image:

```sh
docker rmi <image_name>
```

## Example Of Using Docker with Runme

## **Docker Build**

`Docker build` is like crafting a new recipe from scratch in our kitchen analogy. It involves creating a personalized cookbook (Dockerfile) with detailed instructions for preparing a unique dish (for this guide we built a Flask app). Executing `docker build` gathers ingredients and follows instructions to create a self-contained recipe (Docker image), ensuring consistency and reproducibility in the cooking process.

To build an image from a Dockerfile,  use the command below

```sh
docker build -t <image_name>:<tag> <path_to_Dockerfile>
```

images

images

Runme’s [background mode](../getting-started/features#background-task) allows you to run your tasks in the background.

![background mode](../../static/img/runme-background.png)

## Container Management in Docker

Container management, akin to overseeing a bustling kitchen, involves orchestrating and coordinating containers throughout their lifecycle. Like managing various cooking stations, container management entails administering, organizing, and supervising containers to ensure smooth operation and optimal performance.

In this section, we explore several commands for managing your containers

### Start a container

To start a container, use the command below

```sh
docker run <image_name>
```

image

### **List Containers**

To get a list of all running containers, use the command below

```sh
docker ps
```

To get a list of all containers (including stopped ones), use the command below

```sh
docker ps -a
```

### **Stop a Running Container**

To stop a running container, use the command below:

```sh
docker stop <container_id or container_name>
```

### **Remove**

To remove a container, use the command below:

```sh
docker rm <container_id or container_name>
```

### **Container Logs**

To view the logs of a container, use the command below:

```sh
docker logs <container_id or container_name>
```

### **Attach and Detach**

When you attach to a Docker container, you join the chef in the kitchen, allowing you to interact with them directly. You can observe the cooking process, provide instructions, or adjust as needed.

To attach to a running container, use the command below

```sh
docker attach <container_id or container_name>
```

### **Exec**

To execute a command inside a container, use the command below:

```sh
docker exec <container_id or container_name> <command>
```

Example:

```sh
docker exec composetest-redis-1 cat /etc/hosts
```

## Visual Representation of Integrating Docker into Runme

Here is a visual representation of some of commands discussed above and how they can be executed in your Runme cell.

video

The notebook is partition into sections, Instead for runnong each cell, you can run a couple of cells together.

## Docker run

`Docker run` is like Runme setting up a new kitchen based on a specific cookbook (Docker image). It initiates cooking within this isolated kitchen, executing commands according to the recipe. This command enables Runme to create controlled cooking environments for generating desired outcomes.

```bash
docker run <image_name>
```

### Volume Mapping

Volume mapping, akin to designated storage areas in a kitchen, connects host directories to containers for data persistence. Like organizing ingredients, it facilitates seamless data sharing between the host and container, crucial for maintaining data across container lifecycles.

Map a volume from the host to the container:

```bash
docker run -v <host_directory>:<container_directory> <image_name>
```

image

### Port Mapping

Port mapping, similar to setting up communication channels in a kitchen, facilitates interaction between the host machine and Docker containers. It ensures seamless exchange of data and commands, vital for smooth operation and collaboration between the host and containers.

Map a port from the host to the container:

```bash
docker run -p <host_port>:<container_port> <image_name>
```

images

Runme’s [background mode](../getting-started/features#background-task) allows you to run your tasks in the background.

## Docker compose

Docker Compose is a tool for defining and running multi-container Docker applications. It uses YAML files to configure the application’s services and performs the creation and start-up process of all the containers.

```sh
docker compose up
```
images

You can leverage Runme’s [background mode](https://docs.runme.dev/getting-started/features#background-task) to run your tasks in the background.

In this guide, we covered the basics of running Docker commands in Runme.

Runme has several features that make it a choice platform for integrating and using Docker. Some key features of Runme include

- The background mode makes it possible to run commands in the background.
- Autosave feature, which provides you with the opportunity to auto-save your outputs without manual intervention.
- You can run your Markdown file by cells, an entire document, or sections.

To explore more features of Runme and learn how they can be utilized in your workflows, visit our [documentation page](https://docs.runme.dev/).
