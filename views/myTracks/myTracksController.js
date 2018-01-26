angular.module('app')
	.controller('myTracksController', ['$scope','$state', function ($scope,$state) {

		$scope.myTracks=function(url){
			$state.go(url)
		}

		$scope.dateProduct=[
			{date:'2017年9月9日',
			imades:'./icons/myTracks-1.png',
			text:'￥ 915.00',
			imades2:'./icons/myTracks-2.png',
			text2:'￥ 434.00',
			imades3:'./icons/myTracks-3.png',
			text3:'￥ 390.00',},

			{date:'2017年8月31日',
			imades:'./icons/myTracks-4.png',
			text:'￥ 498.00',
			imades2:'./icons/myTracks-5.png',
			text2:'￥ 102.00',
			imades3:'./icons/myTracks-6.png',
			text3:'￥ 110.00',},

			{date:'2017年8月12日',
			imades:'./icons/myTracks-7.png',
			text:'￥ 915.00',
			imades2:'./icons/myTracks-8.png',
			text2:'￥ 434.00',
			imades3:'./icons/myTracks-9.png',
			text3:'￥ 390.00',},

			{date:'',
			imades:'./icons/myTracks-10.png',
			text:'￥ 498.00',
			imades2:'./icons/myTracks-11.png',
			text2:'￥ 102.00',
			imades3:'./icons/myTracks-12.png',
			text3:'￥ 110.00',},
		]

	}])