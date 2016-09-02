"use strict";
console.log('app.js connected');
var app = angular.module("World Wide Travel", ["ngRoute"]); //define the main module with angular.module, variable name is app, variable value is world wide travel, do this so that ng-app, which signifies a module, knows what to call itself and knows that it is a module


 app.config(function($routeProvider){
    $routeProvider.
        when("/items/list", {
            templateUrl: 'partials/guide-list.html',
            controller: "bookCtrl"                    //not URL, Url
        });
});
