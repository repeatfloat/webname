angular.module('app')
	.controller('pendingPaymentController', ['$scope','$state','API','$rootScope','tip',function ($scope,$state,API,$rootScope,tip) {
			$scope.publicprducts=function(href){
				$state.go(href)
			}
			$scope.productimage=[
				{	
					image:'./icons/allMyOrders-1.png',
					text:'汇美舍（PrettyValley）普罗旺斯真实薰衣草精油/10ml 单方精油 精油护肤 ',
					span:'待付款',
					textspan:'共1件商品 合计：',
					textcolor:'￥ 138.00',
					textfooter:'删除订单',
					textborder2:'去付款',
				},
				{	
					image:'./icons/allMyOrders-2.png',
					text:'【前300名半价】汇美舍普罗旺斯薰衣草护肤礼盒套装补水舒缓肌肤 ',
					span:'已付款',
					textspan:'共1件商品 合计：',
					textcolor:'￥ 169.00',
					textfooter:'删除订单',
					textborder:'查看物流',
					textborder2:'提醒发货'
				},
				];

				API.fetchGet('http://127.0.0.1:9000/pendingPayment')
				// console.log($rootScope.shoppss)
				.then(function (data) {
				$scope.code = data.data;
				// console.log($scope.code);
				})

				$scope.payment = function (item) {
					// tip.showTip('购买成功 亲请支付');
				$state.go('publicfooter.compiler',{item: item});
				API.fetchGet('http://127.0.0.1:9000/compiler',item)
					.then(function () {
					})
				}
			
			}])