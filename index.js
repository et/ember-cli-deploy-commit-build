/* jshint node: true */
'use strict';

var Promise    = require('ember-cli/lib/ext/promise');
var gitty      = require("gitty");
var BasePlugin = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-commit-build',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      defaultConfig: {
        message: function(context) {
          return 'Build assets in ' + context.distDir; // set from ember-cli-deploy-build
        }
      },

      didBuild: function(context) {
        var message = this.readConfig('message');
        var repo    = (context._Git || gitty)(".");
        var _this   = this;


        return new Promise(function(resolve, reject) {
          repo.commit(message, '-a', function(e) {
            if (e) {
              _this.log(e, { color: 'red' });
              reject(e);
            } else {
              _this.log('Committed build with message: ' + message, { verbose: true });
              resolve();
            }
          });
        });
      }
    });

    return new DeployPlugin();
  }
};
