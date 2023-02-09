---
title: Using the CLI
sidebar_position: 4
---

import Infobox from "../../src/components/Infobox.tsx"

Feeling like Runme is great, but you want something even more powerful? Well, lucky for you, there is a Runme CLI!

The Runme CLI is ideal for power-users who want to get the absolute most out of Runme.

## Installing

See [the doc page on the cli](/docs/cli) for installation instructions.

## Basic Usage

Runme has a nice TUI that you can use simply like so:

<p align="center">
  <img src="https://user-images.githubusercontent.com/16108792/213512754-7302b2a5-31fa-44c9-b49f-1bc664d5f595.gif" />
</p>

<Infobox type="warning">

Runme won't work if your current working directory doesn't contain a README file at top-level!

You can use the `--chdir` flag to alter this behavior, without changing the environment's working directory.

</Infobox>

(TODO: better gif)

This allows you to quickly execute any script present in the README.

## Running Script Directly

The TUI is nice, but what if you just want to run a specific command quickly?

To run a specific script by name, use the `runme run <command>` subcommand!