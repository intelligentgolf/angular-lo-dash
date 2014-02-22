'use strict';

angular.module('angular-lo-dash',[])
  .factory('_', function ($window) {
    return $window._;
  });
