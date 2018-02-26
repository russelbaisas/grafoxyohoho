var app = angular.module('mainIndex', ['ionic']);
app.controller('titleController', function ($scope, $http) {
    $http.get('https://api.myjson.com/bins/2lg2s')
        .success(function (data) {
            // The json data will now be in scope.
            console.log('Success', data);
            $scope.names = data;
  })

        });