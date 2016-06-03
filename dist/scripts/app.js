(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      });
    // $uibModal
    //   .open('modal', {
    //     animation: modal.animationsEnabled,
    //     url: '/',
    //     controller: 'ModalCtrl as modal',
    //     templateUrl: '/templates/modal.html',
    //     size: size,
    //     resolve: {
    //       rooms: function() {
    //         return this.rooms;
    //       }
    //     }
    //   });
  }

  angular
    .module('chittyChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config);
})();
