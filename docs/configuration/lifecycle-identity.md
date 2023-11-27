---
runme:
  id: 01HFY0VFSB5F1PF7C28BW2YSVT
  version: v2.0
sidebar_position: 5
title: Lifecycle Identity in Runme
---


Runmen introduces a powerful new feature known as Lifecycle Identity. This feature assigns unique identifiers and versions to either a cell or your entire markdown file. By adding a lifecycle identity, you can track changes, versions and the history of your documents.  Stay organized and in control of your files within Runme! 🚀

### Configuration

To activate the Lifecycle Identity feature in Runme, follow these steps:

* Access Runme Extension Settings On the **Runme Runs Markdown** extension, click on the “settings” icon and select “Extension Settings”. The Runme Runs Markdown extension can be found in the extension toolbar at the left side on your screen.

* **Select the Tracking Level**:  Navigate to the “Lifecycle Identity” feature and select the document you wish to enable lifecycle identity tracking.

![lifecycle](../../static/img/lifecycle-identity1.png)

As shown in the image above, there are three levels of tracking available:

* Cell level: Tracks changes within each individual cell in a document.
* Document level: Monitors the entire document for any modifications or version changes.
* All: Track changes made to both cell and document levels.

### Usage

Once the Lifecycle Identity has been configured, it will add the following metadata to your markdown file :

`id`: The unique Identifier that represents the specific instance of your document or cell.

`version`: The current version number of your document or cell, which can be incremented as changes are made.

Here is an sample of what the lifecycle identity on your file:

```sh {"id":"01HFYHDGTT1BNMZD3CBCKHQGG0"}
runme:
  id: 01HFY0VFSB5F1PF7C28BW2YSVT
  version: v2.0
```

**Note**:
The changes will apply on each reload of the document or cell. Ensure that each document or cell has a unique identifier to avoid conflicts..
