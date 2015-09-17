app.controller('MainCtrl', ['$scope', '$http', 'DataSrvc', function($scope, $http, DataSrvc){
	console.log('main init')
    $scope.data = [];

    DataSrvc.getData(function(data){
    	for (item in data) {
    		console.log(item)
    		if (item != '_updated'){
    			console.log(data[item].author)
    			data[item].latest = data[item]['dist-tags'].latest
				//data[item].latest = 
    			console.log(data[item])
    			$scope.data.push(data[item]);
    		}
    	}
    })

}]);