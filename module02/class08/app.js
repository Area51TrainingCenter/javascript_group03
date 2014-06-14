// app.js es el archivo definido como main en RequireJS (ver atributo data-main en index.html).

// Aquí se cargarán los routers de Backbone.js, que permitirán trabajar con rutas dentro de una aplicación web en el frontend.
// Hay que tener en cuenta que no se llama a Backbone en el array de dependencias, porque ya fue llamado previamente por HomeRouter:
// Backbone es agregado al global scope dentro en la propia biblioteca
require(['app/routers/home_router', 'last_fm'], function(HomeRouter, LastFM) {
  LastFM.init('0da66f1a155b735b2d39d3c6f250f9ee');

  new HomeRouter();
  Backbone.history.start();
});