function Rocket() {
  this.location = 0;
}

Rocket.prototype = {
  incrementLocation: function() {
    this.location = this.location + 10;
  }
};
