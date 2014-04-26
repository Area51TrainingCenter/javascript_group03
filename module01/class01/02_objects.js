var objeto = new Object();
var objeto = {};

var celular = {
	marca: "Samsung",
	modelo: "Galaxy 5",
	precio: 5000
};

for (propiedad in celular) {
	console.log(propiedad, celular[propiedad]);
}

var propiedades = Object.keys(celular);

var i = 0;

for (i; i < propiedades.length; i++) {
	var propiedad = propiedades[i];

	console.log(propiedad, celular[propiedad]);
}

for (i; i < propiedades.length; i++) {
	var propiedad = propiedades[i];

	console.log(propiedad, celular[propiedad]);
}