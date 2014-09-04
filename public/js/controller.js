function Controller()
{
  this.user = null;
  this.rocket = null;
  this.view = null;

}

Controller.prototype = {

  start: function()
  {
    this.user = new User();
    this.rocket = new Rocket();
    this.view = new View(this.user,this.rocket);
    this.view.showUserInformation();
    this.bindEvents();
  },

  bindEvents: function()
  {
    $(document).on("keydown",this.keypress.bind(this))
  },

  keypress: function(e)
  {
    if(e.keyCode == 37) {
      this.rocket.moveLeft();
    }
    if(e.keyCode == 39) {
      this.rocket.moveRight();
    }
    if(e.keyCode == 38) {
      this.rocket.moveUp();
    }
    if(e.keyCode == 40) {
      this.rocket.moveDown();
    }

    this.view.updateRocketPosition();
  }

}

