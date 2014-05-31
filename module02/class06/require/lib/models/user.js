define(function() {
  var User = function User() {
    this.attributes = {};
  };

  User.prototype.get = function(name) {
    return this.attributes[name];
  };

  User.prototype.set = function(name, value) {
    this.attributes[name] = value;
  };

  return User;
});