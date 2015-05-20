'use strict';

describe('Testing book controllers', function(){
  var _scope;
  var booksCtrl;
  beforeEach(module('Andebooks'));

  beforeEach(function(){
    inject(function($rootScope, $controller){
      _scope = $rootScope.$new();
      booksCtrl = $controller('booksCtrl', {$scope: _scope});
    });
  });

  it('booksCtrl should be defined', function(){
    expect(booksCtrl).toBeDefined();
  });

  it('delete scope function to be defined', function(){
    expect(_scope.deleteBook).toBeDefined();
  });

  it('function that displays modal to warn user before deleting', function(){
    expect(_scope.showConfirm).toBeDefined();
  });
});
