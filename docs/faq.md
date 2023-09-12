---
sidebar_position: 10
title: FAQ
---

## What differentiates Runme from a common Jupyter Notebook?

- Runme should execute cells written in many programming languages out of the box (see [supported languages](/features#supported-interpreter))
- Runme notebooks/runbooks are being stored in 100%-compatible markdown
- Runme kernel exposes services that produces consistent results regardless of what client (CLI, Extension, CI/CD) is being used
- Runme aims to provide a great CLI and VS Code experience, including the web permutations
- Runme fosters an ecosystem that aims to integrate with popular platforms & ISPs unlocking enhanced DX (workflow.yaml for example)
- Runme is made for CI/CD (CLI/GH Action, docker images) to provide a test automation component to your development workflow

## Do you aim for compatibility with incumbent Notebook formats?

We currently don't plan to interop with other notebook formats (e.g. ipynb). We believe Markdown is ubiquitous for all things documentation across all tech stacks. Runme stores configuration as a valid superset of markdown which ensures files will continue to work with existing markdown viewers and tooling. While we don't have concrete plans, it's conceivable to provide tools to helps migrate from other notebook formats to Runme, for teams looking to consolidate their tools and leverage open standards to do so.

## How do you plan to sustain your business monetarily? Do you plan to introduce enterprise/support tier pricing or monetizing user data?

We don't have concrete plans to charge for Runme currently available under the open source APL-2.0 license. Runme is being developed by the venture-backed company [Stateful, Inc](https://stateful.com/) and have started with an unsolved problem, bitrot and out-dated developer/operator documentation, built open technology and are working our way up. The team believes in open source software and intends for Runme to continue to be offered as such to deliver a powerful solution to the community.

We are working to build a community around solving this docs/runbooks problem and intend to maintain that trust relationship with our users. We will not - under no circumstances - be monetizing selling users' data. We believe opportunties for monetization will likely come from offering value-add in terms of team management/collaboration, discoverability, or auditing for companies etc using Runme with internal repositories. Runme core will continue to provide core functionality such as executing runbooks without the need to use a proprietary product offered by Runme, Stateful, or third parties.
