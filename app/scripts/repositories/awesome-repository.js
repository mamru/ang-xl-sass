'use strict';

angular.module('bmwsolar')
  .factory('AwesomeRepository', function ($injector, AwesomeModel) {
    var BaseRepository = $injector.get('BaseRepository');
    return new BaseRepository({name: 'AwesomeRepository', model: AwesomeModel});
  });