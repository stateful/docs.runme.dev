# Notebook file extensions

Runme provides a seamless experience for running Notebooks directly from Markdown files. This guide walks you through how to use Runme with various file extensions and how to set it up in your VS Code environment for better file management and collaboration with your team.

## Markdown compatibility out of the box

By default, Runme is compatible with standard Markdown files (.md). This means that without any additional configuration, you can open and run Notebooks written purely in Markdown format (text and commands).

When you install the [Runme VS Code extension](/installation/vscode), Runme will set itself as the default viewer for `.md` files. However, if you want to keep Markdown files intended for Notebooks separate from regular documentation in your repository, Runme also supports other file extensions.

## Using different file extensions for Notebooks

To organize your repository and make it clear which Markdown files are meant to be used as Notebooks, you can use different file extensions. For example, you can create a `notebooks/` directory and store your Notebook files there using one of the supported extensions.

### Supported file extensions

- **.md** – Standard Markdown.
- **.mdx** – Used for Markdown files with embedded JSX (find out more about how to handle MDX files in your repo).
- **.mdi** – Markdown Interactive, indicating the file contains commands intended for interactive execution.
- **.mdr** – Markdown Runnable, a format specifically indicating that the file is runnable by Runme.
- **.run** – Files intended to be run directly, although be cautious as this extension may conflict with Linux binary packages or other `.run` file usages.
- **.runme** – A clear indication that the file is specifically a Runme Notebook.

### How to choose the right extension

For standard Markdown files, `.md` works great, but when you want to indicate that the file should be consumed as a Notebook, consider using one of the other extensions. For example, `.runme` is a clear choice for files meant to be opened and run in Runme.

You can configure your VS Code setup to ensure the correct files open with Runme by default. This setup ensures regular Markdown files are handled differently from Runme Notebooks.

## Setting up file handling in VS Code

To make sure that `.md` files that are not meant for Notebooks open as regular Markdown files while other Notebook files open with Runme, follow these steps:

1. Open your VS Code settings.
2. Go to the `Files: Associations` section.
3. Configure the default file handler for each file extension:
   - `.md` – standard Markdown viewer.
   - `.runme`, `.mdi`, `.mdr`, etc. – Runme Notebook viewer.

Alternatively, you can always right-click on a file and select which viewer to use.

## Sharing the setup with your team

To ensure your team also benefits from this setup, you can recommend adding the following configuration to their project's `.vscode/extensions.json` file:

```json
{
  "recommendations": ["stateful.runme"]
}
```

This will prompt team members to install the Runme extension, making collaboration easier and more seamless.

For more details on how to configure this file, see [this guide](/configuration/extensions-json).

By following this setup, you'll ensure that your Notebooks are organized, clearly defined, and easy to manage across your team.
