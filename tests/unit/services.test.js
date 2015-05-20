'use strict';

describe('Testing services', function(){
  var _userService;

  beforeEach(module('Andebooks'));

  inject(function(userService){
    _userService = userService;
  });

  it('userService service should be defined', function(){
    expect(_userService).toBeDefined();
  });

});
