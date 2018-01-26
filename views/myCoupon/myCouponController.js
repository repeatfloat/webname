angular.module('app')
	.controller('myCouponController', ['$scope','$state', function ($scope,$state) {

		$scope.myCoupon=function(url){
			$state.go(url)
		}

		$scope.coupon=[
			{text:'满50元立减10元',
			date:'2017.8.31-2018.1.1',
			textcolor:'此券仅限本帐号使用',
			span:'￥',
			number:'10',
			textcoupon:'新人优惠券',
			boxText:'立即使用'
		},

			{text:'满50元立减10元',
			date:'2017.8.31-2018.1.1',
			textcolor:'此券仅限本帐号使用',
			span:'￥',
			number:'10',
			textcoupon:'新人优惠券',
			boxText:'立即使用'
		},

			{text:'满50元立减10元',
			date:'2017.8.31-2018.1.1',
			textcolor:'此券仅限本帐号使用',
			span:'￥',
			number:'10',
			textcoupon:'新人优惠券',
			boxText:'已过期'
		},

			{text:'满50元立减10元',
			date:'2017.8.31-2018.1.1',
			textcolor:'此券仅限本帐号使用',
			span:'￥',
			number:'10',
			textcoupon:'新人优惠券',
			boxText:'已过期'
		},

				{text:'满50元立减10元',
			date:'2017.8.31-2018.1.1',
			textcolor:'此券仅限本帐号使用',
			span:'￥',
			number:'10',
			textcoupon:'新人优惠券',
			boxText:'已使用'
		},
				{text:'满50元立减10元',
			date:'2017.8.31-2018.1.1',
			textcolor:'此券仅限本帐号使用',
			span:'￥',
			number:'10',
			textcoupon:'新人优惠券',
			boxText:'已使用'
		}]
	}])