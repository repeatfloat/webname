angular.module('app')
	.controller('compilerController', ['$scope','$state', function ($scope,$state) {
		$scope.sum=1;
		$scope.subtrack=function(){
		if($scope.sum<=1){
			return;
		}else{
			$scope.sum--;
		}}	
		$scope.pule=function(){
		$scope.sum++;}	

		$scope.sum1=1;
		$scope.subtrack1=function(){
		if($scope.sum1<=1){
			return;
		}else{
			$scope.sum1--;
		}}	
		$scope.pule1=function(){
		$scope.sum1++;}

		$scope.sum2=1;
		$scope.subtrack2=function(){
		if($scope.sum2<=1){
			return;
		}else{
			$scope.sum2--;
		}}	
		$scope.pule2=function(){
		$scope.sum2++;}

		$scope.sum3=1;
		$scope.subtrack3=function(){
		if($scope.sum3<=1){
			return;
		}else{
			$scope.sum3--;
		}}	
		$scope.pule3=function(){
		$scope.sum3++;}

		$scope.sum4=1;
		$scope.subtrack4=function(){
		if($scope.sum4<=1){
			return;
		}else{
			$scope.sum4--;
		}}	
		$scope.pule4=function(){
		$scope.sum4++;}
	
	
	}])