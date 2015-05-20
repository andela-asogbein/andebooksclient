'use strict';

describe('Testing book controllers', function(){
  var _scope;
  var authorBooksCtrl;
  beforeEach(module('Andebooks'));

  beforeEach(function(){
    inject(function($rootScope, $controller){
      _scope = $rootScope.$new();
      authorBooksCtrl = $controller('authorBooksCtrl', {$scope: _scope});
    });
  });

  it('authorBooksCtrl should be defined', function(){
    expect(authorBooksCtrl).toBeDefined();
  });
});
