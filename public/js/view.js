function View(user, rocket)
{
  this.user = user;
  this.rocket = rocket;
  this.userInfoSelector = "#user-message";
  this.rocketSelector = ".rocketship";
  this.islandSelector = ".island-image"
  this.startButtonSelector = "#start";
<<<<<<< HEAD
  this.stopButtonSelector = "#stop";
=======
  this.controlPanelSelector = "#control-panel";
  this.gameNameSelector = "#game-name";
>>>>>>> master
}

View.prototype = {

  showUserInformation: function() {
    var output = "Welcome "+this.user.name+"! Your current points are: "+this.user.points;
    $(this.userInfoSelector).html(output)
  },

  updateRocketPosition: function() {
    $(this.rocketSelector).css("left",this.rocket.x).css("top",this.rocket.y)
    // console.log(this.rocket)
  },

  startButton: function() {
    $(this.rocketSelector).addClass("active");
<<<<<<< HEAD
    $(this.islandSelector).addClass("active");
  },

  stopButton: function() {
    this.updateRocketPosition()
=======
    $(this.islandSelector).addClass("active").animate({left: "+=250"}); //moves island in from the left by 250, animates css property (in css its set to -200)
    $(this.controlPanelSelector).fadeOut(1000);
    $(this.gameNameSelector).delay(1000).fadeOut(1000);
>>>>>>> master
  }

}
