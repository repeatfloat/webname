angular.module('app')
	.controller('newlyIncreasedAddressController', ['$rootScope','$scope','$state','validForm','tip','API',function ($rootScope,$scope,$state,validForm,tip,API) {
				$scope.userInfos={
					did:1,
					phone:'',
					city:'',
					username:'',
					province:'',
					region:'',
					setadd:'',
					editAddress:'编辑',
					selectAddress:'默认地址',
					delete:'删除',
					num:1
				};

				$scope.setaddress = function () {
					// if (!isValid())
					// {
					// 	return;
					// }else
					API.fetchGet('http://127.0.0.1:5000/newlyIncreasedAddress',$scope.userInfos)
					.then(function () {
					})

						$state.go('managementAddress');
					};
				// };
				
				function isValid() {
				if (!validForm.isNotEmpty($scope.userInfos.phone)) {
					tip.showTip('手机号码不能为空');
					return false;
				} else if (!validForm.validLength($scope.userInfos.phone, 11, 11)) {
					tip.showTip('手机号码长度不正确');
					return false;
				} else if (!validForm.validPhone($scope.userInfos.phone)) {
					tip.showTip('手机号码格式不正确');
					return false;
				}else if (!validForm.isNotEmpty($scope.userInfos.username)) {
					tip.showTip('姓名不能为空');
					return false;
				}else if (validForm.username($scope.userInfos.username)) {
					tip.showTip('姓名格式不正确');
					return false;
				}
				
					return true;
				}

				$scope.newAddressonclick=function(url){
					$state.go(url)
					
				}

			
		}])