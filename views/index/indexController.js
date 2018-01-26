angular.module('app')
	.controller('indexController', ['$scope','$state','API', 'tip',function ($scope,$state,API,tip) {

		$scope.index=function(url){
			$state.go(url)
		}

	
		
		
		// tip.loadTips.showLoading();
		API.fetchGet('http://127.0.0.1:9000/index')
			.then(function (data) {
				
				$scope.data = data;
			})
			.catch(function (err) {
				// tip.loadTips.hideLoading();
				console.log(err);
			})
		$scope.slide={
			doesContinue:true,
			autoPlay:true,
			intervalTime: 1500,
			showPager:true,
		};



	}])