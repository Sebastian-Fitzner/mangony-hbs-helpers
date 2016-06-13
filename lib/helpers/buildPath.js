/**
 * Represents a helper to concat paths.
 *
 * @author Sebastian Fitzner
 */

/**
 * Build a path.
 * @param {String} str - String
 * @param {String} str2 - String 2
 */
module.exports = function buildPath(str, str2) {
	return str + '/' + str2;
};
