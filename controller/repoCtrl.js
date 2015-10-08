app.controller('RepoCtrl', ['$scope', 'DataSrvc', '$routeParams', function($scope, DataSrvc, $routeParams){
	$scope.sourceData = [];
	$scope.readmeText = '';

	DataSrvc.getData(function(data){
		$scope.data = data[$routeParams.name];
		$scope.readmeText = $scope.data.readmeText; 
		console.log($scope.readmeText);
	})

}]);