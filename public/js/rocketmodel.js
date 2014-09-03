function rocket() {
  this.location = 0;
}

rocket.prototype = {
  incrementLocation: function() {
    this.location = this.location + 10;
  }
};
