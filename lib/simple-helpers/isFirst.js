/*
 * Returns a bool if this is the first element in a loop
 * Returns boolean
 *
 * @author Sebastian Fitzner
 */

module.exports = isFirst;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('isFirst', isFirst);
};

function isFirst(idx) {
	var first = parseInt(idx, 10);

	return first === 0;
}