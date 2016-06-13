/**
 * Loop helper.
 *
 * @param {Number} from - Starting number
 * @param {Number} to - End number
 * @param {Number} incr - Incremental number
 * @param {String} block - Content as block
 *
 * @author Sebastian Fitzner
 */
module.exports = function (from, to, incr, block) {
	var content = '';
	for (var i = from; i < to; i += incr)
		content += block.fn(i);
	return content;
};