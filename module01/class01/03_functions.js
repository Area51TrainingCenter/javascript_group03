var suma = function(a, b) {
	return a + b;
};

function suma() {
	total = 0;

	console.log([].slice.call(arguments, 0));

	for (var i = 0; i < arguments.length; i++) {
		total = total + arguments[i];
	}

	return total;
};