/**
 * Created by sebastian.fitzner on 19.03.14.
 */

module.exports = function limit(from, to, context, options) {
	var item = "";
	for (var i = from, j = to; i < j; i++) {
		item = item + options.fn(context[i]);
	}
	return item;
};