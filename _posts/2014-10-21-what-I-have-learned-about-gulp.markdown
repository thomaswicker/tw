---
layout: post
title:  "What I Learned About GulpJS"
date:   2014-10-21 13:14:49
published: true
categories: javascript
tags:
- javascript
- gulp
---


<div class="post-img-right img-md">
	<img src="/images/gulp_logo.png">
</div>

Some time back.. before the age of my SASS enlightment, I was writng in pure CSS, pure Javascript, no compiling, no minifying, nothing. Fast forward a few years and I had finally jumped on the SASS bandwagon, far later than I should've I admit. This is what got me interested in the world of task running and the need for code compiling. I'd heard of GruntJS through Meetups and friends, but honestly it scared me somewhat. I wasn't quite comfortable with Javascript at that point and really much more of a GUI type guy.  

I am a frequent listener of the [Shoptalk Show](http://www.shoptalkshow.com/ "Shoptalk Show") and during one of those episodes head them discuss an app called [Codekit](https://incident57.com/codekit/ "Codekit App") which could do compilation/minification of SASS, JS, etc. I downloaded it and fell in love quickly. I purchased a license and began integrating it heavily into all my projects. It was a beautiful and clean UI, solid functionality and for the most part unobtrussive to my workflow.  

I used [Codekit](https://incident57.com/codekit/ "Codekit App") for almost a year before I decided to feed my inner geek and give GruntJS a shot. I was getting more comfortable with Javascript and just starting to play with command line. I sat down one night and spun my wheels for several hours researching on Stack Overflow and reading blog posts about how to set it all up. After about 2 more nights of hammering away I finally produced a decent grunt.js file that I could use with my projects. Albeit there were a few hiccups switching off of [Codekit](https://incident57.com/codekit/ "Codekit App"), I made it work. The switch made handing off files to other developers easier as they didn't have to have a [Codekit](https://incident57.com/codekit/ "Codekit App") license, retain the same [Codekit](https://incident57.com/codekit/ "Codekit App") config, etc. They could just Git my files and run [Grunt](http://gruntjs.com "Grunt"). I continuing using Grunt for about 6 months until I heard about a new kid on the block, [Gulp](http://www.gulpjs.com "GulpJS"). 

> Gulp.js is a task runner that can greatly speed up your front-end development process. The purpose of a task runner is to automate tedious tasks that you have to do over and over again in the course of a project.  

So I decided to branch out and give it the old college try. I quickly found it alot easier to consume and use as [Gulp](http://www.gulpjs.com "GulpJS") is constructed with plain old Javascript, not JSON. It seemed to be gathering a lot of attention and love from the Dev community with plugins pouring in by the dozens. I switched and never looked back. [Gulp](http://www.gulpjs.com "GulpJS") has been in my workflow for over a year now and I cannot imagine it any different.  

It took a lot of tweaking to get my file just right... but it now compiles and minifies my JS, compiles my SASS, autoprefixes everything, live reloads my browser on the fly and makes my workflow at least 50% faster. So how do you get started?


### 10 Steps to your own gulp.js setup

###### Step One
First off I assume your already have Ruby, Ruby Gems and SASS on your system. If you do not, there are plenty of tutorials out there on how to install these through command line. After these are installed, you will then need to open up terminal and install gulp. We will be using the -g flag here to install gulp globally on your system. You only have to install gulp with the -g flag your first time on any new system. You will also later be installing gulp as a dev dependency within the folder iteself, and this will be done for every new project.  


{% highlight javascript %}
npm install gulp -g
{% endhighlight %}  

###### Step Two
**cd** into your Sites folder or wherever you would like to create your new site and then use the mkdir command to create a new folder. **cd** into the newfolder and run **npm init**. Of course your can just do all of this via finder up to the **npm init** command but you will be using command line regularly with the gulp workflow so you might as well get comfortable with a few other commands :)


{% highlight javascript %}
mkdir my-new-project
cd my-new-project
{% endhighlight %}  

{% highlight javascript %}
npm init
{% endhighlight %}  

NPM will walk you through a quick set up process to create a new package.json file within your project. After you answer a few quick questions through terminal prompts, your newly created package.json should look something like this. 

{% highlight javascript %}
{
  "name": "my-new-project",
  "version": "0.0.0",
  "description": "My New project",
  "main": "gulpfile.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": ""
}
{% endhighlight %}  

###### Step Three
Next, run the following commands to install gulp in your project as a dev dependency. Note the **--save-dev** as this is different than the **-g** flag. **--save-dev** tells our package.json file that anything with these flags should be regarded as this project's unique dev dependencies.

{% highlight javascript %}
npm install gulp --save-dev
{% endhighlight %}  

###### Step Four
Now run the following commands with your **--save-dev** flag at the end of the command string. These are all of the gulp plugins I am using in this example, but of course there are hundreds if not thousands out there which you can integrate into your own workflow.

{% highlight javascript %}
npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-uglify gulp-concat gulp-livereload gulp-rename --save-dev
{% endhighlight %}  


###### Step Five
At the top of your new gulpfile.js, you now need to set up the requires for your file to include the related dependencies you have defined. 

{% highlight javascript %}
//gulp requires
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    livereload = require('gulp-livereload');
{% endhighlight %}  


###### Step Six
Below we set up some basic Javascript variables to make it easier to refer to within our gulp tasks. This creates one central place to change your pathing within the file as opposed to changing within each task.

{% highlight javascript %}
//source variables - you can use the below or change to whatever the paths are for your SASS, JS, and HTML
var jsSources = ['components/js/*.js'];
var sassSources = ['components/sass/application.scss'];
var htmlSources = ['/**/*.html'];
{% endhighlight %}  


###### Step Seven
Now the fun part... it's time to set up your gulp tasks! Of course you can and should change all of the pathing to meet your specfic project needs.

{% highlight javascript %}
//gulp javascript tasks
gulp.task('js', function() {
  return gulp.src(jsSources)
    .pipe(concat('application.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js'))
});

//gulp sass tasks
gulp.task('sass', function() {
  return gulp.src(sassSources)
     .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css'));
});

//gulp html tasks
gulp.task('html', function () {
    gulp.src(htmlSources)
});
{% endhighlight %}  


###### Step Eight
Now to tie things up in a nice pretty bow, we set up our **gulp watch** command to watch for changes and compile on the fly.

{% highlight javascript %}
//gulp watch tasks
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(jsSources, ['js']).on('change', livereload.changed);
  gulp.watch('components/sass/**/*.scss', ['sass']).on('change', livereload.changed);
  gulp.watch('components/css/application.min.css', ['css']).on('change', livereload.changed);
  gulp.watch(htmlSources, ['html']).on('change', livereload.changed);
});
{% endhighlight %} 


