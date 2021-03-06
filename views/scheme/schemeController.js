angular.module('app')
	.controller('schemeController', ['$scope','$state','API', function ($scope,$state,API) {

		$scope.scheme=[
			{
				text:'补水保湿',
				image:'./icons/classification-1.png',
				text1:'提亮肤色',
				image1:'./icons/classification-2.png',
				text2:'紧致淡纹',
				image2:'./icons/classification-3.png',
			},
			{
				text:'祛痘淡印',
				image:'./icons/classification-4.png',
				text1:'舒缓修复',
				image1:'./icons/classification-5.png',
				text2:'舒缓修复',
				image2:'./icons/classification-5.png'
			},
		];

		API.fetchGet('http://127.0.0.1:5000/scheme')
			.then(function (data) {
				$scope.data = data.data;
				// console.log(data)
			})
			.catch(function (err) {
				console.log(err);
		})

		$scope.scheme2=function(url,id){
			$state.go(url,{id:id})
		}

		}])