angular.module('app')
	.controller('searchPageController', ['$scope','$state', function ($scope,$state) {
		$scope.productList=function(){
			$state.go('productList')
		}
		$scope.classification=function(){
			$state.go('publicfooter.classification')
		}
	}])