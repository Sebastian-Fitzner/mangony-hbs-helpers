/*
 * Stringify objects
 * Returns String
 *
 * @author Sebastian Fitzner
 */
module.exports = stringify;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('stringify', stringify);
};

function stringify(obj) {
	return JSON.stringify(obj);
}