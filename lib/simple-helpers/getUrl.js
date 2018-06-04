/*
 * Returns the value itself when http:// or https:// is in the value
 * or prepends @root.assets to the given String
 *
 * Returns String
 *
 * @author Sebastian Fitzner
 */
module.exports = function getUrl(str, block) {
	if (!str || typeof str !== 'string') return;
	var externals = [
		'http://',
		'https://',
		'mailto:'
	];

	if (externals.some(function(el) {return str.includes(el)})) {
		return str;
	} else {
		return block.data.root.assets + str;
	}
};