# Gulp 

## What is Gulp?
===========================

Find the Gulp documentation [here](https://github.com/gulpjs/gulp/tree/master/docs)

### What it is:
------------------------------
Gulp is a streaming build system that helps automate tedious tasks in your development workflow. It increases work efficiency 

#### What are Streams?
> Streams come to us from the earliest days of unix and have proven themselves over the decades as a dependable way to compose large systems out of small components that do one thing well. You can then plug the output of one stream to the input of another and use libraries that operate abstractly on streams to institute higher-level flow control.
- substack 

As an analogy, streams are like:
>a conveyor belt coming towards you or leading away from you (or sometimes both). You take stuff off an input stream, you put stuff on an output stream. Some conveyors you can think of as coming out of a hole in the wall - they aren't seekable, reading or writing is a one-time-only deal. Some conveyors are laid out in front of you, and you can move along choosing whereabouts in the stream you want to read/write - that's seeking.
- [Stack Overflow](http://stackoverflow.com/questions/1216380/what-is-a-stream)

[Stream Handbook](https://github.com/substack/stream-handbook)

#### Gulp is built on Node.js. The Gulp source and your Gulp file in your app (where tasks will be defined) are written in Javascript.

It’s reminiscent of jQuery chaining which applies different actions in sequential order, e.g.

```
$("#element").text("hello world!").addClass("myclass").fadeIn();
```

### What it does:
------------------------------

DRY is a term we talk about in this class a bit. Gulp helps to DRY up development by automating repetitive tasks. 

#### With *Gulp* you can:
- write tasks to lint your JavaScript and CSS
- parse your templates
- compile your LESS when the file has changed


### Why we might want to use it:
------------------------------

**Grunt** is also a Node.js-based task runner and does the same thing as **Gulp**. So why use **Gulp**? 

- *Grunt* plug-ins often perform multiple tasks; *Gulp* plug-ins are designed to do one thing only.
- *Grunt* requires plug-ins for basic functionality such as file watching; *Gulp* has them built-in.
- *Grunt* uses JSON-like data configuration files; *Gulp* uses leaner, simpler JavaScript code.

#### Pros:

#### Cons:



## How do we use it?
==============================

### Getting Started
------------------------------
#### Step 1: Install Node.js

#### Step 2: Install Gulp

#### Step 3: Set Up Your Project


### How To Use
------------------------------
#### Plugins
You can see plugins [here](http://gulpjs.com/plugins/) or by typing ```npm search gulpplugin``` 

#### How to Watch Files for Changes:
#### concatenate scripts
#### pre-process files
#### minify/uglify code
#### automate application setup using Tasks
#### pre-process SASS files using Tasks

### gulp API
[docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md)

### gulp CLI
[docs](https://github.com/gulpjs/gulp/blob/master/docs/CLI.md)
