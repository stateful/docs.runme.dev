---
runme:
  document:
    relativePath: docker.md
  session:
    id: 01HX6SSSX93QT3RWVETACQJVY5
    updated: 2024-05-06 15:36:20+01:00
---

# How to Use Docker with Runme

Docker has transformed development tooling by streamlining the creation, deployment, and management of applications across diverse environments. Running Docker in a runbook ensures that tasks and workflows can be automated easily, as it enables you to create precise instructions on how to deploy, update, and manage Docker containers across all environments.

Now, Runme is not just any runbook. Runme provides an interactive runbook that can turn your documentation into an interactive and executable environment.

Runme enhances the use of Docker by simplifying the automation of tasks and the deployment of applications within secure Docker containers. By running Docker in Runme Notebook, you can execute commands, create, and follow the instructions in your documentation (within your runbook).
Essentially, Runme takes the detailed guide you have written and turns it into actions directly in Docker's protected environment. This makes your workflow more efficient, consistent, and easy to manage.

In this guide, we will walk you through use cases of integrating Runme and Docker.

## **Prerequisites**

- **Clone the repository**: We created a [notebook repository](ht*************************************************************************ok) containing all the instructions and commands required for this guide.
- **Install Runme**: Install the [Runme extension on VS Code](ht**************************************************************me) and set it as your [default Markdown viewer.](ht***********************************************************************************************er)

## Example Use Case Integration of Runme and Docker

In this section, we will walk you through how you can perform various docker commands from your Runme cell and utilize the several features of Runme for more effective workflow execution. This use case focuses on a simple Python app named `my-test-app`.

### Automating Docker Build in Runme

Building an image in Docker enables you to create a Docker image from a set of instructions defined in a Dockerfile. These instructions specify the steps needed to assemble the necessary configurations for the image.

`docker build` is the command to build a Docker image from a Dockerfile.

To build your image from a Dockerfile, use the command below

```sh
docker build -t <image_name>:<tag> <path_to_dockerfile>
```

Example:

![Docker build](../../static/img/guide-page/docker-build.png)

### Docker Images

Run a Docker Image
You can run a Docker image and customize your container's interaction with the host system and external networks. Here are some commands to do this:

### Docker Run

​​Running a container in Docker allows you to create an instance of a Docker image as an isolated and lightweight environment. This instance, a container, condenses an application along with its dependencies and configurations. When a container is run, it executes the commands specified in its Dockerfile.

`docker run` is the command to create and start a new container based on a Docker image.
To run a Docker image, use the command below

```sh
docker run <image_name>
```

![docker run](../../static/img/guide-page/docker-run.png)

### Volume Mapping

Volume mapping maps directories or files on the host machine to directories inside the container, providing data persistence and allowing for easy file access.

```sh
docker run -v <host_directory>:<container_directory> <image_name>
```

Example:

![Docker Volume](../../static/img/guide-page/docker-volume-mapping.png)

### Port Mapping

Port Mapping maps ports on the host machine to ports exposed by the container, allowing external access to services inside the container.

To do this, use the command below:

```sh
docker run -p <host_port>:<container_port> <image_name>
```

Example:

![port-mapping](../../static/img/guide-page/docker-port-mapping.png)

