angular.module('app')
	.controller('managementAddressController', ['validForm','$scope','$state','$rootScope', 'tip','API','$window',function (validForm,$scope,$state,$rootScope,tip,API,$window) {
			// $scope.address=[
			// 	{	
			// 		username:'故梦',
			// 		phone:'13910105897',
			// 		addres:'广东省广州市天河区车陂地铁站附近',
			// 		editAddress:'编辑',
			// 		selectAddress:'默认地址',
			// 		delete:'删除'

			// 	},
			// 	{	
			// 		username:'故梦',
			// 		phone:'13910105897',
			// 		addres:'广东省广州市天河区车陂地铁站附近',
			// 		editAddress:'编辑',
			// 		selectAddress:'默认地址',
			// 		delete:'删除'

			// 	},
			// 	{	
			// 		username:'故梦',
			// 		phone:'13910105897',
			// 		addres:'广东省广州市天河区车陂地铁站附近',
			// 		editAddress:'编辑',
			// 		selectAddress:'默认地址',
			// 		delete:'删除'

			// 	},
			// 	{	
			// 		username:'故梦',
			// 		phone:'13910105897',
			// 		addres:'广东省广州市天河区车陂地铁站附近',
			// 		editAddress:'编辑',
			// 		selectAddress:'默认地址',
			// 		delete:'删除'
			// }];	
			$scope.addOclick=function(url){
				$state.go(url)
			};
			$scope.first=function(){
				return flag? 'item-first':'item-not-first';
			};

			$scope.reloadRoute = function () {
    			$window.location.reload();
			};

			API.fetchGet('http://127.0.0.1:5000/newlyIncreasedAddress')
				.then(function (data) {
				$scope.pending = data.data;
				// console.log($scope.pending)
			})
			function isValid() {
				if (!validForm.isNotEmpty($rootScope.userInfos.phone)) {
					tip.showTip('手机号码不能为空 请先填写...');
					return false;
				}else if (!validForm.isNotEmpty($rootScope.userInfos.username)) {
					tip.showTip('姓名不能为空 请先填写...');
					return false;
				}
				
					return true;
			}
			$scope.deletes=function(index){
				$scope.reloadRoute()
				API.fetchGet('http://127.0.0.1:5000/managementAddress',$scope.pending.addre[index])
				.then(function () {
				})
			};

			}])