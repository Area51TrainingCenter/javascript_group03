var Alumno = function Alumno(propiedades) {
	for (var propiedad in propiedades) {
		this[propiedad] = propiedades[propiedad];
	}
};

var alumno1 = new Alumno({
	id: 1,
	nombre: 'Gustavo',
	apellidoPaterno: ''
});

alumno1.saludar = function() {
	return "soy alumno1 y mi nombre es " + this.nombre;
}

var alumno2 = new Alumno({
	id: 2,
	nombre: 'Pedro',
	apellidoPaterno: ''
});

alumno2.saludar();

Alumno.prototype.saludar = function() {
	return "Soy alumno y mi nombre es " + this.nombre;
};