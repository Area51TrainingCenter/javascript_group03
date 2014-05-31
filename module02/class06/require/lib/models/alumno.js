define(function() {
  var Alumno = function Alumno(propiedades) {
    for (var propiedad in propiedades) {
      this[propiedad] = propiedades[propiedad];
    }
  };

  return Alumno;
});