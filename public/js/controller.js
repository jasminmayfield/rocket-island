function Controller()
{
  this.user = null;
  this.rocket = null;
  this.view = null;

}

Controller.prototype = {

  start: function(){
    this.user = new User();
    this.rocket = new Rocket();
    this.view = new View(this.user,this.rocket);
    this.view.showUserInformation();
    this.bindEvents();
    this.pressingUp = false; //new var to track rocket's upward acceleration, used to stop gravity's impact while accellerating
  },
  bindEvents: function(){
    $(document).on("keydown",this.keypress.bind(this));
    $(document).on("keyup",this.keyrelease.bind(this)); //event listener is keyup, calls our keyrelease function
    $(this.view.startButtonSelector).on("click", this.startButton.bind(this))
  },
  keypress: function(e) {
    if(e.keyCode == 37) {
      this.rocket.moveLeft();
    }
    if(e.keyCode == 39) {
      this.rocket.moveRight();
    }
    if(e.keyCode == 38) {
      this.pressingUp = true; //if pressing up key, rocket accelerates up i.e. true
      this.rocket.moveUp();
    }
    if(e.keyCode == 40) {
      this.rocket.moveDown();
    }
    this.view.updateRocketPosition();
  },
  keyrelease: function(e) {
    if(e.keyCode == 38) {
      this.pressingUp = false;
    };
  },
  gravity: function()
  {
    if(!this.pressingUp){
      this.rocket.moveDown(); //if keyup has happened, gravity moves it down
    };
    this.view.updateRocketPosition();
  },
  startButton: function(e) {
    this.view.startButton();
    setInterval(this.gravity.bind(this), 100);
  }

};

