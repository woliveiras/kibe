var gulp          = require('gulp'),
    config        = require('./gulp.config')(),
    plumber       = require('gulp-plumber'),
    stylus        = require('gulp-stylus'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    cache         = require('gulp-cache'),
    imagemin      = require('gulp-imagemin'),
    spritesmith   = require("gulp.spritesmith"),
    jeet          = require('jeet'),
    rupture       = require('rupture'),
    koutoSwiss    = require('kouto-swiss'),
    prefixer      = require('autoprefixer-stylus'),
    browserSync   = require('browser-sync').create();

// Uglify & Concat JS
gulp.task('js', function () {
    return gulp.src([config.js + '**/*.js'])
        .pipe(plumber())
        //.pipe(concat('main.js')) if you need concat scripts
        .pipe(uglify())
        .pipe(gulp.dest(config.dist + 'js/'));
});

// Compile Stylus
gulp.task('stylus', function () {
    return gulp.src(config.styl + 'styles.styl')
    .pipe(plumber())
    .pipe(stylus({
      use:[
        koutoSwiss(),
        prefixer(),
        jeet(),
        rupture()],
        compress: true
    }))
    .pipe(gulp.dest(config.dist + 'css/'));
});

// Minify images
gulp.task('imagemin', function () {
    return gulp.src(config.imgSrc + '/**/*')
      .pipe(plumber())
      .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
      .pipe(gulp.dest(config.imgDist));
});

// Create Sprites
gulp.task('sprites', function() {
    var spriteData =
        gulp.src(config.sprites + '*.*')
          .pipe(spritesmith({
              imgName: '../img/sprite.png',
              cssName: 'sprites.css',
              algorithm: 'binary-tree',
          }));

    spriteData.img.pipe(gulp.dest(config.img));
    spriteData.css.pipe(gulp.dest(config.dist + 'css/'));
});

gulp.task('move', function() {
  return gulp.src([config.dev + '**/*.html', config.dev + '**/*.txt'])
    .pipe(gulp.dest(config.dist));
})

// Reload Browsers
gulp.task('browser-sync', function () {
	var files = [
		'dist/**/*.html',
		'dist/css/**/*.css',
		'dist/js/**/*.js'
	];

	browserSync.init(files, {
    	open: false,
		server: {
		 baseDir: config.dist
		}
	});

	gulp.watch(config.js + '**/*.js', ['js']);
	gulp.watch(config.styl + '**/*.styl', ['stylus']);
	gulp.watch([config.dev + '**/*.html', config.dev + '**/*.txt'], ['move']);
	gulp.watch(files).on('change', browserSync.reload);
});

gulp.task('server', ['browser-sync']);
gulp.task('default', ['js', 'stylus', 'imagemin', 'move'])
