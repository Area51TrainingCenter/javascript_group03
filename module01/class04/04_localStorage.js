var Alumno = function Alumno(propiedades) {
  for (var i in propiedades) {
    this[i] = propiedades[i];
    // this['nombre'] = propiedades['nombre'];
    // this['correo'] = propiedades['correo'];
  }
};

Alumno.prototype.guardar = function() {
  if (this.id === undefined) {
    var key = Date.now();
  }
  else {
    var key = this.id;
  }

  this.id = key;
  var value = JSON.stringify(this);
  localStorage.setItem(key, value);
};

Alumno.prototype.obtener = function(id) {
  return JSON.parse(localStorage.getItem(id || this.id));
};

var pedro = new Alumno({
  nombre: 'Pedro',
  correo: 'pedro@area51.pe'
});