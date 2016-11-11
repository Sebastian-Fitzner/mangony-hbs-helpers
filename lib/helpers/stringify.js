(function () {
	module.exports.register = function (Handlebars, options) {
		/*
		 * Stringify objects
		 * Returns String
		 *
		 * @author Sebastian Fitzner
		 */
		Handlebars.registerHelper('stringify', function (obj) {
			return JSON.stringify(obj);
		});

	};
}).call(this);
