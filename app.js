(function() {

 var app = angular.module("githubViewer", ["ngRoute"]);
 
 
 //can register configuration functions for our app
 //can define routes in the config function
 app.config(function ($routeProvider) {
   $routeProvider
        .when("/main", {
          templateUrl: "main.html",
          controller: "MainController"
        })
        .when("/user/:username", {
          templateUrl: "user.html",
          controller: "userController"
        })
        .when("/repo/:username/:reponame", {
          templateUrl : "repo.html",
          controller: "repoController"
        })
        .otherwise( {
          redirectTo: "/main"
        });
 });


}());
