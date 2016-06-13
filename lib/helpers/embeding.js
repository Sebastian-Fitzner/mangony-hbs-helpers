/**
 * Represents a helper to embed files.
 *
 * @author Sebastian Fitzner
 */

var fs = require('fs');

/**
 * Embed file from a path.
 * 
 * @param {String} path - Path to file
 */
module.exports = function embeding(path) {
	return fs.readFileSync(path, 'utf-8');
};