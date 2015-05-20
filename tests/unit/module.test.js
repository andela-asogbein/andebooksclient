'use strict';

describe('Testing Andebooks module', function(){
  var Andebooks;

  beforeEach(function(){
    Andebooks = angular.module('Andebooks');
  });

  it('Andebooks module should be created', function(){
    expect(Andebooks).toBeDefined();
  });

});
