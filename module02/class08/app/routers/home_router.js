// Es aquí donde se carga por primera vez Backbone, ya que es necesario para poder definir el router de la aplicación.
// Una aplicación puede tener varios routers, pero por la simplicidad de esta aplicación, no es necesario crear más de uno.

define(['backbone'], function(Backbone) {
  var HomeRouter = Backbone.Router.extend({
    routes: {
      '': 'home'
    },
    home: function() {
      console.log('home');
    }
  });

  // Cada módulo definido con `define` tiene un callback, el cual contiene el código del módulo y debe devolver "algo", ya sea un objeto, una función o cualquier otro valor.
  return HomeRouter;
});