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

function extend(a, b) {
	for (var key in b) {
		if (b.hasOwnProperty(key)) {
			a[key] = b[key];
		}
	}
	return a;
}