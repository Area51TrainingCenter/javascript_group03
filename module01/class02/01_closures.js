var UserName = function(firstName, lastName){
  var sayHi = function(){
    var fullName = firstName + ' ' + lastName;
    return fullName;
  };

  return sayHi();
};