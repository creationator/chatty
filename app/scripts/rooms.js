(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://incandescent-fire-5628.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms
    };
  }

  angular
    .module('chittyChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
