'use strict';

var gulp = require('gulp');
var config = require('../gulp.config.js');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Uglify & Concat JS
gulp.task('js', function () {
  gulp.src([config.js + '**/*.js'])
    .pipe(plumber())
    //.pipe(concat('main.js')) if you need concat scripts
    .pipe(uglify())
    .pipe(gulp.dest(config.dist + 'js/'));
});
