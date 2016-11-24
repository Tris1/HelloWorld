'use strict';

/**
 * @ngdoc function
 * @name helloWorldApp.controller:MainCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloWorldApp
 */
angular.module('helloWorldApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
