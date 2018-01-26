angular.module('app')
	.controller('shoppingCartController', ['$scope','$state', function ($scope,$state) {
		$scope.settlement=function(url){
			$state.go(url)
		}

		$scope.shopping=[
			{	
				image:'./icons/shoppingCart-1.png',
				text:'汇美舍（PrettyValley）普罗旺斯真实薰衣草精油/10ml 单方精油 	精油护肤',
				span:'运费',
				span2:'￥8',
				textright:'x1',
				textcenter:'￥138.00',
				footertext:'999人付款',
			},
			{	
				image:'./icons/shoppingCart-2.png',
				text:'前300名半价】汇美舍普罗旺斯薰衣草护肤礼盒套装补水舒缓肌肤',
				span:'运费',
				span2:'￥8',
				textright:'x2',
				textcenter:'￥169.00',
				footertext:'666人付款',
			},
			{	
				image:'./icons/shoppingCart-3.png',
				text:'汇美舍单方精油普罗旺斯真实薰衣草精油10ml 舒缓修护淡化痘印',
				span:'满99元',
				span2:'包邮',
				cls:'shoppingCart-text-border',
				textright:'x1',
				textcenter:'￥294.00',
				footertext:'888人付款',
			},
			{	
				image:'./icons/shoppingCart-4.png',
				text:'汇美舍普罗旺斯薰衣草菁华凝露90g 清爽补水保湿细致毛孔精华露',
				span:'在线下单',
				span2:'包邮',
				cls:'shoppingCart-text-border',
				textright:'x3',
				textcenter:'￥158.00',
				footertext:'555人付款',
			},
			{	
				image:'./icons/shoppingCart-5.png',
				text:'汇美舍面霜普罗旺斯薰衣草菁华面霜50g 滋润保湿淡化细纹细致毛孔',
				span:'在线下单',
				span2:'包邮',
				cls:'shoppingCart-text-border',
				textright:'x1',
				textcenter:'￥198.00',
				footertext:'333人付款',
			},
		]
	}])
		
