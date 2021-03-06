angular.module('app')
	.controller('indexController', ['$scope','$state','API', 'tip',function ($scope,$state,API,tip) {

		$scope.index=function(url){
			$state.go(url)
		}

	
		API.fetchGet('http://127.0.0.1:5000/index')
			.then(function (data) {
				
				$scope.data = data;
				// console.log(data)
			})
			.catch(function (err) {
				console.log(err);
			})


		$scope.slide={
			doesContinue:true,
			autoPlay:true,
			intervalTime: 1500,
			showPager:true,
		};
	$scope.detail = function (stateName, id) {

			$state.go(stateName, {id: id});
		}

	}])