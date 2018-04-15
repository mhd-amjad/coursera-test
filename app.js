(function () {
'use strict';

angular.module('myfirstapp' , [])

.controller('myfirstcontroller' , function($scope) {
  $scope.name="Amjad";
  $scope.func = function () {
    return "says hello!";
  };
} );
}) ();
