/**
 * Represents a helper to concat strings.
 *
 * @author Sebastian Fitzner
 */
module.exports = concat;
module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('concat', concat);
};

function concat(...args) {
	return args.slice(0, -1).join('');
}