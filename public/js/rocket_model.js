function Rocket(x,y) {

  this.x = 0;
  this.y = 0;

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
