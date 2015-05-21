'use strict';

describe('Test routes', function(){
  //beforeEach(module('Andebooks'));

  var _route;
  beforeEach(function(){
    module('Andebooks');
    inject(function($route){
      _route = $route;
    });
  });

  it('Test that home route redirects to books page', function(){
    expect(_route.routes['/'].templateUrl).toEqual('app/views/books.html');
  });

  it('Test that login route redirects to login page', function(){
    expect(_route.routes['/login'].templateUrl).toEqual('app/views/login.html');
  });

  it('Test that addbookroute redirects to the add book page', function(){
    expect(_route.routes['/addbook'].templateUrl).toEqual('app/views/addbook.html');
  });

  it('Test that edit book route redirects to the edit book page', function(){
    expect(_route.routes['/book/edit/:bookid'].templateUrl).toEqual('app/views/editbook.html');
  });

  it('Test that view books by author route redirects to the books by author page', function(){
    expect(_route.routes['/books/:author'].templateUrl).toEqual('app/views/booksbyauthor.html');
  });

  it('Test that view books by category route redirects to the books by category page', function(){
    expect(_route.routes['/book/:subject'].templateUrl).toEqual('app/views/booksbycategory.html');
  });
});
