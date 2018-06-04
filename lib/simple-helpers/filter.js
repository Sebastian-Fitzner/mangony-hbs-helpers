var getProps = require('get-value');

/*
 * Filter array
 * Returns array
 *
 * @author Sebastian Fitzner
 */
module.exports = function filter(array, obj, options) {
	var checkVal = obj.hash.reverse;
	var result = array.filter(function (item) {
		if (getProps(item, obj.hash.by) === checkVal) {
			return true
		}
	});

	return obj.fn(result);
};