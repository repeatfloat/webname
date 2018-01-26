angular.module('app')
	.controller('setUpController', ['$scope','$state', function ($scope,$state) {

		$scope.setup=function(url){
			$state.go(url)
		}


		$scope.textarr=[
		{text: '账户与安全', icons:'>'},
		{text: '音效与通知', icons:'>'},
		{text: '地区设置', icons:'>'},
		{text: '通用', icons:'>'},
		{text: '隐私', icons:'>'},
		{text: '关于汇美舍', icons:'>'}
		]
		$scope.boxarr=[
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		{box:''},
		]
	}])