'use strict';

let generators = require('yeoman-generator');
let path = require('path');

module.exports = generators.Base.extend({
  constructor,
  template,
  dependencies
});

function constructor() {
  generators.Base.apply(this, arguments);
}

function template() {
  this.sourceRoot(path.join(__dirname,  'template'), this);
  let source = this.templatePath();
  let dest = this.destinationPath('.');

  this.fs.copy(source, dest, {});
  this.fs.copy(this.templatePath('.*'), dest, {});
}

function dependencies() {
  this.installDependencies({
    bower: true,
    npm: true,
    skipInstall: true
  });
}
