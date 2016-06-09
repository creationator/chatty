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
      })
      .state('modal', {
        url: '/',
        controller: 'ModalCtrl as modal',
        templateUrl: 'ModalShow.html'
      });


  }

  angular
    .module('chittyChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config);
})();
