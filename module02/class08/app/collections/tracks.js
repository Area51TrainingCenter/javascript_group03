define(['backbone', 'app/models/track'], function(Backbone, Track) {
  var Tracks = Backbone.Collection.extend({
    model: Track
  });

  return Tracks;
});