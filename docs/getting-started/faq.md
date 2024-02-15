---
sidebar_position: 11
title: FAQ
---

# Frequently Asked Questions

## **Runme and stateful**

Runme was developed by the venture-backed company Stateful, Inc. Runme ws built as an open source technology to to tackle the persistent issues of bitrot and outdated developer and operator documentation. Runme serves as an effective platform for running interactive runbooks in markdown files, supporting scripting and pipelines. We believe in open-source software and intend for Runme to continue to be offered as such to deliver a powerful solution to the community.

## **Does Runme work with other notebook formats?**

Currently, we are focused on using Markdown, which is widely used for documentation in various technologies. Runme stores configuration in a way that's like a more advanced version of markdown. This means your files will still work with regular markdown tools. While we do not have specific plans yet, we might create tools to help move from other notebook formats to Runme. This could be handy for teams trying to bring everything together and use open standards.

## **How do you plan to make money with Runme? Will you introduce paid enterprise or support plans, or consider monetizing user data?**

Currently, we don't have specific plans to charge for Runme as it's available under the open-source APL-2.0 license. Stateful, Inc., the company behind Runme, is initially focusing on building open technology to tackle issues with outdated developer documentation. We're committed to keeping Runme as an open-source solution, delivering powerful features to the community.

Our goal is to create a community around addressing documentation challenges and maintaining a trusted relationship with our users. We want to assure you that we won't monetize or sell users' data under any circumstances. Potential monetization opportunities may arise from providing additional value in terms of team collaboration, discoverability, or auditing features for companies using Runme with internal repositories. The core functionality of Runme, such as running runbooks, will remain available without the need for proprietary products from Runme, Stateful, or third parties.

## **What is Runme Default editor in Vscode?**

VSCode is one of Runme's client interfaces for running your markdown files. To use Runme in VSCode, you need to install the Runme Extension, which allows you to create and manage interactive runbooks directly within your code editor. With this extension, you can perform a range of runbook operations, such as editing, saving output, creating and updating documents, selecting custom interpreters and supported languages, debugging, and more—all integrated into your VSCode environment. Once you have installed the Runme VSCode extension, every markdown file in your code editor will automatically be displayed as a runbook.

## **What differentiates Runme from a common Jupyter Notebook?**

Runme is quite different from the common Jupyter Notebook in both features, client integration, usage, etc., Here are a few features that sets Runme apart:
Runme should execute cells written in many programming languages out of the box (see supported languages)
Runme notebooks/runbooks are being stored in 100%-compatible markdown
Runme kernel exposes services that produce consistent results regardless of what client (CLI, Extension, CI/CD) is being used
Runme aims to provide a great CLI and VS Code experience, including the web permutations
Runme fosters an ecosystem that aims to integrate with popular platforms & ISPs unlocking enhanced DX (workflow.yaml for example)
Runme is made for CI/CD (CLI/GH Action, docker images) to provide a test automation component to your development workflow

## **How Do I Share a Variable Between Cells in Runme?**

The non-block scope sharing feature in Runme prevents variables declared in one cell from being directly accessed in another cell. For instance, if you have two Python cells, you cannot declare a variable in one cell and use it in the other.
However, we have a technique called "Piping," which is declared using $__. This allows you to pass a variable declared in one cell to another cell within the same file. With this method, you can effectively share information between cells.

### **How to switch back from the Runme Notebook view to the markdown text document?**
You can easily switch between Runme's notebook UI and the standard markdown text editing experience. Read more on that in the Runme UX documentation.
