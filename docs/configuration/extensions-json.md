# Configuring `extensions.json`

To make it easy for your team to use Runme Notebooks in their VS Code environment, you can set up the `extensions.json` file in your project. This file allows you to recommend extensions for all users of the repository, ensuring a consistent development environment.

In this guide, we’ll walk through how to configure `extensions.json` to recommend the Runme extension.

## What is `extensions.json`?

The `.vscode/extensions.json` file is a workspace configuration file used by Visual Studio Code. It allows you to specify extension recommendations that your team can install to improve collaboration and productivity.

When a developer opens a workspace, VS Code will notify them of any recommended extensions they don’t already have installed. They can then install the suggested extensions with a single click.

## Why recommend the Runme extension?

Recommending the Runme extension makes it easier for your team to open, run, and collaborate on Notebooks in the repository. This ensures that anyone working in the project has access to the same tooling, allowing for a seamless experience.

### Steps to configure `extensions.json` for Runme

1. **Create or open the `.vscode/extensions.json` file**
   If it doesn’t already exist, you’ll need to create a `.vscode/` directory in the root of your project. Inside this directory, create an `extensions.json` file.

2. **Add Runme extension to recommendations**
   Open `extensions.json` and add the following JSON block to recommend the Runme extension:

   ```json
   {
     "recommendations": ["stateful.runme"]
   }
   ```

   This snippet tells VS Code to recommend the Runme extension to anyone who opens the workspace. The extension is identified by its unique identifier, `stateful.runme`.

3. **Save the file**
   Once you've added the recommendations, save the file.

### Example of a complete `extensions.json` file

Here’s what a complete `extensions.json` file might look like if you're recommending more than just the Runme extension:

```json
{
  "recommendations": [
    "stateful.runme",
    "ms-python.python", // Python extension
    "dbaeumer.vscode-eslint" // ESLint extension for linting JavaScript/TypeScript
  ]
}
```

### How it works

When a developer opens the workspace for the first time, VS Code will automatically check the `extensions.json` file and prompt the user to install any recommended extensions they don’t have. This ensures everyone is using the same tools, helping avoid discrepancies in the development environment.

## Benefits of using `extensions.json`

- **Consistency**: Ensures that all team members have access to the same extensions.
- **Efficiency**: Reduces the setup time for new developers joining the project.
- **Collaboration**: Provides a common set of tools for team members working on Notebooks with Runme.

By recommending the Runme extension via the `extensions.json` file, you create a consistent and efficient environment for your team to work with Runme Notebooks.

For more information on configuring VS Code workspaces, visit the [official VS Code documentation](https://code.visualstudio.com/docs/editor/workspaces#_extension-recommendations).
