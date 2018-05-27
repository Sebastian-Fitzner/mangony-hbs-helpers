/**
 * Represents a helper to deep merge two data objects.
 *
 * @author Sebastian Fitzner
 */
const merge = require('deepmerge');

module.exports = function deepMerge(obj1, obj2) {
	const hashes = obj2.hash;
	const data = typeof hashes.with === 'string' ? JSON.parse(hashes.with) : hashes.with;
	const strategy = typeof hashes.arrayMerge === 'string' && hashes.arrayMerge;

	if (strategy === 'keep') {
		return obj2.fn(merge(obj1, data, {
				arrayMerge: keepMerge
			})
		);
	} else if (strategy === 'overwrite') {
		return obj2.fn(merge(obj1, data, {
				arrayMerge: overwriteMerge
			}
		));
	} else if (strategy === 'extend') {
		return obj2.fn(merge(obj1, data));
	} else {
		return obj2.fn(merge(obj1, data, {
			arrayMerge: arrayMerge
		}));
	}
};

function overwriteMerge(sourceArray, destinationArray) {
	return destinationArray;
}

function keepMerge(sourceArray, destinationArray) {
	return sourceArray;
}

function arrayMerge(target, source, options) {
	const emptyTarget = value => Array.isArray(value) ? [] : {};
	const clone = (value, options) => merge(emptyTarget(value), value, options);
	const destination = target.slice();

	source.forEach(function (e, i) {
		if (typeof destination[ i ] === 'undefined') {
			const cloneRequested = options.clone !== false;
			const shouldClone = cloneRequested && options.isMergeableObject(e);
			destination[ i ] = shouldClone ? clone(e, options) : e;
		} else if (options.isMergeableObject(e)) {
			destination[ i ] = merge(target[ i ], e, options);
		} else if (target.indexOf(e) === -1) {
			destination.push(e);
		}
	});

	return destination
}