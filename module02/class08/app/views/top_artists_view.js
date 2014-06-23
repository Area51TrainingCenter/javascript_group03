define(['backbone'], function(Backbone) {
  // Esta vista no toma un elemento que ya existe en el DOM, si no que crea uno nuevo, utilizando la propiedad `tagName` y `id`.
  var TopArtistsView = Backbone.View.extend({
    tagName: 'div',
    id: 'top_artists',
    renderArtist: function(model) {
      // Esta función necesita que su contexto sea la vista, por eso es necesario forzar el contexto con el método `bind` (línea 17).
      this.$el.append('<img style="display: inline-block;" src="' + model.image('extralarge') + '">');
    },
    render: function() {
      // El método `render` itera a través de todos los elementos de la colección y ejecuta el método `renderArtist` por cada elemento.
      // El método `bind` es un método nativo de las funciones en JavaScript y permite cambiar el contexto de una función.
      // En este caso, el `this` que `bind` toma como parámetro es la vista en sí.
      this.collection.each(this.renderArtist.bind(this));
      return this;
    }
  });

  return TopArtistsView;
});