/**
 * Represents a helper to concat strings.
 *
 * @author Sebastian Fitzner
 */

module.exports = function concat(...args) {
	var arr = [ ...args ];
	var concatStr = '';
	var i = 0;

	for (i; i < arr.length; i++) {
		if (typeof arr[i] === 'string') {
			concatStr += arr[i];
		}
	}

	return concatStr;
};