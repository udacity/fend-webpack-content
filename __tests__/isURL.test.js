const URLcheck = require('../src/client/js/isURL');

// https://
test('Test if valid URL was given', () => {
	expect(URLcheck.isURL('https://www.udacity.com'))
	.toBe(true);
});

// http://
test('Test if valid URL was given', () => {
	expect(URLcheck.isURL('http://www.udacity.com'))
	.toBe(true);
});

// without http
test('Test if valid URL was given', () => {
	expect(URLcheck.isURL('udacity.com'))
	.toBe(false);
});