function User(attributes) {
  var attributeKeys = Object.keys(attributes);
  this.attributes = {};

  for (var i = 0; i < attributeKeys.length; i++) {
    var attributeKey = attributeKeys[i],
        attributeValue = attributes[attributeKey];

    this.attributes[attributeKey] = attributeValue;
  }
}

function mixin(destination, source) {
  var sourceKeys = Object.keys(source);

  for (var i = 0; i < sourceKeys.length; i++) {
    var sourceKey = sourceKeys[i];

    destination[sourceKey] = source[sourceKey];
  }

  return destination;
}

var StudentActions = {
  addSubjects : function(subject) {
    if (this.subjects === undefined) {
      this.subjects = [];
    }

    this.subjects.push(subject);
  },
  getGrades : function() {
    return this.grades;
  }
};

mixin(User.prototype, StudentActions);