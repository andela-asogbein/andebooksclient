'use strict';

angular.module('Andebooks', ['ngMaterial','ngRoute'])

//define the routes that the frontend will use
  .config(function($routeProvider, $httpProvider){
    $routeProvider
        .when('/', {
          templateUrl: 'app/views/books.html',
          controller: 'booksCtrl'
        })
        .when('/login', {
          templateUrl: 'app/views/login.html',
          controller: 'mainCtrl'
        })
        .when('/addbook', {
          templateUrl: 'app/views/addbook.html',
          controller: 'addBookCtrl'
        })
        .when('/book/edit/:bookid', {
          templateUrl: 'app/views/editbook.html',
          controller: 'editBookCtrl'
        })
        .when('/books/:author', {
          templateUrl: 'app/views/booksbyauthor.html',
          controller: 'authorBooksCtrl'
        })
        .when('/book/:subject', {
          templateUrl: 'app/views/booksbycategory.html',
          controller: 'categoryBooksCtrl'
        })
        .when('/books', {
          templateUrl: 'app/views/books.html',
          controller: 'booksCtrl'
        })
        .when('/randombook', {
          templateUrl: 'app/views/randombook.html',
          controller: 'randomBookCtrl',
          resolve: {
            Randombook: function(bookService) {
              return bookService.getRandomBook().success(function(data) {
                return data;
              });
            }
          }
        })
        .when('/users', {
          templateUrl: 'app/views/users.html',
          controller: 'usersCtrl'
        }).otherwise('/');

    $httpProvider.interceptors.push('AuthInterceptor');
  });

angular.module('Andebooks').run(['$rootScope', '$location', 'Auth', function($rootScope, $location, Auth) {

  $rootScope.loggedIn = Auth.isLoggedIn();
  $rootScope.$on('$routeChangeStart', function(event, next, current){
    $rootScope.loggedIn = Auth.isLoggedIn();
    Auth.getUser().success(function(data){
          $rootScope.user = data;
        });
      // if($rootScope.loggedIn === true){
      //   Auth.getUser().success(function(data){
      //     $rootScope.user = data;
      //   });
      // }else{
      //   if (next && next.$$route && (next.$$route.originalPath === "/books")){
      //     $location.path('/books');
      //   }
      //   $location.path('/login');
      // }

    });
}]);
