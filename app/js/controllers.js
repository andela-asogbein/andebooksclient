'use strict';

var app = angular.module('Andebooks', ['ngMaterial','ngRoute']);

//define the routes that the frontend will use
app.config(function($routeProvider, $httpProvider){
  $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'andebooksCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'andebooksCtrl'
      })
      .when('/addbook', {
        templateUrl: 'views/addbook.html',
        controller: 'andebooksCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'andebooksCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'andebooksCtrl'
      })
      .when('/random', {
        templateUrl: 'views/random.html',
        controller: 'andebooksCtrl'
      })
      .when('/:bookid', {
        templateUrl: 'views/bookdetail.html',
        controller: 'andebooksCtrl'
      });

  $httpProvider.interceptors.push('AuthInterceptor');
});

//controller
app.controller('andebooksCtrl', ['$scope', '$location', '$rootScope','$routeParams','$mdDialog', 'userService','bookService', 'Auth', 'AuthToken', 'AuthInterceptor', function($scope, $location, $rootScope, $routeParams, $mdDialog, userService, bookService, Auth, AuthToken, AuthInterceptor){

  $scope.loggedIn = Auth.isLoggedIn();

  $rootScope.$on('$routeChangeStart', function(){
    $scope.loggedIn = Auth.isLoggedIn();
    Auth.getUser().success(function(data){
      $scope.user = data;
    });
  });

  bookService.allBooks().success(function(data){
    $scope.books = data;
  });

  $scope.allBooks = function(){
    bookService.allBooks().success(function(data){
      $scope.books = data;
      $location.path('/books');
    });
  };

  $scope.allUsers = function(){
    userService.allUsers().success(function(data){
      $scope.users = data;
      $location.path('/users');
    });
  };

  $scope.doLogin = function(){
    Auth.login($scope.loginData.username, $scope.loginData.password)
      .success(function(data){
        $location.path('/books');
      });
  };

  $scope.doLogout = function(){
    Auth.logout();
    $scope.user = {};
    $location.path('/login');
  };

  $scope.createUser = function(userData){
     userService.addUser(userData).success(function(data){
      $scope.loggedIn = true;
       $location.path('/books');
     });
  };

  $scope.addBook = function(bookData){
    bookService.addBook(bookData).success(function(data){
      $location.path('/books');
    });
  };

  $scope.deleteBook = function(bookid){
    bookService.deleteBook(bookid).success(function(data){
      $location.path('/books');
    });
  };

  $scope.editBook = function(bookid){
    bookService.editBook(bookid).success(function(data){

    });
  };

  $scope.showConfirm = function(ev, bookid) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title('Do you want to permanently delete this book?')
      .content('There is no way for you to retrieve it...')
      .ariaLabel('Lucky day')
      .ok('Yes')
      .cancel('No')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      $scope.deleteBook(bookid);
      $scope.allBooks();
    }, function() {
    });
  };

}]);
