'use strict';

var gulp = require('gulp');
var config = require('../gulp.config.js');
var spritesmith = require('gulp.spritesmith');

var options = {
  imgName: '../img/sprite.png',
  cssName: 'sprites.css',
  algorithm: 'binary-tree',
};

// Create Sprites
gulp.task('sprites', function() {
  var spriteData = gulp.src(config.sprites + '*.*')
    .pipe(spritesmith(options));

  spriteData.img.pipe(gulp.dest(config.img));
  spriteData.css.pipe(gulp.dest(config.dist + 'css/'));
});
