angular.module('app')
	.controller('microBlogController', ['$scope','$state', function ($scope,$state) {
			$scope.microblog=function(url){
				$state.go(url)
			}
	}])