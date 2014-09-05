function User() {
    this.name = null;
    this.points = null;
};

User.prototype = {
  logIn: function(url, element) {
      var data = $(element).closest('form').serialize();
      var self = this;
      var ajaxRequest = $.ajax({
        url: url,
        data: data,
        type: "POST",
        success: function(data) {
          console.log(data)
          self.name = data.user.name
          self.points = data.user.points
          window.location.replace('/')
        },
        error: function(data) {
          window.location.replace('/')
        }
      });
  },

  updatePoints: function() {
    var self = this;
    console.log(self.name)
    var ajaxRequest = $.ajax({
        url: '/user/Max',
        type: "PUT",
        data: {points: self.points},
        success: function(data) {
          self.points += data.points
          window.location.replace('/')
        },
      });
  }
};
