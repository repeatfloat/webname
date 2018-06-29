angular.module('app')
	.controller('allMyOrdersController', ['$scope','$state','$rootScope','tip','API',function ($scope,$state,$rootScope,tip,API) {
		$scope.pendingPayment=function(){
				$state.go('pendingPayment')
			}
		$scope.pendingDelivery=function(){
				$state.go('pendingDelivery')
			}
		$scope.goodsToBeReceived=function(){
				$state.go('goodsToBeReceived')
			}
		$scope.toBeEvaluated=function(){
				$state.go('toBeEvaluated')
			}
		$scope.midea=function(){
				$state.go('publicfooter.midea')
			}
			$scope.productimage=[

				// {	
				// 	image:'./icons/allMyOrders-1.png',
				// 	text:'汇美舍（PrettyValley）普罗旺斯真实薰衣草精油/10ml 单方精油 精油护肤 ',
				// 	span:'待付款',
				// 	textspan:'共1件商品 合计：',
				// 	textcolor:'￥ 138.00',
				// 	textfooter:'删除订单',
				// 	textborder:'',
				// 	textborder2:'去付款',
				// },
				// {	
				// 	image:'./icons/allMyOrders-2.png',
				// 	text:'【前300名半价】汇美舍普罗旺斯薰衣草护肤礼盒套装补水舒缓肌肤 ',
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
				// {	
				// 	image:'./icons/allMyOrders-5.png',
				// 	text:'汇美舍面霜普罗旺斯薰衣草菁华面霜50g 滋润保湿淡化细纹细致毛孔 ',
				// 	span:'交易完成',
				// 	textspan:'共1件商品 合计：',
				// 	textcolor:'￥ 198.00',
				// 	textfooter:'删除订单',
				// 	textborder:'查看物流',
				// 	textborder2:'追加评价'
				// },
			];

			API.fetchGet('http://127.0.0.1:5000/pendingPayment')
				.then(function (data) {
				$scope.code = data.data;
				// console.log($scope.code);
			})

			API.fetchGet('http://127.0.0.1:5000/pendingDelivery')
				// console.log($rootScope.shoppss)
				.then(function (data) {
				$scope.pending = data.data;
				// console.log($scope.pending)
					// tip.loadTips.hideLoading();
				})


	}])