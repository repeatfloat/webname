angular.module('app')
	.controller('compilerController', ['$scope','$state','API','$rootScope','tip', function ($scope,$state,API,$rootScope,tip) {

		API.fetchGet('http://127.0.0.1:9000/compiler')
			.then(function (data) {
			$scope.data = data.data;
			// console.log($scope.data)

		$scope.subtrack=function(index){
		if($scope.data.compiler[index].numprice<1){
			return;
		}else{
			$scope.data.compiler[index].numprice--;
		}
		// $scope.data.compiler[index].check=true;
		$scope.shoppingSum();
		}	
		$scope.pule=function(index){
		$scope.data.compiler[index].numprice ++ ;
		$scope.data.compiler[index].check=true;
		$scope.shoppingSum();
		}

		$scope.shoppingSum=function(){
			$scope.sum=0;
			for(var i=0;i<$scope.data.compiler.length;i++){
				var t=0;
				if($scope.data.compiler[i].check == true){
					t=$scope.data.compiler[i].price*$scope.data.compiler[i].numprice
					$scope.sum+=t
					console.log("==>",$scope.sum)
				}	
			}
		}
		$scope.allCheck = false;
		$scope.changeCheckbox = function(bool){
			$scope.shoppingSum();
			for(var i=0;i<$scope.data.compiler.length;i++){
				 if(!$scope.data.compiler[i].check){
				 	// console.log(!$scope.data.compiler[i].check)
					$scope.allCheck = false;
					return;
				}		
			}
			$scope.allCheck = true;
		};

		$scope.allSelect = function(bool){
			if(bool){
				for(var i=0;i<$scope.data.compiler.length;i++){
					$scope.data.compiler[i].check = true;
				}
				$scope.shoppingSum();
			}else{
				for(var i=0;i<$scope.data.compiler.length;i++){
					$scope.data.compiler[i].check = false;
				}
				$scope.sum=0.00;
			}
		};


		$scope.compiles=function(){
			let seletarr=[];
		for(var i=0;i<$scope.data.compiler.length;i++){
			if($scope.data.compiler[i].check == true){
				seletarr.push($scope.data.compiler[i])
			API.fetchGet('http://127.0.0.1:9000/pendingDelivery',seletarr[i])
			.then(function () {// $scope.data = data.data;
				})
		tip.showTip('亲付款成功 等待发货哦');
		$state.go('pendingDelivery');
			} }	
		
		}
		})
	
	}])
