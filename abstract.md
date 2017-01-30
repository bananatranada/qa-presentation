# QA Using Immutable Infrastructures
Maintaining consistent environments is one of the biggest challenges in software. Not every developer or tester uses the same machine, and this can cause problems in QA and other areas of the pipeline: A dependency is outdated or missing, the wrong operating system is being used, or the program simply does not work. As the codebase grows and more people are added to the project, debugging these issues becomes almost infeasible. This presentation serves to introduce solutions used by many companies to create reproducible environments with Vagrant or Docker.

https://blog.codecentric.de/en/2012/02/automated-virtual-test-environments-with-vagrant-and-puppet/
https://blog.codeship.com/testing-with-docker/
http://www.infoworld.com/article/3130670/application-development/the-hidden-benefits-of-docker-for-qa.html

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
* Example using a webserver, psql to test unit and acceptance tests (also run them for system tests)

### Intro to Docker
* What is it?
* How is it different than vagrant?
* Example using a webserver, psql to test unit and acceptance tests (also run them for system tests)


## Topic

#### Abstract
Maintaining consistent environments is one of the biggest challenges in software. Not every developer or tester uses the same machine, and this can cause problems in QA and other areas of the pipeline: A dependency is outdated or missing, the wrong operating system is being used, or the program simply does not work. As the codebase grows and more people are added to the project, debugging these issues becomes almost infeasible. This presentation serves to discuss how immutable infrastructures solve these problems.

#### Immutable Infrastructures
Immutable infrastructures are entities that must be re-created whenever they change. The goal is to create a normalized environment for everyone in the team. As an example, consider a webserver that uses a particular version of the operating system. If for some reason, a package requires a different version of the OS, instead of updating the OS manually, a developer would use a configuration management tool. That way, other developers can work
