'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config = require('../gulp.config.js');

gulp.task('lint', function() {
  gulp
    .src(config.lintFiles)
    .pipe(jshint())
    .pipe(jshint.reporter(function() {
      gutil.beep();
    }))
    .pipe(jshint.reporter(stylish));
});
