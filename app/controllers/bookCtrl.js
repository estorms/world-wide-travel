"use strict";
console.log('bookCtrl.js connected');
app.controller("bookCtrl", function($scope, $q, $http) { //set up the controller on your main /only module, it takes two arguments, first is name of controller, next one is a function of all the methods to be called within the controller

     $scope.getBooks = function (){ //getBooks becomes a method on scope that returns a promise that returns data
        return $q (function (resolve, reject) {
            $http.get('../../data/guides.json')
            .success(function(books){ //books is the whole guides.json file
            resolve(books); //resolve (return) that json file
        })
        .error(function(error) {
            reject(error);
        });

    });
    };
    $scope.getBooks() //don't have to pass in books as an argument here because through resolve, which is acting like return, getBooks() has become synonymous with "books", the data the function getBooks() provides
    .then(function (books){ //so why the fuck you have to tell it that it's using that data again here is beyond me
        $scope.Books = books.guides; //here we are saying specifically that we want the array called 'guides' within books, when books = ../../data/guides.json (a JSON object)
    });
});

