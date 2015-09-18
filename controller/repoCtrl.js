app.controller('RepoCtrl', ['$scope', 'DataSrvc', function($scope, DataSrvc){
	console.log('repo init');
	$scope.sourceData = [];

	DataSrvc.getData(function(data){
		$scope.data= data['cpm-installer-sample'];
	})

}]);