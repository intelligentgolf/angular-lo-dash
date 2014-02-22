"use strict";

describe('Factory: _ (lo-dash)', function () {

  beforeEach(module('angular-lo-dash'));

  var _;
  var fake = {};
  
  beforeEach(module(function($provide) {
    $provide.value('$window', {
      '_': fake
    });    
  }));

  beforeEach(inject(function (___) {
    _ = ___;
  }));

  it('should return $window._', function () {
    expect(_).toBe(fake);
  });

});
