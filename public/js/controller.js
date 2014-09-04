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
  }

}

