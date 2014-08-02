'use strict';

var components = angular.module('bmwsolar.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('bmwsolar', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'bmwsolar.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap',
  'ngSanitize',
  'ngTouch'
]);
angular.componentFactory.moduleDecorator(app);