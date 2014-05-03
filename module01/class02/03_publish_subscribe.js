var Notificador = (function() {
  var canales = {};

  var generarID = function() {
    return Math.ceil(Math.random() * 1000 - 1);
  };

  return {
    publicar: function(canal) {
      if (canales[canal] === undefined) {
        return;
      }

      var suscriptores = canales[canal];

      for (var i = 0; i < suscriptores.length; i++) {
        suscriptores[i].callback.apply(null, [].slice.call(arguments, 1));
      }
    },
    suscribir: function(canal, callback) {
      if (canales[canal] === undefined) {
        canales[canal] = [];
      }

      var id = generarID();

      var suscriptores = canales[canal];
      suscriptores.push({
        id: id,
        callback: callback
      });

      return id;
    },
    desuscribir: function(id) {
      for(var canal in canales) {
        var suscriptores = canales[canal];

        for (var i = 0; i < suscriptores.length; i++) {
          if (suscriptores[i].id === id) {
            suscriptores.splice(i, 1);
            break;
          }
        }
      }
    }
  };
})();