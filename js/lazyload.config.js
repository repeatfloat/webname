(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
			 		name: 'startPage',
			 		files: [
			 			'./views/startPage/startPageController.js',
			 			'./views/startPage/startPage.css'
			 		]},
			 	{
			 		name: 'publicfooter',
			 		files: [
			 			'./views/publicfooter/publicfooterController.js',
			 			'./views/publicfooter/publicfooter.css'
			 		]},
			 	{
			 		name: 'index',
			 		files: [
			 			'./views/index/indexController.js',
			 			'./views/index/index.css'
			 		]},
			 	{
			 		name: 'classification',
			 		files: [
			 			'./views/classification/classificationController.js',
			 			'./views/classification/classification.css'
			 		]},
			 	{
			 		name: 'publicAside',
			 		files: [
			 			'./views/publicAside/publicAsideController.js',
			 			'./views/publicAside/publicAside.css'
			 		]},
			 	{
			 		name: 'skincaresteps',
			 		files: [
			 			'./views/skincaresteps/skincarestepsController.js',
			 			'./views/skincaresteps/skincaresteps.css'
			 		]},
			 	{
			 		name: 'starClass',
			 		files: [
			 			'./views/starClass/starClassController.js',
			 			'./views/starClass/starClass.css'
			 		]},
			 	{
			 		name: 'searchPage',
			 		files: [
			 			'./views/searchPage/searchPageController.js',
			 			'./views/searchPage/searchPage.css'
			 		]},
			 	{
			 		name: 'productList',
			 		files: [
			 			'./views/productList/productListController.js',
			 			'./views/productList/productList.css'
			 		]},
			 	{
			 		name: 'productDetailsPage',
			 		files: [
			 			'./views/productDetailsPage/productDetailsPageController.js',
			 			'./views/productDetailsPage/productDetailsPage.css'
			 		]},
			 	{
			 		name: 'productParameterPage',
			 		files: [
			 			'./views/productParameterPage/productParameterPageController.js',
			 			'./views/productParameterPage/productParameterPage.css'
			 		]},
			 	{
			 		name: 'productEvaluation',
			 		files: [
			 			'./views/productEvaluation/productEvaluationController.js',
			 			'./views/productEvaluation/productEvaluation.css'
			 		]},
			 	{
			 		name: 'shoppingCart',
			 		files: [
			 			'./views/shoppingCart/shoppingCartController.js',
			 			'./views/shoppingCart/shoppingCart.css'
			 		]},
			 	{
			 		name: 'settlement',
			 		files: [
			 			'./views/settlement/settlementController.js',
			 			'./views/settlement/settlement.css'
			 		]},
			 	{
			 		name: 'compiler',
			 		files: [
			 			'./views/compiler/compilerController.js',
			 			'./views/compiler/compiler.css'
			 		]},
			 	{
			 		name: 'midea',
			 		files: [
			 			'./views/midea/mideaController.js',
			 			'./views/midea/midea.css'
			 		]},
			 	{
			 		name: 'login',
			 		files: [
			 			'./views/login/loginController.js',
			 			'./views/login/login.css'
			 		]},
			 	{
			 		name: 'register',
			 		files: [
			 			'./views/register/registerController.js',
			 			'./views/register/register.css'
			 		]},
			 	{
			 		name: 'resetPassword',
			 		files: [
			 			'./views/resetPassword/resetPasswordController.js',
			 			'./views/resetPassword/resetPassword.css'
			 		]},
			 	{
			 		name: 'weChatLoggedIn',
			 		files: [
			 			'./views/weChatLoggedIn/weChatLoggedInController.js',
			 			'./views/weChatLoggedIn/weChatLoggedIn.css'
			 		]},
			 	{
			 		name: 'qqLogin',
			 		files: [
			 			'./views/qqLogin/qqLoginController.js',
			 			'./views/qqLogin/qqLogin.css'
			 		]},
			 	{
			 		name: 'microBlog',
			 		files: [
			 			'./views/microBlog/microBlogController.js',
			 			'./views/microBlog/microBlog.css'
			 		]},
			 	{
			 		name: 'setUp',
			 		files: [
			 			'./views/setUp/setUpController.js',
			 			'./views/setUp/setUp.css'
			 		]},
			 	{
			 		name: 'myCollection',
			 		files: [
			 			'./views/myCollection/myCollectionController.js',
			 			'./views/myCollection/myCollection.css'
			 		]},
			 	{
			 		name: 'myTracks',
			 		files: [
			 			'./views/myTracks/myTracksController.js',
			 			'./views/myTracks/myTracks.css'
			 		]},
			 	{
			 		name: 'myCoupon',
			 		files: [
			 			'./views/myCoupon/myCouponController.js',
			 			'./views/myCoupon/myCoupon.css'
			 		]},
			 	{
			 		name: 'allMyOrders',
			 		files: [
			 			'./views/allMyOrders/allMyOrdersController.js',
			 			'./views/allMyOrders/allMyOrders.css'
			 		]},
			 	{
			 		name: 'pendingPayment',
			 		files: [
			 			'./views/pendingPayment/pendingPaymentController.js',
			 			'./views/pendingPayment/pendingPayment.css'
			 		]},
			 	{
			 		name: 'pendingDelivery',
			 		files: [
			 			'./views/pendingDelivery/pendingDeliveryController.js',
			 			'./views/pendingDelivery/pendingDelivery.css'
			 		]},
			 	{
			 		name: 'goodsToBeReceived',
			 		files: [
			 			'./views/goodsToBeReceived/goodsToBeReceivedController.js',
			 			'./views/goodsToBeReceived/goodsToBeReceived.css'
			 		]},
			 	{
			 		name: 'toBeEvaluated',
			 		files: [
			 			'./views/toBeEvaluated/toBeEvaluatedController.js',
			 			'./views/toBeEvaluated/toBeEvaluated.css'
			 		]},
			 	{
			 		name: 'managementAddress',
			 		files: [
			 			'./views/managementAddress/managementAddressController.js',
			 			'./views/managementAddress/managementAddress.css'
			 		]},
			 	{
			 		name: 'newlyIncreasedAddress',
			 		files: [
			 			'./views/newlyIncreasedAddress/newlyIncreasedAddressController.js',
			 			'./views/newlyIncreasedAddress/newlyIncreasedAddress.css'
			 		]},
			 	{
			 		name: 'province',
			 		files: [
			 			'./views/province/provinceController.js',
			 			'./views/province/province.css'
			 		]},
			 	{
			 		name: 'city',
			 		files: [
			 			'./views/city/cityController.js',
			 			'./views/city/city.css'
			 		]},
			 	{
			 		name: 'region',
			 		files: [
			 			'./views/region/regionController.js',
			 			'./views/region/region.css'
			 		]},
			 	{
			 		name: 'newAddress',
			 		files: [
			 			'./views/newAddress/newAddressController.js',
			 			'./views/newAddress/newAddress.css'
			 		]},
			 	{
			 		name: 'publicAside',
			 		files: [
			 			'./views/publicAside/publicAsideController.js',
			 			'./views/publicAside/publicAside.css'
			 		]},
			 	{
			 		name: 'scheme',
			 		files: [
			 			'./views/scheme/schemeController.js',
			 			'./views/scheme/scheme.css'
			 		]},
	 		]
 		});
	}]);
	
})();