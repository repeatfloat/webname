angular.module('app')
	.controller('weChatLoggedInController', ['$scope','$state', function ($scope,$state) {
		$scope.weChatloggedln=function(url){
			$state.go(url)
		}
	}])