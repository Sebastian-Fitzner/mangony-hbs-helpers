/**
 * Represents a debugging helper.
 * @module Debug Helpers
 *
 * @author Sebastian Fitzner
 *
 * usage: {{debug}} or {{debug someValue}}
 */

/**
 * Log context.
 *
 * @param {Object} optionalValue - Check context of a value
 */
module.exports = function debug(optionalValue) {
	console.log('\nCurrent Context');
	console.log('====================');
	console.log(this);

	if (arguments.length > 1) {
		console.log('\n\nValue');
		console.log('====================');
		console.log(optionalValue);
	}
};