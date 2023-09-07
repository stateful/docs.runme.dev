---
sidebar_position: 10
title: FAQ
---

## What differentiates Runme from a common Jupyter Notebook?

- Runme should execute cells written in many programming languages out of the box (see [supported languages](/features#supported-interpreter))
- Runme is committed to markdown as the format / standard
- The parser / execution engine should be a service that produces the same results regardless of where you are running code/commands
- Runme provides a great CLI and VS Code experience, including the web permutations
- Runme integrates with services and platforms that operators use to provide an enhanced DX (workflow.yaml for example)
- Runme is made for CI/CD (cli/action, docker img) to provide a test automation component to your development workflow

## Do you aim for compatibility with incumbent Notebook formats?

We don't currently have any plans to interop with other Notebook formats, we think that Markdown is the one true notebook format that works across all tech stacks. Runme stores configuration as a superset of markdown that makes sure that markdown files continue to work as intended anywhere they aren't being parsed by Runme. I can imagine a world where there is technology that helps migrate other notebook formats to runme, for teams that want to consolidate their tools to use one standard format for all their docs/runbooks.

## How do you plan to sustain your business monetarily? Do you plan to introduce enterprise/support tier pricing or monetising user data?

We don't have a concrete plan, we are a venture backed startup and have started with the technology and are working our way up. We do know that the open source runme code/project will not be monetized. We want to build a community around solving this docs/runbooks problem and intend to maintain that trust relationship with our users. We certainly will not be monetizing by selling users data. It seems likely that monetization will come from offering value add in terms of team collaboration, runbook discoverability or auditing for companies using Runme with private repositories. It will never be made a requirement to use a SaaS to use Runme to execute runbooks.
