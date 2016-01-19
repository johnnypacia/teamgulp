# Gulp ![Gulp Logo](./gulp_logo.png)

## What is Gulp?
===========================

Find the Gulp documentation [here](https://github.com/gulpjs/gulp/tree/master/docs)

### What it is:
------------------------------
Gulp is a streaming build system that helps automate tedious tasks in your development workflow. It increases work efficiency

#### What are Streams?
> Streams come to us from the earliest days of unix and have proven themselves over the decades as a dependable way to compose large systems out of small components that do one thing well. You can then plug the output of one stream to the input of another and use libraries that operate abstractly on streams to institute higher-level flow control.
>- substack 

**Gulp is built on Node.js.** The Gulp source and your Gulp file in your app (where tasks will be defined) are written in Javascript.

>The most important Gulp concept is streams. Think of your files passing through a pipe; at one or more points along that pipe, an action is taken. For example, we could insert all our JavaScript files into a scripts pipe which:

> - concatenates files into one
> - removes console and debugger statements
> - minifies the code
> - puts the resulting file in a specific location.

>Data is input into one method. That method outputs new data — which is used as input for the next method. It’s reminiscent of jQuery chaining which applies different actions in sequential >order, e.g.
>```
>$("#element").text("hello world!").addClass("myclass").fadeIn();
>```
>- from sitepoint


### What it does:
------------------------------

DRY is a term we talk about in this class a bit. Gulp helps to DRY up development by automating repetitive tasks. 

#### Things *Gulp* can do:
* CSS preprocessing
* lint your JavaScript and CSS
* minification
* Running code analysis
* live reloading
* parse your templates
* compile your LESS when the file has changed
* Copying modified files to an output directory
* Refreshing your browser when you save a file.
* Running unit tests quickly


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
[Install it from the Command Line](https://github.com/nodejs/node-v0.x-archive/wiki/Installing-Node.js-via-package-manager)

Once installed, open terminal and enter:
`node -v`

This will display the Node.js version number. Same can be done with `npm -v`

#### Step 2: Install Gulp
1. Install gulp globally:

`$ npm install --global gulp`

2. Install gulp in your project devDependencies:

`$ npm install --save-dev gulp`

3. Create a gulpfile.js at the root of your project:

`var gulp = require('gulp');`

gulp.task('default', function() {
  // place code for your default task here
});

4. Run gulp:

`$ gulp`

Default task will run, will do nothing.

#### Step 3: Set Up Your Project


### How To Use
------------------------------
#### Plugins
**Gulp** has 
You can see plugins [here](http://gulpjs.com/plugins/) or by typing `npm search gulpplugin` 

**The docs reccommend these plugins:**
* [gulp-changed](https://github.com/sindresorhus/gulp-changed) --only pass through changed files
* [gulp-cached](https://github.com/contra/gulp-cached) --in-memory file cache, not for operation on sets of files
* [gulp-remember](https://github.com/ahaurw01/gulp-remember) --pairs nicely with gulp-cached
* [gulp-newer](https://github.com/tschaub/gulp-newer) --pass through newer source files only, supports many:1 source:dest

#### How to Watch Files for Changes:
#### concatenate scripts
#### pre-process files
#### minify/uglify code
#### automate application setup using Tasks
#### pre-process SASS files using Tasks


## References
==============================
* [Gulp Docs on GitHub](https://github.com/gulpjs/gulp)

* [Sitepoint Intro to Gulp](http://www.sitepoint.com/introduction-gulp-js/)

* [Brandon Clapp's Gulp Overview](http://brandonclapp.com/what-is-gulp-js-and-why-use-it/)

* [Smashing Magazine's Gulp Explanation](https://www.smashingmagazine.com/2014/06/building-with-gulp/)

* [Stream Handbook](https://github.com/substack/stream-handbook)

* [gulp API docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md)

* [gulp CLI docs](https://github.com/gulpjs/gulp/blob/master/docs/CLI.md)
