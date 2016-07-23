/**
 * Represents a helper to display dates.
 *
 * @author Sebastian Fitzner
 */
var moment = require('moment');

/**
 * Returns the date of now in a format you like by using momentJS.
 *
 * @param {String} format - Date format
 *
 * @return String
 */
module.exports = function date(format) {
	return moment().format(format);
};