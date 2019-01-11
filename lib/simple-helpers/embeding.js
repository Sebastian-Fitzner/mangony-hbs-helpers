/**
 * Represents a helper to embed files.
 *
 * @author Sebastian Fitzner
 */
const fs = require('fs');

module.exports = embeding;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('embeding', embeding);
};

/**
 * Embed file from a path.
 * 
 * @param {String} path - Path to file
 */
function embeding(path) {
	return fs.readFileSync(path, 'utf-8');
}