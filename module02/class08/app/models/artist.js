define(['backbone'], function(Backbone) {
  var Artist = Backbone.Model.extend({
    // Necesitamos una función que devuelva una sola imagen, ya que Last.FM devuelve un array con varias imágenes de diferentes tamaños
    image: function(size) {
      // Verificamos si el atributo `image` existe dentro del modelo
      if (this.has('image')) {
        // `this.get('image')` devuelve un arreglo.
        // `Artist.sizes[size]` devuelve un índice a partir del tamaño (argumento `size`) que se quiere obtener.
        // `this.get('image')[Artist.sizes[size]]` devuelve un objeto, que tiene una propiedad llamada `#text`.
        return this.get('image')[Artist.sizes[size]]['#text'];
      }
      else {
        return '#';
      }
    }
  }, {
    // El método `Backbone.Model.extend` tiene dos parámetros:
    // Las opciones para las instancias del modelo (`properties`) y las opciones del constructor (lo que en Backbone llaman `classProperties`)
    // Más información puede encontrarse en: http://backbonejs.org/#Model-extend

    // Dentro del segundo parámetro definimos un objeto que servirá para mapear los diferentes tamaños con su respectivo índice (línea 8 - 10)
    // De esta forma podemos obtener una imagen según el tamaño que deseamos.
    sizes: {
      // El argumento `size` del método `image` puede tomar los siguientes valores:
      small: 0,
      medium: 1,
      large: 2,
      extralarge: 3
    }
  });

  return Artist;
});