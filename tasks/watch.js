'use strict';

var gulp = require('gulp');
var config = require('../gulp.config.js');

gulp.task('watch', function() {
  gulp.watch(config.lintFiles, ['lint']);
});
