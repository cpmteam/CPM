'use strict';

app.factory('DataSrvc', function($http, $q) {
	return {
		getPromise: function(config){
			var deferred = $q.defer();

			$http(config)
			.success(function(data, status, headers, config){
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config){
				deferred.reject(data, status, headers, config);
			});

			return deferred.promise;
		},
		getData: function(cb){
			$http.get('http://crossorigin.me/https://cpmisc.smileupps.com/-/all')
			  .success(function(data) {
			     console.log('SUCCESS')
			     cb(data);
			 })
			  .error(function(data){
			     console.log('ERROR');
			 })

		},
	}
});
