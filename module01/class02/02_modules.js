var UserModule = (function() {
  var users = [];
  return {
    add: function(user) {
      users.push(user);
    },
    count: function() {
      return users.length;
    },
    list: function() {
      return users.slice(0);
    }
  }
})();