function View(user, rocket)
{
  this.user = user;
  this.rocket = rocket;
  this.userInfoSelector = "#user-message";
  this.rocketSelector = ".rocketship";
  this.islandSelector = ".island-image"
  this.startButtonSelector = "#start";
  this.stopButtonSelector = "#stop";
}

View.prototype = {

  showUserInformation: function() {
    var output = "Welcome "+this.user.name+"! Your current points are: "+this.user.points;
    $(this.userInfoSelector).html(output)
  },

  updateRocketPosition: function() {
    $(this.rocketSelector).css("left",this.rocket.x).css("top",this.rocket.y)
    console.log(this.rocket)

  },

  startButton: function() {
    $(this.rocketSelector).addClass("active");
    $(this.islandSelector).addClass("active");
  },

  stopButton: function() {
    this.updateRocketPosition()
  }

}
