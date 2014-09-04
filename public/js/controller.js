function Controller() {
  this.user = null;
  this.rocket = null;
  this.view = null;
  this.interval = null;

}

Controller.prototype = {

  start: function(){
    this.user = new User();
    this.rocket = new Rocket();
    this.view = new View(this.user,this.rocket);
    this.view.showUserInformation();
    this.bindEvents();
  },

  bindEvents: function(){
    $(document).on("keydown",this.keypress.bind(this));
    $(this.view.startButtonSelector).on("click", this.startButton.bind(this));
    $(this.view.stopButtonSelector).on("click", this.stopButton.bind(this))
  },

  keypress: function(e) {
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
  },

  gravity: function()
  {
    this.rocket.moveDown();

    this.view.updateRocketPosition();
  },

  startButton: function(e) {
    this.view.startButton();
    this.interval = setInterval(this.gravity.bind(this),150);
  },

  stopButton: function(e) {

    this.rocket.resetLocation;
    clearInterval(this.interval);
    this.view.updateRocketPosition();
  }

};

