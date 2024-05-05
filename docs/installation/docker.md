---
runme:
  id: 01HMXXHBVGVRWDENHJX7JDPXSM
  version: v3
---

# Install Runme with Docker

You can containerize your Runme notebook using Docker. This method enables easy deployment of notebook across different environments, including cloud computing platforms,[CI/CD pipelines](https://docs.runme.dev/integrations/github-actions-workflow) , and/or local test environments.

## **Docker Image**

Docker images for each released version of Runme are available on [Docker Hub](https://hub.docker.com/r/statefulhq/runme). To get the latest version, use the following command:

```sh {"id":"01HMXXHW2JRJ105X332JWKCZ8J"}
docker pull statefulhq/runme:latest
```

## **Basic Usage**

Use the default working directory:

```sh {"id":"01HQW60MVJ17C3ZH97E3Q849EF"}
docker run -it --volume $(pwd):/opt/var/runme statefulhq/runme
```

Changing the working directory:

```sh {"id":"01HQW61ENTQ0KT4Z7JG33YWSB5"}
docker run -it -w /runbooks --volume /your/runbooks:/runbooks statefulhq/runme
```

Passing the `--project` flag:

```sh {"id":"01HQW6213ANNPPVNWZBXM5605G"}
docker run -it --volume /your/runbooks:/runbooks statefulhq/runme --project /runbooks
```

Below is an example Dockerfile illustrating how to containerizing your application:

```dockerfile {"id":"01HQWT62G0DMDWH17QHK0KK3KS"}
FROM statefulhq/runme:latest as build
WORKDIR /app
COPY example_runme.md .
RUN echo "Installing dependencies..."
# Continue with your Runme configuration and usage
ENTRYPOINT ["/opt/bin/runme", "--filename", "example_runme.md"]
```

## **Additional Considerations**

**ARM64 Architecture**:
If you are using an ARM64 architecture, include the `--platform=linux/arm64` flag:

```sh {"id":"01HQW86WFR37CZ0ESXPV8AFWZT"}
docker run --platform=linux/arm64 -it --volume $(pwd):/opt/var/runme statefulhq/runme
```

## **Multi-Stage Build**

Consider using a multi-stage Docker build to bring and install your dependencies before finalizing the Runme image. Below is an example Dockerfile illustrating this approach:

```dockerfile {"id":"01HQW92KPTDZVX2173NY4K80JQ"}
# Stage 1: Dependency_Stage
FROM statefulhq/runme:latest as dependency_stage
WORKDIR /app
COPY example_runme.md .

ENTRYPOINT ["/opt/bin/runme", "--filename", "example_runme.md"]

# Stage 2: Runme Stage
FROM statefulhq/runme:latest as build
WORKDIR /app
COPY --from=Dependency_Stage /app /app
RUN echo "Installing dependencies..."
# Cmmand to run when the container start
CMD ["python", "app.py"]
```

In this example, the first stage is dedicated to installing dependencies, and the second stage builds upon the first, incorporating the necessary files and configurations for Runme.

<br />
<Infobox type="sidenote" title="Keep going!">

Explore further customization options and [integration](../integrations/github-actions-workflow.md) possibilities.

</Infobox>
