import Infobox from "../../src/components/Infobox.tsx"

## Running CLI in Github Actions Workflow

Runme provides a GitHub action that allows you to seamlessly use the tool in CI/CD. It enables to re-use the workflows that your contributor use in CI/CD and therefore verifies that your contributing guidelines are still up to date.

### Setup

In `.github/workflows/test.yaml` create a new file with the following contents:

```sh
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

Now, you can define what should be done for building and testing your project in e.g. a `CONTRIBUTING.md` and have your contributors be able to run the same flows through the CLI, e.g. via: `runme run build test`.