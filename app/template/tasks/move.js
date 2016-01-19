'use strict';

var gulp = require('gulp');
var config = require('../gulp.config.js');

var files = [
  config.dev + '**/*.html',
  config.dev + '**/*.txt'
];

gulp.task('move', function() {
  gulp.src(files)
    .pipe(gulp.dest(config.dist));
});
