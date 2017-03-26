292f36-4ecdc4-f7fff7-ff6b6b-ffe66d

# Immutable Infrastructures in SQA

## Introduction
I'm Byung. This is Robby. And we're going to talk about immutable infrastructures in SQA.

So who here has heard about immutable infrastructures?
- Not many, just a few people

What about Docker? Or Vagrant?
- More people raise hands
More people I guess. So some of you guys probably know what an immutable infrastructure is - just not the term itself. But those tools, docker and vagrant, exist to achieve a level of immutability in your infrastructure.

So we know what immutability is. It's something that can't change. For example, in java whenever you modify a string, a new string is returned and the original string is not modified.

But what about the term infrastructure? Well, in the most basic sense, it's a combination of various parts in an organization or system, in order to perform some kind of an operation. Like roads that allow us to go from one place to another. Lighthouses to guide ships. But in our case, you can think of it as the environment that allows our software to run.

So immutable infrastructure means a software environment that cannot change. In order to add remove or modify something in the environment, you have to create a new environment with those changes in place. This is just like strings in java. You know, if you try to modify it, it returns a new string with those changes.

All in all, <read from slide>

In other words, <read from slide> such as introducing new dependencies or configurations

Let's go over a very simple scenario where this would be useful. Let's create a youtube video downloader. if you remember back in the days, youtube didn't buffer their videos so you could literally download the videos by opening up your browser's devtools, find the video it downloaded, and save that to your computer. but now youtube buffers them, so you'd only get chunks of the video as they play. what we want to do is to request those chunks in parallel and merge them into a single video. that's literally how youtube downloaders work these days. but let's suppose that we want to add an option to convert it to an audio format. so a developer finds a solution, implements it and pushes it to github. then QA pulls the changes and tries to test it, but it doesn't work. and what does the typical developer say? it works on my machine. i'm sure most of us have come across this scenario. well, it turns out the developer's machine includes a dependency that converts video to audio, but the tester's machine doesn't have it. with vagrant or docker, they would be running on the same environment with the same dependencies or configurations. whenever something is needed, they would add it to a template file. the others like QA would pull it and recreate their environment with those changes. so now everyone's machines are in sync.

Again, this is a very simple example, with a single dependency. However, in a more complicated setup like a web server, you could create users, configure firewall, install runtimes, and so on. you could also do the same with other servers. like one for postgres and one for redis. and vagrant or docker can create the entire infrastructure for you. not only will everyone's environment will be the same, it makes integration testing much easier for QA.

Now we're going to go over these tools, starting with vagrant.




And the app is built using java. So you need the correct jvm version to run it.

And for security measures, you probably want to create a privileged user so you're not running as root.

You also need to configure the firewall so that it only exposes certain ports.

And possibly more depending on your requirements.

And that's just the web server.

Now you need to set up a database server. Say we're using postgres. So we need to make sure we're using the correct posgres version. Create the appropriate users. And finally setup the database and its tables. Possibly prepopulate them with initial data. Also you have to remember to expose only the port that it's running on. And more.

Then you may have more servers for different tasks.

You can already tell how fragile this will be. As more and more changes are made to the infrastructure, the harder it will be to track them down. Not only that, but think about the development and QA. They're not always going to be in sync with every single change that occurs at the IT level.

Traditionally, this is problem is solved by configuration management tools like puppet or chef. They can automate the process of setting up users, installing dependencies and so on. But they only work if you already have those systems in place. Docker and vagrant takes a step further so they instantiate those systems for you. And then you can choose to use puppet or chef on top of it.






Let's go over what it is. "Immutable infrastructure is an approach to managing services and software deployments on IT resources wherein components are replaced rather than changed. An application or services is effectively redeployed each time any change occurs."

In other words, destroy and recreate the entire infrastructure after an IT-level update. So like instead of adding a new dependency such as python3 to an existing system, you add that dependency in a template file (which is sort of like a blueprint for your system. it tells what needs to be installed, configured and some other stuff). Then you use a tool like docker or vagrant to recreate the environment. So instead of manually changing a system by ssh'ing into it, you automate it. And this sorta sounds like a configuration management using something like ansible or puppet, but the difference is that the entire environment is always recreated. Updates are never patched on top of the existing environment like those configuration management tools are mainly used for.

So why should we use it? What problem is it trying to solve? I mean, it works on my machine. Right? Well, that's exactly what we're trying to avoid. If you've ever developed or tested in a large team, this is a fairly common problem. Not everyone's machine is sync'ed with the others, so you may have a different version of a runtime and end up spending hours trying to realize that. Ideally, we'd have the same environment for every person in the team. And this is where immutable infrastructures aims to solve.






In other words, destroy and start the service again; Don't ever update the current service.

So what does this solve? Well, I have a story that everyone in this building can relate to. So I'm working with this developer...so I'm just like sitting in my cubicle, pulling my hair out, trying to get this thing to work. well, it turns out that he updated his jvm version and didn't tell anyone about it. And this is actually the key problem immutable infrastructures tries to solve.

So how does it work?

To give you guys a better understanding what it tries to solve, I'll tell you guys a story. So I'm working

 A developer checks in his code. It includes a lot of new libraries. When a tester pulls the code and tries to test it, it doesn't work. But the developer insists that it does, so he shows it to the tester on his machine. "Look, it works on my machine". Hours later,

For example, Someone had to update their jvm in order to use a library, and they check in their code. So when thWhen a tester wants to test this code, instead of updating their jvm on their machine, they would start with a fresh OS with all of the changes in place. This keeps everyone in sync. In development, testing or even production.
