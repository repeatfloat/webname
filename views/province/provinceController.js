	angular.module('app')
	.controller('provinceController', ['$scope','$state', function ($scope,$state) {
			$scope.province=[
				{text:'北京',click:'newlyIncreasedAddress'},
				{text:'天津'},
				{text:'上海'},
				{text:'江苏省'},
				{text:'浙江省'},
				{text:'福建省'},
				{text:'江西省'},
				{text:'山东省'},
				{text:'湖南省'},
				{text:'广东省'},
				{text:'海南省'},
				{text:'四川省'}
			]
			$scope.provinces=function(url){
				$state.go(url)
			}
			$scope.listclick=function(click){
				$state.go(click)
			var vlaue=document.getElementById('vlaue');
			console.log(vlaue);
			}
	}])