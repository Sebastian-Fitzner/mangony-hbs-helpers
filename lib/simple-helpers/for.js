module.exports = forLoop;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('for', forLoop);
};

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
function forLoop(from, to, incr, content) {
	var block = '';
	for (var i = from; i < to; i += incr)
		block += content.fn(i);
	return block;
}