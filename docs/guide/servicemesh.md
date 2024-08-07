Prerequisite
To follow up on this tutorial, ensure you have the following:

Runme Extension: Install the Runme extension in your VS Code editor and set it as your default Markdown viewer.
Clone Repo: We have provided an example repository to help you follow this tutorial. You can clone the repo here.

```sh {"id":"01J4M1Y5GPFQV1JFDYAFGEPTAH"}
git clone https://github.com/stateful/blog-examples.git
```

Require Packages: Install the required packages (kind,kubectl, Helm ) inside your Markdown file. Runme allows you to achieve this! Simply run the command in the prerequisite section in the repo.

```sh {"id":"01J4M1YTVZ46FR2QGQ5ERHT7F2"}
brew install kind
brew install docker
brew install helm
```

This code cell below deletes the cluster if it already existed.

## Install Istio CLI
Download the Istio release and install the Istio CLI.

```sh {"id":"01J4M0P1PWG8RMZJR2Y9KSY27N"}
curl -L https://istio.io/downloadIstio | sh -
cd istio-<version>
export PATH=$PWD/bin:$PATH
```

## Install Istio on Kubernetes

```sh {"id":"01J4M0QHHJ3SH5WDT60EWWVST0"}
istioctl install --set profile=demo
```

```sh {"id":"01J4M3EKCC2QQDBEFBRF2XGZA1"}
istioctl verify-install
```

## Verify Installation
Ensure all Istio components are running correctly.

```sh {"id":"01J4M0RHY4EZZEQZBMYZ37WPB9"}
kubectl get pods -n istio-system
```

## Label the Namespace for Istio Injection
Label the namespace where your application is deployed for automatic sidecar injection.

```sh {"id":"01J4M0SG3QGA17VQPPT3RG66ZY"}
kubectl label namespace <your-namespace> istio-injection=enabled
```

## Deploy Sample Application

```sh {"id":"01J4M0TD3DS0CYCW081NP1PV3V"}
kubectl apply -f samples/bookinfo/platform/kube/bookinfo.yaml
```

## Expose the Application

Expose the application using the Istio ingress gateway.

```sh {"id":"01J4M0VJM9D0PBEFJB3TQQPJ0Z"}
kubectl apply -f samples/bookinfo/networking/bookinfo-gateway.yaml

```

## Verify the Application

```sh {"id":"01J4M0YHTRXH1SMAVZC9Y3W34B"}
kubectl get svc istio-ingressgateway -n istio-system
```

```sh {"id":"01J4M3AG3FF3WHW9KS40SSNMPQ"}
  isrioctl analyze
```

## Additional Configuration

### Traffic Management

```ini {"id":"01J4M0ZH2MRNQA6QGQM3HEZ624"}
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
spec:
  hosts:
  - reviews
  http:
  - route:
    - destination:
        host: reviews
        subset: v1

```

## Security

Enable mutual TLS and define authorization policies.

```ini {"id":"01J4M127A090BAM9SZE6KW1RCX"}
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: istio-system
spec:
  mtls:
    mode: STRICT

```

## Observability
Integrate with Prometheus, Grafana, and Jaeger for metrics, dashboards, and tracing.

```ini {"id":"01J4M12ZPXR20RZAKC5800AA55"}
kubectl apply -f samples/addons
```
