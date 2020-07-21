require("@babel/polyfill");
const aylienCheck = require('../src/client/js/formHandler');

// test if handleSubmit function is defined
test('Test if function that handles Submit is defined', async () => {
	expect(aylienCheck.handleSubmit)
	.toBeDefined();
});