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
    this.bindEvents();
    this.pressingUp = false; //new var to track rocket's upward acceleration, used to stop gravity's impact while accellerating
    this.gameWon = false;
    this.gameLost = false;
    this.lose_y = 490;
    this.win_x1 = 150;
    this.win_x2 = 310;
    this.win_y1 = 405;
    this.win_y2 = 460;
  },

  bindEvents: function(){
    $(document).on("keydown",this.keypress.bind(this));
    $(document).on("keyup",this.keyrelease.bind(this)); //event listener is keyup, calls our keyrelease function
    $(this.view.logInButtonSelector).on("click", this.logInButton.bind(this));
    $(this.view.startButtonSelector).on("click", this.startButton.bind(this));
    $(this.view.stopButtonSelector).on("click", this.stopButton.bind(this))
  },

  logInButton: function(e) {
    e.preventDefault();
     // this.view.logInButton();
     console.log("log in button function in controller")
     console.log(this.user)
     var logInUrl = $(this.view.logInButtonSelector).closest('form').attr("action");
     this.user.logIn(logInUrl);
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

  gameLoop: function(e) {
    this.gravity();
    this.checkLose();
    this.checkWin();
  },
  checkLose: function() {
    console.log("loser loser", this);
    console.log(this.rocket.y, this.lose_y, (this.rocket.y > this.lose_y))
    if(this.rocket.y > this.lose_y) {
      this.gameLost = true;
      this.endGame();
    }
  },
  checkWin: function() {
    console.log("winner winner", this);
    var check_x = (this.rocket.x > this.win_x1) && (this.rocket.x < this.win_x2);
    var check_y = (this.rocket.y > this.win_y1) && (this.rocket.y > this.win_y2);
    console.log(check_x, check_y, (check_x && check_y))
    if(check_x && check_y) {
      this.gameWon = true;
      this.endGame();
    }
  },
  endGame: function(){
    if(this.gameWon) {
      console.log("You won");
      this.user.points += 100;
      this.user.updatePoints();
      this.view.showWin();
      this.checkLevel();

      console.log(this.user.points);
    } else if(this.gameLost) {
      console.log("You lost");
      this.view.showLose();
    };
    clearInterval(this.interval);
    $(document).off();
    //$(document).off("keydown",this.keypress.bind(this));
    //$(document).off("keyup",this.keyrelease.bind(this));
  },
  gravity: function() {
    console.log("I'm free falling!", this);
    if(!this.pressingUp){
      this.rocket.moveDown(); //if keyup has happened, gravity moves it down
    };
    this.view.updateRocketPosition();
  },

  startButton: function(e) {
    this.view.startButton();
    this.interval = setInterval(this.gameLoop.bind(this),150);
  },
  stopButton: function(e) {
    this.rocket.resetLocation;
    clearInterval(this.interval);
    this.view.updateRocketPosition();
  },

  checkLevel: function() {

  }

  // gameDone: function (e){
  //   $("keypress").unbind("keydown");
  // }
};

