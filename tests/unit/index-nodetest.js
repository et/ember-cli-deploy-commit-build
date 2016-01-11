var assert = require('ember-cli/tests/helpers/assert');

describe('the index', function() {
  var subject;

  beforeEach(function() {
    subject = require('../../index');
  });

  it('has a name', function() {
    var result = subject.createDeployPlugin({
      name: 'test-plugin'
    });

    assert.equal(result.name, 'test-plugin');
  });
});