angular.module('app') 
	.controller('starClassController', ['$scope', '$state','$stateParams',function ($scope,$state,$stateParams) { 
	$scope.imagearr=[
	{
		img: './icons/starClass-1.png',
		text:'玫瑰水润',
		img1: './icons/starClass-2.png',
		text1:'玫瑰檀香',
		img2: './icons/starClass-3.png',
		text2:'茉莉花梨'
	},
	{
		
		img: './icons/starClass-4.png',
		text:'保加利亚',
		img1: './icons/starClass-5.png',
		text1:'纯精油',
		img2: './icons/starClass-6.png',
		text2:'精油伴侣'
	},
	{
		img: './icons/starClass-7.png',
		text:'薰衣草',
		img1: './icons/starClass-8.png',
		text1:'茶树薰衣',
		img2: './icons/starClass-9.png',
		text2:'玫瑰木果'
	},
	{	
		img: './icons/starClass-10.png',
		text:'琵琶花露',
		img1: './icons/starClass-11.png',
		text1:'葡萄籽',
		img2: './icons/starClass-12.png',
		text2:'茉莉玫瑰'
	},
	{
		img: './icons/starClass-13.png',
	 	text:'舒缓修复',
	 	img1:'./icons/classification-2.png',
	 	text1:'提亮肤色',
		img2:'./icons/classification-3.png',
		text2:'紧致淡纹',
	}
	];
}])