const isURL = require('../src/client/js/isURL');

// https://
test('Test if valid URL was given', () => {
	expect(urlChecker.isValidUrl())
	.toBe(true);
});

// http://
test('Test if valid URL was given', () => {
	expect(urlChecker.isValidUrl('http://udacity.com'))
	.toBe(true);
});

// without http
test('Test if valid URL was given', () => {
	expect(urlChecker.isValidUrl('udacity.com'))
	.toBe(false);
});