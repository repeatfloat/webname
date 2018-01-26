angular.module('app') 
	.controller('startPageController', ['$scope', '$state','$stateParams',function ($scope,$state,$stateParams) { 
		$scope.slide = {
			autoPlay: true,
			intervalTime: 2000,
			showPager: true,
		},
		$scope.data = [ 
			{img: './image/startPage-1.jpg'},
			{img: './image/bootPage1.jpg'},
			{img: './image/bootPage2.jpg'},
			{img: './image/bootPage3.jpg'}
		]
		$scope.signIn=function(){
			$state.go('login');
		}
	}])