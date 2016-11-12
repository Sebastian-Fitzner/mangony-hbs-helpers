var getProps = require('get-value');

/*
 * Sort Array
 * Returns array
 *
 * @author Sebastian Fitzner
 */
module.exports = function sortArr(array, prop, options) {
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

	var alen = array.length, j = -1;
	while (++j < alen) {
		result += options.fn(array[j]);
	}

	return options.fn(array);
};