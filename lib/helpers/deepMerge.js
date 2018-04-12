/**
 * Represents a helper to deep merge two data objects.
 *
 * @author Sebastian Fitzner
 */
var merge = require('deepmerge');

module.exports = function deepMerge(obj1, obj2) {
	var data = typeof obj2.hash.with === 'string' ? JSON.parse(obj2.hash.with) : obj2.hash.with;

	return obj2.fn(merge(obj1, data));
};