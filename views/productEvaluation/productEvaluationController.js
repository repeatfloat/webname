angular.module('app')
	.controller('productEvaluationController', ['$scope','$state','API',function ($scope,$state,API ) {
			$scope.banner={
			doesContinue:true,
			autoPlay:true,
			intervalTime: 1500,
			doesContinue:true,
			showPager:true,
		},
		$scope.images=[
		{img:'./image/productDetailsPage-1.jpg'},
		{img:'./image/productDetailsPage-2.jpg'},
		{img:'./image/productDetailsPage-3.jpg'},
		{img:'./image/productDetailsPage-4.jpg'},
		{img:'./image/productDetailsPage-5.jpg'}
		]
		$scope.listclick=function(url){
			$state.go(url)
				}
			API.fetchGet('http://127.0.0.1:9000/index')
			.then(function (data) {
				
				$scope.data = data;
				console.log(data)
			})
			.catch(function (err) {
				// tip.loadTips.hideLoading();
				console.log(err);
			})
	$scope.listclick2=function(url,id){

		$state.go(url,{id:id});	
	}
			}])		