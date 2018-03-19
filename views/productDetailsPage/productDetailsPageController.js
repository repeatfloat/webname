angular.module('app')
	.controller('productDetailsPageController', ['$scope','$state','API', '$stateParams','$rootScope','tip', function ($scope,$state,API,$stateParams,$rootScope,tip) {
		$scope.banner={
			doesContinue:true,
			// autoPlay:true,
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
		],
	$scope.productList=function(url){
		$state.go(url)
	}
	$scope.productParameterPage=function(){
			$state.go('productParameterPage')
	}
		console.log($stateParams);
	API.fetchGet('http://127.0.0.1:9000/productdetail',{id: $stateParams.id})
			.then(function (data) {
				$rootScope.data = data.data;
				console.log(data);
			$rootScope.shopp=[$rootScope.data.product[0].name,$rootScope.data.product[0].price, $rootScope.data.product[0].did, $rootScope.data.product[0].imgurl, $rootScope.data.product[0].code, $rootScope.data.product[0].addres,$rootScope.data.product[0].sales,$rootScope.data.product[0].farg,$rootScope.data.product[0].numprice];

			})
			.catch(function (err) {
				console.log(err);
	})

		$scope.shopping = function () {
			API.fetchGet('http://127.0.0.1:9000/pendingPayment',$rootScope.shopp)
				.then(function () {
				})

			tip.showTip('购买成功 亲请支付');
			$state.go('pendingPayment');
		}

	}])