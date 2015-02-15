var myFetchApp = angular.module('FetchApp',['ui.bootstrap','ngRoute']);

myFetchApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/meetandgreet', {
    templateUrl: '/views/meetandgreet.html',
    controller: 'MeetGreetCtrl'
  })
  .when('/schedulewalk', {
    templateUrl: '/views/schedulewalk.html',
    controller: 'ScheduleWalkCtrl'
  })
}]);

