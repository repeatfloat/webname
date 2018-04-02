angular.module('app')
	.controller('productParameterPageController', ['$scope','$state','API', function ($scope,$state,API) {
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
			
	API.fetchGet('http://127.0.0.1:9000/index')
			.then(function (data) {
				
				$scope.data = data;
				// console.log(data)
			})
			.catch(function (err) {
				console.log(err);
			})
	$scope.productList2=function(url,id){

		$state.go(url,{id:id});	
	}
	$scope.productEvaluation=function(){
		$state.go('productEvaluation')
	}
	
	}])