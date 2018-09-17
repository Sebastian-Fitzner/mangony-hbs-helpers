var getProps = require('get-value');

/*
 * Filter array
 * Returns array
 *
 * @author Sebastian Fitzner
 */
module.exports = function filter(array, obj, options) {
	var checkVal = obj.hash.reverse || false;
	var props = obj.hash && obj.hash.val;
	var val = props ? obj.hash.val : checkVal;
	var result = array.filter(function (item) {
		if (getProps(item, obj.hash.by) === val) {
			return true
		}
	});

	return obj.fn(result);
};