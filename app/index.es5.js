'use strict';

var generators = require('yeoman-generator');
var path = require('path');

module.exports = generators.Base.extend({
  constructor: constructor,
  template: template,
  dependencies: dependencies
});

function constructor() {
  generators.Base.apply(this, arguments);
}

function template() {
  this.sourceRoot(path.join(__dirname, 'template'), this);
  var source = this.templatePath();
  var dest = this.destinationPath('.');

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
