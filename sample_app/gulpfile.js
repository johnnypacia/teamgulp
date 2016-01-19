var gulp = require('gulp');
// include plug-ins
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
var install = require('gulp-install');


//Runs NPM install 
gulp.task('install', function() {
  gulp.src(['./package.json'])
  .pipe(install());
});

// CSS concat and minify
gulp.task('styles', function() {
  gulp.src(['./src/styles/*.css'])
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/styles/'));
});

//SASS to CSS compiler
gulp.task('sass', function () {
  gulp.src('./src/styles/*.scss')
   .pipe(sass({outputStyle: 'compressed'}))
   .pipe(gulp.dest('./build/styles/'));
});

//Runs all task with one command
gulp.task('default', ['sass','styles'], function() {
  console.log('defaultin')

  gulp.watch('./src/styles/*.scss', function() {
    console.log('sassin')
    gulp.run('sass');
  })

  gulp.watch('./src/styles/*.css'), function() {
    gulp.run('styles');
  }

});

