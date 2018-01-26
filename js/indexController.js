angular.module('app')
	.controller('indexController',['$rootScope',function($rootScope){

		//保存登录用户信息
		$rootScope.userInfo = {
			phone: '',
			//登录状态默认为false
			isLogin: false,
			//用户名称,匿名.
			nickname: ''
		};
		
	}])