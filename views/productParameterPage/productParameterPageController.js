angular.module('app')
	.controller('productParameterPageController', ['$scope','$state', function ($scope,$state) {
		$scope.banner={
			doesContinue:true,
			autoPlay:true,
			intervalTime: 1500,
			doesContinue:true,
			showPager:true,
		}
		$scope.imagearr=[
		{img:'./image/productDetailsPage-1.jpg'},
		{img:'./image/productDetailsPage-2.jpg'},
		{img:'./image/productDetailsPage-3.jpg'},
		{img:'./image/productDetailsPage-4.jpg'},
		{img:'./image/productDetailsPage-5.jpg'}
		]
	$scope.productList=function(url){
		$state.go(url)
	}
	$scope.productEvaluation=function(){
		$state.go('productEvaluation')
	}
	}])