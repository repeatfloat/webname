 angular.module('app')
	.controller('shoppingCartController', ['$scope','$state','API',function ($scope,$state,API) {
		$scope.settlement=function(url){
			$state.go(url)
		}
		API.fetchGet('http://127.0.0.1:5000/index')
			.then(function (data) {
			$scope.data = data;
				console.log(data)
				
				$scope.shopping=[
			{	
				pid:1,			
				name:'汇美舍（PrettyValley）普罗旺斯真实薰衣草精油/10ml 单方精油 精油护肤',
				price:138.00,
				imgsurl:'./icons/shoppingCart-1.png',
				span:'运费',
				span2:'￥8',
				textright:'1',
				check:false,
				footertext:'999人付款',
				datas: data.data.clsify[16].pid,	
			},
			{	
				pid:2,			
				name:'前300名半价】汇美舍普罗旺斯薰衣草护肤礼盒套装补水舒缓肌肤',
				price:169.00,
				imgsurl:'./icons/shoppingCart-2.png',
				span:'运费',
				span2:'￥8',
				textright:'2',
				check:false,
				footertext:'666人付款',
				datas:data.data.clsify[17].pid,
				
			},
			{	
				pid:3,
				name:'汇美舍单方精油普罗旺斯真实薰衣草精油10ml 舒缓修护淡化痘印',
				price:294.00,
				imgsurl:'./icons/shoppingCart-3.png',
				span:'满99元',
				span2:'包邮',
				cls:'shoppingCart-text-border',
				textright:'1',
				check:false,
				footertext:'888人付款',
				datas:data.data.clsify[18].pid,
				
			},
			{	
				pid:4,
				name:'汇美舍普罗旺斯薰衣草菁华凝露90g 清爽补水保湿细致毛孔精华露',
				price:158.00,
				imgsurl:'./icons/shoppingCart-4.png',
				span:'在线下单',
				span2:'包邮',
				cls:'shoppingCart-text-border',
				textright:'3',
				check:false,
				footertext:'555人付款',
				datas:data.data.clsify[19].pid,
				
			},
			{	
				pid:5,
				name:'汇美舍面霜普罗旺斯薰衣草菁华面霜50g 滋润保湿淡化细纹细致毛孔',
				price:198.00,
				imgsurl:'./icons/shoppingCart-5.png',
				span:'在线下单',
				span2:'包邮',
				cls:'shoppingCart-text-border',
				textright:'1',
				check:false,
				footertext:'333人付款',
				datas:data.data.clsify[20].pid,
				
			},
		];		
			})

			.catch(function (err) {
				// tip.loadTips.hideLoading();
				console.log(err);
			})

			API.fetchGet('http://127.0.0.1:5000/shoppingCart')
			.then(function (dete) {
				$scope.dete=dete;
				// console.log(dete)
			})
			.catch(function (err) {
				console.log(err);
			});

			$scope.shopping2 = function (stateName,id) {
			$state.go(stateName, {id: id});
		}
		
		$scope.sum=0;
		//全选金额
		$scope.shoppingSum=function(){
			console.log($scope.sum)
			$scope.sum=0;
			for(var i=0;i<$scope.shopping.length;i++){
				var t=0;
				if($scope.shopping[i].check){
					t=$scope.shopping[i].price
					$scope.sum+=t
					console.log("$scope.sum==>",$scope.sum)
				}	
			}
		};
		$scope.changeCheckbox = function(bool){
			$scope.shoppingSum();
			for(var i=0;i<$scope.shopping.length;i++){
				 if(!$scope.shopping[i].check){
				 	console.log(!$scope.shopping[i].check)
					$scope.allCheck = false;
					return;
				}		
			}
			$scope.allCheck = true;
		};

		$scope.collections=function(index){
			console.log(index)
			var iconColor=document.getElementsByClassName('iconColor');
			iconColor[index].className="icon ion-star icons-color text-padding-left"
			API.fetchGet('http://127.0.0.1:5000/myCollection',$scope.shopping[index])
			.then(function () {
			})
		}
		$scope.collection2=function(index){
			API.fetchGet('http://127.0.0.1:5000/shoppingCart',index)
			.then(function () {
			})
			console.log(index)
		}
	}])
		
// myCollection