angular.module('app')
	// .factory('loadingTip', ['$ionicLoading', function ($ionicLoading) {

	// 	return {
	// 		openLoading: function () {
	// 			$ionicLoading.show({
	// 				templateUrl: './views/index/index.html'
	// 			});
	// 		},

	// 		closeLoading: function () {
	// 			$ionicLoading.hide();
	// 		}
	// 	};

	// }])
	.factory('index',function(pageCache,$location){  
    return{  
        backUrl:function(url){  
            pageCache.put('url','./views/index/index.html');//这个用来保存页面  
        },  
  
        index:function(){  
        	console.log('aaa')
            $location.path(pageCache.get('url','./views/index/index.html'));//这个用来跳转页面  
        }  
    }  
})  