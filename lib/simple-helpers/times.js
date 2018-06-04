/**
 * Repeat elements.
 *
 * @param {Number} n - Repeater
 * @param {String} block - Content as block
 *
 * @author Sebastian Fitzner
 */
module.exports = function times(n, block) {
	var content = '';
	for (var i = 0; i < n; ++i)
		content += block.fn(i);
	return content;
};