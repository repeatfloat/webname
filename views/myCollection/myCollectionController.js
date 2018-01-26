angular.module('app')
	.controller('myCollectionController', ['$scope','$state', function ($scope,$state) {

		$scope.mycollection=function(url){
			$state.go(url)
		}

		$scope.product=[
			{image:'./icons/productList-1.png',
			text:'汇美舍（PrettyValley）普罗旺斯真实薰衣草精油/10ml 单方精油 精油护肤',
			span:'运费',
			spanBorder:'￥8',
			spanText:'取消收藏',
			productText:'￥ 138.00',
			textColor:'999人付款',
		},
		{image:'./icons/productList-2.png',
			text:'【前300名半价】汇美舍普罗旺斯薰衣草护肤礼盒套装补水舒缓肌肤',
			span:'运费',
			spanBorder:'￥8',
			spanText:'取消收藏',
			productText:'￥ 169.00',
			textColor:'666人付款',
		},
		{image:'./icons/productList-3.png',
			text:'汇美舍单方精油普罗旺斯真实薰衣草精油10ml 舒缓修护淡化痘印 ',
			span:'满99元',
			spanBorder:'包邮',
			spanText:'取消收藏',
			productText:'￥ 294.00',
			textColor:'888人付款',
		},
		{image:'./icons/productList-4.png',
			text:'汇美舍普罗旺斯薰衣草菁华凝露90g 清爽补水保湿细致毛孔精华露',
			span:'在线下单',
			spanBorder:'包邮',
			spanText:'取消收藏',
			productText:'￥ 158.00',
			textColor:'555人付款',
		},
		{image:'./icons/productList-5.png',
			text:'汇美舍面霜普罗旺斯薰衣草菁华面霜50g 滋润保湿淡化细纹细致毛孔',
			span:'在线下单',
			spanBorder:'包邮',
			spanText:'取消收藏',
			productText:'￥ 198.00',
			textColor:'333人付款',
		},
		]
	}])