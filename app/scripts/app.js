'use strict';

/**
 * @ngdoc overview
 * @name helloWorldApp
 * @description
 * # helloWorldApp
 *
 * Main module of the application.
 */
angular
  .module('helloWorldApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
