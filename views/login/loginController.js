angular.module('app')
	.controller('loginController', ['$rootScope','$scope','$state','validForm','tip', 'API',function ($rootScope,$scope,$state,validForm,tip,API) {
	
		$scope.signin=function(url){
			 $state.go(url)
		}
		
		$scope.userInfo={
			phone:'',
			pwd:'',
		};

		$scope.usersignin=function(){
		//验证号码是否正确
		if (!isValid()) {return}
		API.fetchPost('http://127.0.0.1:5000/login', $scope.userInfo)
			.then(function (data) {
			//判断是否登录成功301,302.代表失败
			console.log(data);
			if (data.data.statusCode == 301 || data.data.statusCode == 302) {
				tip.showTip(data.data.msg);
			} else {
				//登录成功后数据更改
				//$rootScope.userInfo.uid = data.data.uid;
				$rootScope.userInfo.phone = data.data.phone;
				//用户名称
				$rootScope.userInfo.nickname = data.data.nickname == null ? '' : data.data.nickname;
				//用户登录状态
				$rootScope.userInfo.isLogin = true;
				// console.log(' 成功啦==> ',data)
				$state.go('publicfooter.index');
			}

			 })
			.catch(function (err) {
				//关闭加载动画
				tip.loadTips.hideLoading();
				console.log(err);
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
			}else if (!validForm.isNotEmpty($scope.userInfo.pwd)) {
				tip.showTip('密码不能为空');
				return false;
			} else if (!validForm.validLength($scope.userInfo.pwd, 6, 16)) {
				tip.showTip('密码长度6-16位');
				return false;
			}
				return true;
			}
		

	}])