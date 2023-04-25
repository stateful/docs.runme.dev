---
sidebar_position: 1
title: Why Runme?
---

import Infobox from "../src/components/Infobox.tsx"

Thank you for interest in Runme 💟!

A well-written README can significantly impact time to get up and running on your projects, reduce onboarding time, and interactively document common development and operations workflows (runbooks). On the contrary, a poorly written README can negatively impact the visibility of your project, even if the underyling code of your software is in excellent condition. For new contributors, it can quickly become a very frustrating experience.

The Runme team believes that even if you have textually excellent README.md, encouraging your users to experience it through the lens of Runme - literally running your docs, your docs will be more reliable, less susceptible to bit-rot, and a lot more humanly ergonomic. All of which leeds to happier and more productive developers.

# What is Runme? 🤔​

Runme's primary interface is a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) that provides developers with the ability to navigate workflows center around code repositories by making Readme markdown files interactive and smart. It consists of two major parts:

* A [CLI tool](https://github.com/stateful/runme) that understands markdown and allows you to discover and run code snippets within it
* A [VS Code extension](https://marketplace.visualstudio.com/items?itemName=stateful.runme) that integrates these capabilities into VS Code and allows you to run markdown through a notebook UI

## 🤩 Markdown turned interactive

* 🏃 Runme lets you craft dev-native markdown files and create an interactive runbook experience for VS Code.
* 🙌 It is an open-source tool building on the developer norm of using [README.md](http://README.md) as an entry point to a code repository.
* 📜 It lets you seamlessly turn your existing Markdown docs, such as README.md, into runnable notebooks.
* ⏯ It enables static docs to become interactive for its readers and greatly improves their learning experience.
* 🙆 Runme is a human-centric approach to providing and consuming code repository documentation. It's designed to progressively bridge the widening developer experience gaps in a cloud-native age.

Gaps in developer experience such as:

* Low integration between building blocks employed to deliver apps and services
* Error-prone copy&paste-management of dev environments
* Docs that have fallen behind undetected
* The vault lines of commonplace tools were designed for machines, not humans.

![Readme as Notebook and Markdown side-by-side](../static/img/sidebyside.png)

Runme’s purpose is to enable developers to achieve a functional local development environment quickly, starting with copy&paste, click to run commands, and many more features. While [README.md](http://README.md) is the most well-known, there are several other markdown files often found in a repo that you may encounter, including;[ BUILD.md](http://BUILD.md), [CONTRIBUTING.md](http://CONTRIBUTING.md), and many more. Runme supports most `.md` and `.mdx` files!

<Infobox type="sidenote" title="Join Runme community!">

Make sure to [get in touch](https://discord.gg/stateful) with us if you are missing a feature or have other ideas.

You can review development progress in [Runme's roadmap](https://github.com/stateful/runme/projects).

</Infobox>

## 🛣 What's on the roadmap

Review development progress in [Runme's roadmap](https://github.com/stateful/runme/projects) A few highlights of what's coming:

* Just like code, test your documentation in Continuous Integration
* Switch back and forth between notebook and terminal UX seamlessly
* Notebook UX tweaks and integrations for both authors and users
* And more - tell us about your feature request [on Discord](https://discord.gg/stateful)

### ⚠️ Known limitations

* Runme currently only has rudimentary PowerShell on Windows (or any other platform).
* As of v1, Runme introduced terminal-session-like stateful execution.
* Please report any issues you encounter big or small to help us make Runme better.

## 💡 Telemetry for improvements

Runme exists to serve its users. Any information emitted by Runme is pseudo-anonymized (no PII whatsoever) and the emitter will respect VS Code's global "send no telemetry" (id: `telemetry.telemetryLevel`) setting. The purpose of collecting this information is to continuously improve the Runme experience for developers.

Telemetry collected includes:

* Buttons clicked & commands triggered
* Total cells and how many are being executed
* Extension activation and deactivation
* Notebook opened and saved (incl. metadata; file names are obfuscated)

Please find us on Discord ([https://discord.gg/stateful](https://discord.gg/stateful)) if you have any questions.
