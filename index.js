var lib = require('./lib/');
var markdownHelper = require('./lib/helpers/markdown');

/**
 * Registers helpers on a Handlebars instance.
 *
 * @method register
 * @param {Object} handlebars Handlebars instance.
 * @return {Object} Object of helpers.
 * @static
 */
lib.register = function (handlebars) {
	handlebars.registerHelper(lib);

	markdownHelper.register(handlebars);

	return lib;
};

module.exports = lib;