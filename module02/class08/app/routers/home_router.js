// Es aquí donde se carga por primera vez Backbone, ya que es necesario para poder definir el router de la aplicación.
// Una aplicación puede tener varios routers, pero por la simplicidad de esta aplicación, no es necesario crear más de uno.

define([
  'backbone',
  'app/collections/tracks',
  'app/collections/artists',
  'app/views/top_tracks_view',
  'app/views/top_artists_view',
  'last_fm'], function(Backbone, Tracks, Artists, TopTracksView, TopArtistsView) {
  var HomeRouter = Backbone.Router.extend({
    // Definimos las rutas que utilizaremos en la aplicación. Una o más rutas pueden apuntar a la misma función,
    // que debe definirse en el mismo router
    // '' es la ruta del index. En este caso Backbone utiliza el hash (#) para manejar las rutas, pero podría usar el History API
    routes: {
      '': 'top_tracks',
      'top_tracks': 'top_tracks',
      'top_artists': 'top_artists'
    },
    top_tracks: function() {
      // La biblioteca LastFM tiene dos métodos: `topTracks` y `topArtists`. Ambos devuelven una promesa, en este caso una promesa nativa
      // Una promesa (instancia de `Promise`), tiene dos métodos: `then` y `catch`. `then` acepta dos parámetros, uno de éxito y otro de error
      // Si bien `then` acepta el mismo callback que `catch`, por legibilidad se pone el callback de éxito en `then` y el de error en `catch`
      LastFM.topTracks().then(function(data) {
        // Las vistas definidas en la carpeta "views" son funciones constructoras, por lo que deben instanciarse.
        // En este caso, esta vista recibe una colección de modelos `Track`, la cual toma valores de `data.tracks.track`.
        // El método render de una vista de Backbone debe ser redefinida sí o sí, ya que inicialmente solo es una función que retorna la misma vista.
        var view = new TopTracksView({
          collection: new Tracks(data.tracks.track)
        });

        // El método `render` debe retornar la misma vista, de tal forma que se pueda acceder a las propiedades de dicha vista.
        $('body').find('#content').html(view.render().$el);
      }).catch(function(error) {
        console.log(error);
      });
    },
    top_artists: function() {
      LastFM.topArtists().then(function(data) {
        var view = new TopArtistsView({
          collection: new Artists(data.artists.artist)
        });

        $('body').find('#content').html(view.render().$el);
      }).catch(function(error) {
        console.log(error);
      });
    }
  });

  // Cada módulo definido con `define` tiene un callback, el cual contiene el código del módulo y debe devolver "algo", ya sea un objeto, una función o cualquier otro valor.
  return HomeRouter;
});