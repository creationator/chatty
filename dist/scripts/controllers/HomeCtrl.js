(function() {
  function HomeCtrl(Room) {
      this.heroTitle = "Chat Rooms";
      this.rooms = Room;
  }
  angular
    .module('chittyChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
