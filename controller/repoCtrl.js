app.controller('RepoCtrl', ['$scope', 'DataSrvc', '$routeParams', function($scope, DataSrvc, $routeParams){
	$scope.sourceData = [];

	DataSrvc.getData(function(data){
		$scope.data= data[$routeParams.name];
		console.log($scope.data);
	})

}]);