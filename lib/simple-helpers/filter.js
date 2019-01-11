var getProps = require('get-value');

module.exports = filter;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('filter', filter);
};

/*
 * Filter array
 * Returns array
 *
 * @author Sebastian Fitzner
 */
function filter(array, obj, options) {
	var checkVal = obj.hash.reverse || false;
	var props = obj.hash && obj.hash.val;
	var val = props ? obj.hash.val : checkVal;
	var result = array.filter(function (item) {
		if (getProps(item, obj.hash.by) === val) {
			return true
		}
	});

	return obj.fn(result);
}