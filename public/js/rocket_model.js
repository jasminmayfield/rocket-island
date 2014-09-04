function Rocket(x,y) {

  this.x = 1200; // 'x' is right position from screen
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

    this.y += 10;
  },
  moveUp: function(){

    this.y -= 10;
  },

  incrementLocation: function() {

    this.location = this.location + 10;
  }
};
