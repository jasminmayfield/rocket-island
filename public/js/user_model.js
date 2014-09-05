function User() {
    this.name = null;
    this.points = null;
};

User.prototype = {
  logIn: function(url) {
    console.log("AHHHHHHHHH")
var data = $('#sign-in-button').closest('form').serialize();
      console.log(data);
    var self = this;
      var ajaxRequest = $.ajax({
        url: url,
        data: data,
        type: "POST",
        success: function(data) {
          console.log(data)
          self.name = data.user.name
          self.points = data.user.points
          location.reload();

        },
        error: function(data) {
          // location.reload();
        }
      });
  }
};

