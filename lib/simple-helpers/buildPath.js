/**
 * Represents a helper to concat paths.
 *
 * @author Sebastian Fitzner
 */
var path = require('path');

/**
 * Build a path.
 * @param {String} str - String
 * @param {String} str2 - String 2
 * @param {Object} block - Contains hashes
 */
module.exports = function buildPath(str, str2, block) {
	var destPath = str;

	if (block.hash.goUp) {
		var lvlUp = '../'.repeat(block.hash.goUp);
		destPath = path.resolve(destPath, lvlUp, str2);
	} else {
		destPath = destPath + '/' + str2;
	}
	return destPath;
};