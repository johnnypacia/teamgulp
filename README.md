Gulp ![Gulp Logo](./gulp_logo.png)

# What is Gulp?
===========================

Find the Gulp documentation [here](https://github.com/gulpjs/gulp/tree/master/docs)

## What it is:
------------------------------
Gulp is a streaming build system that helps automate tedious tasks in your development workflow. It increases work efficiency

### What are Streams?
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


## What it does:
------------------------------
**Remember 'DRY'?** Gulp helps to DRY things up by automating repetitive tasks. 

### Things *Gulp* can do:
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


## Why we might want to use it:
------------------------------
**Grunt** is also a Node.js-based task runner and does the same thing as **Gulp**. So why use **Gulp**? 

- *Grunt* plug-ins often perform multiple tasks; *Gulp* plug-ins are designed to do one thing only.
- *Grunt* requires plug-ins for basic functionality such as file watching; *Gulp* has them built-in.
- *Grunt* uses JSON-like data configuration files; *Gulp* uses leaner, simpler JavaScript code.



# How do we use it?
==============================

## Getting Started
------------------------------
### Step 1: Install Node.js
[Install it from the Command Line](https://github.com/nodejs/node-v0.x-archive/wiki/Installing-Node.js-via-package-manager)

Once installed, open terminal and enter:
`node -v`

This will display the Node.js version number. Same can be done with `npm -v`

### Step 2: Install Gulp
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


## How To Use
------------------------------
### Plugins
**Gulp** has 
You can see plugins [here](http://gulpjs.com/plugins/) or by typing `npm search gulpplugin` 

To install:
`npm install <gulp-plugin> --save-dev`

Then require it and save it to a variable in your gulpfile.

**The docs reccommend these plugins:**
* [gulp-changed](https://github.com/sindresorhus/gulp-changed) --only pass through changed files
* [gulp-cached](https://github.com/contra/gulp-cached) --in-memory file cache, not for operation on sets of files
* [gulp-remember](https://github.com/ahaurw01/gulp-remember) --pairs nicely with gulp-cached
* [gulp-newer](https://github.com/tschaub/gulp-newer) --pass through newer source files only, supports many:1 source:dest

### The Four Main Gulp APIs:

#### gulp.src(globs[, options])
Emits files matching provided glob or an array of globs. Returns a stream of Vinyl files that can be piped to plugins.

* **globs**
Type: `String` or `Array`
Glob or array of globs to read.
A glob that begins with `!` excludes matching files from the glob results up to that point
* **options**
Type: `Object`
Options to pass to node-glob through glob-stream.

#### gulp.dest(path[, options])
Can be piped to and it will write files. Re-emits all data passed to it so you can pipe to multiple folders. Folders that don't exist will be created.

* **path**
Type: `String` or `Function`
The path (output folder) to write files to. Or a function that returns it, the function will be provided a [vinyl File instance](https://github.com/gulpjs/vinyl).
* **options**
Type: `Object`

#### gulp.task(name[, deps, fn])
Defines a task that gulp will run

* **name**
Type: `String`
The name of the task. Tasks that you want to run from the command line should not have spaces in them.
* **deps**
Type: `Array`
An array of tasks to be executed and completed before your task will run.
***Note:** Are your tasks running before the dependencies are complete? Make sure your dependency tasks are correctly using the async run hints: take in a callback or return a promise or event stream.*
You can also omit the function if you only want to run a bundle of dependency tasks:
`gulp.task('build', ['array', 'of', 'task', 'names']);`
***Note:** The tasks will run in parallel (all at once), so don't assume that the tasks will start/finish in order.*
* **fn**
Type: `Function`
The function performs the task's main operations.

Tasks can be made asynchronous if its fn does one of the following:
- Accept a callback
- Return a stream
- Return a promise

#### gulp.watch(glob[, opts], tasks) *OR* gulp.watch(glob[, opts, cb]) 
-Watch files and do something when a file changes. This always returns an EventEmitter that emits `change` events.

* **glob**
Type: `String` or `Array`
A single glob or array of globs that indicate which files to watch for changes.
* **opts**
Type: `Object`
Options, that are passed to [gaze](https://github.com/shama/gaze).
* **tasks**
Type: `Array`
Names of task(s) to run when a file changes, added with gulp.task()
* **cb(event)**
Type: `Function`
Callback to be called on each change.

The callback will be passed an object, event, that describes the change:

**event.type**
Type: `String`
The type of change that occurred, either added, changed or deleted.

**event.path**
Type: `String`
The path to the file that triggered the event.

### concatenate scripts
### pre-process files
### minify/uglify code
### automate application setup using Tasks
### pre-process SASS files using Tasks

### CLI flags
gulp has very few flags to know about. All other flags are for tasks to use if needed.

* `-v` or `--version` will display the global and local gulp versions
* `--require <module path>` will require a module before running the gulpfile. This is useful for transpilers but also has other applications. You can use multiple `--require` flags
* `--gulpfile <gulpfile path>` will manually set path of gulpfile. Useful if you have multiple gulpfiles. This will set the CWD to the gulpfile directory as well
* `--cwd <dir path>` will manually set the CWD. The search for the gulpfile, as well as the relativity of all requires will be from here
* `-T` or `--tasks` will display the task dependency tree for the loaded gulpfile
* `--tasks-simple` will display a plaintext list of tasks for the loaded gulpfile
* `--color` will force gulp and gulp plugins to display colors even when no color support is detected
* `--no-color` will force gulp and gulp plugins to not display colors even when color support is detected
* `--silent` will disable all gulp logging


# References
==============================
* [Gulp Docs on GitHub](https://github.com/gulpjs/gulp)

* [Sitepoint Intro to Gulp](http://www.sitepoint.com/introduction-gulp-js/)

* [Brandon Clapp's Gulp Overview](http://brandonclapp.com/what-is-gulp-js-and-why-use-it/)

* [Smashing Magazine's Gulp Explanation](https://www.smashingmagazine.com/2014/06/building-with-gulp/)

* [Stream Handbook](https://github.com/substack/stream-handbook)

* [gulp API docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md)

* [gulp CLI docs](https://github.com/gulpjs/gulp/blob/master/docs/CLI.md)
