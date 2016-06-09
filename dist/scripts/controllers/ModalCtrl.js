(function() {
  function ModalCtrl($scope, $uibModal) {

      $scope.open = function() {
        $uibModal.open({
          templateUrl: 'ModalShow.html'
        });
      }

  }
  angular
    .module('chittyChat')
    .controller('ModalCtrl', ['Room', ModalCtrl, $scope]);
})();
//
// angular.module('ui.bootstrap.demo',  ['ui.bootstrap'])
//   .controller('ModalDemoCtrl', function ($scope, $uibModal) {
//       $scope.open = function () {
//         var modalInstance = $uibModal.open({
//           templateUrl: 'myModalContent.html'
//         });
//       };
//   });
