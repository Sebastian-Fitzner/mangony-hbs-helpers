var lib = require('./lib/');

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

	return lib;
};

module.exports = lib;