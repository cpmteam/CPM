'use strict';

var app = angular.module('sampleApp', ['ngRoute', 'ngMaterial', 'ui.bootstrap','hc.marked']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('teal');
});

app.config(['markedProvider', function(markedProvider) {
  markedProvider.setOptions({gfm: true});
}]);

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
