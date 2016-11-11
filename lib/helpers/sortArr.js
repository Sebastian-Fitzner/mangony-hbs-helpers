var getProps = require('get-value');

(function () {
	module.exports.register = function (Handlebars, options) {
		/*
		 * Sort Array
		 * Returns array
		 *
		 * @author Sebastian Fitzner
		 */
		Handlebars.registerHelper('sortArr', function (array, prop, options) {
			var result = '';

			array.sort(function (a, b) {
				if (getProps(a, prop) > getProps(b, prop)) {
					return 1;
				}
				if (getProps(a, prop) < getProps(b, prop)) {
					return -1;
				}
				// a must be equal to b
				return 0;
			});

			if (getProps(options, 'hash.reverse')) {
				array = array.reverse();
			}

			var alen = array.length, j = -1;
			while (++j < alen) {
				result += options.fn(array[j]);
			}
			
			return options.fn(array);
		});
	};
}).call(this);