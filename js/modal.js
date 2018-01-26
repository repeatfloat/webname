angular.module('app')
	.factory('modal', ['$ionicModal', function ($ionicModal) {

		return {

			initModal: function (scope) {
				$ionicModal.fromTemplateUrl('./modal.html', {
					scope: scope,
					animation: 'slide-in-up'
				}).then(function (m) {
					scope.m = m;
				})
			},

			openModal: function (scope) {
				scope.m.show();
			},

			closeModal: function (scope) {
				scope.m.hide();
			}

		};

	}])