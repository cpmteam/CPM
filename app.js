'use strict';

var app = angular.module('sampleApp', ['ngRoute', 'ngMaterial']);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', 
		{
			templateUrl: 'partial/main.html', 
			controller: 'MainCtrl',
		})
		.otherwise({redirectTo: '/'});
}]);