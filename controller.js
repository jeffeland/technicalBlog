'use strict';

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

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

/*
sampleApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addOrder', {
        templateUrl: 'templates/add-order.html',
        controller: 'AddOrderController'
      }).
      when('/showOrders', {
        templateUrl: 'templates/show-orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);
*/
