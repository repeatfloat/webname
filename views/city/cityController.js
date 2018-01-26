	angular.module('app')
	.controller('cityController', ['$scope','$state', function ($scope,$state) {
			$scope.city=[
				{text:'广州市'},
				{text:'韶关市'},
				{text:'深圳市'},
				{text:'珠海市'},
				{text:'汕头市'},
				{text:'佛山市'},
				{text:'江门市'},
				{text:'湛江市'},
				{text:'茂名市'},
				{text:'肇庆市'},
				{text:'惠州市'},
				{text:'梅州市'}
			]
	}])