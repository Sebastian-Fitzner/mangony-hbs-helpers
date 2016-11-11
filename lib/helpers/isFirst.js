(function () {
	module.exports.register = function (Handlebars, options) {
		/*
		 * Returns a bool if this is the first element in a loop
		 * Returns boolean
		 *
		 * @author Sebastian Fitzner
		 */
		Handlebars.registerHelper('isFirst', function (idx) {
			var first = parseInt(idx, 10);

			return first === 0;
		});
	};
}).call(this);