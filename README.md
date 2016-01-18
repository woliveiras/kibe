[![Build Status](https://travis-ci.org/woliveiras/kibe.svg)](https://travis-ci.org/woliveiras/kibe) 
[![Coverage Status](https://coveralls.io/repos/woliveiras/kibe/badge.svg?branch=master&service=github)](https://coveralls.io/github/woliveiras/kibe?branch=master)

# kibe

A substitute for the [Pastel](https://github.com/woliveiras/pastel).

Kibe is a simple Yeoman Generator to start projects with the most common tasks of my workflow using Gulp.

**I use:**

- [NodeJS](http://nodejs.org/)
- [Gulpjs](http://gulpjs.com/)
- [Bower](http://bower.io/)
- [Stylus](https://learnboost.github.io/stylus/)
- [Kouto-swiss](http://kouto-swiss.io/)
- [Rupture](http://jenius.github.io/rupture/)
- [Vendor prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) - [Look here to ;)](http://shouldiprefix.com/)
- [SMACSS](https://smacss.com/)
- [Image sprites](https://css-tricks.com/css-sprites/)
- [CSS, JS and Images minify](https://developers.google.com/speed/docs/insights/MinifyResources)

### Operational System dependencies

- [NodeJS](http://nodejs.org/)

## How to use?

### Instalation

Install [Yeoman](http://yeoman.io/) if you don't have installed on your system:

```
npm i -g yo
```

Install Kibe on your project:

```
npm i generator-kibe
```

Wait and enjoy!!!

## The tasks

### Configs on Gulp

In the `gulp.config.js` file have the variables:

```
{
  dev     : './src/',
  js      : './src/js/',
  mainjs  : 'main.js',
  styl    : './src/styl/',
  sprites : './src/img/sprites/',
  dist    : './dist/',
  img     : './dist/img/'
}
```

### On end of your project

Run:

```
gulp
```

Simple, not?

### To development

Run `gulp` one time to prepare the `dist` folder.

```
gulp server
```

Write your code on `scr` folder.

When finish your work the `dist` folder already exists and is solemnly send to production!

## All tasks

### Uglify & Concat JS

Concat and minify JS files.

Run:

```
gulp js
```

The concat option on this task is commented to you active if is needed concatenate JS files on your project.

### Compile Stylus (<3)

Compile Stylus and execute `koutoSwiss`, `prefixer`, `jeet` and `rupture` plugins.

Run:

```
gulp stylus
```

### Minify images

Optimize images with the options:

```
{
  optimizationLevel: 3, 
  progressive: true,
  interlaced: true
}
```

Run:

```
gulp imagemin
```

### Create image Sprites

Get images on `./src/img/sprites/` and create a image sprite on `/img/sprite.png`.

Run:

```
gulp sprites
```

### Reload Browsers

Watch files `[html, css, js]` on `dist` and reload browsers when you save changes on your editor.

Run:

```
gulp browser-sync
```

Thanks [@darlanmendonca](http://twitter.com/darlanmendonca)
