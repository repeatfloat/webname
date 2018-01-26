angular.module('app')
	.controller('managementAddressController', ['$scope','$state', function ($scope,$state) {
			$scope.address=[
				{	
					text:'故梦',
					phone:'13910105897',
					addres:'广东省广州市天河区车陂地铁站附近',
					editAddress:'编辑',
					selectAddress:'默认地址',
					delete:'删除'

				},
				{	
					text:'故梦',
					phone:'13910105897',
					addres:'广东省广州市天河区车陂地铁站附近',
					editAddress:'编辑',
					selectAddress:'默认地址',
					delete:'删除'

				},
				{	
					text:'故梦',
					phone:'13910105897',
					addres:'广东省广州市天河区车陂地铁站附近',
					editAddress:'编辑',
					selectAddress:'默认地址',
					delete:'删除'

				},
				{	
					text:'故梦',
					phone:'13910105897',
					addres:'广东省广州市天河区车陂地铁站附近',
					editAddress:'编辑',
					selectAddress:'默认地址',
					delete:'删除'

				},
				
				]
			$scope.addOclick=function(url){
				$state.go(url)
			}
			$scope.first=function(){
				return flag? 'item-first':'item-not-first';
			}

			}])