define(['backbone', 'app/models/artist'], function(Backbone, Artist) {
  var Artists = Backbone.Collection.extend({
    model: Artist
  });

  return Artists;
});