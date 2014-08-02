'use strict';

angular.module('bmwsolar')
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise("/error?code=404");
  });
