---
runme:
  id: 01HGAP763P40ATQQN75RMGW6XJ
  version: v2.0
sidebar_position: 3
title: Archiving Feature
---

The Runme archiving feature is a tidy-up tool for users. It allows you to hide outputs generated from markdown cells to reduce clutter and preserve output for future reference. The archived files are securely stored in [Runme cloud](https://app.runme.dev/welcome) which can be accessible at any time.

On the Runme cloud, your data is encrypted both at rest and in transit, ensuring end-to-end security

## How To Use Archiving Feature

The archiving feature can be accessed through both the VS Code extension and the web interface. We will provide a quick walkthrough on using this feature on both platforms.

To make the most of the archiving feature on either client interface, it's important to have your output saved. You can save your output by enabling the Autosave feature for automatic saving or manually saving your work. See the [Autosave](https://docs.runme.dev/configuration/auto-save) guide for more information.

## Archiving via Web

As earlier mentioned, to archive an output it must first be saved. You can access your saved cells, by clicking on the "Share button" on your code block. A link will pop up to navigate you to the Runme Cloud Web interface.

> Please share link with caution as anyone with the link has access to your Runme Cloud storage. Click Open to toggle visibility.

### Initiating Archiving

1. Navigate to your saved cells and Click on the specific cell you wish to archive. 
2. Within the cell options, select the archive option.
3. You will see a popup stating whether you want to archive the cell or not. Click on the **Archive** button and the cell will be archived.

## Archiving via VS code Extension

To archive a cell using the VS code extension, first ensure your cell is saved. 


1. Access the saved cells you want to archive via VS code, Click on the Runme icon. A view will pop up to access the Runme Cloud.
2. Within the view, select the designated archive option.

   ![confirm-archving](../../static/img/Archiving-Runme-clouds.png)

3. Confirm the action to archive the cell.

![vscode-archiving](../../static/img/vscode-archiving.png)

## Un-Archiving

If you have previously archived a cell and wish to restore it to your active dashboard, you can easily un-archive it using the Runme Cloud web dashboard.

1. **Navigate to the Archived Cell**: Go to your dashboard and check on the **Archived** box. It will take you to the section where your archived cells are listed.
2. **Select the Cell to Un-archive**: Find the cell you wish to un-archive. Ensure you have selected the correct cell to avoid any unintended modifications.
3. **Initiate Un-archiving**: Click on the **Un-archive** button. This button is on the right-hand side of your dashboard.
4. **Confirm Un-archiving**: The feature will be restored to your active dashboard once confirmed.


## Delete a Cell Permanently

You can also delete a cell at any time. 

**Note:** This action is irreversible, once a cell is deleted it cannot be undone. To delete a cell, carry out the following:

1. **Select the cell to Delete**: Carefully choose the cell you intend to delete permanently. Double-check to ensure it is the correct one.
2. **Choose to Delete Permanently**: Click on the **Delete** option. This option is found alongside the un-archive button on the right-hand of your Runme Cloud web dashboard.
3. **Confirm Deletion**: A warning prompt will appear, asking you to confirm the permanent deletion. Once you confirm, the feature will be irreversibly removed from the archive and cannot be recovered.