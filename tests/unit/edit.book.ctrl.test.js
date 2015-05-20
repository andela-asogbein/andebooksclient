'use strict';

describe('Testing book controllers', function(){
  var _scope;
  var editBookCtrl;
  beforeEach(module('Andebooks'));

  beforeEach(function(){
    inject(function($rootScope, $controller){
      _scope = $rootScope.$new();
      editBookCtrl = $controller('editBookCtrl', {$scope: _scope});
    });
  });

  it('editBookCtrl should be defined', function(){
    expect(editBookCtrl).toBeDefined();
  });

  it('the scope function to edit book should be defined', function(){
    expect(_scope.editBook).toBeDefined();
  });
});
