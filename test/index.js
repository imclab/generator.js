var towerComponentCookbook = 'undefined' == typeof window
  ? require('..')
  : require('tower-component-cookbook'); // how to do this better?

var assert = require('assert');

describe('towerComponentCookbook', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
