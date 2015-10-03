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
			cb({"_updated":1442522523234,"cpm-installer-sample":{"name":"cpm-installer-sample","dist-tags":{"latest":"0.5.2"},"maintainers":[{"name":"tsafin","email":"timur.safin@gmail.com"}],"keywords":[],"license":"MIT","readmeFilename":"","time":{"modified":"2015-03-10T21:56:10.069Z"},"versions":{"0.5.2":"latest"}},"iknowsocial":{"name":"iknowsocial","dist-tags":{"latest":"0.1.1"},"maintainers":[{"name":"tsafin","email":"timur.safin@gmail.com"}],"keywords":[],"author":{"name":"deadpadre"},"readmeFilename":"","time":{"modified":"2015-03-15T11:09:04.853Z"},"versions":{"0.1.1":"latest"}},"monlbl-viewer":{"name":"monlbl-viewer","dist-tags":{"latest":"0.2.0"},"maintainers":[{"name":"tsafin","email":"timur.safin@gmail.com"}],"keywords":[],"author":{"name":"iColdheart"},"license":"MIT","readmeFilename":"","time":{"modified":"2015-03-15T11:07:00.914Z"},"versions":{"0.2.0":"latest"}},"simple-proj":{"name":"simple-proj","dist-tags":{"latest":"0.4.5"},"maintainers":[{"name":"tsafin","email":"timur.safin@gmail.com"}],"keywords":[],"author":{"name":"tsafin"},"license":"MIT","readmeFilename":"","time":{"modified":"2015-09-17T17:04:34.584Z"},"versions":{"0.4.5":"latest"}},"simple-proj-crraay":{"name":"simple-proj-crraay","dist-tags":{"latest":"0.4.6"},"maintainers":[{"name":"crraay","email":"crraay@gmail.com"}],"keywords":[],"author":{"name":"crraay"},"license":"MIT","readmeFilename":"","time":{"modified":"2015-09-17T17:14:29.540Z"},"versions":{"0.4.6":"latest"}},"webterminal":{"name":"webterminal","description":"Web-based terminal emulator for CachГ© administering.","dist-tags":{"latest":"2.0.0-beta.7"},"maintainers":[{"name":"daimor","email":"mrdaimor@gmail.com"}],"homepage":"https://github.com/intersystems-ru/webterminal","repository":{"type":"git","url":"https://github.com/intersystems-ru/webterminal.git"},"author":{"name":"ZitRo"},"bugs":{"url":"https://github.com/intersystems-ru/webterminal/issues"},"readmeFilename":"readme.md","keywords":["terminal"],"time":{"modified":"2015-01-25T11:29:44.262Z"},"versions":{"2.0.0-beta.7":"latest"}}});
            return;
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
