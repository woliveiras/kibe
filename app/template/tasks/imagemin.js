'use strict';

var gulp = require('gulp');
var config = require('../gulp.config.js');
var plumber = require('gulp-plumber');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');

var options = {
  optimizationLevel: 3,
  progressive: true,
  interlaced: true
};

// Minify images
gulp.task('imagemin', function () {
  gulp.src(config.img + '/**/*')
    .pipe(plumber())
    .pipe(cache(imagemin(options)))
    .pipe(gulp.dest(config.img));
});
