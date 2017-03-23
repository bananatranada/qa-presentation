292f36-4ecdc4-f7fff7-ff6b6b-ffe66d

# Immutable Infrastructures in SQA

## Introduction
I'm Byung. This is Robby. And we're going to talk about immutable infrastructures in SQA.

So who here has heard about immutable infrastructures?
- Not many, just a few people

What about Docker? Or Vagrant?
- More people raise hands
More people I guess. So some of you guys probably know what an immutable infrastructure is - just not the term "immutable infrastructure". But those tools, docker and vagrant, exist to achieve a level of immutability in your infrastructure.

So we know what immutability is. It's something that can't change. For example, in java whenever you modify a string, a new string is returned.

But what about the term infrastructure? Well, in the most basic sense, it's an aggregation of various parts in an organization or system, in order to perform some kind of an operation. Like roads that allow us to go from one place to another. But in our case, you can think of it as the environment that allows your software to run.

So immutable infrastructure means a software environment that cannot change. In order to add remove or modify something in the environment, you have to create a new environment with those changes. Just like strings

Say you have a web server. The app is built using java. You're going to need to install the jvm so that we can run it. You also need to configure firewall so that  ...




Let's go over what it is. "Immutable infrastructure is an approach to managing services and software deployments on IT resources wherein components are replaced rather than changed. An application or services is effectively redeployed each time any change occurs."

In other words, destroy and recreate the entire infrastructure after an IT-level update. So like instead of adding a new dependency such as python3 to an existing system, you add that dependency in a template file (which is sort of like a blueprint for your system. it tells what needs to be installed, configured and some other stuff). Then you use a tool like docker or vagrant to recreate the environment. So instead of manually changing a system by ssh'ing into it, you automate it. And this sorta sounds like a configuration management using something like ansible or puppet, but the difference is that the entire environment is always recreated. Updates are never patched on top of the existing environment like those configuration management tools are mainly used for.

So why should we use it? What problem is it trying to solve? I mean, it works on my machine. Right? Well, that's exactly what we're trying to avoid. If you've ever developed or tested in a large team, this is a fairly common problem. Not everyone's machine is sync'ed with the others, so you may have a different version of a runtime and end up spending hours trying to realize that. Ideally, we'd have the same environment for every person in the team. And this is where immutable infrastructures aims to solve.






In other words, destroy and start the service again; Don't ever update the current service.

So what does this solve? Well, I have a story that everyone in this building can relate to. So I'm working with this developer...so I'm just like sitting in my cubicle, pulling my hair out, trying to get this thing to work. well, it turns out that he updated his jvm version and didn't tell anyone about it. And this is actually the key problem immutable infrastructures tries to solve.

So how does it work?

To give you guys a better understanding what it tries to solve, I'll tell you guys a story. So I'm working

 A developer checks in his code. It includes a lot of new libraries. When a tester pulls the code and tries to test it, it doesn't work. But the developer insists that it does, so he shows it to the tester on his machine. "Look, it works on my machine". Hours later,

For example, Someone had to update their jvm in order to use a library, and they check in their code. So when thWhen a tester wants to test this code, instead of updating their jvm on their machine, they would start with a fresh OS with all of the changes in place. This keeps everyone in sync. In development, testing or even production.
