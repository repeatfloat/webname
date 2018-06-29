angular.module('app')
	.controller('resetPasswordController', ['$scope','$state','validForm','tip','API' ,function ($scope,$state,validForm,tip,API) {
		$scope.resetpwd=function(url){
			$state.go(url)
		}

		$scope.userInfo={
			phone:'',
			pwd:'',
			repwd:'',
			code:'',
		}
		$scope.code="";
		$scope.resetPassword = function () {
			if (!isValid()) {return}
			else{
				$state.go('signIn')
			}
		}
		$scope.getcode=function(){
			console.log($scope.userInfo)
			tip.loadTips.showLoading();
			API.fetchGet('http://127.0.0.1:5000/message',{phone: $scope.userInfo.phone})
				.then(function (data) {
				console.log(data)
				tip.loadTips.hideLoading();
				//提示用户该号码是否已被注册
				if(data.data.statusCode===202){
					tip.showTip(data.data.msg);}
				}).catch(function(err){
					console.log(err);
					tip.loadTips.hideLoading();
				})
		
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
			}  else if (!validForm.isNotEmpty($scope.userInfo.code)) {
				tip.showTip('验证码不能为空');
				return false;
			}else if (!validForm.isNotEmpty($scope.userInfo.pwd)) {
				tip.showTip('密码不能为空');
				return false;
			} else if (!validForm.validLength($scope.userInfo.pwd, 6, 16)) {
				tip.showTip('密码长度6-16位');
				return false;
			} else if (!validForm.isEqual($scope.userInfo.pwd, $scope.userInfo.repwd)) {
				tip.showTip('两次密码不一致');
				return false;
			}

			return true;
		}


	}])