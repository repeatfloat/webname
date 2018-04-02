angular.module('app')
	.controller('settlementController',['$scope','$state','API',  function ($scope,$state,API) {
		$scope.compiler=function(){
			$state.go('publicfooter.compiler')
		}

		// $scope.settlement=[
		// 	{	
		// 		image:'./icons/shoppingCart-1.png',
		// 		text:'汇美舍（PrettyValley）普罗旺斯真实薰衣草精油/10ml 单方精油精油护肤',
		// 		span:'运费',
		// 		span2:'￥8',
		// 		textright:'x1',
		// 		textcenter:138.00,
		// 		footertext:'999人付款',
		// 		check:false,
		// 	},
		// 	{	
		// 		image:'./icons/shoppingCart-2.png',
		// 		text:'前300名半价】汇美舍普罗旺斯薰衣草护肤礼盒套装补水舒缓肌肤',
		// 		span:'运费',
		// 		span2:'￥8',
		// 		textright:'x2',
		// 		textcenter:169.00,
		// 		footertext:'666人付款',
		// 		check:false,
		// 	},
		// 	{	
		// 		image:'./icons/shoppingCart-3.png',
		// 		text:'汇美舍单方精油普罗旺斯真实薰衣草精油10ml 舒缓修护淡化痘印',
		// 		span:'满99元',
		// 		span2:'包邮',
		// 		cls:'settlement-text-border',
		// 		textright:'x1',
		// 		textcenter:294.00,
		// 		footertext:'888人付款',
		// 		check:false,
		// 	},
		// 	{	
		// 		image:'./icons/shoppingCart-4.png',
		// 		text:'汇美舍普罗旺斯薰衣草菁华凝露90g 清爽补水保湿细致毛孔精华露',
		// 		span:'在线下单',
		// 		span2:'包邮',
		// 		cls:'settlement-text-border',
		// 		textright:'x3',
		// 		textcenter:158.00,
		// 		footertext:'555人付款',
		// 		check:false,
		// 	},
		// 	{	
		// 		image:'./icons/shoppingCart-5.png',
		// 		text:'汇美舍面霜普罗旺斯薰衣草菁华面霜50g 滋润保湿淡化细纹细致毛孔',
		// 		span:'在线下单',
		// 		span2:'包邮',
		// 		cls:'settlement-text-border',
		// 		textright:'x1',
		// 		textcenter:198.00,
		// 		check:false,
		// 		footertext:'333人付款',
		// 	},
		// ];
		API.fetchGet('http://127.0.0.1:9000/settlement')
			.then(function (dete) {
				$scope.dete=dete.data;
				console.log($scope.dete.settlement)
			})
			.catch(function (err) {
				console.log(err);
		});
		$scope.allCheck = false;
		$scope.sum=0;

		$scope.changeCheckbox = function(bool){
			$scope.shoppingSum();
			for(var i=0;i<$scope.dete.settlement.length;i++){
				 if(!$scope.dete.settlement[i].check){
				 	console.log(!$scope.dete.settlement[i].check)
					$scope.allCheck = false;
					return;
				}		
			}
			$scope.allCheck = true;
		};

		$scope.allSelect = function(bool){
			if(bool){
				for(var i=0;i<$scope.dete.settlement.length;i++){
					$scope.dete.settlement[i].check = true;
				}
				$scope.shoppingSum();
			}else{
				for(var i=0;i<$scope.dete.settlement.length;i++){
					$scope.dete.settlement[i].check = false;
				}
				$scope.sum=0.00;
			}
		};

		$scope.shoppingSum=function(){
			console.log($scope.sum)
			$scope.sum=0;
			for(var i=0;i<$scope.dete.settlement.length;i++){
				var t=0;
				if($scope.dete.settlement[i].check){
					t=$scope.dete.settlement[i].price
					$scope.sum+=t
					// console.log("==>",$scope.sum)
				}	
			}
		}
		$scope.detail = function (stateName, id) {
			$state.go(stateName, {id: id});
		}

		$scope.setpayment = function () {
			for(var i=0;i<$scope.dete.settlement.length;i++){
					if($scope.dete.settlement[i].check == true){
						API.fetchGet('http://127.0.0.1:9000/compiler',$scope.dete.settlement[i])
						.then(function () {
				})
						console.log($scope.dete.settlement[i])
					}
				}
			
			$state.go('publicfooter.compiler');
			
		}
	
 
			}])		
