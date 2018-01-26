angular.module('app')
	.controller('qqLoginController', ['$scope','$state', function ($scope,$state) {
		$scope.qqlogin=function(url){
			$state.go(url)
		}

	}])