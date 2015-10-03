'use strict';

var app = angular.module('sampleApp', ['ngRoute', 'ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('teal');
});

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', 
		{
			templateUrl: 'partial/main-flex.html',
			controller: 'MainCtrl',
		})
		.when('/repo/:name', 
		{
			templateUrl: 'partial/repo.html', 
			controller: 'RepoCtrl',
		})
		.otherwise({redirectTo: '/'});
}]);
