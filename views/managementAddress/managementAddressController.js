angular.module('app')
	.controller('managementAddressController', ['validForm','$scope','$state','$rootScope', 'tip',function (validForm,$scope,$state,$rootScope,tip) {
			$scope.address=[
				{	
					username:'故梦',
					phone:'13910105897',
					addres:'广东省广州市天河区车陂地铁站附近',
					editAddress:'编辑',
					selectAddress:'默认地址',
					delete:'删除'

				},
				{	
					username:'故梦',
					phone:'13910105897',
					addres:'广东省广州市天河区车陂地铁站附近',
					editAddress:'编辑',
					selectAddress:'默认地址',
					delete:'删除'

				},
				{	
					username:'故梦',
					phone:'13910105897',
					addres:'广东省广州市天河区车陂地铁站附近',
					editAddress:'编辑',
					selectAddress:'默认地址',
					delete:'删除'

				},
				{	
					username:'故梦',
					phone:'13910105897',
					addres:'广东省广州市天河区车陂地铁站附近',
					editAddress:'编辑',
					selectAddress:'默认地址',
					delete:'删除'
			}];	
			$scope.addOclick=function(url){
				$state.go(url)
			};
			$scope.first=function(){
				return flag? 'item-first':'item-not-first';
			};

			$scope.deletes=function(index){
			$scope.address.splice(index,1)
			console.log(index)
			// $scope.shoppingSum();
			};
			
			$scope.add = function()
			{ if (!isValid()) {
						return}else{
			var postBack =$rootScope.userInfos;
			$scope.address.push(postBack);
			}};

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

			}])