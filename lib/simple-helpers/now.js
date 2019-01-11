/**
 * Represents a helper to display dates.
 *
 * @author Sebastian Fitzner
 */
const moment = require('moment');

module.exports = date;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('now', date);
};

/**
 * Returns the date of now in a format you like by using momentJS.
 *
 * @param {String} format - Date format
 *
 * @return String
 */
function date(format) {
	return moment().format(format);
}