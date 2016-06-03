(function() {
  function ModalCtrl(Room) {
      this.heroTitle = "Chat Rooms";
      this.rooms = Room;
  }
  angular
    .module('chittyChat')
    .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
