/**
 * Loop helper.
 *
 * @param {Number} from - Starting number
 * @param {Number} to - End number
 * @param {Number} incr - Incremental number
 * @param {String} content - Content as block
 *
 * @author Sebastian Fitzner
 */
module.exports = function (from, to, incr, content) {
	var block = '';
	for (var i = from; i < to; i += incr)
		block += content.fn(i);
	return block;
};