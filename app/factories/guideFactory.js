"use strict";

app.factory("BookFactory", function($q, $http){
    let getBooks = function() {
        return $q(function (resolve, reject){
            $http.get('../../data/guides.json')
            .success(function (books){
                resolve(books);
                console.log(books);
            })
            .error(function (error){
                reject(error);
            });
        });
    };
        return {getBooks};

});



