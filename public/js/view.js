function View(user, rocket)
{
  this.user = user;
  this.rocket = rocket;
  this.userInfoSelector = "#user-message";
  this.rocketSelector = "#rocketship";
}

View.prototype = {

  showUserInformation: function() {
    var output = "Welcome "+this.user.name+"! Your current points are: "+this.user.points;
    $(this.userInfoSelector).html(output)
  },

  updateRocketPosition: function() {
    $(this.rocketSelector).css("left",this.rocket.x).css("top",this.rocket.y)
  }

}
