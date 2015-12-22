'use strict';

var generators = require('yeoman-generator');
var path = require('path');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  template: function() {
    this.sourceRoot(path.join(__dirname,  'template'), this);
    var source = this.templatePath();
    var dest = this.destinationPath('.');

    this.fs.copy(source, dest, {});
    this.fs.copy(this.templatePath('.*'), dest, {});
  },

  dependencies: function() {
    this.installDependencies({
      bower: true,
      npm: true,
      skipInstall: true
    });
  }
});
