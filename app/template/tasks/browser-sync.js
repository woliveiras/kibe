'use strict';

var gulp = require('gulp');
var config = require('../gulp.config.js');
var browserSync = require('browser-sync').create();

var files = [
  'dist/**/*.html',
  'dist/css/**/*.css',
  'dist/js/**/*.js'
];

var options = {
  open: false,
  server: {
    baseDir: config.dist
  }
};

// Reload Browsers
gulp.task('browser-sync', function () {
  browserSync.init(files, options);

  gulp.watch(config.js + '**/*.js', ['js']);
  gulp.watch(config.styl + '**/*.styl', ['stylus']);
  gulp.watch([config.dev + '**/*.html', config.dev + '**/*.txt'], ['move']);
  gulp.watch(files).on('change', browserSync.reload);
});
