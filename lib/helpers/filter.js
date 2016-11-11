var getProps = require('get-value');

(function () {
	module.exports.register = function (Handlebars, options) {
		/*
		 * Filter array
		 * Returns array
		 *
		 * @author Sebastian Fitzner
		 */
		Handlebars.registerHelper('filter', function (array, obj, options) {
			var checkVal = obj.hash.reverse ? 'false' : 'true';
			var result = array.filter(function (item) {
				if (getProps(item, obj.hash.by) === checkVal) {
					return true
				}
			});

			return obj.fn(result);
		});
	};
}).call(this);