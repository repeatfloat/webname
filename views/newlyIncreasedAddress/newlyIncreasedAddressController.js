angular.module('app')
	.controller('newlyIncreasedAddressController', ['$scope','$state','validForm', 'tip',function ($scope,$state,validForm,tip) {
				$scope.province=[
				{text:'北京'},
				{text:'天津'},
				{text:'上海'},
				{text:'江苏省'},
				{text:'浙江省'},
				{text:'福建省'},
				{text:'江西省'},
				{text:'山东省'},
				{text:'湖南省'},
				{text:'广东省'},
				{text:'海南省'},
				{text:'四川省'},
				]

					$scope.city=[
				{text:'广州市'},
				{text:'韶关市'},
				{text:'深圳市'},
				{text:'珠海市'},
				{text:'汕头市'},
				{text:'佛山市'},
				{text:'江门市'},
				{text:'湛江市'},
				{text:'茂名市'},
				{text:'肇庆市'},
				{text:'惠州市'},
				{text:'梅州市'},
				]

				$scope.region=[
				{text:'荔湾区'},
				{text:'越秀区'},
				{text:'海珠区'},
				{text:'天河区'},
				{text:'白云区'},
				{text:'黄浦区'},
				{text:'番禺区'},
				{text:'花都区'},
				{text:'南沙区'},
				{text:'萝岗区'},
				{text:'增城区'},
				{text:'从化区'}
				]

				$scope.userInfo={
					phone:'',
					username:'',
				};

				$scope.setaddress = function () {
					if (!isValid()) {
						return}else{
					$state.go('managementAddress')
						}
				}

				function isValid() {
				if (!validForm.isNotEmpty($scope.userInfo.phone)) {
					tip.showTip('手机号码不能为空');
					return false;
				} else if (!validForm.validLength($scope.userInfo.phone, 11, 11)) {
					tip.showTip('手机号码长度不正确');
					return false;
				} else if (!validForm.validPhone($scope.userInfo.phone)) {
					tip.showTip('手机号码格式不正确');
					return false;
				}else if (!validForm.isNotEmpty($scope.userInfo.username)) {
					tip.showTip('姓名不能为空');
					return false;
				}else if (validForm.username($scope.userInfo.username)) {
					tip.showTip('姓名格式不正确');
					return false;
				}
				
					return true;
				}

				$scope.newAddressonclick=function(url){
					$state.go(url)
				}
			}])