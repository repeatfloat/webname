angular.module('app')
	.controller('toBeEvaluatedController', ['$scope','$state', function ($scope,$state) {
		$scope.toOclick=function(url){
			$state.go(url)
		}
			$scope.productimage=[
				{	
					image:'./icons/allMyOrders-4.png',
					text:'汇美舍普罗旺斯薰衣草菁华凝露90g 清爽补水保湿细致毛孔精华露 ',
					span:'待评价',
					textspan:'共1件商品 合计：',
					textcolor:'￥ 158.00',
					textfooter:'删除订单',
					textborder:'查看物流',
					textborder2:'追加评价'
				},
				{	
					image:'./icons/allMyOrders-5.png',
					text:'汇美舍面霜普罗旺斯薰衣草菁华面霜50g 滋润保湿淡化细纹细致毛孔 ',
					span:'交易完成',
					textspan:'共1件商品 合计：',
					textcolor:'￥ 198.00',
					textfooter:'删除订单',
					textborder:'查看物流',
					textborder2:'追加评价'
				},
				]
			}])