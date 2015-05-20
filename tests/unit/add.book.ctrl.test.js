'use strict';

describe('Testing book controllers', function(){
  var _scope;
  var addBookCtrl;
  beforeEach(module('Andebooks'));

  beforeEach(function(){
    inject(function($rootScope, $controller){
      _scope = $rootScope.$new();
      addBookCtrl = $controller('addBookCtrl', {$scope: _scope});
    });
  });

  it('addBookCtrl should be defined', function(){
    expect(addBookCtrl).toBeDefined();
  });

  it('the scope function to add book should be defined', function(){
    expect(_scope.addBook).toBeDefined();
  });
});
