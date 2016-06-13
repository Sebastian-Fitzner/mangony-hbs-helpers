var lib = require('./lib/');

module.exports = function (Handlebars, options) {
	Object.keys(lib).forEach(function (key) {
		Handlebars.registerHelper(key, lib[key]);
	});
};