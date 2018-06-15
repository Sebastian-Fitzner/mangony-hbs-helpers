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

	let externals = [
		'http://',
		'https://',
		'mailto:'
	];

	let i = 0;

	for (; i < externals.length; i++) {
		if (str.indexOf(externals[i]) !== -1) {
			return str;
		}
	}

	return block.data.root.assets + str;
};
