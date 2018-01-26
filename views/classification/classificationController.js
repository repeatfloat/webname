angular.module('app')
	.controller('classificationController', ['$scope','$state', function ($scope,$state) {

		$scope.publicOnclick=function(url){
			$state.go(url)
		}

		$scope.clr={
			cls:'public-text-color',
		}

		$scope.scheme=function(){
			$state.go('publicfooter.classification.scheme')
			$scope.clr={
				cls:'public-text-color',
				cls1:'',
				cls2:''
			}}

		$scope.skincaresteps=function(){
			$state.go('publicfooter.classification.skincaresteps')
			$scope.clr={
				cls:'',
				cls1:'public-text-color',
				cls2:''
			}}
		

		$scope.starClass=function(){
			$state.go('publicfooter.classification.starClass')
			$scope.clr={
				cls:'',
				cls1:'',
				cls2:'public-text-color'
			}}
		
	}])