app.controller('MainCtrl', ['$scope', '$http', 'DataSrvc', '$location', function($scope, $http, DataSrvc, $location){
	$scope.data = [];
	$scope.sourceData = [];
	$scope.numLimit = 3;

	DataSrvc.getData(function(data){
		for (item in data) {
			if (item != '_updated'){
				data[item].latest = data[item]['dist-tags'].latest
				$scope.sourceData.push(data[item]);
			}
		}
		$scope.data= $scope.sourceData
	})

	$scope.locate = function(path){
		$location.path(path)
	};

	$scope.enter = function(term){
		if (!term){
			$scope.data = $scope.sourceData
			return;
		}

		$scope.data = [];
		$scope.sourceData.forEach(function(item){
			if(item.name.indexOf(term) >= 0)
				$scope.data.push(item);
		})
	};
}]);
