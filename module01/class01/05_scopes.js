function scopeA() {
	function scopeB() {
		function scopeC() {
			var scope = 'c';
			console.log('scopeC: ', scope);
		}
		scopeC();
		console.log('scopeB: ', scope);
	}
	scopeB();
	console.log('scopeA: ', scope);
}
scopeA();