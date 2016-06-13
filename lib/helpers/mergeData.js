/**
 * Represents a helper to merge two data objects.
 *
 * @author Sebastian Fitzner
 */

module.exports = function mergeData(file, obj) {
	var obj1 = file;
	var obj2 = obj.hash.file ? obj.hash.file : JSON.parse(obj.hash.data);

	if (Array.isArray(obj2)) {
		obj2 = {
			'mergedDataObj': obj2
		};
	}

	return obj.fn(extend(obj1, obj2));
};

function extend(a, b) {
	for (var key in b) {
		if (b.hasOwnProperty(key)) {
			a[key] = b[key];
		}
	}
	return a;
}