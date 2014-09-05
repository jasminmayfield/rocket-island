function Rocket(x,y) {

  this.x = 1000; // 'x' is right position from screen
  this.y = 100;

}

Rocket.prototype = {
  moveLeft: function(){
    this.x -= 10;
  },
  moveRight: function(){
    this.x += 10;
  },
  moveDown: function(){

    this.y += 3;
  },
  moveUp: function(){

    this.y -= 10;
  },

  incrementLocation: function() {
    this.location = this.location + 10;
  },

  resetLocation: function() {
    this.x = 1000;
    this.y = 100;
  }
};
