angular.module('app') 
	.controller('starClassController', ['$scope', '$state','$stateParams',function ($scope,$state,$stateParams) { 
	$scope.imagearr=[
	{
		img: './icons/starClass-1.png',text:'玫瑰水润系类',
		img1: './icons/starClass-2.png',text1:'玫瑰檀香丝柔系类'
	},
	{
		img: './icons/starClass-3.png',text:'茉莉花梨木系类',
		img1: './icons/starClass-4.png',text1:'保加利亚玫瑰系类'
	},
	{
		img: './icons/starClass-5.png',text:'单方纯精油系类',
		img1: './icons/starClass-6.png',text1:'精油伴侣系类'
	},
	{
		img: './icons/starClass-7.png',text:'普罗旺斯薰衣草系类',
		img1: './icons/starClass-8.png',text1:'茶树薰衣草系类'
	},
	{
		img: './icons/starClass-9.png',text:'玫瑰乳木果系类',
		img1: './icons/starClass-10.png',text1:'晨曦花露系类'
	},
	{
		img: './icons/starClass-11.png',text:'薰衣草葡萄籽系类',
		img1: './icons/starClass-12.png',text1:'茉莉玫瑰籽系类'
	},
	{
		img: './icons/starClass-13.png',text:'舒缓修复系类'

	},
	]
}])