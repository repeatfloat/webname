angular.module('app')
	.controller('registerController', ['$scope','$state','validForm' ,'tip', 'API','formatTime',function ($scope,$state,validForm,tip,API,formatTime) {

		$scope.userInfo = {
			phone:'',
			pwd:'',
			repwd:'',
			code:'',
			registerTime:'',
			agree:100,
		};

		$scope.code = '';

		$scope.isPass=false;

		$scope.isPhone=function(){
			$scope.isPass = validForm.validPhone($scope.userInfo.phone);
		}

		$scope.register = function () {
			// tip.loadTips.showLoading();
			if (!isValid()) {return};
			$scope.userInfo.registerTime = formatTime.format(new Date(), 'yyyy-MM-dd hh:mm:ss');
			API.fetchPost('http://127.0.0.1:9000/register',$scope.userinfo)
			.then(function(data){
				console.log("data==>",data)
				
			})
			.catch(function(err){
					console.log('err==>',err)
			})
			
			
			
		}

		$scope.getCode = function () {
			tip.loadTips.showLoading();
			API.fetchGet('http://127.0.0.1:9000/message',{phone: $scope.userInfo.phone})
				.then(function (data) {
				$scope.code = data.data.code;
				console.log($scope.code)
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
			} else if (!validForm.isNotEmpty($scope.userInfo.pwd)) {
				tip.showTip('密码不能为空');
				return false;
			} else if (!validForm.validLength($scope.userInfo.pwd, 6, 16)) {
				tip.showTip('密码长度6-16位');
				return false;
			} else if (!validForm.isEqual($scope.userInfo.pwd, $scope.userInfo.repwd)) {
				tip.showTip('两次密码不一致');
				return false;
			}else if (!validForm.isNotEmpty($scope.userInfo.code)) {
				tip.showTip('验证码不能为空');
				return false;
			}else if (!validForm.isEqual($scope.userInfo.code, $scope.code)) {
				tip.showTip('验证码不正确');
				return false;
			}

			return true;
		}


		
		$scope.register1=function(url){
			$state.go(url);
		}


	}])