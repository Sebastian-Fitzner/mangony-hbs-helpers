/*
 * Returns the value itself when http:// or https:// is in the value
 * or prepends @root.assets to the given String
 *
 * Returns String
 *
 * @author Sebastian Fitzner
 */
module.exports = function url(str, block) {
	if (!str) return;

	if (str.indexOf('http://') !== -1 || str.indexOf('https://') !== -1) {
		return str;
	} else {
		return block.data.root.assets + str;
	}
};