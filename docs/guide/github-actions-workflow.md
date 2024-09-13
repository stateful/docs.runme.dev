---
runme:
  id: 01HX525D9R8HR6G41SQMB84YRE
  version: v3
sidebar_position: 5
title: Runme CLI in Github Actions Workflows
---

# Runme CLI in Github Actions Workflows

Runme offers a convenient GitHub action that seamlessly integrates the tool into your CI/CD pipeline. By re-using the workflows your contributors use in CI/CD, you can ensure that your contribution guidelines are up-to-date and still relevant.

### **Setup**

In `.github/workflows/test.yaml` create a new file with the following contents:

```sh {"id":"01HPP31K68R699TBAS603S57DG"}
name: Test Changes

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Clone Repository
        uses: actions/checkout@v2
      - name: Setup Node version
        uses: actions/setup-node@v2
        with:
          node-version: 18.x
      - name: Install dependencies
        run: npm ci
      # execute workflows through Runme
      - name: Build / Test Project
        uses: stateful/runme-action@v2
        with:
          workflows: |
            build
            test
```

Now, you can define what should be done for building and testing your project for example a `CONTRIBUTING.md` and have your contributors be able to run the same flows through the CLI, for example, using: `runme run build test`.
