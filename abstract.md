https://www.oreilly.com/ideas/an-introduction-to-immutable-infrastructure
https://blog.codecentric.de/en/2012/02/automated-virtual-test-environments-with-vagrant-and-puppet/
https://blog.codeship.com/testing-with-docker/
http://www.infoworld.com/article/3130670/application-development/the-hidden-benefits-of-docker-for-qa.html
https://www.solidfire.com/blog/containers-vs-vms/

find resources on:
* QA + vagrant/docker
* a well known company using vagrant/docker
* containerization vs virtualization

## Outline

### Intro
"it works on my machine"
* What is an immutable infrastructure?
* What is virtualization/containerization?
* How does it help QA?
* Examples of immutable infrastructures

### Intro to Vagrant
* What is it?
* Example using a webserver, psql to test unit and acceptance tests (also run them for functional tests)

### Intro to Docker
* What is it?
* How is it different than vagrant?
* Example using a webserver, psql to test unit and acceptance tests (also run them for functional tests)

### Notes
Mention that unit tests should probably be done during continuous integration

## Topic

#### Abstract
Maintaining consistent environments is one of the biggest challenges in software. Not every developer or tester uses the same machine, and this can cause problems in QA and other areas of the pipeline: A dependency is outdated or missing, the wrong operating system is being used, or the program simply does not work. As the codebase grows and more people are added to the project, debugging these issues becomes almost infeasible. This presentation serves to discuss how immutable infrastructures solve these problems.

#### Immutable Infrastructures
Immutable infrastructures are environments that do not change. Whenever a dependency is added or the version of the OS changes, the entire environment is re-created using a config file. As a result, other developers or testers can pull the updated config file from a vcs and reproduce the same environment.

One of the problems it solves is: "...but it works on my machine". Different team members may be using different development computers and operating systems (e.g., linux, macOS, windows). Even when the same hardware and operating system is being used, they may contain different dependencies that may cause problems later on. This is especially common when new people join and realize that their version is way ahead of the team's.

By normalizing environments using tools like vagrant or docker, we can minimize the time and effort spent on fixing these issues. This benefits all stages of the pipeline including development, testing, and production.

#### Vagrant
"Vagrant is a command line utility for managing the lifecycle of virtual machines". It takes advantage of virtualization that allows virtual machines to act like a real computers within a host system.

It is built on top of popular virtualization providers such as VirtualBox and VMWare. In addition to defining dependencies, it can automate tasks using a configuration management tool. So not only will everyone have the same dependencies, but the same configurations as well.

`Demo`

#### Docker
Containers aim to solve the same problem more efficiently. Instead of creating a VM with its own OS, containers are more lightweight. They share the same host OS kernel, including binaries and libraries, but they're isolated from each other with their own userspace. And because of the nature of the linux kernel, you can install any linux distribution to each container.

Docker takes this a step further by limiting each userspace to a single process and providing a client-friendly API.

`Demo`

#### Closing notes
Not every application can leverage VM's or containers, but it's becoming popular with web development.
