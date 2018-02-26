// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('mainIndex', ['ionic'])


app.config(function($stateProvider, $urlRouterProvider) {

$stateProvider

.state('home', {
    url: "/home",
    templateUrl: "home.html",
    controller: 'titleController'
  })

.state('calendar', {
    url: "/calendar",
    templateUrl: "calendar.html"
  })

.state('about', {
    url: "/about",
    templateUrl: "about.html"

  })

.state('helpme', {
    url: "/helpme",
    templateUrl: "helpme.html"

  })

.state('meetme', {
    url: "/meetme",
    templateUrl: "meetme.html"

  })

.state('notes', {
    url: "/notes",
    templateUrl: "notes.html"

  })

    $urlRouterProvider.otherwise('/home')


});

app.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}]);


app.controller('titleController', function ($scope, $http, $ionicModal,$timeout, $ionicLoading) {

    $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

    $http.get('https://api.myjson.com/bins/n7jc')


              .success(function (data) {
                $ionicLoading.hide();
            // The json data will now be in scope.
            console.log('Success', data);
            $scope.names = data;
            })


              $scope.expand = function(x) {

                x.show = !x.show;
              }

              $scope.showme = false

             $scope.showrecipe = function() {
              $scope.showme = true;

            };

             $scope.hiderecipe = function() {

              $scope.showme = false;

            };

            

        });


app.controller('MyController', function ($scope, $ionicPopover) {

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
});

