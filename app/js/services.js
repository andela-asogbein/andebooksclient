'use strict';
var app = angular.module('Andebooks');

 const baseUrl = 'https://andebooks.herokuapp.com/api'; //heroku
  //const baseUrl = 'http://localhost:3000/api'; //localhost

//service handlingn requests to the api concerning users
app.factory('userService', ['$http', function($http){

  var userFactory = {};


  userFactory.allUsers = function(){
    return $http.get(baseUrl + '/users');
  };

  userFactory.oneUser = function(userid){
    return $http.get(baseUrl + '/user/' + userid);
  };

  userFactory.getByUsername = function(username){
    return $http.get(baseUrl + '/user/username/' + username);
  };

  userFactory.addUser = function(userData){
    return $http.post(baseUrl + '/users', userData);
  };

  userFactory.editUser = function(userid, userData){
    return $http.put(baseUrl + 'user/'+ userid, userData);
  };

  userFactory.deleteUser = function(userid){
    return $http.delete(baseUrl + 'user/'+userid);
  };

  return userFactory;

}]);

//service handling requests to the api concerning books
  app.factory('bookService', ['$http', function($http){

  var bookFactory = {};

  bookFactory.allBooks = function(){
    return $http.get(baseUrl + '/books');
  };

  bookFactory.oneBook = function(bookid){
    return $http.get(baseUrl + '/book/' + bookid);
  };

  bookFactory.addBook = function(bookData,id, image){
    bookData.addedBy = id;
    return $http.post(baseUrl + '/books', bookData);
  };

  bookFactory.editBook = function(bookid, bookData){
    return $http.put(baseUrl + '/book/'+ bookid, bookData);
  };

  bookFactory.deleteBook = function(bookid){
    return $http.delete(baseUrl + '/book/'+bookid);
  };

  bookFactory.searchBook = function(){

  };

  bookFactory.searchAuthor = function(authorName){
    return $http.get(baseUrl + '/books/search/author?author='+authorName);
  };

  bookFactory.searchCategory =function(categoryName){
    return $http.get(baseUrl + '/books/search/category?subject='+categoryName);
  };

  bookFactory.getRandomBook = function(){
      return $http.get(baseUrl + '/books/random');
  };

  return bookFactory;

}]);


  app.factory('Auth', ['$http', '$q', 'AuthToken', function($http, $q, AuthToken){

    var authFactory = {};

    authFactory.login = function(username, password) {
      return $http.post(baseUrl + '/authenticate', {
        username: username,
        password: password
      })
      .success(function(data){
        AuthToken.setToken(data.token);
        return data;
      });
    };

    authFactory.logout = function(){
      AuthToken.setToken();
    };

    authFactory.isLoggedIn = function(){
      if(AuthToken.getToken()){
        return true;
      }
      else{
        return false;
      }
    };

    authFactory.getUser = function(){
      if(AuthToken.getToken()){
        return $http.get(baseUrl + '/me');
      }
      else{
        return $q.reject({message: 'User has no token'});
      }
    };

    return authFactory;
  }]);

  //service authenticating token
  app.factory('AuthToken', ['$window', function($window){
    var authTokenFactory = {};

    authTokenFactory.getToken = function(){
      return $window.localStorage.getItem('token');
    };

    authTokenFactory.setToken = function(token){
      if(token){
        $window.localStorage.setItem('token', token);
      }
      else{
        $window.localStorage.removeItem('token');
      }
    };
    return authTokenFactory;
  }]);


  app.factory('AuthInterceptor', ['$q', '$location', 'AuthToken', function($q, $location, AuthToken){

    var interceptorFactory = {};

    interceptorFactory.request = function(config){
      var token = AuthToken.getToken();
      if(token){
        config.headers['x-access-token'] = token;
      }
      return config;
    };

    interceptorFactory.responseError = function(response){
      if(response.status === 403){
        AuthToken.setToken();
        $location.path('/login');
      }
      return $q.reject(response);
    };
    return interceptorFactory;
  }]);

//there+was+a+country+inauthor:achebe+chinua
  app.factory('googleBookFactory', ['$http', function($http){

    var googleBookFactory = {};

    googleBookFactory.bookInformation = function(authorTitle){
      return $http.get('https://www.googleapis.com/books/v1/volumes?q='+ authorTitle + '&key=AIzaSyBE2t8zrwz_oNdAm0-Ev4oIJfMOS8K0l8Q');
    };

    return googleBookFactory;

  }]);
