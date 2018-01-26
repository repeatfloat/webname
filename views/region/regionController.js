	angular.module('app')
	.controller('regionController', ['$scope','$state', function ($scope,$state) {
			$scope.region=[
				{text:'荔湾区'},
				{text:'越秀区'},
				{text:'海珠区'},
				{text:'天河区'},
				{text:'白云区'},
				{text:'黄浦区'},
				{text:'番禺区'},
				{text:'花都区'},
				{text:'南沙区'},
				{text:'萝岗区'},
				{text:'增城区'},
				{text:'从化区'}
				]
	}])