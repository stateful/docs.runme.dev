---
runme:
  id: 01HMXXHBVGVRWDENHJX7JDPXSM
  version: v2.2
---

# Runme via Docker

If you prefer, you can run Runme using Docker. This will enable you containerize your application, which in this case is in a markdown format, and allows you to start up the application within your cloud computing platforms, [CI/CD pipeline](https://docs.runme.dev/integrations/github-actions-workflow) or test environment locally.

Docker images for each released version of Runme are accessible on [Docker Hub](https://hub.docker.com/r/statefulhq/runme). To get the latest version, you can use the following command:

```sh {"id":"01HMXXHW2JRJ105X332JWKCZ8J"}
docker pull statefulhq/runme:latest
```

In your project directory you can then use the CLI, e.g. via:

```sh {"id":"01HMXXJRTBHMHKAN5SPVP0A8KM"}
docker run -it --volume $(pwd):/home/project statefulhq/runme ls
```