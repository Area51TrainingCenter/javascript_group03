define(['backbone'], function(Backbone) {
  var Track = Backbone.Model.extend({
    image: function(size) {
      if (this.get('image')) {
        return this.get('image')[Track.sizes[size]]['#text'];
      }
      else {
        return '#';
      }
    }
  }, {
    sizes: {
      small: 0,
      medium: 1,
      large: 2,
      extralarge: 3
    }
  });

  return Track;
});