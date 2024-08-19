---
sidebar_position: 2
title: Why Runme?
---

# **Why Runme?**

<RunmeStars /><br /><br />

Runme makes runbooks actually runnable, making it easy to complete step-by-step instructions. Runme is Cloud-native Shell Kernel with a notebook, editor, terminal, and CLI interface. Its design makes Runme an excellent solution for runbooks, playbooks, and documentation (in a "literate environment" as notebooks) which require users to complete runnable steps incrementally—making operational docs reliable and less likely to become outdated.

## **Built on Open Technologies & Standards**

Runme is 100% markdown compatible, open source licensed under Apache 2.0, and combines following open technologies to overcome the fault lines between Editor, Browser, and Terminal:

- Markdown which is already ubiquitous for documentation
- Devcontainers for reproducible development environments using existing container supply chains
- Webcomponents for notebook renderers for integrated terminals, cloud resources, and human-friendly display of various media types (csv, images, etc.)
- Built on the VS Code platform to run everywhere including VS Code, CDEs (Codespaces, Gitpod, Google IDX & Cloud Editor), and SSH jumphosts
- OpenTelemetry to emit traces into your existing observability stack

## **DevOps Workflows That Run Reliably** 👩‍💻

Using notebook-based technology in a "literate environment" (interleave words and code unlocking their respective strength), users can execute instructions, check intermediate results, and ensure the desired outputs match expectations to complete the steps confidently. Authors, on the other hand, can define reliable paths for operational tasks, steps it takes to diagnose problems, or remedies to resolve problems and effectively share them with teammates.

In a nutshell, Runme combines the guardrails of a pipeline with the flexibility of scripting, where users can check intermediary results before moving on. Much like a terminal session, environment variables are retained across execution, and it is possible to reference previous cell outputs in subsequent cells.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/Key-feature-v2.mp4" type="video/mp4" />
  <source src="../static/videos/Key-feature-v2.mp4" type="video/mp4" />
  <source src="/videos/Key-feature-v2.webm" type="video/webm" />
  <source src="../static/videos/Key-feature-v2.webm" type="video/webm" />
</video>

<br />
<Infobox type="sidenote" title="Try it now">

Learn how to install Runme and [get started](https://docs.runme.dev/getting-started/runbyexample).

</Infobox>

## **What is Runme?**

<RunmeStars /><br /><br />

Runme is Cloud-native Shell Kernel with a notebook, editor, terminal, and CLI interface. Runme enables you to execute interactive notebook built with Markdown. More specifically, Runme runs your code and commands inside your fenced code blocks (shell, bash, zsh, but also, Ruby, Python, etc).

We have designed a comprehensive set of tools and configurations that are 100% compatible with CommonMark, the standard for Markdown. Through this, your integration with Runme does not interfere with your existing Markdown documentation or tooling.

Alongside, we provide interfaces for terminal, editor, and notebooks all attached to a kernel, making them interoperable. While these interfaces share core features, each interface excels in different use cases.

> 💡 Runme is like Jupyter but with a Shell/Bash Kernel and lightweight dependencies.

## **Usability**

Runme runs everywhere, irrespective of the environment: a local laptop, a VM, a Devcontainer, Cloud Development Environment, or attached to a remote host via SSH:

- Split loose scripts into runbooks with separate cells, intermediate outputs, and controls to check before moving on.
- Get ahead of bit-rot and reverse-engineering runbooks executing them directly from Markdown inside your project's repo.
- Increase the shareability of runbooks by decoupling them from personal _dotfiles_ or _bash_history's_ without getting in the way.
- Codify golden paths without overly restricting the flexibility of "scripting".

Learn more about Runme's [Kernel Architecture](https://docs.runme.dev/architecture) to understand what powers Runme's portability.

## **Known Limitations**

- Runme currently only has rudimentary support for PowerShell. While PowerShell is not limited to Windows, it is its primary platform. We recommend using [WSL](https://code.visualstudio.com/docs/remote/wsl).
- Please [report any issues](https://github.com/stateful/runme/issues/new) you encounter, big or small, to help us make Runme better.

### **Communication & Support**

Need assistance in getting started? Get in touch with members of our team via [Discord](https://discord.gg/runme) and get answers to your questions and all the necessary details to get you started with Runme.

<Infobox type="sidenote" title="Join Runme community!">

Make sure to [get in touch](https://discord.gg/runme) with us if you are missing a feature or have other ideas.

</Infobox>
