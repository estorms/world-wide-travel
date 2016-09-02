"use strict";
console.log('bookCtrl.js connected');
app.controller("bookCtrl", function($scope, BookFactory) {
    BookFactory.getBooks()

    .then(function (books){
        console.log(books);
        $scope.Books = books.guides;
    });
});



