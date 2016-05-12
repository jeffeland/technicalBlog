'use strict';

/* Controllers */
var app = angular.module('app', []);

app.controller('controller', function($scope, $http, $sce) {
  $http.get('./toc.json').success(function(toc) {
    $http.get(toc.content).success(function(content) {
      toc.content=$sce.trustAsHtml(marked(content));
      $scope.data=toc;
    })
  })
});