If a cell block takes a lot of time to execute, you can also run such a cell in the background using [Runme’s background mode](../getting-started/features#background-task). This will enable you to save time and move on to other tasks while your previous task is still running.

![background mode](../../static/img/runme-background.png)

### Container Management in Docker Within the Runme Cell

With Docker within Runme, you can easily manage your container's activities inside your Runme cell and Markdown file. Container management entails organizing and supervising containers to ensure smooth operation and optimal performance.
In this section, we explore several commands for managing your containers.

### Start a container

Starting a container is the same as running a container. To start a container, use the command below:

```sh
docker run <image_name>
```

Example:

![docker-run-container](../../static/img/guide-page/docker-run-container.png)

### List Containers

To get a list of all running containers, use the command below:

```sh
docker ps
```

![docker ps](../../static/img/guide-page/docker-ps.png)

If you would love to get a list of all containers (including stopped ones), use the command below:

```sh
docker ps -a

# Ran on 2024-05-06 15:16:15+01:00 for 583ms exited with 0
CONTAINER ID   IMAGE                                 COMMAND                  CREATED              STATUS                       PORTS                                                                                                                                  NAMES
27********89   nginx                                 "/docker-entrypoint.…"   About a minute ago   Up About a minute            80/tcp                                                                                                                                 zealous_hertz
76********54   nginx                                 "/docker-entrypoint.…"   11 minutes ago       Up 11 minutes                80/tcp, 0.***.0:8080->9010/tcp                                                                                                         peaceful_lichterman
14********ce   nginx                                 "/docker-entrypoint.…"   11 minutes ago       Up 11 minutes                80/tcp                                                                                                                                 jolly_ptolemy
0e********55   nginx                                 "/docker-entrypoint.…"   12 minutes ago       Exited (1) 12 minutes ago                                                                                                                                           vibrant_cartwright
0e********3a   nginx                                 "/docker-entrypoint.…"   13 minutes ago       Exited (0) 6 minutes ago                                                                                                                                            vigilant_bouman
e5********d1   nginx                                 "/docker-entrypoint.…"   14 minutes ago       Exited (0) 13 minutes ago                                                                                                                                           sharp_mcnulty
7e********75   kindest/node:v1***.2                  "/usr/local/bin/entr…"   50 minutes ago       Up 50 minutes                12*****.1:52143->6443/tcp                                                                                                              my-cluster-control-plane
7b********65   nginx                                 "/docker-entrypoint.…"   10 days ago          Exited (255) 7 days ago      0.***.0:8080->80/tcp                                                                                                                   my_runme_demo_container
74********ce   nginx                                 "/docker-entrypoint.…"   11 days ago          Exited (255) 11 days ago     80/tcp, 0.***.0:80->5000/tcp                                                                                                           crazy_mestorf
38********47   nginx                                 "/docker-entrypoint.…"   11 days ago          Exited (255) 11 days ago     80/tcp, 0.***.0:80->5000/tcp                                                                                                           keen_hellman
98********de   nginx                                 "/docker-entrypoint.…"   12 days ago          Exited (0) 12 days ago                                                                                                                                              ecstatic_wu
2c********57   nginx                                 "/docker-entrypoint.…"   12 days ago          Exited (255) 12 days ago     80/tcp                                                                                                                                 goofy_mendel
b0********a4   nginx                                 "/docker-entrypoint.…"   12 days ago          Exited (255) 12 days ago     80/tcp, 0.***.0:80->5000/tcp                                                                                                           sweet_tharp
db********73   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              infallible_lederberg
ab********43   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             charming_hopper
35********05   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              heuristic_swirles
27********66   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             goofy_yalow
0c********f4   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             nice_dubinsky
2a********bb   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              sweet_rubin
49********b0   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             blissful_gates
f7********06   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              recursing_black
02********4d   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             gracious_lumiere
3a********2d   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              heuristic_johnson
6d********be   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             quizzical_kapitsa
5c********ff   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             confident_swirles
8e********66   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              stoic_feistel
df********b0   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             serene_moser
3e********96   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              heuristic_hawking
03********3c   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             trusting_nightingale
4f********a0   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             nervous_sutherland
04********8f   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             determined_payne
a3********fb   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             compassionate_dijkstra
67********f5   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             fervent_almeida
3d********5e   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Created                                                                                                                                                             charming_khorana
4f********d4   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              hungry_blackburn
43********53   my-golang-app                         "./main"                 2 weeks ago          Exited (2) 2 weeks ago                                                                                                                                              beautiful_heisenberg
de********df   41********b1                          "flask run --debug"      2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              amazing_darwin
50********69   41********b1                          "flask run --debug"      2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              priceless_engelbart
5f********10   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (130) 2 weeks ago                                                                                                                                            compassionate_easley
78********11   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              compassionate_chaplygin
5a********f1   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              elastic_black
f3********7a   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              busy_heisenberg
a5********7c   redis:4.0                             "docker-entrypoint.s…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              vigorous_cannon
c2********c7   redis:alpine                          "docker-entrypoint.s…"   2 weeks ago          Exited (255) 2 weeks ago     6379/tcp                                                                                                                               co***************-1
2f********44   composetest-web                       "flask run --debug"      2 weeks ago          Exited (255) 2 weeks ago     0.***.0:8000->5000/tcp                                                                                                                 co*************-1
38********ba   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              hopeful_gould
74********94   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (255) 2 weeks ago     80/tcp                                                                                                                                 great_galileo
35********75   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              friendly_shannon
76********46   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              sweet_pike
99********6f   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              adoring_sinoussi
66********a1   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (255) 2 weeks ago     80/tcp                                                                                                                                 gallant_golick
7f********82   redis:4.0                             "docker-entrypoint.s…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              reverent_hofstadter
9a********cb   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (255) 2 weeks ago     80/tcp                                                                                                                                 wizardly_proskuriakova
a7********42   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              charming_jones
15********ba   nginx                                 "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              lucid_keller
b5********37   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              my-nginx
e4********52   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              musing_spence
c9********34   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              xenodochial_hoover
dd********d7   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              stupefied_meitner
91********9b   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              amazing_yonath
66********15   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              great_black
34********81   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              interesting_bassi
7c********c1   mysql                                 "docker-entrypoint.s…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              fervent_curie
04********f8   mysql                                 "docker-entrypoint.s…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              nice_galois
ea********b7   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              nervous_volhard
96********7a   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (255) 2 weeks ago     80/tcp                                                                                                                                 lucid_mclaren
5c********90   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              reverent_neumann
08********37   redis                                 "docker-entrypoint.s…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              hungry_brahmagupta
b9********53   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              condescending_jones
3c********c4   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              upbeat_cori
47********d9   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              bold_saha
b5********1a   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              loving_maxwell
cc********29   48********5e                          "/docker-entrypoint.…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              pedantic_elgamal
33********67   redis:4.0                             "docker-entrypoint.s…"   2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              gallant_payne
8c********d4   kodekloud/webapp                      "/bin/sh -c 'FLASK_A…"   2 weeks ago          Exited (255) 2 weeks ago     0.***.0:80->5000/tcp                                                                                                                   distracted_leakey
c4********13   kodekloud/webapp                      "/bin/sh -c 'FLASK_A…"   2 weeks ago          Exited (255) 2 weeks ago                                                                                                                                            admiring_khorana
ad********43   mysql                                 "docker-entrypoint.s…"   2 weeks ago          Created                                                                                                                                                             trusting_agnesi
b7********a0   mysql                                 "docker-entrypoint.s…"   2 weeks ago          Exited (1) 2 weeks ago                                                                                                                                              eloquent_blackwell
8f********f8   kodekloud/simple-webapp               "python app.py"          2 weeks ago          Exited (255) 2 weeks ago     8080/tcp                                                                                                                               strange_hellman
00********4d   kodekloud/simple-webapp               "python app.py"          2 weeks ago          Exited (255) 2 weeks ago     8080/tcp                                                                                                                               xenodochial_cori
05********9a   ubuntu                                "sleep 5"                2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              vibrant_bouman
d4********09   ubuntu                                "/bin/bash"              2 weeks ago          Exited (0) 2 weeks ago                                                                                                                                              dreamy_franklin
56********f4   c3********dd                          "python app.py"          2 months ago         Exited (255) 8 weeks ago     5000/tcp, 0.***.0:8080->8080/tcp                                                                                                       agitated_chatterjee
56********d8   c3********dd                          "python app.py"          2 months ago         Created                                                                                                                                                             zen_spence
e1********2b   5d********cb                          "python app.py"          2 months ago         Exited (1) 2 months ago                                                                                                                                             sleepy_payne
d4********d2   a4********2c                          "python app.py"          2 months ago         Exited (1) 2 months ago                                                                                                                                             eager_nash
38********d5   22********87                          "python app.py"          2 months ago         Exited (1) 2 months ago                                                                                                                                             unruffled_bhaskara
96********6b   22********87                          "python app.py"          2 months ago         Exited (1) 2 months ago                                                                                                                                             admiring_keller
5e********f1   22********87                          "python app.py"          2 months ago         Exited (1) 2 months ago                                                                                                                                             amazing_elion
64********30   22********87                          "python app.py"          2 months ago         Exited (1) 2 months ago                                                                                                                                             vibrant_goodall
70********93   22********87                          "python app.py"          2 months ago         Created                                                                                                                                                             practical_wiles
58********04   my******************.9                "/opt/bin/runme --fi…"   2 months ago         Exited (0) 2 months ago                                                                                                                                             pensive_golick
d1********f9   my******************.9                "/opt/bin/runme --fi…"   2 months ago         Exited (0) 2 months ago                                                                                                                                             upbeat_bell
83********7f   my******************.8                "/opt/bin/runme --fi…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             vigorous_bouman
bd********fb   my******************.9                "/opt/bin/runme --fi…"   2 months ago         Exited (0) 2 months ago                                                                                                                                             mystifying_turing
9d********b2   my******************.7                "/opt/bin/runme exam…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             xenodochial_aryabhata
38********3a   my******************.9                "/opt/bin/runme --fi…"   2 months ago         Exited (0) 2 months ago                                                                                                                                             interesting_torvalds
79********aa   my******************.9                "/opt/bin/runme --fi…"   2 months ago         Exited (0) 2 months ago                                                                                                                                             unruffled_ramanujan
36********aa   my******************.8                "/opt/bin/runme --fi…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             competent_khorana
35********85   my******************.7                "/opt/bin/runme exam…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             funny_perlman
bc********aa   statefulhq/runme:3.********ne         "/opt/bin/runme"         2 months ago         Exited (129) 2 months ago                                                                                                                                           eager_shannon
4a********40   statefulhq/runme:3.********ne         "/opt/bin/runme"         2 months ago         Exited (0) 2 months ago                                                                                                                                             serene_wilbur
3d********34   statefulhq/runme:3.********ne         "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             strange_banach
0a********f1   84********6a                          "/opt/bin/runme --al…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             epic_visvesvaraya
e3********dd   84********6a                          "/opt/bin/runme --al…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             awesome_napier
e4********76   84********6a                          "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             quizzical_shockley
6f********10   statefulhq/runme:3.********ne         "/opt/bin/runme --al…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             priceless_davinci
c3********e3   statefulhq/runme:3.********ne         "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             sweet_banzai
d5********22   statefulhq/runme:3.********ne         "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             tender_feistel
13********97   statefulhq/runme:3.********ne         "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             vigorous_nash
36********b6   statefulhq/runme:3.********ne         "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             angry_sanderson
f6********ae   statefulhq/runme:3.********ne         "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             ecstatic_mcclintock
01********9a   statefulhq/runme:3.********ne         "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             interesting_hawking
16********2a   statefulhq/runme                      "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             suspicious_lamarr
8c********97   statefulhq/runme                      "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             beautiful_bardeen
ba********02   my******************.6                "/opt/bin/runme /opt…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             happy_franklin
3c********61   statefulhq/runme                      "/opt/bin/runme"         2 months ago         Exited (0) 2 months ago                                                                                                                                             objective_nash
de********85   my******************.5                "/opt/bin/runme runme"   2 months ago         Exited (1) 2 months ago                                                                                                                                             crazy_austin
67********89   my******************.4                "/opt/bin/runme 'whi…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             objective_villani
de********70   my******************.3                "/opt/bin/runme /usr…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             festive_golick
a7********e1   my******************.2                "/opt/bin/runme runm…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             serene_shannon
7a********26   my******************.1                "/opt/bin/runme '--f…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             peaceful_haibt
30********ca   my****************e1                  "/opt/bin/runme runm…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             charming_pare
2d********e3   6c********7e                          "/opt/bin/runme runm…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             exciting_wright
2f********41   6c********7e                          "/opt/bin/runme runm…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             confident_grothendieck
25********ef   6c********7e                          "/opt/bin/runme ."       2 months ago         Exited (1) 2 months ago                                                                                                                                             cranky_golick
07********78   6c********7e                          "/opt/bin/runme ."       2 months ago         Exited (1) 2 months ago                                                                                                                                             silly_dirac
fc********39   statefulhq/runme                      "/opt/bin/runme"         2 months ago         Exited (0) 2 months ago                                                                                                                                             upbeat_snyder
1f********96   statefulhq/runme                      "/opt/bin/runme ls"      2 months ago         Exited (1) 2 months ago                                                                                                                                             inspiring_yonath
2f********67   statefulhq/runme                      "/opt/bin/runme ls"      2 months ago         Exited (1) 2 months ago                                                                                                                                             brave_chaum
d2********2a   statefulhq/runme                      "/opt/bin/runme ls"      2 months ago         Exited (1) 2 months ago                                                                                                                                             happy_pare
5e********bc   statefulhq/runme                      "/opt/bin/runme ls"      2 months ago         Exited (1) 2 months ago                                                                                                                                             tender_volhard
1e********42   statefulhq/runme                      "/opt/bin/runme"         2 months ago         Exited (0) 2 months ago                                                                                                                                             nervous_snyder
7f********2c   75********fa                          "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             nice_antonelli
e3********56   runmedocker/runmedocker               "/opt/bin/runme"         2 months ago         Created                                                                                                                                                             vigilant_lalande
18********d7   runmedocker/runmedocker               "/opt/bin/runme"         2 months ago         Created                                                                                                                                                             kind_turing
ab********e9   runmedocker/runmedocker               "--volume /Users/mac…"   2 months ago         Created                                                                                                                                                             cranky_galileo
dd********51   runmedocker/runmedocker               "/opt/bin/runme"         2 months ago         Created                                                                                                                                                             pedantic_rubin
8a********4f   runmedocker/runmedocker               "."                      2 months ago         Created                                                                                                                                                             pensive_kirch
ce********5e   runmedocker/runmedocker               "/bin/sh"                2 months ago         Created                                                                                                                                                             determined_lederberg
ed********1b   runmedocker/runmedocker               "/bin/sh ."              2 months ago         Created                                                                                                                                                             lucid_hermann
ab********15   75********fa                          "/bin/sh"                2 months ago         Created                                                                                                                                                             xenodochial_gauss
8f********d9   75********fa                          "/bin/sh"                2 months ago         Created                                                                                                                                                             naughty_jepsen
b1********e2   75********fa                          "/opt/bin/runme /bin…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             heuristic_morse
26********2f   75********fa                          "/opt/bin/runme /bin…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             happy_grothendieck
c6********96   75********fa                          "/opt/bin/runme /bin…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             determined_keller
2d********9f   75********fa                          "/opt/bin/runme /bin…"   2 months ago         Exited (1) 2 months ago                                                                                                                                             admiring_wescoff
c6********25   75********fa                          "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             gifted_blackburn
2a********fa   75********fa                          "/opt/bin/runme"         2 months ago         Created                                                                                                                                                             elastic_northcutt
83********0a   75********fa                          "/opt/bin/runme"         2 months ago         Exited (1) 2 months ago                                                                                                                                             crazy_euclid
d5********db   75********fa                          "/opt/bin/runme ls"      2 months ago         Exited (0) 2 months ago                                                                                                                                             confident_solomon
2a********32   75********fa                          "/opt/bin/runme ls"      2 months ago         Exited (0) 2 months ago                                                                                                                                             jovial_saha
73********af   75********fa                          "/opt/bin/runme ls"      2 months ago         Exited (1) 2 months ago                                                                                                                                             strange_bartik
5a********3e   75********fa                          "/opt/bin/runme ls"      2 months ago         Exited (0) 2 months ago                                                                                                                                             hopeful_zhukovsky
d4********76   gc**io/k8********be/ki***se:v0***42   "/usr/local/bin/entr…"   4 months ago         Exited (255) 4 months ago    12*****.1:55004->22/tcp, 12*****.1:55003->2376/tcp, 12*****.1:55002->5000/tcp, 12*****.1:55001->8443/tcp, 12*****.1:55000->32443/tcp   minikube
10********9c   helloflask-web                        "/app/bin/docker-ent…"   6 months ago         Exited (255) 4 months ago    0.***.0:8000->8000/tcp                                                                                                                 he************-1
6f********68   helloflask-worker                     "celery -A hello.app…"   6 months ago         Exited (255) 4 months ago    8000/tcp                                                                                                                               he***************-1
8a********a7   po****es:15*********rm                "docker-entrypoint.s…"   6 months ago         Exited (255) 4 months ago    5432/tcp                                                                                                                               he*****************-1
84********ca   helloflask-js                         "docker-entrypoint.s…"   6 months ago         Exited (255) 4 months ago                                                                                                                                           he***********-1
bf********9f   helloflask-css                        "docker-entrypoint.s…"   6 months ago         Exited (0) 6 months ago                                                                                                                                             he************-1
b9********28   redis:7.***********rm                 "docker-entrypoint.s…"   6 months ago         Exited (0) 6 months ago                                                                                                                                             trusting_ramanujan
d2********a4   po****es:15*********rm                "docker-entrypoint.s…"   6 months ago         Exited (0) 6 months ago                                                                                                                                             sad_cohen
dd********68   redis:7.***********rm                 "docker-entrypoint.s…"   6 months ago         Exited (0) 6 months ago                                                                                                                                             romantic_varahamihira
ba********22   po****es:15*********rm                "docker-entrypoint.s…"   6 months ago         Exited (0) 6 months ago                                                                                                                                             thirsty_galois
9b********9e   po****es:15*********rm                "docker-entrypoint.s…"   7 months ago         Exited (0) 6 months ago                                                                                                                                             funny_leavitt
d4********e3   redis:7.***********rm                 "docker-entrypoint.s…"   7 months ago         Exited (0) 6 months ago                                                                                                                                             dazzling_chatelet
96********86   po****es:15*********rm                "docker-entrypoint.s…"   7 months ago         Exited (0) 7 months ago                                                                                                                                             wireguard
7f********00   po****es:15*********rm                "docker-entrypoint.s…"   7 months ago         Exited (0) 7 months ago                                                                                                                                             wiregurd-postgress
fe********43   po****es:15*********rm                "docker-entrypoint.s…"   7 months ago         Created                                                                                                                                                             goofy_napier
df********f6   redis:7.***********rm                 "docker-entrypoint.s…"   7 months ago         Exited (255) 7 months ago    6379/tcp                                                                                                                               zealous_ganguly
cd********f8   po****es:15*********rm                "docker-entrypoint.s…"   7 months ago         Exited (0) 7 months ago                                                                                                                                             suspicious_jang
6c********3e   po****es:15*********rm                "docker-entrypoint.s…"   7 months ago         Exited (0) 7 months ago                                                                                                                                             goofy_goodall
7b********80   po****es:15*********rm                "docker-entrypoint.s…"   7 months ago         Exited (0) 7 months ago                                                                                                                                             distracted_kilby
16********40   redis:7.***********rm                 "docker-entrypoint.s…"   7 months ago         Exited (0) 7 months ago                                                                                                                                             nervous_cerf
84********d6   redis:7.***********rm                 "docker-entrypoint.s…"   7 months ago         Exited (0) 7 months ago      6379/tcp                                                                                                                               strange_chaplygin
4e********27   po****es:15*********rm                "docker-entrypoint.s…"   7 months ago         Exited (0) 7 months ago      5432/tcp                                                                                                                               lucid_joliot
4a********7b   po****es:15*********rm                "docker-entrypoint.s…"   7 months ago         Exited (1) 7 months ago                                                                                                                                             keen_snyder
b3********ba   po****es:15*********rm                "docker-entrypoint.s…"   7 months ago         Exited (0) 7 months ago                                                                                                                                             hardcore_booth
e1********c2   redis:7.***********rm                 "docker-entrypoint.s…"   7 months ago         Exited (0) 7 months ago                                                                                                                                             hardcore_dhawan
d7********00   redis:7.***********rm                 "docker-entrypoint.s…"   7 months ago         Exited (255) 4 months ago    6379/tcp                                                                                                                               he**************-1
ef********a7   dc********91                          "./start.sh"             16 months ago        Exited (255) 16 months ago                                                                                                                                          compassionate_darwin
48********8e   dc********91                          "./start.sh"             16 months ago        Exited (255) 16 months ago                                                                                                                                          bold_morse
2b********14   dc********91                          "./start.sh"             16 months ago        Exited (1) 16 months ago                                                                                                                                            laughing_swanson
47********ed   dc********91                          "./start.sh"             16 months ago        Exited (1) 16 months ago                                                                                                                                            flamboyant_banzai
f7********63   aznaming:latest                       "dotnet AzureNamingT…"   16 months ago        Exited (255) 16 months ago   443/tcp, 0.***.0:8081->80/tcp                                                                                                          vibrant_faraday

```

Example:

![docker ps -a ](../../static/img/guide-page/docker-ps-a.png)

### Container Logs

In Docker, container logs provide you with the recorded output generated by a Docker container during its execution. They are useful for troubleshooting, monitoring, auditing, and debugging.
To view the logs of a container, use the command below:

```sh
docker logs <container_id or container_name>
```

Example:

![docker logs](../../static/img/guide-page/docker-logs.png)

### Execute a Command Inside a Container

Executing a command inside a Docker container means running a specific command within the container. This allows you to interact with the containerized environment without interactively entering the container.
To execute a command inside a container, use the command below

```sh
docker exec -it $CONTAINER_ID_TEST bash
```

Example:

![Docker exec ](../../static/img/guide-page/docker-exec.png)

### Stop a Running Container

To stop a running container, use the command below:

```sh
docker stop <container_id or container_name>
```

Example:

![Docker stop](../../static/img/guide-page/docker-stop.png)

## Remove a Container

To remove a container, run the command below:

```sh
docker rm <container_id or container_name>
```

Example:

![remove container](../../static/img/guide-page/docker-remove.png)

### Docker compose

Docker Compose is a tool for defining and running multi-container Docker applications. It uses YAML files to configure the application’s services and performs the creation and start-up process of all the containers.

![docker-compose](../../static/img/guide-page/docker-compose.png)

## How to Manage Docker Containers using Runme Run Cells by Section Feature
With Runme, you can efficiently manage your Docker containers by running your commands by section. Rather than running each cell individually, you run them by section. The video below provides a visual illustration of how this feature works.

<video autoPlay loop muted playsInline controls>
  <source src="/videos/do****************p4" type="video/mp4" />
  <source src="/videos/docker-container.webm" type="video/webm" />
</video>

In this guide, we covered the basics of running Docker commands in Runme.

Runme has several features that make it a choice platform for integrating and using Docker. Some key features of Runme include

- The background mode makes it possible to run commands in the background.
- Autosave feature, which provides you with the opportunity to auto-save your outputs without manual intervention.
- You can run your Markdown file by cells, an entire document, or sections.

To explore more features of Runme and learn how they can be utilized in your workflows, visit our [documentation page](ht******************ev/).

