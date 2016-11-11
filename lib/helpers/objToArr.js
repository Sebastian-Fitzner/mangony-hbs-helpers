(function () {
	module.exports.register = function (Handlebars, options) {
		/*
		 * Flatten object to array
		 * Returns array
		 *
		 * @author Sebastian Fitzner
		 */
		Handlebars.registerHelper('objToArr', function (obj, block) {
			var arr = Object.keys(obj).map(function (key) {return obj[key]});

			return block.fn(arr);
		});
	};
}).call(this);
