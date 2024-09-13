---
runme:
  id: 01HX525D9FNAVSGJXVF0W0FGW4
  version: v3
---

# Runme in a DevContainer

## **Creating your development container**

A development container, also known as a `DevContainer`, is a dockerized container that allows you to run your software in a fully configured development environment. This significantly speeds up application deployment and scalability.

Dev containers are highly preferred as they enable developers to run programs without configuring anything and with zero setup required.

For this guide, we will be using an already existing Python app. Feel free to clone this repository. To create a dev container, you need to:

```bash {"id":"01HZM4W2BHHGKFQJXNTQ5619DD"}
git clone https://github.com/stateful/blog-examples.git
cd blog-examples
cd devcontainer-guide

```

1. Install Visual Studio Code

If you haven’t installed this yet you should [install it now](https://code.visualstudio.com/).

2. Install the Dev Containers extension ( formerly called _Remote- Container extension_)

In your VS Code, navigate to the extension view by clicking on the **Extensions Icon** in the Activity bar on the side of the window. Search for **Dev Containers**  and install the extension.

![dev container installation](/img/guide-page/runme-dev-container.png)

3. In your VS Code project, create a Dev Container Configuration

On the bottom left of your Code editot, click the **Remote container** icon.

![remote icon](/img/remote-container-icon.png)

- When prompted on the new view that gets displayed, click on **Reopen in Container**.
- A new view will open to enable you to add dev container configuration files.
- In this view, search for your specified programming language and also add additional features you wish to install.
- Click **OK** to proceed.

Your system will first add the Dev container configuration files and start the Dev container configuration.

Once these steps are complete, your `.devcontainer`, `devcontainer.json`, and `.github` directories will be created, as displayed in the image below.

![runme-calculator](/img/guide-page/explorer.png)

4. Run Your App:

Run your app in the terminal depending on your script's programming language. This guide uses a Python app named `calculator.py` so we will run the following command

```bash {"id":"01HPF5MXD3HBWB5T32AAF6S9JF"}

python calculator.py

```

This will execute your Python app within the dev container.

![python app](/img/guide-page/terminal-runme.png)

**Note:**

1. Ensure Docker is open and running on your system before you create a Dev container.
2. You do not need to create a separate dockerfile for this as the base image and settings needed for your development environment are specified in the dev container configuration (`devcontainer.json`). This eliminates the need for explicit Dockerfile maintenance and makes it simple to share and replicate the development environment across several machines.

## **Setting up Runme on VSCode**

Installing Runme in your VS Code is one of the various ways you can utilize the awesome features of Runme. To set up Runme on VS Code, follow our [installation guide.](/installation/vscode)

## **Running development tasks using Runme within your container**

Runme works perfectly  to automate processes and conduct development operations within the container . To run your code with Runme in your dev container, follow the steps below:

- Create and open your **README.md** file in your VS Code.
- Click on the **+Code** icon and type in your code script.
- Click on the **Remote Container** icon on the bottom left of your VS Code.

![remote icon](/img/remote-container-icon.png)

Now a new view opens that prompts you to select and open a remote window.

- Click on **Dev container** or **Add dev container configuration files**
- Choose a dev container configuration based on your programming language. This guide uses a Python app, so the Python dev container will be used.
- Now choose the version you want and add any other features you want to install.
- Now click **OK**. Your container configuration gets added, and the container starts.

You will notice that your README.md file switches over to a normal Markdown setting.

You must take it back to a Runme setting to enable you to run your code with Runme in a Dev container. To do this,

- Go to the extensions page and search for Runme.
- Click on the Runme extension and click on the **Install in Dev container**

![install dev container](/img/guide-page/runme-dev-container-desktop.png)

- Once it is installed, go back to your README.md file, and you will see your code in Runme format.
- Click on **Select Cell Language Mode** and configure it to the programming language of your script.

![set shebang](/img/guide-page/runme-python-terminal.png)

- Now click the **Run** icon and view your output on the Runme terminal.

![ouput](/img/guide-page/runme-terminal-devcontainer.png)

## **Other Features**

Some other actions that can be performed in your Dev container include cloning repository, configuring container features, exploring a volume, etc. The image below shows you a non-exhaustive list of some of these actions.

![output dev container](/img/devcontainer-output.png)

## **Conclusion**

In this guide, we demonstrated how to create a dev container, set up Runme on VS Code, run development tasks using Runme within your container.

The development process is made more effective by the ability to automate processes and conduct development operations within the container using Runme.

By following the steps outlined in the guide, developers can greatly improve their workflow and concentrate more on creating scalable and effective software.
