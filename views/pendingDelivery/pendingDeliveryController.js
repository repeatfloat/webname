angular.module('app')
	.controller('pendingDeliveryController', ['$scope','$state','API','$rootScope',function ($scope,$state,API,$rootScope) {
		$scope.pendingprducts=function(href){
				$state.go(href)
			}
			$scope.productimage=[
				// {	
				// 	image:'./icons/allMyOrders-2.png',
				// 	text:'汇美舍普罗旺斯薰衣草护肤礼盒套装补水舒缓肌肤',
				// 	span:'已付款',
				// 	textspan:'共1件商品 合计：',
				// 	textcolor:'￥ 169.00',
				// 	textfooter:'删除订单',
				// 	textborder:'查看物流',
				// 	textborder2:'提醒发货'
				// },
				// {	
				// 	image:'./icons/allMyOrders-3.png',
				// 	text:'汇美舍单方精油普罗旺斯真实薰衣草精油10ml 舒缓修护淡化痘印 ',
				// 	span:'已付款',
				// 	textspan:'共1件商品 合计：',
				// 	textcolor:'￥ 294.00',
				// 	textfooter:'删除订单',
				// 	textborder:'查看物流',
				// 	textborder2:'确认收货'
				// },
				// {	
				// 	image:'./icons/allMyOrders-4.png',
				// 	text:'汇美舍普罗旺斯薰衣草菁华凝露90g 清爽补水保湿细致毛孔精华露 ',
				// 	span:'待评价',
				// 	textspan:'共1件商品 合计：',
				// 	textcolor:'￥ 158.00',
				// 	textfooter:'删除订单',
				// 	textborder:'查看物流',
				// 	textborder2:'去评价'
				// },
				];

			
	
			API.fetchGet('http://127.0.0.1:9000/pendingDelivery')
				// console.log($rootScope.shoppss)
				.then(function (data) {
				$scope.pending = data.data;
				// console.log($scope.pending)
					// tip.loadTips.hideLoading();
				})
		

			}])