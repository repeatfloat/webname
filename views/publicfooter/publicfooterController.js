angular.module('app')
	.controller('publicfooterController', ['$scope','$state', function ($scope,$state) {

		$scope.publicfooter=function(o){
			$state.go(o)
		}


	}])