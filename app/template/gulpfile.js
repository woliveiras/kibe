var gulp = require('gulp');
var config = require('./gulp.config');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

require('./tasks/scripts.js');
require('./tasks/styles.js');
require('./tasks/imagemin.js');
require('./tasks/sprites.js');
require('./tasks/move.js');
require('./tasks/browser-sync.js');
require('./tasks/server.js');
require('./tasks/default.js');
