angular.module('app') 
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/startPage');
		$stateProvider
				.state('publicfooter', {
				url: '/publicfooter',
				abstruct: true,
				templateUrl: './views/publicfooter/publicfooter.html',
				controller: 'publicfooterController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('publicfooter');
					}]
				}
			})



			// 分类
			.state('publicfooter.classification', {
				url: '/classification',
				templateUrl: './views/classification/classification.html',
				controller: 'classificationController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classification');
					}]
				}
			})
			.state('publicfooter.classification.schene', {
				url: '/classification',
				templateUrl: './views/classification/classification.html',
				controller: 'classificationController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classification');
					}]
				}
			})
				.state('classification', {
				url: '/classification',
				templateUrl: './views/classification/classification.html',
				controller: 'classificationController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classification');
					}]
				}
			})
			.state('publicfooter.classification.skincaresteps',{
				url: '/skincaresteps',
				templateUrl: './views/skincaresteps/skincaresteps.html',
				controller: 'skincarestepsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('skincaresteps');
					}]
				}
			})
			.state('publicfooter.classification.starClass', {
				url: '/starClass',
				templateUrl: './views/starClass/starClass.html',
				controller: 'starClassController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('starClass');
					}]
				}
			})

			.state('publicfooter.classification.scheme', {
				url: '/scheme',
				templateUrl: './views/scheme/scheme.html',
				controller: 'schemeController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('scheme');
					}]
				}
			})





			.state('publicfooter.publicAside', {
				url: '/publicAside',
				templateUrl: './views/publicAside/publicAside.html',
				controller: 'publicAsideController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('publicAside');
					}]
				}
			})
			.state('startPage', {
				url: '/startPage',
				templateUrl: './views/startPage/startPage.html',
				controller: 'startPageController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('startPage');
					}]
				}
			})
			// 首页
			.state('publicfooter.index', {
				url: '/index',
				templateUrl: './views/index/index.html',
				controller: 'indexController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('index');
					}]
				}
			})








			.state('publicfooter.searchPage', {
				url: '/searchPage',
				templateUrl: './views/searchPage/searchPage.html',
				controller: 'searchPageController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('searchPage');
					}]
				}
			})
			.state('productList', {
				url: '/productList',
				templateUrl: './views/productList/productList.html',
				controller: 'productListController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('productList');
					}]
				}
			})
			.state('productDetailsPage', {
				url: '/productDetailsPage/:id',
				templateUrl: './views/productDetailsPage/productDetailsPage.html',
				controller: 'productDetailsPageController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('productDetailsPage');
					}]
				}
			})
			.state('productParameterPage', {
				url: '/productParameterPage',
				templateUrl: './views/productParameterPage/productParameterPage.html',
				controller: 'productParameterPageController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('productParameterPage');
					}]
				}
			})
			.state('productEvaluation', {
				url: '/productEvaluation',
				templateUrl: './views/productEvaluation/productEvaluation.html',
				controller: 'productEvaluationController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('productEvaluation');
					}]
				}
			})
			.state('publicfooter.shoppingCart', {
				url: '/shoppingCart',
				templateUrl: './views/shoppingCart/shoppingCart.html',
				controller: 'shoppingCartController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('shoppingCart');
					}]
				}
			})
			.state('publicfooter.settlement', {
				url: '/settlement',
				templateUrl: './views/settlement/settlement.html',
				controller: 'settlementController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('settlement');
					}]
				}
			})
				// 编辑	
			.state('publicfooter.compiler', {
				url: '/compiler',
				templateUrl: './views/compiler/compiler.html',
				controller: 'compilerController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('compiler');
					}]
				}
			})
			.state('publicfooter.midea', {
				url: '/midea',
				templateUrl: './views/midea/midea.html',
				controller: 'mideaController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('midea');
					}]
				}
			})
			//登录页面
			.state('login', {
				url: '/login',
				templateUrl: './views/login/login.html',
				controller: 'loginController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('login');
					}]
				}
			})
			.state('register', {
				url: '/register',
				templateUrl: './views/register/register.html',
				controller: 'registerController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('register');
					}]
				}
			})
			.state('resetPassword', {
				url: '/resetPassword',
				templateUrl: './views/resetPassword/resetPassword.html',
				controller: 'resetPasswordController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('resetPassword');
					}]
				}
			})
			.state('weChatLoggedIn', {
				url: '/weChatLoggedIn',
				templateUrl: './views/weChatLoggedIn/weChatLoggedIn.html',
				controller: 'weChatLoggedInController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('weChatLoggedIn');
					}]
				}
			})
			.state('qqLogin', {
				url: '/qqLogin',
				templateUrl: './views/qqLogin/qqLogin.html',
				controller: 'qqLoginController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('qqLogin');
					}]
				}
			})
			.state('microBlog', {
				url: '/microBlog',
				templateUrl: './views/microBlog/microBlog.html',
				controller: 'microBlogController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('microBlog');
					}]
				}
			})
			.state('setUp', {
				url: '/setUp',
				templateUrl: './views/setUp/setUp.html',
				controller: 'setUpController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('setUp');
					}]
				}
			})
			.state('myCollection', {
				url: '/myCollection',
				templateUrl: './views/myCollection/myCollection.html',
				controller: 'myCollectionController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('myCollection');
					}]
				}
			})
			.state('myTracks', {
				url: '/myTracks',
				templateUrl: './views/myTracks/myTracks.html',
				controller: 'myTracksController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('myTracks');
					}]
				}
			})
			.state('myCoupon', {
				url: '/myCoupon',
				templateUrl: './views/myCoupon/myCoupon.html',
				controller: 'myCouponController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('myCoupon');
					}]
				}
			})
			.state('allMyOrders', {
				url: '/allMyOrders',
				templateUrl: './views/allMyOrders/allMyOrders.html',
				controller: 'allMyOrdersController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('allMyOrders');
					}]
				}
			})
			.state('pendingPayment', {
				url: '/pendingPayment',
				templateUrl: './views/pendingPayment/pendingPayment.html',
				controller: 'pendingPaymentController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('pendingPayment');
					}]
				}
			})
			.state('pendingDelivery', {
				url: '/pendingDelivery',
				templateUrl: './views/pendingDelivery/pendingDelivery.html',
				controller: 'pendingDeliveryController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('pendingDelivery');
					}]
				}
			})
			.state('goodsToBeReceived', {
				url: '/goodsToBeReceived',
				templateUrl: './views/goodsToBeReceived/goodsToBeReceived.html',
				controller: 'goodsToBeReceivedController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('goodsToBeReceived');
					}]
				}
			})
			.state('toBeEvaluated', {
				url: '/toBeEvaluated',
				templateUrl: './views/toBeEvaluated/toBeEvaluated.html',
				controller: 'toBeEvaluatedController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('toBeEvaluated');
					}]
				}
			})
			.state('managementAddress', {
				url: '/managementAddress',
				templateUrl: './views/managementAddress/managementAddress.html',
				controller: 'managementAddressController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('managementAddress');
					}]
				}
			})
			.state('newlyIncreasedAddress', {
				url: '/newlyIncreasedAddress',
				templateUrl: './views/newlyIncreasedAddress/newlyIncreasedAddress.html',
				controller: 'newlyIncreasedAddressController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('newlyIncreasedAddress');
					}]
				}
			})
			.state('province', {
				url: '/province',
				templateUrl: './views/province/province.html',
				controller: 'provinceController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('province');
					}]
				}
			})
			.state('city', {
				url: '/city',
				templateUrl: './views/city/city.html',
				controller: 'cityController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('city');
					}]
				}
			})
			.state('region', {
				url: '/region',
				templateUrl: './views/region/region.html',
				controller: 'regionController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('region');
					}]
				}
			})
			.state('newAddress', {
				url: '/newAddress',
				templateUrl: './views/newAddress/newAddress.html',
				controller: 'newAddressController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('newAddress');
					}]
				}
			})
	}])
	
