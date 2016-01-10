/* jshint node: true */
'use strict';

var BasePlugin = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-commit-build',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      didBuild: function(context) {
        this.log("DID BUILD");
        this.log(context);
      }
    });

    return new DeployPlugin();
  }
};
