/**
 * Represents a helper to merge two data objects.
 *
 * @author Sebastian Fitzner
 */

module.exports = function merge(obj1, obj2) {
	var data = typeof obj2.hash.with === 'string' ? JSON.parse(obj2.hash.with) : obj2.hash.with;

	if (Array.isArray(data)) {
		data = {
			'mergedData': data
		};
	}

	return obj2.fn(extend(obj1, data));
};

/**
 * Extend object with another object by using a copy.
 *
 * @param {Object} a - Object which will be copied and extended
 * @param {Object} n - Object which will be applied
 */
function extend(a, b) {
	var customContext = Object.assign({}, a);

	for (var key in b) {
		if (b.hasOwnProperty(key)) {
			customContext[key] = b[key];
		}
	}

	return customContext;
}