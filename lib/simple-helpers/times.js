/**
 * Repeat elements.
 *
 * @param {Number} n - Repeater
 * @param {String} block - Content as block
 *
 * @author Sebastian Fitzner
 */
module.exports = times;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('times', times);
	Handlebars.registerHelper('repeat', times);
};

function times(n, block) {
	var content = '';
	for (var i = 0; i < n; ++i)
		content += block.fn(i);
	return content;
}