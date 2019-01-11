var getProps = require('get-value');

module.exports = sortArr;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('sortArr', sortArr);
};

/*
 * Sort Array
 * Returns array
 *
 * @author Sebastian Fitzner
 */
function sortArr(array, prop, options) {
	var result = '';

	array.sort(function (a, b) {
		if (getProps(a, prop) > getProps(b, prop)) {
			return 1;
		}
		if (getProps(a, prop) < getProps(b, prop)) {
			return -1;
		}
		// a must be equal to b
		return 0;
	});

	if (getProps(options, 'hash.reverse')) {
		array = array.reverse();
	}

	return options.fn(array);
}