###### Step Nine
Finally we set up a Gulp **default command** so that we can run all gulp tasks at once with the single command **gulp** via terminal.

{% highlight javascript %}
//runs all tasks through one command of 'gulp'
gulp.task('default', ['js', 'sass', 'html', 'watch']);
{% endhighlight %}

###### Step Ten
There you have it, you have created your first full fledged gulp.js file! Now you simply include this file along with the package.json in each new project. Change directory into the project folder, run **npm install**, then run **gulp** and enjoy.


**You can download my current gulp file through my Github repository [here](https://github.com/thomaswicker/gulpjs "Github Repo") or scrape it from the code below.**    


##### My current gulp.js file


{% highlight javascript %}
//gulp requires
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    livereload = require('gulp-livereload');

//source variables
var jsSources = ['components/js/*.js'];
var sassSources = ['components/sass/application.scss'];
var htmlSources = ['index.html', 'about/index.html', 'contact/index.html', 'portfolio/index.html', 'photography/index.html', 'resume/index.html', '_layouts/*.html', '_includes/*.html'];


//gulp javascript tasks
gulp.task('js', function() {
  return gulp.src(jsSources)
    .pipe(concat('application.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js'))
});

//gulp sass tasks
gulp.task('sass', function() {
  return gulp.src(sassSources)
     .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css'));
});

//gulp html tasks
gulp.task('html', function () {
    gulp.src(htmlSources)
});

//gulp watch tasks
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(jsSources, ['js']).on('change', livereload.changed);
  gulp.watch('components/sass/**/*.scss', ['sass']).on('change', livereload.changed);
  gulp.watch('components/css/application.min.css', ['css']).on('change', livereload.changed);
  gulp.watch(htmlSources, ['html']).on('change', livereload.changed);
});


//runs all tasks through one command of 'gulp'
gulp.task('default', ['js', 'sass', 'html', 'watch']);

{% endhighlight %}

