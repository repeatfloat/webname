angular.module('app') 
	.controller('skincarestepsController', ['$scope', '$state','$stateParams','API',function ($scope,$state,$stateParams,API) { 
		API.fetchGet('http://127.0.0.1:9000/skincaresteps')
		.then(function (data) {
			$scope.data = data.data;
			// console.log(data)
		})
		.catch(function (err) {
			console.log(err);
		})

		$scope.skincaresteps=function(url,id){
			$state.go(url,{id:id})
		}

}])