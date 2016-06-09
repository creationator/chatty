(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://incandescent-fire-5628.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
    console.log(rooms);

    rooms.$add($firebaseArray(firebaseRef.child('rooms')));

    /*create a array that will house the rooms create on the Firebase
     database and use the add() method to add a new room.*/

    return {
      all: rooms
    };
  }

  angular
    .module('chittyChat')
    .factory('Room', ['$firebaseArray', Room])
    // .$add();
})();
